import React, { Component } from 'react'

class Categories extends Component {   
    renderClassifyItems () {
        let { category,changeCategory,gc_id} = this.props
        return category.map(item => (
            <li onClick = {changeCategory.bind(null, item.gc_id,item.image)} 
            key = {item.gc_id}
            className={ (gc_id === item.gc_id ? 'active' : '') }
            >{item.gc_name}</li>))        
    }
    render () {
        return (
            <ul className="total-categories">
                { this.renderClassifyItems() }
            </ul>
        )
    }
}


Categories.defaultProps = {
    category: [
        { id: 1, gc_name: '水果', gc_id: 1947},
        { id: 2, gc_name: '蔬菜', gc_id: 1957},
        { id: 3, gc_name: '粮油调味', gc_id: 1962,},
        { id: 4, gc_name: '禽肉蛋品', gc_id: 1959 },
        { id: 5, gc_name: '海鲜水产', gc_id: 3 },
        { id: 6, gc_name: '酒水奶饮', gc_id: 825 },
        { id: 7, gc_name: '进口商品', gc_id: 888 },
        { id: 8, gc_name: '居家日用', gc_id: 1727 },
        { id: 9, gc_name: '本地服务', gc_id: 1975,},
        { id: 10, gc_name: '休闲食品', gc_id: 2107 },
        { id: 11, gc_name: '美妆护理', gc_id: 2122}
    ]
}
export default Categories
