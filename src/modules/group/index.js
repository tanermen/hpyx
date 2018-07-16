
import { bindActionCreators } from 'redux'
import ActionCreators from './actionCreators'
import { connect } from 'react-redux'
const ConnectGroup = ( UIComponent, reducerOptions) => {
    
    let mapStateToProps = state => {
        if ( !reducerOptions ) return state;//如果什么都不传，就把所有的都给它
        if ( !reducerOptions.length ) return state;//如果传了，但是数组里没有东西,还是把所有的给它
        
        let _state = {}//真正要返回的state
        
        reducerOptions.forEach(reducerOption => {
            //如果传入的是字符串，也ok
            if ( (typeof reducerOption) === 'string' ) {
                _state[reducerOption] = state[reducerOption]
                return false;
            }
            
            let {reducer} = reducerOption
            //如果没有传state，或者state的length为0，就把当前reducer所有的state都给它
            if ( !reducerOption.state || reducerOption.state.length === 0 ) {
                _state[reducer] = state[reducer]
                return false
            }
            //这个reducer对应的状态
            _state[reducer] = {}
            for (const key in state[reducer]) {
                for (let i = 0; i < reducerOption.state.length; i++) {
                    if ( reducerOption.state[i] === key ) {
                        state[reducer][key]
                        _state[reducer][key] = state[reducer][key];
                        break;
                    }
                }
            }

           
        });

        return _state

    }

    let mapDispatchToProps = dispatch => {
        if ( !reducerOptions || !reducerOptions.length ) {
            //把所有的actionCreator都处理给它
            let actions = {}
            for (const reducer in ActionCreators) {
                actions = Object.assign({}, actions, bindActionCreators(ActionCreators[reducer], dispatch))
            }
            return actions;
        }

        let actions = {}
        reducerOptions.forEach(reducerOption => {
            // //如果传入的是字符串，也ok
            if ( (typeof reducerOption) === 'string' ) {
                actions = Object.assign({}, actions, bindActionCreators(ActionCreators[reducerOption], dispatch))
            }else {
                actions = Object.assign({}, actions,  bindActionCreators(ActionCreators[reducerOption.reducer], dispatch))
            }

        })
        
        return actions
    }
  
    
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(UIComponent)
}

export default ConnectGroup

