import React, { Component } from 'react'
import './index.scss'
import AppCommonHeader from '../../commons/AppCommonHeader'
import DetailSwiper from './DetailSwiper'
import DetailIntroduce from './DetailIntroduce'

class ProductDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            goods_id:101264,
            goods_swiper_images:[],
            goods_info:{},
            goods_more_info:{}
        }
    }
    getProductDetail(){
        let {goods_id} = this.state
        this.Get({
            url: 'mobile/index.php',
            data :{
                act: "goods",
                op: "goods_detail",
                goods_id,
                key:""
            }
        }).then(res => {
            console.log(res.data.datas)
            this.setState({
                goods_swiper_images:res.data.datas.goods_image.split(","),
                goods_info:res.data.datas.goods_info,
                goods_more_info:res.data.datas.goods_hair_info
            });
            // console.log(this.state.goods_swiper_images)
        })
    }
    componentDidMount(){
        this.getProductDetail()
    }
    render(){
        let {goods_swiper_images,goods_info,goods_more_info} = this.state
        return(
                <div className='app-product-detail'>
                 <AppCommonHeader title={'商品详情'}/>  
                 <DetailSwiper  goods_swiper_images={goods_swiper_images}/>
                 <DetailIntroduce goods_info={goods_info} goods_more_info={goods_more_info}/>
                 <div className='detail-bigimg' dangerouslySetInnerHTML={{ __html: goods_info.mobile_body }}></div>
                </div>
            )
    }
}
export default ProductDetail
