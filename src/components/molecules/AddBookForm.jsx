import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { createBook } from '../redux/actions'

const addBook = (e, props) => {
  e.preventDefault()
  console.log(props)
  if (!e.target.isbn.value) return null
  const today = new Date()
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  try {
    axios.get(`http://openlibrary.org${e.target.isbn.value}.json`).then(res => {
      const book = res.data
      book.checked = false
      book.checked_date = date
      console.log(book)
      props.dispatch(createBook(book))
    })
  } catch (error) {
    console.log(error)
  }
}

const AddBookForm = props => {
  console.log(props)
  return (
    <form
      className=""
      onSubmit={e => {
        addBook(e, props)
      }}
    >
      <input name="isbn" placeholder="Add by key"></input>
      <button type="submit">ADD</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(AddBookForm)
