const Users = require('../../../models/user.js')

// English, Number regular
const regEngNum = /^[a-zA-Z0-9]*$/
/*
  POST /api/auth/register
  {
    username,
    password
  }

*/
exports.register = (req, res) => {
  const { username, password } = req.body

  /* == INPUT VALIDATION == */
  // check empty
  if (!username || !password) {
    res.status(400).json({ success: false, message: 'empty input'})
    return
  }
  // check id
  if (!regEngNum.test(username)) {
    res.status(400).json({ success: false, message: 'only use ENG'})
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

  // Repond success
  .then(user => res.json({ success: true }))

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
  POST /api/auth/checkId
  {
    username
  }
*/
exports.checkId = (req, res) =>{
  const { username } = req.body
  /* == INPUT VALIDATION == */
  // check empty
  if (!username) {
    res.status(400).json({ success: false, message: 'empty input'})
    return
  }
  // check id
  if (!regEngNum.test(username)) {
    res.status(400).json({ success: false, message: 'only use ENG'})
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
