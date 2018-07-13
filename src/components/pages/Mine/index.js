import React,{Component} from 'react'
import './index.scss'
import MineTop from './MineTop'
import MineInfos from './MineInfos'
import AppFooter from '../../commons/AppFooter'


class Mine extends Component{
    render(){
        return(
            <div className="app-mine">                
               <MineTop/>
                <div className="app-mine-infos">                

                </div>
                <AppFooter/>
            </div>
            )
    }
}

export default Mine
