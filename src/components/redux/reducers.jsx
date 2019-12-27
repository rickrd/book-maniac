import { UPDATE_READ, CREATE_BOOK } from './actions'

const initialState = {
  books: []
}

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          data: action.data
        }
      ]

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
