import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class MineTop extends Component{
    constructor(props){
        super(props)
        this.state={
            mineNavs : [
            {id:1,dt:"http://mall.fjncjy.com/wap/images/favorite_w.png",dd:"商品收藏"},
            {id:2,dt:"http://mall.fjncjy.com/wap/images/store_w.png",dd:"店铺收藏"},
            {id:3,dt:"http://mall.fjncjy.com/wap/images/goods-browse_w.png",dd:"我的足迹"}
            ]
        }
    }
    renderMineNavs(){
        let { mineNavs } = this.state
        return mineNavs.map(item =><MineNavs data={item} key={item.id}/>)
    }
      render(){
        return(               
           <div className="mine-top">
            <div className="mine-title">
                  <i className="fa fa-cog"></i>
                  <span>···</span>
              </div> 
              <Link to='/login' className="mine-login" >
                    <div className="mine-login-chicken"></div>
                    <a className="mine-to-login">{this.props.commons.userInfo}</a> 
              </Link>
              <div className="mine-nav">
                  {this.renderMineNavs()}
              </div>
           </div>
            )
    }
}
const MineNavs = (props) =>{
    let {dt,dd} = props.data
    return(
            <dl>
              <dt><img src={dt}/></dt>
              <dd>{dd}</dd>
            </dl>
        )
}

export default connect(state=>state)(MineTop)
