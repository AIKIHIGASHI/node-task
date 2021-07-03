const router = require('express').Router()


router.get('/', (req, res) => {
  const data = {page: 'Register'}
  res.render('register.ejs', data)
})

router.get('/login', (req, res) => {
  const data = {page: 'Login'}
  res.render('login.ejs', data)
})

module.exports = router