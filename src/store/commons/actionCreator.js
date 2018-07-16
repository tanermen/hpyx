
import {CHANGE_USER_INFO, INIT_USER_INFO} from './const'

const actionCreator ={
    changeUserInfo(content){
        let action = {type:CHANGE_USER_INFO,content}
        return action
    },
    initUserInfo(){
         let action = {type:INIT_USER_INFO}
        return action
    }
}

export default actionCreator
