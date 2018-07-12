import React,{ Component } from "react"
import "./index.scss"
import AppCommonHeader from "../commons/AppCommonHeader"
import Categories from "./Categories"
import CategoryDetail from "./CategoryDetail"

class Classify extends Component{
    constructor (props) {
        super(props) 
        this.state = {
            gc_id : 1947,
            details:[],
            image : {}
        }
        this.changeCategory = this.changeCategory.bind(this)
    }
    getDetails(_gc_id){
        let {gc_id} = this.state
        this.Get({
            url: 'mobile/index.php?',
            data :{
                act: "goods_class",
                op: "get_child_all",
                gc_id : _gc_id || gc_id
            }
        }).then(res => {
            this.setState({
                details : res.data.datas.class_list,
                image : res.data.datas.myclass
            })
        })
    }
    changeCategory(gc_id){
        this.setState({gc_id})
        this.getDetails(gc_id)
    }
    componentDidMount () {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        this.getDetails()
    }
    render(){
        let {categories,details,gc_id,image} = this.state
        return(
            <div className="app-classify">
                <AppCommonHeader renderTitle={true}/>
                <div className="classifies">
                    <Categories changeCategory = {this.changeCategory} gc_id={ gc_id }/>
                    <CategoryDetail details={details}  image={image}/>
                </div>
            </div>
        )
    }
}



export default Classify
