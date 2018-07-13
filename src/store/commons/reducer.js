import state from './state'

const reducer = (previousState = state,action) => {
     let new_state = Object.assign({},previousState)
     switch (action.type){

        default: break;
     }
  return new_state
}

export default reducer
