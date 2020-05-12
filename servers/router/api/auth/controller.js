const Users = require('../../../models/user.js')
const jwt = require('jsonwebtoken')

// English, Number regular
const regEngNum = /^[a-zA-Z0-9]*$/
const publishJWT = (id, username, secretKey) => {
  return new Promise((resolve, reject) =>{
    jwt.sign(
      {
        _id: id,
        username: username
      },
      secretKey,
      {
        expiresIn: '1d',
        issuer: 'dool2ly',
        subject: 'userVerify'
      },
      (err, token) => {
        if (err) reject (err)
        resolve(token)
      }
    )
  })
}


/*
  POST /api/auth/register
  {
    username,
    password
  }

*/
exports.register = (req, res) => {
  const { username, password } = req.body
  const secretKey = req.app.get('jwt-secret')

  /* == INPUT VALIDATION == */
  // check empty
  if (!username || !password) {
    res.status(400).json({ success: false, message: 'empty input'})
    return
  }
  // check id
  if (!regEngNum.test(username)) {
    res.status(400).json({ success: false, message: 'ENG or numbers only'})
    return
  }

  /* == REGISTRATION PROCESSING == */
  // Find duplicate user
  Users.findOne({ username })
  .exec()
  .then((user) => {
    if (user) throw new Error('User exists')
    return Users.createUser(username, password)
  })
  .then(user => {
    return publishJWT(user._id, user.username, secretKey)
  })
  // Repond result and JWT
  .then(token => {
    res.json({ success: true, token })
  })
  // Process error
  .catch((error) => {
    if (error.message === 'User exists') {
      res.status(400).json({ success: false, message: error.message })
    } else {
      console.log(error)
      res.status(400).json({ success: false })
    }
  })
}

/*
  GET /api/auth/check/:id
*/
exports.check = (req, res) =>{
  const username = req.params.id
  /* == INPUT VALIDATION == */
  // check empty
  if (!username) {
    res.status(400).json({ success: false, message: 'empty input'})
    return
  }
  // check id
  if (!regEngNum.test(username)) {
    res.status(400).json({ success: false, message: 'ENG or numbers only'})
    return
  }

  /* == REGISTRATION PROCESSING == */
  // Find user
  Users.findOne({ username }, (err, ret) => {
    if (err) {
      // query failure
      res.status(400).json({ success: false, message: 'DB query failure'})
    }
    if (ret) {
      // user exists
      res.status(200).json({ success: true, message: 'exists'})
    } else {
      // user not exists
      res.status(200).json({ success: true, message: 'not exists'})
    }
  })

}

/*
  POST /api/auth/login
  {
    username,
    password
  }
*/
exports.login = (req, res) => {
  const { username, password } = req.body
  const secretKey = req.app.get('jwt-secret')

  /* == INPUT VALIDATION == */
  // check empty
  if (!username || !password) {
    res.status(400).json({ success: false, message: 'empty input'})
    return
  }
  // check id
  if (!regEngNum.test(username)) {
    res.status(400).json({ success: false, message: 'ENG or numbers only'})
    return
  }

  /* == LOGIN PROCESSING == */
  Users.findOne({ username })
  .exec()
  .then((user) => {
    // id & pw verify
    if (!user || !user.comparePassword(password)) throw new Error('Information does not match')

    return publishJWT(user._id, user.username, secretKey)
  })
  // repond successful
  .then((token) => res.json({ success: true, token }))
  // repond failure
  .catch((err) => {
    if (err.message === 'Information does not match') {
      res.status(400).json({ success: false, message: err.message })
    } else {
      console.log(err)
      res.status(400).json({ success: false })
    }
  })
}

/*
  PUT /api/auth/save
  {
    token
    playerData
  }
*/
exports.save = (req, res) => {
  res.json({ success: true, message: "API(save)" })
}

/*
  POST /api/auth/logout
  {
    token
  }
*/
exports.logout = (req, res) => {
  res.json({ success: true, message: "API(logout)" })
}
