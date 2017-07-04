import React from 'react'
import { getData } from '../actions'
import { connect } from 'react-redux' // utk menghubungkan react dgn redux
import { Link } from 'react-router-dom'
import BookItem from './BookItem'

const styles = {
  table: {
    borderStyle: 'solid'
  }
}

class BookList extends React.Component {
  renderLoading() {
    return(
      <div>
        <h1>Masih loading</h1>
      </div>
    )
  }

  renderTable() {
    return(
      <div>
        <Link to="/bookaddform"><button>Add Book</button></Link>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Jusul Buku</th>
              <th>Harga</th>
              <th>Operasi</th>
            </tr>
          </thead>
          <tbody>
            {this.props.bookList.map((item, index) => {
              return (
                <BookItem item={item} key={index} />
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
  render() {
    console.log('booklist di component', this.props.bookList);
    if (this.props.loading) {
      return (
        this.renderLoading()
      )
    } else {
      return(
        this.renderTable()
      )
    }
  }

  componentDidMount() {
    this.props.getData()
  }

}

// selalu terhubung ke props
const mapStateToProps = state => ({
  bookList: state.bookList,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  getData: () => {
    dispatch(getData())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BookList)