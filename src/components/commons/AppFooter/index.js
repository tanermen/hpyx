import React, { Component } from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'


class AppFooter extends Component{
    constructor(props){
        super(props)
    }
renderAppFooterList(){
    let { appFooterList } = this.props
   return appFooterList.map(item=>(
         <NavLink  exact to = {item.path} className='app_footer_block' key={item.id}>
            <i className={item.name}></i>
            <span>{item.title}</span>
         </NavLink>
        ))
}
    render(){
        return(
                <div className='app_footer'>
                    {this.renderAppFooterList()}
                </div>
            )
    }
}
AppFooter.defaultProps={
    appFooterList:[
     {id:1,title:'首页',name:'fa fa-home',path:'/'},
     {id:2,title:'分类',name:'fa fa-table',path:'/classify'},
     {id:3,title:'发现',name:'fa fa-file-text-o',path:'/find'},
     {id:4,title:'购物车',name:'fa fa-shopping-cart',path:'/cart'},
     {id:5,title:'我的',name:'fa fa-user-o',path:'/mine'}
    ]
}
export default AppFooter
