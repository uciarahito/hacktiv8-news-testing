import * as actionType from '../actions/constant'

let initialState = {
  bookList: [],
  loading: false,
  bookDetail: {}
}

const getDataStart = state => {
  let newState = {
    ...state,
    loading: true
  }
  return newState
}

const getDataSuccess = (state, data) => {
  let newState = {
    ...state,
    bookList: data,
    loading: false
  }
  return newState
}

// const getDetail = (state, data) => {
//   let newState = {
//     ...state,
//     bookDetail: data,
//     loading: false
//   }
//   return newState
// }

const addBook = (state, data) => {
  let newState = {
    ...state,
    bookList: [...state.bookList, data],
    loading: false
  }
  return newState
}

const deleteBook = (state, id) => {
  let newData = state.bookList.filter(item => item.id !== id)
  let newState = {
    ...state,
    bookList: newData
  }
  return newState
}

const editBook = (state, data) => {
  let newData = state.bookList.map(item => {
    return item.id === data.id ? data : item
  })

  let newState = {
    ...state,
    bookList: newData
  }

  return newState
}

const bookReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionType.GET_DATA_START:
      return getDataStart(state)
    case actionType.GET_DATA_SUCCESS:
      return getDataSuccess(state, payload)
    case actionType.GET_DETAIL:
      return {
        ...state,
        bookDetail: payload,
        loading: false
      }
    case actionType.ADD_BOOK:
      return addBook(state, payload)
    case actionType.DELETE_BOOK:
      return deleteBook(state, payload)
    case actionType.EDIT_BOOK:
      return editBook(state, payload)
    default:
      return state
  }
}

export default bookReducer