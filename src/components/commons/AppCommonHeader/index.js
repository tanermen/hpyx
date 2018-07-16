import React,{ Component } from "react"
 import { Link,withRouter } from 'react-router-dom'
import "./index.scss"

class AppCommonHeader extends Component{
      constructor (props) {
        super(props)
        this.state = {
            pathName:''
        }
        this.goBack = this.goBack.bind(this)
         this.judgePathName = this.judgePathName.bind(this)
    }
    renderSearch(){
        let { renderTitle,title } = this.props
        if (renderTitle) return (
            <Link to = '/find' className="center search">
                <i className="fa fa-calendar"></i>
                <span>六鳌红蜜薯</span>
            </Link>
        )
        return title
    }
     goBack () {
        // console.log(this.props)
        //路由返回
        this.props.history.go(-1)
    }
        judgePathName(){
        let { rcontent } = this.props
        // console.log(this.props)
      if (rcontent=='注册') {
        this.setState({
            pathName : './register'
        })
      } else if(rcontent=='登录'){
        this.setState({
            pathName : './login'
        })
      }else if(rcontent=='搜索'){
         this.setState({
            pathName : './find'
        })
      }
   }
  
    renderLeft(){
        let{ toLogin } = this.props
        if(toLogin) return(<i className="fa fa-cog"></i>)
        return(<i className="fa fa-chevron-left" onClick={this.goBack}></i>)
    }
    componentDidMount(){
         this.judgePathName()
    }
    renderRight(){
        let { rcontent } = this.props
        let { pathName } = this.state
        if(rcontent) return(
             <Link to = {pathName} className='span'>{rcontent}</Link>
        )
        return (<span>···</span>)
    }
    render(){
        let { search,addSearchHistory } = this.props
        return(
            <div className="app-common-header">
                <div className="left back">
                 {this.renderLeft()}   
                </div>
                {this.renderSearch()}
                <div className="right more" onClick={search}>
                {this.renderRight()}
                </div>
            </div>
        )
    }
}

export default withRouter(AppCommonHeader)
