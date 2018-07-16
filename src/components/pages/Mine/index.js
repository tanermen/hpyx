import React,{Component} from 'react'
import MineTop from './MineTop'
import MineInfos from './MineInfos'
import MineClassify from './MineClassify'
import AppFooter from '../../commons/AppFooter'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../../store/commons/actionCreator'
import './index.scss'


class Mine extends Component{
    constructor(props){
        super(props)
        this.state={
            infos : [
                {id:1,leftImg:"http://mall.fjncjy.com/wap/images/mc_01.png",left:"我的订单",right:"查看全部订单"},
                {id:2,leftImg:"http://mall.fjncjy.com/wap/images/mc_02.png",left:"我的财产",right:"查看全部财产"},
                {id:3,leftImg:"http://mall.fjncjy.com/wap/images/mc_05.png",left:"邀请返利",right:"邀请好友注册/购物，获得积分"},
                {id:4,leftImg:"http://mall.fjncjy.com/wap/images/mc_03.png",left:"收货地址管理",right:""},
                {id:5,leftImg:"http://mall.fjncjy.com/wap/images/mc_04.png",left:"用户设置",right:""},
                {id:6,leftImg:"http://mall.fjncjy.com/wap/images/mc_04.png",left:"退出",right:""}
            ],
            classies1: [
                {id: 1, title: '待付款', image: 'http://mall.fjncjy.com/wap/images/mcc_01.png'},
                {id: 2, title: '待配送', image: 'http://mall.fjncjy.com/wap/images/mcc_03.png'},
                {id: 3, title: '待收货', image: 'http://mall.fjncjy.com/wap/images/mcc_02.png'},
                {id: 4, title: '待自提', image: 'http://mall.fjncjy.com/wap/images/mcc_03.png'},  
                {id: 5, title: '退款/退货', image: 'http://mall.fjncjy.com/wap/images/mcc_05.png'}             
            ],
            classies2: [
                {id: 1, title: '预存款', image: 'http://mall.fjncjy.com/wap/images/mcc_06_b.png'},
                {id: 2, title: '充值卡', image: 'http://mall.fjncjy.com/wap/images/mcc_07_b.png'},
                {id: 3, title: '代金券', image: 'http://mall.fjncjy.com/wap/images/mcc_08_b.png'},
                {id: 4, title: '红包', image: 'http://mall.fjncjy.com/wap/images/mcc_09_b.png'},
                {id: 4, title: '积分', image: 'http://mall.fjncjy.com/wap/images/mcc_10_b.png'}               
            ]
        }
          this.judgeLogin()
        this.exit = this.exit.bind(this)
    }
     judgeLogin(){
         if ( !this.props.commons.userInfo ) {
            this.props.history.replace('/login')
        }
    }

     exit () {//退出登陆
        this.props.initUserInfo()
        this.Cookies.remove('username', { path: '/' })
        this.props.history.replace('/login')
    }
    render(){
        let {infos,classies1,classies2} = this.state
        return(
            <div className="app-mine">                  
               <MineTop/>
                <div className="app-mine-infos">                
                    <MineInfos info={infos[0]}/>
                    <MineClassify mineclassify={classies1}/>
                </div>
                <div className="app-mine-infos"> 
                    <MineInfos info={infos[1]}/>
                    <MineClassify mineclassify={classies2}/>
                </div>
                <MineInfos info={infos[2]}/>
                <MineInfos info={infos[3]}/>
                <MineInfos info={infos[4]}/>
                <MineInfos info={infos[5]} exit={this.exit}/>
                <AppFooter/>
            </div>
            )
    }
}

export default connect(state=>state,dispatch=>{
    return bindActionCreators(actionCreator, dispatch)
})(Mine)
