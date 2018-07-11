import React,{Component} from 'react'
import HomeHeader from './HomeHeader'
import HomeBanner from './HomeBanner'
import HomeClassify from './HomeClassify'
import ClassifyHotProduct from '../commons/ClassifyHotProduct/ClassifyHotProduct'
import './index.scss'
class Home extends Component{
     constructor (props) {
        super(props)
        this.state = {
            gc_id:0
        }
        this.changeBygc_id = this.changeBygc_id.bind(this)
    }
  changeBygc_id(gc_id){
     this.setState({gc_id})
     this.getClassifyProdouctList()
  }
  getClassifyProdouctList(gc_id){
   this.Get({
    url:'mobile//index.php',
    data:{
        act: 'goods',
        op: 'goods_list',
        page: '10',
        curpage: '1',
        key: '1',
        is_category: '1',
        gc_id: gc_id
}
   })
  }
  componentDidMount(){
    let { gc_id } =this.state
    this.getClassifyProdouctList(gc_id)
  }
    render(){
        return (
            <div className='home'>
               <HomeHeader />
                <HomeBanner/>
                <HomeClassify/>
                <ClassifyHotProduct
                gc_id='1947'
                big_img_url='http://mall.fjncjy.com/wap/images/shuiguo/shuiguo1.png'/>
                <ClassifyHotProduct
                gc_id='1957'
                big_img_url='http://mall.fjncjy.com/wap/images/shucai/shucai1.png'/>
                 <ClassifyHotProduct
                gc_id='3'
                big_img_url='http://mall.fjncjy.com/wap/images/haixian/haixian1.png'/>
                 <ClassifyHotProduct
                gc_id='1959'
                big_img_url='http://mall.fjncjy.com/wap/images/qinlei/qinlei1.png'/>
                 <ClassifyHotProduct
                gc_id='1962'
                big_img_url='http://mall.fjncjy.com/wap/images/liangyou/liangyou1.png'/>
                 <ClassifyHotProduct
                gc_id='825'
                big_img_url='http://mall.fjncjy.com/wap/images/jiushui/jiushui1.png'/>
                 <ClassifyHotProduct
                gc_id='2107'
                big_img_url='http://mall.fjncjy.com/wap/images/shipin/shipin1.png'/>
                 <ClassifyHotProduct
                gc_id='2122'
                big_img_url='http://mall.fjncjy.com/wap/images/meizhuang/meizhuang1.png'/>
                 <ClassifyHotProduct
                gc_id='888'
                big_img_url='http://mall.fjncjy.com/wap/img/jksp.png'/>
            </div>

            ) 
    }
}

export default Home
