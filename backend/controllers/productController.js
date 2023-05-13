const Product = require('../models/productModel')
const User = require('../models/userModel')
const uuid =  require('uuid');
const jwt = require('jsonwebtoken')

const productController = {
    createProduct: async (req, res) => {
        const { name, productName, headphoneType, brand, color, price } = req.body;
        try {
            const productid = uuid.v1();
            const newProduct = new Product({
                name: name,
                productName: productName,
                productid: productid,
                headphoneType: headphoneType,
                brand: brand,
                color: color,
                price: price
            })
            await newProduct.save()
            res.json({ msg: "Product created Succesfully", product: newProduct })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getProducts:async(req,res)=>{
        try {
            const products = await Product.find({})
            res.json(products)       
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    addToCart:async(req,res)=>{
        const token = req.header("Authorization")
        const {productid} = req.body;
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, verified) => {
            const user = await User.findById(verified.id)
            const productData = {productid:productid};
            await user.cart.push(productData);
            user.save()
            return res.send({success:true,user:user});
        })
    }
}

module.exports = productController
