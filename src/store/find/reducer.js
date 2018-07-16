
import state from './state'
import {
     ADD_SEARCH_HISTORY,
    REMOVE_SEARCH_HISTORY
} from './const'

const reducer = (previousState = state,action) => {
     let new_state = Object.assign({},previousState)
      // new_state.search_history = previousState.search_history.slice()

     switch (action.type){
      case ADD_SEARCH_HISTORY:
        new_state = handler.addSearchHistory(new_state,action.content)
        break;
       case REMOVE_SEARCH_HISTORY:
        new_state = handler.removeSearchHistory()
        break; 
        default: break;
     }
  return new_state
}

export default reducer

const handler ={
   addSearchHistory(state,content){
        state.search_history.push(content)
        return state
   },
   removeSearchHistory(){
     state.search_history = []
     return state
   }
}
