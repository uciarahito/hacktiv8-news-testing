import * as actions from './index'

describe('BookList actions ', () => {

    it('should create a GET_DATA_START action', () => {
        const expectedAction = { type: 'GET_DATA_START' }
        const actualAction = actions.getDataStart()

        expect(actualAction).toEqual(expectedAction)
    })

    it('should create a GET_DATA_SUCCESS action', () => {
        const actualBook = [
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
        const expectedAction = { type: 'GET_DATA_SUCCESS', payload: actualBook }
        const actualAction = actions.getDataSuccess(actualBook)

        expect(actualAction).toEqual(expectedAction)
    })

    it('should create a DELETE_BOOK action', () => {
        const bookId = 3
        const expectedAction = { type: 'DELETE_BOOK', payload: bookId }
        const actualAction = actions.deleteBookSuccess(bookId)

        expect(actualAction).toEqual(expectedAction)
    })

    it('should create a GET_DETAIL action', () => {
        const bookDetail = {
            "id": 3,
            "nama_buku": "indonesia",
            "harga": "900022"
        }

        const expectedAction = { type: 'GET_DETAIL', payload: bookDetail }
        const actualAction = actions.getDetail(bookDetail)

        expect(actualAction).toEqual(expectedAction)
    })

    it('should create a ADD_BOOK action', () => {
        const newBook = {
            "id": 4,
            "nama_buku": "sosial negara",
            "harga": "231090"
        }

        const expectedAction = { type: 'ADD_BOOK', payload: newBook }
        const actualAction = actions.addBookSuccess(newBook)

        expect(actualAction).toEqual(expectedAction)
    })

    it('should create a EDIT_BOOK action', () => {
        const editBook = {
            "id": 3,
            "nama_buku": "sejarah",
            "harga": "100000"
        }

        const expectedAction = { type: 'EDIT_BOOK', payload: editBook }
        const actualAction = actions.editBookSuccess(editBook)

        expect(actualAction).toEqual(expectedAction)
    })
})