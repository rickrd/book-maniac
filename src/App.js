import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.scss'
import Logo from './components/atoms/Logo'
import Description from './components/atoms/Description'
import AddBookForm from './components/molecules/AddBookForm'
import Result from './components/atoms/Result'
import TableComponent from './components/organisms/Table'
import { createStore } from 'redux'
import booksReducer from './components/redux/reducers'

class App extends React.Component {
  state = {
    books: localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : []
  }

  componentDidUpdate() {
    const { books } = this.state
    localStorage.setItem('books', JSON.stringify(books))
  }

  render() {
    const store = createStore(booksReducer)
    store.subscribe(() => console.log(store.getState()))
    console.log(store.getState())
    const { books } = store.getState().books
    return (
      <div className="App">
        <div className="container header">
          <Logo></Logo>
          <Description></Description>
          <AddBookForm></AddBookForm>
        </div>

        <div className="container list">
          <Result books={store.getState().books}></Result>
          <TableComponent books={store.getState().books}></TableComponent>
        </div>
      </div>
    )
  }
}

export default App
