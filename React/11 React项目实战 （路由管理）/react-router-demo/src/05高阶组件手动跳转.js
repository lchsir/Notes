import React, { Component } from 'react'
import { BrowserRouter, NavLink, Route, Switch, withRouter } from 'react-router-dom'

function Home(a) {
    console.log(a)  // 一个空对象
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => {jumpLink()}}>普通组件跳转</button>  
        </div>
    )
    function jumpLink() {
        a.history.push('/user') // 进行页面跳转
    }
}

// 使用高阶组件
const Homes = withRouter(Home)

const About = (a) => {
    const jump = () => {
        console.log(a) // 一个对象,里面包含了history、location、match
        a.history.push('/user') // 进行页面跳转
    }
    return (
        <div>
            <h2>About</h2>
            <button onClick={() => {jump()}}>跳转</button>
            {/* 使用高阶组件,这样就有history */}
            <Homes/>
        </div>
    )
}

function User(a) {
    console.log(a)
    return (
        <h1>User</h1>
    )
}

export class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <ul>
                        <li><NavLink to='/home'>首页</NavLink></li>
                        <li><NavLink activeStyle={{'color': 'yellow'}} to='/about'>关于</NavLink></li>
                        <li><NavLink to='/user'>用户中心</NavLink></li>
                    </ul>
                    <Switch>
                        <Route path='/home' exact component={Home}/>
                        <Route path='/about' exact component={About}/>
                        <Route path='/user' exact component={User}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
