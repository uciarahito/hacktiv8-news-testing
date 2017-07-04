import React from 'react'
import { connect } from 'react-redux'
import {
  getBookDetail,
editBook } from '../actions'
import { Redirect } from 'react-router-dom'

class BookEdit extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        form: {
          id: '',
          nama_buku: '',
          harga: ''
        },
        editStatus: true
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
    console.log(tmpForm);
    this.setState({
      form: tmpForm
    })
  }

  componentWillMount() {
    this.setState({
      form: {...this.props.bookDetail}
    })
  }

  editBook(e) {
    e.preventDefault()
    let { form } = this.state
    let newBook = {
      ...form
    }
    this.props.editBook(newBook)
    this.setState({
      editStatus: false
    })
  }

  render() {
    if (this.state.editStatus) {
      return (
        <div>
          <form>
            Nama Buku:<br />
            <input
              type="text"
              name="nama_buku"
              onChange={this.handleChange}
              value={this.state.form.nama_buku} />
            <br />
            Harga:<br />
            <input
              type="text"
              name="harga"
              onChange={this.handleChange}
              value={this.state.form.harga} />
            <br /><br />
            <button onClick={(e) => this.editBook(e)}>Submit</button>
          </form>
        </div>
      )
    } else {
      return(
        <Redirect to="/"/>
      )
    }
  }

  componentDidMount() {
    console.log('Didmount');
    this.props.getBookDetail(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    // let { form } = this.state
    //  this.setState({
    //   form: nextProps.bookDetail
    // })

    let newState = {
      form: nextProps.bookDetail
    }
    this.setState(newState)
  }
}

const mapStateToProps = state => ({
  bookDetail: state.bookDetail
})

const mapDispatchToProps = dispatch => ({
  getBookDetail: id => {
    dispatch(getBookDetail(id))
  },
  editBook: data => {
    dispatch(editBook(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BookEdit)