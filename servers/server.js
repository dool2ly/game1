/* == LOAD THE DEPENDENCIES == */
const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

/* == LOAD THE CONFIG == */
const config = require('./config')
const port = process.env.PORT || 81

/* == EXPRESS CONFIGURATION == */
const app = express()

// For header security
app.use(helmet('hidePoweredBy'))

// Parse body to json
app.use(bodyParser.json())

// print requiest log on console
app.use(morgan('dev'))

// configure api router
app.use('/api', require('./router/api'))

// set the encrypt key for jwt
app.set('jwt-secret', config.jwtSecretKey)

// server open
app.listen(port, () => { console.log(`Express is running on port ${port}`) })

/* == MONGOOSE SETTING AND CONNECTING == */
mongoose.Promise = global.Promise
mongoose.connect(config.mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', (err) => console.log('Connection error:' + err))
db.once('open', () => { console.log('Connected to mongodb server') })
