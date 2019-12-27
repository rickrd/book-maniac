import React from 'react'
import Logo from '../atoms/Logo'
import Description from '../atoms/Description'
import AddBookForm from '../molecules/AddBookForm'
import Result from '../atoms/Result'
import TableComponent from '../organisms/Table'
import { connect, Provider } from 'react-redux'

const Home = props => {
  const { books, store } = props
  store.subscribe(() => {
    console.log(store.getState())
  })
  return (
    <Provider store={store}>
      <div className="container header">
        <Logo></Logo>
        <Description></Description>
        <AddBookForm></AddBookForm>
      </div>

      <div className="container list">
        <Result books={books}></Result>
        <TableComponent></TableComponent>
      </div>
    </Provider>
  )
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(Home)
