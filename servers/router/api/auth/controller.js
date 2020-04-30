const Users = require('../../../models/user.js')
/*
  POST /api/auth/register
  {
    username,
    password
  }
*/
exports.register = (req, res) => {
  const { username, password } = req.body

  // Input validation
  const engReg = /^[a-zA-Z0-9]*$/ // English, Number

  if (!engReg.test(username)) {
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
      res.status(200).json({ success: false, message: error.message })
    } else {
      console.log(error)
      res.status(400).json({ success: false })
    }
  })
}
