import React, { Component } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
/*
**@params:gc_id 产品分类类型代号，big_img_url：大图片的路径（不是动态渲染的）
*/
class ClassifyHotProduct extends Component{
    constructor(props){
        super(props)
        this.state = {
            HotProduct:[]
        }
    }
    getClassifyHotProduct(gc_id){//获取数据
        this.Get({
            url:'mobile/index.php',
            data:{
                act: 'goods',
                op: 'goods_list',
                page: '10',
                curpage: '1',
                key: '1',
                is_category: '1',
                gc_id: gc_id
            }
        }).then(res=>{
          // console.log(res.data.datas.goods_list)
            this.setState({HotProduct:res.data.datas.goods_list.slice(2,8)})
        })
    }
    renderClassifyHotProduct(){
        let { HotProduct } = this.state
       // console.log(HotProduct)
       return HotProduct.map(item => (
            <Link to={'/productdetail/' + item.goods_id} className='product_block' key={item.goods_id}>
                <img  className='product_img' src = {item.goods_image_url} alt=''/>
                <span className="prodouct_name">{item.goods_name}</span>
                <span className='prodouct_price'>￥{item.goods_price}</span>
            </Link>
            ))
    }
    componentDidMount(){//组件挂载完成时获取数据
      let { gc_id } = this.props
      //console.log(this.props.gc_id)
         this.getClassifyHotProduct(gc_id)
       
    }
   componentWillUpdate(props){//当点击按钮,接收属性发生变化，重新获取数据
    if(this.props.gc_id !== props.gc_id){
         this.getClassifyHotProduct(props.gc_id)
      }
   }
    render(){
        let { big_img_url,gc_id ,isPadding} = this.props
       // console.log(big_img_url,gc_id)
        return(
                <div className={
                  isPadding? 'home_hot_product p_padding-top':'home_hot_product' 
                }>
                    <img src={big_img_url} alt=''/>
                    <div className='hot_products'>
                         { this.renderClassifyHotProduct() }
                    </div>
                </div>
            )
    }
}
export default ClassifyHotProduct
