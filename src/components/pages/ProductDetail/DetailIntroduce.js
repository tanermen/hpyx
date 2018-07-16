import React, { Component } from 'react'

class DetailIntroduce extends Component{
    render(){
        let {goods_info,goods_more_info} = this.props
        return(
                <div className='detail-introduce'>
                    <h3>{goods_info.goods_name}</h3>
                    <p className='price-num'>
                        <span className='detail-price'>￥{goods_info.goods_price}</span>
                        <span className='detail-num'>销量：{goods_info.goods_salenum}件</span>
                    </p>
                    <div className='detail-address'>
                        <div className='detail-send'>送至</div>
                        <div className='area-name'>
                            <p className='detail-area-name'>{goods_more_info.area_name}<span>{goods_more_info.if_store_cn}</span></p>
                            <p className='detail-pay'>{goods_more_info.content}</p>
                        </div>
                        <img src='http://mall.fjncjy.com/wap/images/location_b.png'/>
                    </div>
                </div>
            )
    }
}
export default DetailIntroduce
