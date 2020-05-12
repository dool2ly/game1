const router = require('express').Router()
const controller = require('./controller')

router.post('/register', controller.register)
router.get('/check/:id', controller.check)
router.post('/login', controller.login)
router.put('/save', controller.save)
router.post('/logout', controller.logout)

module.exports = router
