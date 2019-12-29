import { UPDATE_READ, CREATE_BOOK } from './actions'

const initialState = {
  books: localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : []
}

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      localStorage.setItem('books', JSON.stringify([...state, action.data]))
      return [...state, action.data]

    case UPDATE_READ:
      return state.map((book, index) => {
        if (index === action.index) {
          return Object.assign({}, book, {
            checked: !book.checked
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
