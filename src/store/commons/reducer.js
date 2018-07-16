import state from './state'
import {CHANGE_USER_INFO,
        INIT_USER_INFO} from './const'
        
const reducer = (previousState = state,action) => {
     let new_state = Object.assign({},previousState)
     switch (action.type){
        case CHANGE_USER_INFO:
            new_state.userInfo = action.content;
            break;
        case INIT_USER_INFO:
            new_state.userInfo = null;
        default: break;
     }
  return new_state
}

export default reducer
