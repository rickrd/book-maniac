import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.scss'
import Logo from './components/atoms/Logo'
import Description from './components/atoms/Description'
import AddBookForm from './components/molecules/AddBookForm'
import Result from './components/atoms/Result'
import TableComponent from './components/organisms/Table'

class App extends React.Component {
  state = {
    books: localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : []
  }

  componentDidUpdate() {
    const { books } = this.state
    localStorage.setItem('books', JSON.stringify(books))
  }

  render() {
    const { books } = this.state

    return (
      <div className="App">
        {/* HEADER START */}
        <div className="container header">
          <Logo></Logo>
          <Description></Description>
          <AddBookForm></AddBookForm>
        </div>
        {/* HEADER END */}

        {/* LIST START */}
        <div className="container list">
          <Result books={books}></Result>
          <TableComponent books={books}></TableComponent>
        </div>
        {/* LIST END */}
      </div>
    )
  }
}

export default App
