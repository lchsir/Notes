import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

function Home() {
    console.log('1')
    return (
        <h1>Home</h1>
    )
}

const About = (props) => {
    const jump = () => {
        console.log(props) // 一个对象,里面包含了history、location、match
        props.history.push('/user') // 进行页面跳转
    }
    return (
        <div>
            <h2>About</h2>
            <button onClick={() => {jump()}}>跳转</button>  
            <Home/>
        </div>
    )
}

function User() {
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
                        <li><Link to='/home'>首页</Link></li>
                        <li><Link to='/about'>关于</Link></li>
                        <li><Link to='/user'>用户中心</Link></li>
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
