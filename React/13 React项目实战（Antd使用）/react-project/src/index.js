import React from 'react'
import ReactDOM from 'react-dom'
// import 'antd/dist/antd.css' // 引入antd样式
import App from './app'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
