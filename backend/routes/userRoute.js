const router = require('express').Router()

const userController = require('../controllers/userController')
const auth = require('../middlewares/auth')

router.post('/register',userController.registerUser)
router.post('/login',userController.loginUser)
router.get('/verify',userController.verifiedToken)

module.exports = router