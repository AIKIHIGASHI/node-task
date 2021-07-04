const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()

app.set('view engine', 'ejs')

app.use(expressLayouts)

app.use(express.urlencoded({extended: false}));

app.use(express.static('public'))

app.use('/', require('./routes'))

app.listen(3000)