/* == LOAD THE DEPENDENCIES == */
const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')

/* == LOAD THE CONFIG == */
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

// server open
app.listen(port, () => { console.log(`Express is running on port ${port}`) })
