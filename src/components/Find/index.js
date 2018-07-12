import React, { Component } from 'react'
import AppFooter from '../commons/AppFooter'

import './index.scss'
class Find extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                <div className='app_find'>
                    <AppFooter/>
                </div>
            )
    }
}
export default Find
