

import React, { Component } from 'react'

import './index.scss'
/*
    props:
        @distance: 距离多少就算已经到底部了
*/
class AppListView extends Component {
    constructor (props) {
        super(props)

        this.listenScroll = this.listenScroll.bind(this)
    }
    render () {
        let { hasMore } = this.props
        return (
            <div className="app-list-view">
               { this.props.children }
               {
                   hasMore?(<div className="info-box loading">
                        正在加载....
                    </div>): (<div className="info-box">
                            没有更多数据了...
                    </div>)
                }
            </div>
        )
    }
    listenScroll (e) {
        let { distance, scrollBottom,hasMore } = this.props

        if ( !hasMore ) return false;

        //页面的高度 = 设备的高度 + 已经滚动的高度 + distance
        //let bodyHeight = document.documentElement.offsetHeight

        //已经滚动的距离
       // let scrollHeight = document.documentElement.scrollTop

       // if ( bodyHeight < this.clientHeight + scrollHeight + (distance * 2) ) {
         //   scrollBottom()
       // }
         
         //真实内容的高度
        let pageHeight = Math.max(document.documentElement.scrollHeight,document.documentElement.offsetHeight);
        //视窗的高度
        let viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
        //隐藏的高度
        let scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
       
        if(pageHeight - viewportHeight - scrollHeight < distance){//如果满足触发条件，执行
         scrollBottom()
        }


    }
    componentDidMount () {
        //设备的高度
        this.clientHeight = document.documentElement.clientHeight
        window.addEventListener('scroll', this.listenScroll)
    }

    componentWillUnmount () {
        window.removeEventListener('scroll',this.listenScroll)
    }

}

export default AppListView


