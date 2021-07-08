const { validationResult } = require('express-validator')

const userController = {
  new: (req, res) => {
    const data = { page: 'Register', errors: [] }
    res.render('register.ejs', data)
  },
  create: (req, res) => {
    const results = validationResult(req)
    if (!results.isEmpty()) {
      const errors = results.errors.map(error => error.msg)
      const data = { page: 'Register', errors: [...new Set(errors)] }
      res.render('register.ejs', data)
      return
    }
    res.redirect('/home')
  },
}

module.exports = userController
