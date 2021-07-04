const router = require('express').Router()

router.get('/', (req, res) => {
  const data = {page: 'Register', errors: []}
  res.render('register.ejs', data)
})

router.get('/login', (req, res) => {
  const data = {page: 'Login'}
  res.render('login.ejs', data)
})

router.get('/home', (req, res) => {
  const data = {page: 'Dashboard'}
  res.render('home.ejs', data)
})

router.post('/', (req, res) => {
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
})

module.exports = router