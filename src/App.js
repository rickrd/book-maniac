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
import Home from './components/pages/Home'

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
    return (
      <div className="App">
        <Home store={store}></Home>
      </div>
    )
  }
}

export default App
