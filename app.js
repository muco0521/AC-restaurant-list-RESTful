// modules
const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')

const handlebarsHelper = require('./config/handlebars-helper')
const routes = require('./routes')
require('./config/mongoose')

// app
const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs', handlebarsHelper }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
