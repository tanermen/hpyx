import React,{ Component } from "react"

class CategoryDetail extends Component{
    renderDetailItems () {//渲染分类item的
        let { details} = this.props
         return details.map((item) => <DetailItems data = { item} key = {item.gc_id}/>)        
    }
   renderTitleImage(){
        let { image } = this.props
        return <img src={image.image}/>
    }
    render(){
        return(
            <div className="category">
                <div className="category-title">
                    { this.renderTitleImage() }                    
                </div>
                <div className="category-detail">
                    { this.renderDetailItems() }
                </div>
            </div>
        )
    }
}
const DetailItems = (props) => {
    let {image,gc_name} = props.data
    return (
            <dl>
                <dt><img src={image}/></dt>
                <dd>{gc_name}</dd>
            </dl>
    )
}

export default CategoryDetail
