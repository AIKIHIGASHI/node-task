const loginController = {
  new: (req, res) => {
    const data = {page: 'Login'}
    res.render('login.ejs', data)
  }
}

module.exports = loginController