const Book = require('../../models/Book')

exports.getBooksWithAuthorsFromDB = async (req, res, next) => {
  try {
    const books = await Book.find({})
    req.books = books

    next()
  } catch (error) {
    const message = error.message || 'Something went wrong. Try it again!'
    res.status(500).json({ message })
  }
}
