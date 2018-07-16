import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//zepto
import $ from 'webpack-zepto'
// antd-mobile
import 'antd-mobile/dist/antd-mobile.css'; 
// 全局引入rem
import './modules/rem.js'

//全局样式引入
import './stylesheets/main.scss'

// 全局配置
import './modules/config.js'

// 全局引入Post Get 方法
import './modules/request'

// 引入swiper
import 'swiper/dist/css/swiper.min.css'

// 引入router
import{
    BrowserRouter as Router
} from 'react-router-dom'

//引入store
import {Provider} from 'react-redux'
import store from './store'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// cookie
import Cookies from 'react-cookies'
Component.prototype.Cookies = Cookies

ReactDOM.render(
    <Provider store={store}>
    <Router><App /></Router>
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();
