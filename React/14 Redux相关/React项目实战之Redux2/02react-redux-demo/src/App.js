import React, { Component } from 'react'
import Wxpay from './pages/wxpay'
import Alipay from './pages/alipay'
import User from './pages/user'
import Home from './pages/home'

export class App extends Component {
  state = {
    name: 'lili',
    age: 12,
    sex: '女'
  }

  render() {
    return (
      <div>
        <Wxpay/>
        <hr/>
        <Alipay/>
        <hr/>
        <User info={this.state}/>
        <hr/>
        <Home/>
      </div>
    )
  }
}

export default App

