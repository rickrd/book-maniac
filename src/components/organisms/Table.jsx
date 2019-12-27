import React from 'react'
import { Table, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'

const handleCheckbox = (e, books) => {
  const id = e.target.id
  let updatedBooks = [...books]
  let item = { ...updatedBooks[id] }
  item.checked = e.target.checked
  updatedBooks[id] = item
  this.setState({ books: updatedBooks })
}

const TableComponent = props => {
  const { books } = props

  return (
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
              <a href={`https://openlibrary.org${book.data.key}`} target="_blank">
                {book.data.title}
              </a>
            </Table.Cell>
            <Table.Cell width="4">
              {book.data.description ? book.data.description.value : `No description`}
            </Table.Cell>
            <Table.Cell>
              {book.data.authors &&
                book.data.authors.map(author => (
                  <a href={`https://openlibrary.org${author.key}`} target="_blank">
                    {author.key ? author.key : author.author.key}
                    <br />
                  </a>
                ))}
            </Table.Cell>
            <Table.Cell>
              {book.data.publishers ? (
                book.data.publishers.map(publisher => (
                  <div>
                    {publisher}
                    <br />
                  </div>
                ))
              ) : (
                <div>No publishers (work)</div>
              )}
            </Table.Cell>
            <Table.Cell>{book.data.publish_date ? book.data.publish_date : book.data.created.value.split('T')[0]}</Table.Cell>
            <Table.Cell selectable>
              <span className="action">Read?</span>{' '}
              <Checkbox
                id={i}
                checked={book.data.checked}
                onChange={e => {
                  handleCheckbox(e, books)
                }}
              ></Checkbox>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(TableComponent)
