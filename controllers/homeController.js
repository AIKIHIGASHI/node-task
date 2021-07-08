const homeController = {
  home: (req, res) => {
    const data = {page: 'Home'}
    res.render('home.ejs', data)
  }
}

module.exports = homeController
