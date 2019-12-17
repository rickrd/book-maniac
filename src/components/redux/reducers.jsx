import { UPDATE_READ } from './actions'

const initialState = {
  books: localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : []
}

const booksReducer = (state = [], action) => {
  switch (action) {
    case UPDATE_READ:
      return state.map((book, index) => {
        if (index === action.index) {
          return Object.assign({}, book, {
            read: !book.read
          })
        } else return book
      })
    default:
      return state
  }
}

export default function reducers(state = initialState, action) {
  return {
    books: booksReducer(state.books, action)
  }
}
