exports.getTablePageOfBooks = (req, res) => {
  try {
    const data = req.books
    res.render('tablePageOfBooks.njk', { data })
  } catch (error) {
    const message = error.message || 'Something went wrong. Try it again!'
    res.status(500).json({ message })
  }
}
