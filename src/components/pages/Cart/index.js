import React,{ Component } from 'react'
import "./index.scss"
import AppCommonHeader from '../../commons/AppCommonHeader'
import EmptyCart from './EmptyCart'
import AppFooter from '../../commons/AppFooter'
import ConnectGroup from '../../../modules/group'


class Cart extends Component{
    constructor(props){
        super(props)
        this.state={
            goods : this.props.cart.goods
        }
        console.log(this.props)
    }
    renderGoodsInfo(){
        let {goods} = this.state
        return goods.map(item=> <GoodsInfo data={item} key={item.goods_id}/>)
    }
    render(){
        let {goods} = this.state
        return(
                <div className="app-cart">
                    <AppCommonHeader title={"购物车"}/>
                    { goods.length===0  ?  <EmptyCart/> : this.renderGoodsInfo() } 
                    <AppFooter/>
                </div>
            )
    }
}

const GoodsInfo = (props) =>{
    let{goods_name,goods_price,num} = props.data
    return(
        <div className='good-info'>
            <div>
                <span className='good-name'>商品名</span>
                <span>{goods_name}</span>
            </div>
            <div>
                <span>单价</span>
                <span>{goods_price}</span>
            </div>
            <div>
                <span>数量</span>
                <span>{num}</span>
            </div>
            <div>
                <span>总价</span>
                <span>{(num*goods_price).toFixed(2)}</span>
            </div>
        </div>
    )
}

export default ConnectGroup(Cart,['commons','cart'])
