import React from 'react'
import axios from 'axios'

const addBook = e => {
  e.preventDefault()
  const { books } = this.state
  if (!e.target.isbn.value) return null
  const today = new Date()
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  try {
    axios.get(`http://openlibrary.org${e.target.isbn.value}.json`).then(res => {
      const book = res.data
      book.checked = false
      book.checked_date = date
      this.setState({ books: [...books, book] })
    })
  } catch (error) {
    console.log(error)
  }
}

const AddBookForm = () => {
  return (
      <form className="" onSubmit={addBook}>
        <input name="isbn" placeholder="Add by key"></input>
        <button type="submit">ADD</button>
      </form>
  )
}

export default AddBookForm
