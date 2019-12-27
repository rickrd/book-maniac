export const UPDATE_READ = 'UPDATE_READ'
export const CREATE_BOOK = 'CREATE_BOOK'

export const updateRead = index => {
  return { type: UPDATE_READ, index }
}

export const createBook = data => {
  return { type: CREATE_BOOK, data }
}

