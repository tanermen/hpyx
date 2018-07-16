import state from './state'
import { ADD_CART } from './const'

const reducer = (previousState = state,action) => {
     let new_state = Object.assign({},previousState)
     switch (action.type){
        case ADD_CART : new_state.goods = action.goods;
            
        break;
        default: break;
     }
  return new_state
}

export default reducer


