import React, { Component } from 'react'
import Swiper from 'swiper'


class DetailSwiper extends Component{
    constructor(props){
        super(props)
    }
    renderDetailSwiper(){
        let { goods_swiper_images } =this.props
         return goods_swiper_images.map(item => {
            return (
                <img src={item} className="swiper-slide" key = {item}/>                
            )
        })       
    }
    componentDidUpdate () {
            new Swiper(this.detail,{                
                pagination: {el: '.swiper-pagination'}
             })
    }
    render(){
        return(
                <div ref = {el=> this.detail=el } className='detail-swiper swiper-container'>
                   <div className="swiper-wrapper">
                        { this.renderDetailSwiper() }
                   </div>
                   <div className="swiper-pagination"></div>
                </div>
            )
    }
}
export default DetailSwiper
