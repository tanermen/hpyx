import React,{ Component } from "react"
import "./index.scss"
class AppCommonHeader extends Component{
    render(){
        return(
            <div className="app-common-header">
                <div className="left back">
                    <i className="fa fa-angle-left"></i>
                </div>
                <div className="center search">

                </div>
                <div className="right more">
                    <span>···</span>
                </div>
            </div>
        )
    }
}

export default AppCommonHeader
