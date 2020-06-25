import React from 'react';
import {render} from 'react-dom';
// 引入自定义组件
import App from './App.js'

// 使用、挂载组件
// 第一个参数是jsx语法
// 第二个参数表示组件挂载到哪里
render(
    <App></App>,
    document.getElementById('app-container')
)
