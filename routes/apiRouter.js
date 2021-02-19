const express = require('express')
const booksRouter = require('./booksRouter')

const apiRouter = express.Router()
apiRouter.use('/books', booksRouter)

module.exports = apiRouter
