// const templateParams = {
//   pageTitle: 'books',
//   cols: ['name', 'date', 'authors'],
//   fields: ['name', 'date'],
// }

const templateParams = {
  pageTitle: 'Books',
  tableSchema: [
    // {
    //   // labelText: 'name',
    //   // tag: 'input',
    //   // props: {
    //   //   name: 'name',
    //   //   type: 'text',
    //   // },
    // },
    {
      title: 'name',
      field: 'name',
    },
    {
      title: 'date',
      field: 'date',
    },
  ],
}

exports.getTablePageOfBooks = (req, res) => {
  try {
    const data = req.books
    res.render('tablePage.njk', { data, ...templateParams })
  } catch (error) {
    const message = error.message || 'Something went wrong. Try it again!'
    res.status(500).json({ message })
  }
}
