import bookReducer, { 
    getDataSuccess,
    getDetail
} from './bookReducer'

describe('Booklist reducer function ', () => {
    it('getDataSuccess function should get newBook', () => {
        const initialBook = {
            bookList: [],
            loading: false,
            bookDetail: {}
        }

        const expectedBook = [
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

        const expectedBookLength = expectedBook.length
        const actualDataSuccess = getDataSuccess(initialBook, expectedBook)

        expect(actualDataSuccess.bookList.length).toEqual(expectedBookLength)
    })

    it('getDetail function should get detail book', () => {
        const initialBook = {
            bookList: [],
            loading: false,
            bookDetail: {}
        }

        const expectedBook = {
            "id": 1,
            "nama_buku": "caricari",
            "harga": "3434983"
        }

        const expectedBookLength = expectedBook.length
        const actualDataSuccess = getDetail(initialBook, expectedBook)

        expect(actualDataSuccess.bookList.length).toEqual(expectedBookLength)
    })
})