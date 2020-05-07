const router = require('express').Router()
const controller = require('./controller')

router.post('/register', controller.register)
router.post('/checkId', controller.checkId)
router.post('/login', controller.login)

module.exports = router
