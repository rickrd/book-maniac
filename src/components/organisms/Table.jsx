import React from 'react'
import { Table, Checkbox } from 'semantic-ui-react'

const handleCheckbox = (e, books) => {
  const id = e.target.id
  let updatedBooks = [...books]
  let item = { ...updatedBooks[id] }
  item.checked = e.target.checked
  updatedBooks[id] = item
  this.setState({ books: updatedBooks })
}

const TableComponent = props => {
  const { books, state } = props
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
              <Checkbox id={i} checked={book.checked} onChange={(e) => {handleCheckbox(e, books)}}></Checkbox>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default TableComponent
