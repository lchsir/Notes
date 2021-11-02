import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
// import 'antd/dist/antd.css' // 引入antd样式
import App from './app'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<div>Loading......</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
