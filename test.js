const port = 80
const express = require('express')
const app = express()
console.log('debut')
app.get('/', (req,res)=>{res.send('lalala')})
app.listen(port, () => {console.log(port)})
