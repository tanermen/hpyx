import React, { Component } from 'react'

class HomeClassify extends Component{
    constructor(props){
        super(props)
    }
  renderHomeClassifyList(){
    let { HomeClassifyList } = this.props
    return HomeClassifyList.map( item=>(<div className='block' key={item.id}>
                        <img src = {item.src} alt=''/>
                        <span>{item.title}</span>
                         </div> ))
  }
    render(){
        return(
                <div className='home_classify'>
                    { this.renderHomeClassifyList() }
                </div>
            )
    }
}

HomeClassify.defaultProps ={
   HomeClassifyList:[
     {id:1,title:'即时达',src:'http://mall.fjncjy.com/wap/images/browse_list_w.png'},
     {id:2,title:'提货门店',src:'http://mall.fjncjy.com/wap/images/mcc_01a.png'},
     {id:3,title:'宅配套餐',src:'http://mall.fjncjy.com/wap/images/mcc_04_w.png'},
     {id:4,title:'福建特产',src:'http://mall.fjncjy.com/wap/images/member_w.png'},
     {id:5,title:'一村一品',src:'http://mall.fjncjy.com/wap/images/fjtc.png'},
     {id:6,title:'土地流转',src:'http://mall.fjncjy.com/wap/images/tdlz.png'},
     {id:7,title:'农业旅游',src:'http://mall.fjncjy.com/wap/images/nyly.png'},
     {id:8,title:'邀请好友',src:'http://mall.fjncjy.com/wap/images/ycyp.png'},
   ]
}

export default HomeClassify
