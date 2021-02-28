const tableRows = Array.from(document.getElementsByClassName('table__row'))
let currentRow = null

const getById = (id) => document.querySelector(`#${id}`)
const getAllByClassName = (className) => document.querySelector(`.${className}`)

const redirectTo = (route) => {
  window.location.href = `${window.location.href}/${route}`
}

const selectRow = (row) => {
  const toggle = (r) => r.classList.toggle('table__row_active')
  if (currentRow) toggle(currentRow)
  currentRow = row
  toggle(row)
}

const deleteRow = () => {
  fetch(`/api/books/${currentRow.id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.ok && document.location.reload())
}

tableRows.forEach((row) => {
  row.onclick = () => selectRow(row)
})
getById('button-add').onclick = () => redirectTo('add')
getById('button-change').onclick = () => redirectTo('change')
getById('button-delete').onclick = () => deleteRow()
