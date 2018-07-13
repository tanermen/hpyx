import React, { Component } from 'react'

class MineClassify extends Component{
    renderMineClassify(){
        let {mineclassify} = this.props
        return mineclassify.map(item => <MineClassifyItems data={item} key={item.id}/>)
    }
    render(){
        return(
                <div className='mine-classify'>
                {this.renderMineClassify()}    
                </div>
            )
    }
}
const MineClassifyItems = (props) => {
    let { image, title} = props.data
    return (
        <a className="mine-classify-item">
            <img src={ image }/>
            <span>{ title }</span>
        </a>
    )
}
export default MineClassify
