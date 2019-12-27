import React from 'react'
import { connect } from 'react-redux'
import { createBook } from '../redux/actions'
import doRequest from '../../services/request'

const getBook = async (e, props) => {
  e.preventDefault()
  if (!e.target.isbn.value) return null

  const data = await doRequest(`https://openlibrary.org${e.target.isbn.value}.json`)
  const book = data
  book.checked = false
  const today = new Date()
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  book.checked_date = date
  props.dispatch(createBook(data))
}

const AddBookForm = props => {
  return (
    <form
      className=""
      onSubmit={e => {
        getBook(e, props)
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
