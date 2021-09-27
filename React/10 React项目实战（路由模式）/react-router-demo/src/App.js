import React, { Component } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
// import { HashRouter, Link, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import User from './pages/user'

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/about'>关于</Link></li>
            <li><Link to='/user'>会员中心</Link></li>
          </ul>
          {/* exact是精确匹配 */}
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/user' component={User} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
