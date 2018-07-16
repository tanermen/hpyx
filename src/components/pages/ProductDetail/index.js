import React, { Component } from 'react'
import './index.scss'
import AppCommonHeader from '../../commons/AppCommonHeader'
import DetailSwiper from './DetailSwiper'
import DetailIntroduce from './DetailIntroduce'
import ConnectGroup from '../../../modules/group'

class ProductDetail extends Component{
    constructor(props){
        super(props)
        // console.log(this.props.cart.goods)
        this.state={
            goods_id:Number(this.props.match.params.goods_id),
            goods_swiper_images:[],
            goods_info:{},
            goods_more_info:{},
            num:1
        }
        this.plusNum=this.plusNum.bind(this)
        this.minusNum=this.minusNum.bind(this)
        this.addCart=this.addCart.bind(this)
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
            //console.log(res.data.datas)
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
    plusNum(e){
        e.preventDefault();
        this.setState({
            num:++this.state.num
        })
    }
    minusNum(e){
        e.preventDefault();
        this.setState({
            num:--this.state.num
        })
    }
    addCart(){
        let{goods_id,goods_info,num} = this.state
        let goods_name = goods_info.goods_name,
            goods_price = goods_info.goods_price;
        this.props.addCart({
            goods_id,goods_name,goods_price,num,
            success: () => {
                console.log(111)
            }
        })
    }
    render(){
        let {goods_swiper_images,goods_info,goods_more_info,num} = this.state
        return(
                <div className='app-product-detail'>
                     <AppCommonHeader title={'商品详情'}/>  
                     <DetailSwiper  goods_swiper_images={goods_swiper_images}/>
                     <DetailIntroduce goods_info={goods_info} goods_more_info={goods_more_info}/>
                     <div className='product-num'>
                        <span>购买数量</span>
                        <form>
                            <input type='text' placeholder={num>=1 ? num : '1'}/>
                            <button className='add-minus' onClick={this.minusNum}>-</button>
                            <button className='add-plus' onClick={this.plusNum}>+</button>                           
                        </form>
                     </div>
                     <div className='detail-bigimg' dangerouslySetInnerHTML={{ __html: goods_info.mobile_body }}></div>
                     <div className='detail-footer'>
                        <a>
                            <img src="http://mall.fjncjy.com/wap/images/kefu_b.png"/>
                            <span>客服</span>
                        </a>
                        <a className='add-cart'>
                            <img src="http://mall.fjncjy.com/wap/images/cart_b.png"/>
                            <span>购物车</span>
                        </a>
                        <a className='buy-now'>立即购买</a>
                        <a className='add-to-cart' onClick={this.addCart}>加入购物车</a>

                    </div>
                </div>
            )
    }
}
export default ConnectGroup(ProductDetail,['commons','cart'])

