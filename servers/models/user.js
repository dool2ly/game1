const mongoose = require('mongoose')
const crypto = require('crypto')
const { passwordEncryptKey } = require('../config')


const encryptPassword = (password) => {
  return crypto.createHmac('sha1', passwordEncryptKey)
                           .update(password)
                           .digest('base64')
}


const User = new mongoose.Schema({
  username: String,
  password: String,
  map: Number,
  location: [Number, Number]
})

User.statics.createUser = function(username, password) {
  const user = new this({
    username: username,
    password: encryptPassword(password),
    map: 0,
    location: [0, 0]
  })

  return user.save()
}

User.methods.comparePassword = function(password) {
  return this.password === encryptPassword(password)
}

module.exports = mongoose.model('User', User);
