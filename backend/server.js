const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const ejs = require('ejs');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const privateRoutes = require('./routes/private_routes')
const path = require('path');

const app = express();

// Middleware
// Set the path for static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public/')); // This connects the path to the file
app.set('view engine', 'ejs');
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  credentials: true // Allow credentials (cookies) to be sent
})); // Enable CORS for all route
app.use(cookieParser());

mongoose.connect(process.env._API_key)
  .then(() => {
    app.listen(process.env.PORT || 4001, () => console.log(`Listening on PORT ${process.env.PORT}`));
    console.log('Connected to database successfully');
  })
  .catch(err => console.log(err));


// Routes
app.use(privateRoutes);

