import React, { Component } from 'react'
import { BrowserRouter, NavLink, Link, Route, Switch, withRouter } from 'react-router-dom'

// 总结 TODO:
// About组件中嵌套了Home组件，如果Home组件中要使用路由信息，必须使用withRouter

function Home(a) {
    console.log(a)  // 一个空对象，如果不使用高阶组件
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
            {/* 使用高阶组件,这样第5行就有history */}
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
                        <li><Link to='/user'>用户中心</Link></li>
                        {/* NavLink可以设置样式 */}
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
