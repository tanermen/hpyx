import React, { Component } from 'react'
import AppCommonHeader from '../../commons/AppCommonHeader'
import AppFooter from '../../commons/AppFooter'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import actionCreator from '../../../store/find/actionCreator'
import './index.scss'

class Find extends Component{
    constructor(props){
        super(props)
        this.state = {
            hot_product_list:[],
            search_product_list:[]
        }
        this.searchProduct = this.searchProduct.bind(this)
        this.keyword = ''
    }
    //获取历史搜索记录并渲染
     renderSearchHistory(){
        let { search_history } = this.props.find
      return search_history.map(item=><span className='history_item' key={item + Math.random() }>{item}</span>)
     }
    //获取热门搜索数据及相关数据渲染
    getHotProductList(){
        this.Get({
            url:'mobile/index.php',
            data:{
                act: 'index',
                op: 'search_key_list'
            }
        }).then(res=>{
            this.setState({hot_product_list:res.data.datas.list})
        })
    }
    componentDidMount(){
        this.getHotProductList()
        this.searchProduct()
       // console.log(this.props)
    }
    renderHotProductList(){
        let { hot_product_list } = this.state
     return  hot_product_list.map(item=>
         <span className='hot_product_list' key={ item }>{item}</span>
       )
    }

//根据搜索框的关键字获取数据，及页面的渲染
  searchProduct(){//根据搜索框的关键字获取数据
    document.getElementById('show_big_img').style.display='block'
   let { search_product_list } = this.state
   this.keyword = document.getElementsByClassName('add_search')[0].value
    this.Get({
        url:'mobile/index.php',
        data:{
            act: 'goods',
            op: 'goods_list',
            page: '10',
            curpage: '1',
            keyword: this.keyword
        }
    }).then(res=> {
        this.setState({search_product_list:res.data.datas.goods_list})
         if(this.keyword!==''){
            //console.log(this.keyword)
             this.props.addSearchHistory(this.keyword)
        }
     })
    }

  renderSearchProduct(){
   let { search_product_list } = this.state
   if(search_product_list.length===0){
    return (
        <div className='not_found_info'>
         <div>没有找到任何相关信息</div>
         <span>选择或搜索其它商品分类/名称...</span>
        </div>
        )
   }else{
     return search_product_list.map(item =>
    (
        <div className='recommend_product' key={item.goods_id}>
            <div className='img_box'>
                <img src={item.goods_image_url}/>
            </div>
             <div className='product_introduce'>
                <span className='goods_name big_text'>{item.goods_name}</span>
                <span className='goods_name'>{item.goods_jingle}</span>
                <span className='goods_price'>￥{item.goods_price}</span>
                <span>销量<span className='goods_aomunt'>{item.goods_fictsalenum}</span></span>
             </div>
        </div>
        )  
    )  
   }
   
}

    render(){

        return(
                <div className='app_find'>
                   <input  className='add_search' placeholder='六鳌红蜜薯'/>
                   <AppCommonHeader 
                   renderTitle = {true} 
                   rcontent={'搜索'} 
                   search={this.searchProduct}
                   />
                         <h3>热门搜索</h3>
                    <div className='hot_product_list'>
                        {this.renderHotProductList()}
                    </div>
                    <div className='search_history_box'>
                        <h3>历史记录</h3>
                        <div className='search_history'>
                            {this.renderSearchHistory()}
                        </div>
                        <span className='clear_history' onClick={this.props.removeSearchHistory}> 清除历史记录</span>
                    </div>
                    <div className='recommend_products'>
                    <img style= {{'display':'none'}} id='show_big_img' src='http://mall.fjncjy.com/wap/img/index_145.jpg'/>
                     {this.renderSearchProduct()}
                     </div>
                    <AppFooter/>
                </div>
            )
    }
}
export default connect(state=>state,dispatch=>{
    return bindActionCreators(actionCreator, dispatch)
})(Find)
