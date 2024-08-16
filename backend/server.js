const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const ejs = require('ejs');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const privateRoutes = require('./routes/private_routes')
const path = require('path');
const http = require('http');


const app = express();

// Middleware
// Set the path for static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public/')); // This connects the path to the file
app.set('view engine', 'ejs');
app.use(cors({
  origin: 'https://reseller-shop-client.onrender.com', // Allow requests from this origin
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true // Allow credentials (cookies) to be sent
})); // Enable CORS for all route
app.use(cookieParser());

// Connect to MongoDB with Mongoose
mongoose.connect(process.env._API_key, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');

    // Create the HTTP server
    const server = http.createServer(app);

    // Increase keep-alive timeout to 120 seconds
    server.keepAliveTimeout = 120000; // 120 seconds

    // Increase headers timeout to 120 seconds
    server.headersTimeout = 120000; // 120 seconds

    // Start the server
    const port = process.env.PORT || 4001;
    server.listen(port, '0.0.0.0', () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err);
  });


// Routes
app.use(privateRoutes);

