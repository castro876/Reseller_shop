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

    quantity: {
        type : String,
        required : true,
       
    },

    merchant_id: {
        type : String,
        required : true,
       
    },

    order_date: {
        type: String,
        required : true

    },

    delivery_date: {
        type: String,
        required : true

    },

    image: {
        type: String,
        required : true

    }
}, {timestamps: true})



const OrderMod = mongoose.model('shop_order', Scheeema)
module.exports = OrderMod
