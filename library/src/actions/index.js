import * as actionType from './constant'
import axios from 'axios'

export const getDataStart = () => ({
  type: actionType.GET_DATA_START
})

export const getDataSuccess = (data) => ({
  type: actionType.GET_DATA_SUCCESS,
  payload: data
})

export const deleteBookSuccess = id => ({
  type: actionType.DELETE_BOOK,
  payload: id
})

export const getDetail = (data) => ({
  type: actionType.GET_DETAIL,
  payload: data
})

export const addBookSuccess = (data) => ({
    type: actionType.ADD_BOOK,
    payload: data
})

export const editBookSuccess = (data) => ({
    type: actionType.EDIT_BOOK,
    payload: data
})

export const getData = () => {
  return dispatch => {
    dispatch(getDataStart())
    axios.get('http://localhost:4000/books')
    .then(response => {
      dispatch(getDataSuccess(response.data))
    })
    .catch(error => {
      console.log(error);
    })
  }
}

export const getBookDetail = (id) => {
  return dispatch => {
    axios.get(`http://localhost:4000/books/${id}`)
    .then(response => {
      console.log(response.data);
      dispatch(getDetail(response.data))
    })
    .catch(error => {
      console.log(error);
    })
  }
}

export const addBook = data => {
  return dispatch => {
    axios.post(`http://localhost:4000/books`, data)
    .then(response => {
      dispatch(addBookSuccess(data))
    })
    .catch(error => {
      console.log(error);
    })
  }
}

export const deleteBook = id => {
  return dispatch => {
    axios.delete(`http://localhost:4000/books/${id}`)
    .then(response => {
      console.log(response);
      // utk ngirim object action
      dispatch(deleteBookSuccess(id))
    })
    .catch(error => {
      console.log(error);
    })
  }
}

export const editBook = data => {
  return dispatch => {
    axios.put(`http://localhost:4000/books/${data.id}`, {
      ...data
    })
    .then(response => {
      console.log('action edit: ', response.data);
      dispatch(editBookSuccess(response.data))
    })
    .catch(error => {
      console.log(error);
    })
  }
}