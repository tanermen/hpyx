import React,{Component} from 'react'
import HomeHeader from './HomeHeader'
import HomeBanner from './HomeBanner'
import HomeClassify from './HomeClassify'
import ClassifyHotProduct from '../../commons/ClassifyHotProduct'
import AppListView from '../../commons/AppListView'
import ShowMoreProduct from '../../commons/ShowMoreProduct'
import AppFooter from '../../commons/AppFooter'
import './index.scss'
class Home extends Component{
     constructor (props) {
        super(props)
        this.state = {
            gc_id:'0',
            isShowIndexPage:true
        }
        this.curpage = 1;
        // this.isLoading = false;
        this.changeBygc_id = this.changeBygc_id.bind(this)
        this.listenScrollBottom = this.listenScrollBottom.bind(this)
        this.changeIsLoading = this.changeIsLoading.bind(this)
    }
    isShowIndexPage(gc_id){
    //let { gc_id } = this.state
      if(gc_id!=='0') {
        this.setState({isShowIndexPage:false})

      }else{
        this.setState({isShowIndexPage:true})
      }
    }
  changeBygc_id(gc_id){//点击时改变gc_id，改变是否显示首页信息（isShowIndexPage）的状态
      this.setState({gc_id})
     this.isShowIndexPage(gc_id)
  }
  
  listenScrollBottom(){
    // if ( !this.isLoading ) {
    //     return false;
    // }else{
    //    return  this.curpage ++;
    // }  
    //  console.log(this.curpage,'this.curpage')
    if (this.isLoading) return false;
      this.curpage ++;
      //console.log(this.curpage,'this.curpage')
  }
  changeIsLoading(){
    this.isLoading = ! this.isLoading
  }
    render(){
        let { gc_id,isShowIndexPage } = this.state
        let {curpage,isLoading} = this
       // console.log(curpage,'curpage')
        //console.log(isShowIndexPage,gc_id)
        return (
            <div className='home'>
               <HomeHeader changeBygc_id={this.changeBygc_id}  gc_id={gc_id}/>
                {
                    isShowIndexPage?
                    (
                    <div>
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
                <AppListView
                distance = { 50 }
                scrollBottom = { this.listenScrollBottom }
              

                   >
                   <ShowMoreProduct 
                   curpage={curpage} 
                   isLoading={isLoading}
                   changeIsLoading = {this.changeIsLoading}
                   />
                </AppListView>   
                  </div>  
                  )
                    : 
                   (
                    <ClassifyHotProduct
                    gc_id={gc_id}
                    big_img_url='http://mall.fjncjy.com/wap/img/index_14.jpg'
                    isPadding= {true}
                    />
                    )
                
                }
                <AppFooter/>
            </div>

            ) 
    }
}

export default Home
