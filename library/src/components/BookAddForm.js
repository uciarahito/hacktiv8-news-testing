import React from 'react'
import { connect } from 'react-redux'
import {
  addBook,
  getData
} from '../actions'

import { Redirect } from 'react-router-dom'

class BookAddForm extends React.Component {

  constructor() {
    super()
    this.state = {
      form: {
        id: '',
        nama_buku: '',
        harga: ''
      },
      addStatus: true
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { value, name } = e.target
    let { form } = this.state
    let tmpForm = {
      ...form
    }
    tmpForm[name] = value
    this.setState({
      form: tmpForm
    })
  }

  saveBook(e) {
    e.preventDefault()
    let {form} = this.state
    let newBook = {
      ...form,
      id: this.props.bookList.length ? this.props.bookList[this.props.bookList.length - 1].id + 1 : 1
    }
    this.props.addBook(newBook)
    this.setState({
      addStatus: false
    })
  }

  render() {
    // console.log('data booklist', this.props.bookList);
    if(this.state.addStatus) {
      return(
        <div>
          <form>
            Nama Buku:<br />
            <input
              type="text"
              name="nama_buku"
              onChange={this.handleChange} />
            <br />
            Harga:<br />
            <input
              type="text"
              name="harga"
              onChange={this.handleChange} />
            <br /><br />
            <button onClick={(e) => this.saveBook(e)}>Submit</button>
          </form>
        </div>
      )
    } else {
      return (
        <Redirect to={`/`} />
      )
    }
  }

  componentDidMount() {
    this.props.getData()
  }
}

const mapStateToProps = state => ({
  bookList: state.bookList
})

const mapDispatchToProps = dispatch => ({
  addBook: (data) => {
    dispatch(addBook(data))
  },
  getData: () => {
    dispatch(getData())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BookAddForm)