const router = require('express').Router()
const controller = require('./controller')

router.post('/register', controller.register)
router.post('/checkId', controller.checkId)

module.exports = router
