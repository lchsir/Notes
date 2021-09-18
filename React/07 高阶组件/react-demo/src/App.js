import React, { Component } from 'react'
// import Login from './02HOCComponent/01login'
// import Logout from './02HOCComponent/02logout'
// import Register from './02HOCComponent/03register'

// import Logins from './02HOCComponent/05login'
// import Logouts from './02HOCComponent/06logout'
// import Registers from './02HOCComponent/07register'

// import AddProps from './02HOCComponent/08增强props'

import LoginAuth from './03HOCComponent/01登录鉴权'

export class App extends Component {
  render() {
    return (
      <div>
        {/* <Login/>
        <Logout/>
        <Register/>
        <hr/>
        <p>下面是高阶组件方法实现的</p>
        <Logins/>
        <Logouts/>
        <Registers/> */}
        {/* <AddProps/> */}
        <p>高阶组件实现登录鉴权</p>
        <LoginAuth/>
      </div>
    )
  }
}

export default App

