import React from 'react';
import ReactDOM from 'react-dom';

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

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
