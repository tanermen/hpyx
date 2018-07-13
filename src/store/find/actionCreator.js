
import {
    ADD_SEARCH_HISTORY,
    REMOVE_SEARCH_HISTORY
} from './const'

const actionCreator = {
  addSearchHistory(content){
    let action={ type:ADD_SEARCH_HISTORY,content }
    return action
  },
  removeSearchHistory(){
    let action={ type:REMOVE_SEARCH_HISTORY }
    return action
  }
}

export default actionCreator
