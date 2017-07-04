import React from 'react'
import { connect } from 'react-redux'
import { getBookDetail } from '../actions'

class BookDetail extends React.Component {
  render() {
    const { nama_buku, harga } = this.props.bookDetail
    return (
      <div>
        <p>Nama Buku : {nama_buku}</p>
        <p>Harga Buku : {harga}</p>
      </div>
    )
  }

  componentDidMount() {
    console.log('params: ', this.props.match.params.id);
    this.props.getBookDetail(this.props.match.params.id)
  }

}

const mapStateToProps = state => ({
  bookDetail: state.bookDetail,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  getBookDetail: (id) => {
    dispatch(getBookDetail(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail)