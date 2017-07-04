import React from 'react'

import axios from 'axios'

class BookList extends React.Component {
    constructor() {
        super()
        this.state = {
            booklist: []
        }
    }

    newStateBooklist(data) {
        this.setState({
            booklist: [...this.state.booklist, data]
        })
    }
    
    addBook() {
        const newBook = {
            id: 4,
            nama_buku: "winter in tokyo",
            harga: 213000
        }
        axios.post('http://localhost:4000/books', newBook)
        .then(response => {
            this.newStateBooklist(newBook)
        })
        .catch(error => {
            console.log(`oops, something error when add book: `, error)
        })
    }

    removeBook(bookToDeleteId) {
        this.setState({
            booklist: this.state.booklist.filter(book => book.id !== bookToDeleteId)
        })
    }

    deleteBook(id) {
        axios.delete('http://localhost:4000/books', id)
        .then(response => {
            this.removeBook(id)
        })
        .catch(error => {
            console.log(`oops, something error when delete book: `, error)
        })
    }

    fetchAllBook(data) {
        this.setState({
            booklist: data
        })
    }

    componentDidMount() {
        axios.get('http://localhost:4000/books')
        .then(response => {
            console.log('data semua buku: ', response.data)

            this.fetchAllBook(response.data)
        })
        .catch(error => {
            console.log(`oops, something error when fetch All book: `, error)
        })
    }

    render() {
        return (
            <div>
                <h1>Ini BookList</h1>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Judul Buku</th>
                            <th>Harga</th>
                            <th>Operasi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.booklist.map((book, item) => {
                            return (
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.nama_buku}</td>
                                    <td>{book.harga}</td>
                                    <td>
                                        <button onClick={() => this.addBook()}>Add</button>
                                        <button>Edit</button>
                                        <button className="deleteClass" onClick={() => this.deleteBook(book.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const styles = {
    table: {
        borderStyle: 'solid'
    }
}

export default BookList