import { combineReducers } from 'redux'

import commons from './commons/reducer'
import find from './find/reducer'

const reducer = combineReducers({
    commons,find
})

export default reducer
