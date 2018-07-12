import React,{ Component } from "react"
import "./index.scss"
class AppCommonHeader extends Component{
    renderSearch(){
        let { renderTitle,title } = this.props
        if (renderTitle) return (
            <div className="center search">
                <i className="fa fa-calendar"></i>
                <span>六鳌红蜜薯</span>
            </div>
        )
        return title
    }
    renderLeft(){
        let{ toLogin } = this.props
        if(toLogin) return(<i className="fa fa-cog"></i>)
        return(<i className="fa fa-chevron-left"></i>)
    }
    render(){
        return(
            <div className="app-common-header">
                <div className="left back">
                 {this.renderLeft()}   
                </div>
                {this.renderSearch()}
                <div className="right more">
                    <span>···</span>
                </div>
            </div>
        )
    }
}

export default AppCommonHeader
