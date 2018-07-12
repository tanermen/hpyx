import Home from '../components/Home'
import Classify from '../components/Classify'
import Find from '../components/Find'
import Cart from '../components/Cart'
import Mine from '../components/Mine'
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
                <Redirect from = "**" to = "/"/>            
            </Switch>
        </div>

        )
}
export default RouterView
