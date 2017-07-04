import * as actionType from '../actions/constant'

let initialState = {
  bookList: [],
  loading: false,
  bookDetail: {}
}

export const getDataStart = state => {
  let newState = {
    ...state,
    loading: true
  }
  return newState
}

export const getDataSuccess = (state, data) => {
  let newState = {
    ...state,
    bookList: data,
    loading: false
  }
  return newState
}

export const getDetail = (state, data) => {
  let newState = {
    ...state,
    bookDetail: data,
    loading: false
  }
  return newState
}

export const addBook = (state, data) => {
  let newState = {
    ...state,
    bookList: [...state.bookList, data],
    loading: false
  }
  return newState
}

export const deleteBook = (state, id) => {
  let newData = state.bookList.filter(item => item.id !== id)
  let newState = {
    ...state,
    bookList: newData
  }
  return newState
}

export const editBook = (state, data) => {
  let newData = state.bookList.map(item => {
    return item.id === data.id ? data : item
  })

  let newState = {
    ...state,
    bookList: newData
  }

  return newState
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case actionType.GET_DATA_START:
      return getDataStart(state)
    case actionType.GET_DATA_SUCCESS:
      return getDataSuccess(state, payload)
    case actionType.GET_DETAIL:
      return getDetail(state, payload)
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