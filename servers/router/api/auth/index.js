const router = require('express').Router()
const controller = require('./controller')

router.post('/register', controller.register)
router.get('/checkId/:id', controller.checkId)

module.exports = router
