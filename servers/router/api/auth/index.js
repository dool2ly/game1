const router = require('express').Router()
const controller = require('./controller')

// router.get('/', (req,res) => {res.json({auth:"answer!@#!@#!"})})
router.get('/register', controller.register)

module.exports = router
