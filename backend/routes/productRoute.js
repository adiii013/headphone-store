const router = require('express').Router()
const auth = require('../middlewares/auth')
const productController = require('../controllers/productController')
router.route('/')
      .post(productController.createProduct).get(productController.getProducts)
router.route('/cart').post(productController.addToCart)


module.exports = router