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
    renderRight(){
        let { rcontent } = this.props
        if(rcontent) return(<span>{rcontent}</span>)
        return (<span>···</span>)
    }
    render(){
        return(
            <div className="app-common-header">
                <div className="left back">
                 {this.renderLeft()}   
                </div>
                {this.renderSearch()}
                <div className="right more">
                {this.renderRight()}
                </div>
            </div>
        )
    }
}

export default AppCommonHeader
