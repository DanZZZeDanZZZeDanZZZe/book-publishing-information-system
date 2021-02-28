const Book = require('../../models/Book')

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params
    await Book.findByIdAndDelete(id)

    res.status(200).json({ message: 'Successful deletion' })
  } catch (error) {
    const message = error.message || 'Something went wrong. Try it again!'
    res.status(500).json({ message })
  }
}
