const userController = {
  new: (req, res) => {
    const data = {page: 'Register', errors: []}
    res.render('register.ejs', data)
  },
  create: (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const confirm = req.body.confirm
    const errors = []
    if (password.length < 7) {
      errors.push('パスワードは7文字以上です')
    }
    if (password !== confirm) {
      errors.push('パスワードが一致しません')
    }
    if (!name || !email || !password || !confirm) {
      errors.push('未入力の項目があります')
    }
    if (errors.length) {
      const data = {page: 'Register', errors}
      res.render('register.ejs', data)
      return
    }
    res.redirect('/home')
  }
}

module.exports = userController