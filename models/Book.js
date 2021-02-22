const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  authors: [
    {
      type: mongoose.ObjectId,
      ref: 'Author',
    },
  ],
})

const Book = mongoose.model('Book', BookSchema)

module.exports = Book
