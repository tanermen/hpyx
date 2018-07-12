import React, { Component } from 'react'

class ShowMoreProduct extends Component{
    constructor(props){
        super(props)
        this.state = {
            MoreProducts:[]
        }
    }
    getMoreProduct(curpage,isLoading,changeIsLoading){//获取数据
     // let { curpage,isLoading } = this.props
        changeIsLoading()
        // console.log(curpage,'ni',isLoading)
        this.Get({
            url:'mobile//index.php',
            data:{
                act: 'goods',
                op: 'goods_list',
                page: '10',
                curpage: curpage ,
                key: '1'
            }
        }).then(res=>{
            this.isLoading = false
         // console.log(res.data.datas.goods_list,'hehe')
            this.setState({MoreProducts:res.data.datas.goods_list})
            changeIsLoading()
        })
    }
    componentDidMount(){
        let { curpage,isLoading,changeIsLoading} = this.props
        this.getMoreProduct(curpage,isLoading,changeIsLoading)
    }
    componentWillUpdate(){
         let { curpage,isLoading,changeIsLoading} = this.props
        this.getMoreProduct(curpage,isLoading,changeIsLoading)
    }
    render(){
       
        return(
                <div className='more_product'>

                </div>
            )
    }
}
export default ShowMoreProduct
