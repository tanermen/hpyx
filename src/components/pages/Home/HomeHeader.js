import React,{Component} from 'react'
import Swiper from 'swiper'

class HomeHeader extends Component{
    constructor(props){
        super(props)
        this.state = {
            find_nav:[
                {id:1,title:'首页',gc_id:'0'},
                {id:2,title:'美味水果', gc_id:'1947'},
                {id:3,title:'新鲜蔬菜', gc_id:'1957'},
                {id:4,title:'海鲜水产', gc_id:'3'},
                {id:5,title:'禽肉蛋类', gc_id:'1959'},
                {id:6,title:'粮油调味', gc_id:'1962'},
                {id:7,title:'酒水奶饮', gc_id:'825'},
                {id:8,title:'休闲食品', gc_id:'2107'},
                {id:9,title:'美妆护理', gc_id:'2122'},
                {id:10,title:'进口商品', gc_id:'888'}
            ]
        }
    }

    renderFindNav(){
        let { find_nav } =this.state
        let { changeBygc_id,gc_id }=this.props
      return  find_nav.map( item => <div onClick ={changeBygc_id.bind(null,item.gc_id)} 
                    className={'swiper-slide ' + (gc_id===item.gc_id ? 'active' : '')}
                key={item.id}>{item.title}</div>)
    }
    render(){
        return (
            <div className='home_header'>
                <div className='home_header_top'>
                    <div className='search'>
                         <i className='fa fa-search'></i>
                    请输入商品信息
                     </div>
                    <i className='fa fa-commenting-o header_right'></i>
                </div>
               <div className='home_header_bottom'>
                <div  ref = { el => this.nav = el } className='swiper-container findNavs'>
                    <div className="swiper-wrapper">
                         {this.renderFindNav()}
                    </div>
                </div>
               </div> 
            </div>
            )
    }
    componentDidMount(){
        new Swiper(this.nav,{
             freeMode: true,
            slidesPerView: 'auto',
            freeModeSticky: true
        })
    }
}

export default HomeHeader
