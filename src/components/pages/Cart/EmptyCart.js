import React,{ Component } from 'react'
import {Link} from 'react-router-dom'
class EmptyCart extends Component{
    render(){
        return(
                <div className="empty-cart">
                    <div className="cart-user"></div>
                    <p className="cart-empty-info1">您的购物车还是空的</p>
                    <p className="cart-empty-info2">去挑一些中意的商品吧</p>
                    <Link to='/home' className="cart-to-index">随便逛逛</Link>
                </div>
            )
    }
}

export default EmptyCart
