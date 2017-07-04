import React from 'react'

import { shallow } from 'enzyme'

import BookList from './BookList'

describe('<BookList> component ', () => {
    
    it('renders a <div> ', () => {
        const bookListWrapper = shallow(<BookList />)
        const divSection = bookListWrapper.find('div')
        expect(divSection).toHaveLength(1)
    })

    it('have booklist state which consistes of three items ', () => {
        const bookListWrapper = shallow(<BookList />)
        const actualState = [
            {
                "id": 1,
                "nama_buku": "caricari",
                "harga": "3434983"
            },
            {
                "id": 2,
                "nama_buku": "Si Juki",
                "harga": 10000
            },
            {
                "id": 3,
                "nama_buku": "indonesia",
                "harga": "900022"
            }
        ]
        bookListWrapper.instance().fetchAllBook(actualState)
        const booklistState = bookListWrapper.state('booklist')
        expect(booklistState).toHaveLength(3)
    })

    it('add a new book to the state when addBook function called ', () => {
        const bookListWrapper = shallow(<BookList />)

        const actualState = [
            {
                "id": 1,
                "nama_buku": "caricari",
                "harga": "3434983"
            },
            {
                "id": 2,
                "nama_buku": "Si Juki",
                "harga": 10000
            },
            {
                "id": 3,
                "nama_buku": "indonesia",
                "harga": "900022"
            }
        ]
        bookListWrapper.instance().fetchAllBook(actualState)

        const newBook = {
            id: 4,
            nama_buku: "winter in tokyo",
            harga: 213000
        }
        bookListWrapper.instance().newStateBooklist(newBook)
        const booklistState = bookListWrapper.state('booklist')
        expect(booklistState).toHaveLength(4)
    })

    it('delete a book from a state when removeBook function called', () => {
        const bookListWrapper = shallow(<BookList />)

        const actualState = [
            {
                "id": 1,
                "nama_buku": "caricari",
                "harga": "3434983"
            },
            {
                "id": 2,
                "nama_buku": "Si Juki",
                "harga": 10000
            },
            {
                "id": 3,
                "nama_buku": "indonesia",
                "harga": "900022"
            }
        ]
        bookListWrapper.instance().fetchAllBook(actualState)

        const bookToDeleted = 3
        bookListWrapper.instance().removeBook(bookToDeleted)
        const booklistState = bookListWrapper.state('booklist')
        expect(booklistState).toHaveLength(2)
    })

    it('deletes a book when DELETE button clicked', () => {
        // get the first delete button
        const bookListWrapper = shallow(<BookList />)

        const actualState = [
            {
                "id": 1,
                "nama_buku": "caricari",
                "harga": "3434983"
            },
            {
                "id": 2,
                "nama_buku": "Si Juki",
                "harga": 10000
            },
            {
                "id": 3,
                "nama_buku": "indonesia",
                "harga": "900022"
            }
        ]
        bookListWrapper.instance().fetchAllBook(actualState)

        const bookToDeleted = 2
        bookListWrapper.instance().removeBook(bookToDeleted)

        const buttonToDelete = bookListWrapper.find('.deleteClass').at(2)
        buttonToDelete.simulate('click')
        const booklistState = bookListWrapper.state('booklist')
        expect(booklistState).toHaveLength(2)
    })
})