import React from 'react'
import { Form, Input, Button, Table, Checkbox } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'
import './App.scss'
import Logo from './components/atoms/Logo'

class App extends React.Component {
  state = {
    books: localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : []
  }

  addBook = e => {
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

  componentDidUpdate() {
    const { books } = this.state
    localStorage.setItem('books', JSON.stringify(books))
  }

  handleCheckbox = (e, data) => {
    const { books } = this.state
    const id = e.target.id
    let updatedBooks = [...books]
    let item = { ...updatedBooks[id] }
    item.checked = data.checked
    updatedBooks[id] = item
    this.setState({ books: updatedBooks })
  }

  render() {
    const { books, report } = this.state

    return (
      <div className="App">
        {/* HEADER START */}
        <div className="container header">
          <Logo></Logo>
          <div className="description">
            You can add books to your library by visiting
            <a href="https://openlibrary.org" target="_blank">
              {' '}
              openlibrary.org{' '}
            </a>
            and searching for your book. Once you find it, you can copy the key of the book from the
            URL. You can follow the example above:
            <br />
            <b>URL:</b> https://openlibrary.org<b>/books/OL26631800M</b>/The_Body_Keeps_the_Score
            <br />
            <b>KEY:</b> <b>/books/OL26631800M</b>
          </div>
          <div className="actions">
            <Form className="" onSubmit={this.addBook}>
              <Input name="isbn" placeholder="Add by key"></Input>
              <Button type="submit">ADD</Button>
            </Form>
            <Button>Get annual report</Button>
          </div>
        </div>
        {/* HEADER END */}

        {/* LIST START */}
        <div className="container list">
          <div className="result">A total of {books.length} books stored</div>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Authors</Table.HeaderCell>
                <Table.HeaderCell>Publishers</Table.HeaderCell>
                <Table.HeaderCell>Publish Date</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {books.map((book, i) => (
                <Table.Row>
                  <Table.Cell width="2">
                    <a href={`https://openlibrary.org${book.key}`} target="_blank">
                      {book.title}
                    </a>
                  </Table.Cell>
                  <Table.Cell width="4">
                    {book.description ? book.description.value : `No description`}
                  </Table.Cell>
                  <Table.Cell>
                    {book.authors &&
                      book.authors.map(author => (
                        <a href={`https://openlibrary.org${author.key}`} target="_blank">
                          {author.key ? author.key : author.author.key}
                          <br />
                        </a>
                      ))}
                  </Table.Cell>
                  <Table.Cell>
                    {book.publishers ? (
                      book.publishers.map(publisher => (
                        <div>
                          {publisher}
                          <br />
                        </div>
                      ))
                    ) : (
                      <div>No publishers (work)</div>
                    )}
                  </Table.Cell>
                  <Table.Cell>{book.publish_date}</Table.Cell>
                  <Table.Cell selectable>
                    <span className="action">Read?</span>{' '}
                    <Checkbox
                      id={i}
                      checked={book.checked}
                      onChange={this.handleCheckbox}
                    ></Checkbox>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        {/* LIST END */}
      </div>
    )
  }
}

export default App
