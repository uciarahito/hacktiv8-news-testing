import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'

import logger from 'redux-logger' // utk lihat history status
import thunk from 'redux-thunk' // supaya bisa asychronus
import bookReducer from '../reducers/bookReducer'

const middlewares = applyMiddleware(logger, thunk)

const store = createStore(bookReducer, compose(
    middlewares,
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
// gunanya : agar redux dev tool bisa ditampilkan

export default store