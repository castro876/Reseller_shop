const mongoose = require('mongoose')

const Scheeema =  new mongoose.Schema({
    username : {
        type : String,
        required : true,
    
    },

    email: {
        type : String,
        required : true,
        unique : true,
       
    },

    phone: {
        type: String,
        required : true

    },

    password: {
        type: String,
        required : true

    },

}, {timestamps: true})



const Usrmod = mongoose.model('shop_user', Scheeema)
module.exports = Usrmod