const router = require('express').Router()
const homeController = require('../controllers/homeController')
const sessionController = require('../controllers/sessionController')
const userController = require('../controllers/userController')
const { userRegistValidator } = require('../middleware/validates/user.validate')

router.get('/home', homeController.home)

router.get('/login', sessionController.new)

router.get('/', userController.new)

router.post('/', userRegistValidator, userController.create)

module.exports = router
