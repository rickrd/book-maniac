import React from 'react'
import { Table, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateRead } from '../redux/actions'

const handleCheckbox = (e, props) => {
  const id = e.target.id
  props.dispatch(updateRead(id))
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
        {books.map((book, index) => (
          <Table.Row key={index}>
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
                book.authors.map((author, index) => (
                  <a key={index} href={`https://openlibrary.org${author.key}`} target="_blank">
                    {author.key ? author.key : author.author.key}
                    <br />
                  </a>
                ))}
            </Table.Cell>
            <Table.Cell>
              {book.publishers ? (
                book.publishers.map((publisher, index) => (
                  <div key={index}>
                    {publisher}
                    <br />
                  </div>
                ))
              ) : (
                <div>No publishers (work)</div>
              )}
            </Table.Cell>
            <Table.Cell>
              {book.publish_date
                ? book.publish_date
                : book.created.value.split('T')[0]}
            </Table.Cell>
            <Table.Cell selectable>
              <span className="action">Read?</span>{' '}
              <Checkbox
                id={index}
                checked={book.checked}
                onChange={e => {
                  handleCheckbox(e, props)
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
