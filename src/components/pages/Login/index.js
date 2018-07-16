import React, { Component } from 'react'
import AppFooter from '../../commons/AppFooter'
import AppCommonHeader from '../../commons/AppCommonHeader'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../../store/commons/actionCreator'
import { Toast } from 'antd-mobile'
import $ from 'webpack-zepto'
import './index.scss'
class Login extends Component{
    constructor(props){
        super(props)
        this.judgeLogin()
        this.infoText = ''
        this.quest_login = this.quest_login.bind(this)
    }
      judgeLogin(){
         if ( this.props.commons.userInfo ) {
            this.props.history.replace('/mine')
        }else{
            this.props.history.replace('/login')
        }
    }
    focus(){
        $('.next_btn').css({'background':'red','color':'#fff'})
    }
    quest_login(){
     var username = $('.username').val()
     var password = $('.password').val()
    // console.log(username,password)
        this.Post({
            url:'/mobile/index.php?act=login',
            data:{
                username:username,
                password:password,
                client:'wap'
            }
        }).then(res => {
            if(res.data.code===400){
                 this.infoText = res.data.datas.error
                Toast.info(this.infoText,2)
            }else if(res.data.code===200){
            this.Cookies.save('username', username, { path: '/', maxAge:new Date().setDate(new Date().getDate()+7) })
            this.props.changeUserInfo(username)
            this.props.history.replace('/mine')
            }
        })
    }
    render(){
        return(
                    <div className='login'>
                    <AppCommonHeader  title = {'登录'} 
                      rcontent={'注册'} />
                   <div className='login_info'>
                        <div className='login_info_block'>
                        <span>账户</span>
                        <input type='text' 
                        className='username'
                        placeholder='用户名/邮箱/已验证手机'/>
                        </div>
                        <div className='login_info_block'>
                        <span>密码</span>
                        <input type='password' 
                         className='password'
                        placeholder='请输入登录密码' onFocus={this.focus}/>
                        </div>
                    </div>
                        <div className='agree_box'>
                            <input type='radio'/><span>七天自动登录</span>
                            <a>忘记密码？</a>
                        </div>
                        <span className='next_btn' onClick={this.quest_login}>登录</span>
                   <AppFooter/>
                </div>
            )
    }
}
export default connect(state=>state,dispatch=>{
    return bindActionCreators(actionCreator, dispatch)
})(Login)
