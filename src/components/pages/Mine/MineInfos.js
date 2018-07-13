import React,{Component} from 'react'

class MineInfos extends Component{
    renderInfo(){
        let { info } =this.props
        if(info){
            return (
                <div className="single-info">
                    <h3 className="info-left">
                        <img src={info.leftImg}/>
                        {info.left}
                    </h3> 
                   <h3 className="info-right">
                       {info.right}
                       <img src="http://mall.fjncjy.com/wap/images/arrow_right_b.png"/>
                   </h3> 
               </div>
                )
        }
        return ""
    }
    render(){
        return(
            <div className="mine-info">
               {this.renderInfo()}
            </div>
            )
    }
}

export default MineInfos
