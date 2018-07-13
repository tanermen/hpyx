import Home from '../components/pages/Home'
import Classify from '../components//pages/Classify'
import Find from '../components/pages/Find'
import Cart from '../components/pages/Cart'
import Mine from '../components/pages/Mine'
import ProductDetail from '../components/pages/ProductDetail'
import React from 'react'

import {Route,Switch,Redirect} from 'react-router-dom'

const RouterView = props => {
    return(
         <div>
            <Switch>
                <Route exact path = "/" component = {Home} />
                <Route path = "/classify" component = {Classify} />
                <Route path = "/find" component = {Find} />
                <Route path = "/mine" component = {Mine} />               
                <Route path = "/cart" component = {Cart} /> 
                <Route path = "/productdetail/:goods_id" component = {ProductDetail} /> 
                <Redirect from = "**" to = "/"/>            
            </Switch>
        </div>

        )
}
export default RouterView
