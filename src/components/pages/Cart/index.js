import React,{ Component } from 'react'
import "./index.scss"
import AppCommonHeader from '../../commons/AppCommonHeader'
import EmptyCart from './EmptyCart'
import AppFooter from '../../commons/AppFooter'

class Cart extends Component{
    render(){
        return(
                <div className="app-cart">
                    <AppCommonHeader title={"购物车"}/>
                    <EmptyCart/>
                    <AppFooter/>
                </div>
            )
    }
}

export default Cart
