import React, { Component } from 'react'
import AppCommonHeader from '../../commons/AppCommonHeader'
import AppFooter from '../../commons/AppFooter'
import { Toast } from 'antd-mobile'
import $ from 'webpack-zepto'
import './index.scss'
class Register extends Component{
    constructor(props){
        super(props)
        this.infoText = ''
        this.quest_register = this.quest_register.bind(this)
        this.submitRegisterInfo = this.submitRegisterInfo.bind(this)
    }
     focus(){
        $('.next_btn').css({'background':'red','color':'#fff'})
    }
    quest_register(){
        var phone_number = document.getElementsByClassName('phone')[0].value
        var reg =/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
         if(phone_number===''){
            this.infoText='请输入手机号'
             Toast.info(this.infoText,2)
         }else if(!reg.test(phone_number)){
             this.infoText='手机号码格式不正确'
             Toast.info(this.infoText,2)
         }else if(phone_number!==''&&reg.test(phone_number)){
              this.Get({
            url:'/mobile/index.php',
            data:{
                act:'connect',
                op:'get_sms_captcha',
                type:'1',
                phone:phone_number,
                sec_val:'',
                sec_key:''
            }

        }).then(res => {
            if(res.data.code===400){
                this.infoText = res.data.datas.error
                Toast.info(this.infoText,2)
                
           }else if(res.data.code===200){
            this.infoText = '发送成功'
            Toast.info(this.infoText,2)
            //60s倒计时
            function invokeSettime(obj){
            var countdown=60;
            settime(obj);
            function settime(obj) {
                if (countdown == 0) {
                    //$(obj).attr("disabled",false);
                    $(obj).text("获取验证码");
                    countdown = 60;
                    return;
                } else {
                    //$(obj).attr("disabled",true);
                    $(obj).text("(" + countdown + ") s 重新发送");
                    countdown--;
                }
                setTimeout(function() {
                            settime(obj) }
                        ,1000)
            }
        }
  new invokeSettime(".btn");
           }
        })
    }
}
submitRegisterInfo(){
   let verificationCode = $('.verificationCode').val()
   let phoneNumber = $('.phone').val()
   this.Get({
    url:'/mobile/index.php',
    data:{
        act:'connect',
        op:'check_sms_captcha',
        type:'1',
        phone:phoneNumber,
        captcha:verificationCode,
    }   
   }).then(res =>{
    if(res.data.code===400){
                this.infoText = res.data.datas.error
                Toast.info(this.infoText,2)
        }else if(res.data.code===200){
       console.log(res)
        }        
   })
}
    render(){

        return(
                <div className='register'>
                    <AppCommonHeader  title = {'会员注册'} 
                   rcontent={'登录'} />
                   <div className='register_tpye'>
                        <i className='fa fa-mobile'></i>
                        <span>手机注册</span>
                   </div>
                   <div className='register_info'>
                        <div className='register_info_block'>
                        <span>手机号</span>
                        <input type='text' placeholder='请输入手机号' className='phone'/>
                        <span onClick={this.quest_register} className='btn'>获取短信验证码</span>
                        </div>
                        <div className='register_info_block'>
                        <span>短信验证</span>
                        <input type='password' className='verificationCode' onFocus={this.focus} placeholder='请输入短信验证码'/>
                        </div>
                        <div className='agree_box'>
                            <input type='radio'/><span>同意</span>
                            <a href='http://mall.fjncjy.com/wap/tmpl/member/document.html'>用户注册协议</a>
                        </div>
                        <span className='next_btn' onClick={this.submitRegisterInfo}>下一步</span>
                        <p>绑定手机不收任何费用，一个手机只能绑定一个账号，
                        若需修改或解除已绑定的手机，请登录商城PC端进行操作。</p>
                   </div>
                 
                   <AppFooter/>
                </div>

            )
    }
}
export default Register
