const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    productid:{
        type:String,
        required:true
    },
    headphoneType:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Product',ProductSchema)

