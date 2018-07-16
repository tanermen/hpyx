import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
class ShowMoreProduct extends Component{
 constructor (props) {
        super(props)

        this.renderMoreProduct = this.renderMoreProduct.bind(this)
    }

    renderMoreProduct(){
        let { moreProducts } = this.props
     return moreProducts.map(item=>(
                 <Link to={'/productdetail/' + item.goods_id} className='recommend_product' key={item.goods_id}>
            <div className='img_box'>
                <img src={item.goods_image_url}/>
            </div>
             <div className='product_introduce'>
                <span className='goods_name big_text'>{item.goods_name}</span>
                <span className='goods_name'>{item.goods_jingle}</span>
                <span className='goods_price'>￥{item.goods_price}</span>
                <span>销量<span className='goods_aomunt'>{item.goods_fictsalenum}</span></span>
             </div>
        </Link>
            ))
    }


    render(){
        return(
                <div className='more_products'>
                 <img src='http://mall.fjncjy.com/wap/img/index_145.jpg'/>
                  {this.renderMoreProduct()}
                </div>
            )
    }
}
export default ShowMoreProduct
