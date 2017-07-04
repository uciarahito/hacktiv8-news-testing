import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteBook } from '../actions'

class BookItem extends React.Component {
  render() {
    const { item } = this.props

    return(
      <tr>
        <td>{item.nama_buku}</td>
        <td>{item.harga}</td>
        <td>
          <Link to={`/bookdetail/${item.id}`}><button>Detail</button></Link>
          <Link to={`/bookeditform/${item.id}`}><button>Edit</button></Link>
          <button onClick={() => this.props.deleteBook(item.id)}>Delete</button>
        </td>
      </tr>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  deleteBook: (id) => {
    dispatch(deleteBook(id))
  }
})

export default connect(null, mapDispatchToProps)(BookItem)