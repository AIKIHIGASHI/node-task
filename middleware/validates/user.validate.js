const { check } = require('express-validator')

const userRegistValidator = [
  check(['name', 'email', 'password', 'confirm']).not().isEmpty().withMessage('未入力の項目があります'),
  check('password').isLength({ min: 7 }).withMessage('パスワードは7文字以上です'),
  check('password').custom((value, { req }) => {
    if (req.body.password !== req.body.confirm) {
      throw new Error('パスワードが一致しません')
    }
    return true
  }),
]

module.exports = {
  userRegistValidator
}