const express = require('express')
const morgan = require('morgan')

const configureTemplateEngine = require('./utils/configureTemplateEngine')

const app = express()

configureTemplateEngine('views', app)

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
  res.render('./index.html')
})

module.exports = app
