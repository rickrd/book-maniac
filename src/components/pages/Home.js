import React from 'react'
import Logo from '../atoms/Logo'
import Description from '../atoms/Description'
import AddBookForm from '../molecules/AddBookForm'
import Result from '../atoms/Result'
import TableComponent from '../organisms/Table'
import { connect } from 'react-redux'

const Home = props => {
  const { books } = props
  return (
    <div>
      <div className="container header">
        <Logo></Logo>
        <Description></Description>
        <AddBookForm></AddBookForm>
      </div>

      <div className="container list">
        <Result books={books}></Result>
        <TableComponent books={books}></TableComponent>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default mapStateToProps(Home)
