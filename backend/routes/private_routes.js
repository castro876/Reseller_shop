const express = require('express')
const route = express.Router()
const control = require('../controller/control')
const protected = require('../routes/auth_midware')
const cors = require('cors');


//Post add user -- Private
route.post('/add_user', control.createUser)

//Get add user -- Private
route.get('/add_user', control.createUserPage)

//Get all user -- Public
route.get('/all_product', control.allProduct)

//Get all user -- Public
route.post('/single_product/:id', control.singleUser)

//Post checkout -- Public
route.post('/checkout', control.checoutkUser)

//Get login -- Public
route.get('/login', control.logUser)

//Get login -- Public
route.get('/register', control.regUser)

//Get login -- Public
route.post('/register', control.regPostUser)

//Get login -- Public
route.post('/login', control.logPostUser)

//Get login -- Private
route.get('/profile',protected, control.userProfile)


//Get login -- Private
route.post('/profile', control.userProfilePost)

// Get forgot-password -- Public
route.get('/forgot_password', control.userForgetPass);

// Post forgot-password -- Public
route.post('/forgot_password', control.userForgetPost);

// Get reset-password -- Public
route.get('/reset_password/:token', control.userResetGet);

// Post reset-password -- Public
route.post('/reset_password/:token', control.userResetPost);


//Post send-email -- Public
route.post('/send_email', control.userEmail)

//------------------------------------------------ORDER | ADMIN-------------------------------------------------//

//Get forgot-password -- Public
route.get('/add_order', control.orderGet)


//Get forgot-password -- Public
route.post('/add_order', control.orderPost)






module.exports = route