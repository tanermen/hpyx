import { combineReducers } from 'redux'

import commons from './commons/reducer'
import find from './find/reducer'
import cart from './cart/reducer'
const reducer = combineReducers({
    commons,find,cart
})

export default reducer
