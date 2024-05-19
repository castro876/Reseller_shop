const mongoose = require('mongoose')

const Scheeema =  new mongoose.Schema({
    title : {
        type : String,
        required : true,
    
    },

    price: {
        type : String,
        required : true,
       
    },

    discount: {
        type : String,
        required : true,
       
    },

    discount_details: {
        type : String,
        required : true,
       
    },

    gender: {
        type: String,
        required : true

    },

    description: {
        type: String,
        required : true

    },

    image: {
        type: String,
        required : true

    }
}, {timestamps: true})



const Mod = mongoose.model('shop_product', Scheeema)
module.exports = Mod
