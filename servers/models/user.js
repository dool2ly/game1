const mongoose = require('mongoose')
const crypto = require('crypto')
const { passwordEncryptKey } = require('../config')

const User = new mongoose.Schema({
  username: String,
  password: String,
  map: Number,
  location: [Number, Number]
})

User.statics.createUser = function(username, password) {
  const encryptedPassword = crypto.createHmac('sha1', passwordEncryptKey)
                            .update(password)
                            .digest('base64')

  const user = new this({
    username: username,
    password: encryptedPassword,
    map: 0,
    location: [0, 0]
  })

  return user.save()
}

module.exports = mongoose.model('User', User);
