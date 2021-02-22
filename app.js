const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const configureTemplateEngine = require('./utils/configureTemplateEngine')
const configureCssPreprocessor = require('./utils/configureCssPreprocessor')
const apiRouter = require('./routes/apiRouter')

const FOLDER_WITH_STATIC = 'public'
const FOLDER_WITH_TEMLATES = 'views'
const FOLDER_WITH_SASS = 'sass'

const app = express()

configureTemplateEngine(FOLDER_WITH_TEMLATES, app)
configureCssPreprocessor(FOLDER_WITH_SASS, FOLDER_WITH_STATIC, app)

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, FOLDER_WITH_STATIC)))
app.use('/api', apiRouter)

app.get('/', (req, res) => {
  res.redirect('/api/books')
})

module.exports = app
