const express = require('express')
const {
  getTablePageOfBooks,
} = require('../middlewares/get-templates/getTablePageOfBooks')
const {
  getBooksWithAuthorsFromDB,
} = require('../middlewares/work-with-DB/getBooksWithAuthorsFromDB')

const booksRouter = express.Router()

booksRouter.route('/').get(getBooksWithAuthorsFromDB, getTablePageOfBooks)

module.exports = booksRouter
