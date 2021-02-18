const express = require('express')
const path = require('path')
const morgan = require('morgan')

const configureTemplateEngine = require('./utils/configureTemplateEngine')

const FOLDER_WITH_STATIC = 'viwes'

const app = express()

configureTemplateEngine(FOLDER_WITH_STATIC, app)

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use(express.static(path.join(__dirname, FOLDER_WITH_STATIC)))

app.get('/', (req, res) => {
  res.render('./templates/base.njk')
})

module.exports = app
