import React, { Component } from 'react'

import Swiper from 'swiper'
//本地图片的引入，import require两种方法
//import imgURL from '../../assets/imgs/315.jpg';

class HomeBanner extends Component {
    constructor(props){
        super(props)
        this.state = {
            banners :[
                {id:1,src:'http://mall.fjncjy.com/wap/img/315.jpg',path:''},
                {id:2,src:'http://mall.fjncjy.com/wap/img/ht340.jpg', path:''},
                {id:3,src:'http://mall.fjncjy.com/wap/img/htj.jpg', path:''},
                {id:4,src:'http://mall.fjncjy.com/wap/img/nqhg340.jpg', path:''},
                {id:5,src:'http://mall.fjncjy.com/wap/img/xwzl.jpg', path:''},
                {id:6,src:'http://mall.fjncjy.com/wap/img/xyhzczx340.jpg', path:''}
            ]
        }
    }
   
    renderSwiperItems(){
        let { banners } = this.state
      return  banners.map(item => {
 
            return(
                <div className="swiper-slide" key = {item.id}>
                <img src={item.src} alt=''/>
                </div>
                )
        })
    }
       componentDidMount(){
        new Swiper(this.banner,{
                autoplay: { delay: 2000, 
                stopOnLastSlide: false, 
                disableOnInteraction: false},
                pagination: {el: '.swiper-pagination'}
             })
    }  
    render () {
        return (
            <div ref = {el=>this.banner=el} className="home_banner swiper-container">
               <div className='swiper-wrapper'>
               {this.renderSwiperItems()}
               </div>
            <div className="swiper-pagination"></div>
             </div>
        )
    }

}

export default HomeBanner
