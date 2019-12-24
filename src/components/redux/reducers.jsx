import { UPDATE_READ, CREATE_BOOK } from './actions'

const initialState = {
  books: localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : []
}

const booksReducer = (state = [], action) => {
  switch (action) {
    // case CREATE_BOOK:
    //   return [
    //     ...state,
    //     {
    //       authors: action.authors,
    //       checked: action.checked,
    //       checked_date: action.checked_date,
    //       classifications: action.classifications,
    //       covers: action.covers,
    //       created: action.created,
    //       description: action.description,
    //       identifiers: action.identifiers,
    //       isbn_10: action.isbn_10,
    //       isbn_13: action.isbn_13,
    //       key: action.key,
    //       languages: action.languges,
    //       last_modified: action.last_modified,
    //       latest_revision: action.latest_revision,
    //       local_id: action,
    //       number_of_pages: action.number_of_pages,
    //       physical_format: action.physical_format,
    //       publish_date: action.publish_date,
    //       publishers: action.publishers,
    //       revision: action.revision,
    //       source_records: action.source_records,
    //       subtitle: action.subtitle,
    //       title: action.title,
    //       type: action.type,
    //       works: action.works
    //     }
    //   ]
    case CREATE_BOOK:
      return [...state, action.book]

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
