const express = require('express')
const path = require('path')
const morgan = require('morgan')

const configureTemplateEngine = require('./utils/configureTemplateEngine')
const apiRouter = require('./routes/apiRouter')

const FOLDER_WITH_STATIC = 'public'
const FOLDER_WITH_TEMLATES = 'views'

const app = express()

configureTemplateEngine(FOLDER_WITH_TEMLATES, app)

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use(express.static(path.join(__dirname, FOLDER_WITH_STATIC)))
app.use('/api', apiRouter)

app.get('/*', (req, res) => {
  res.redirect('/api/books')
})

module.exports = app
