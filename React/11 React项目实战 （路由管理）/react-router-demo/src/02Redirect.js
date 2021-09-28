import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div>
                <h1>登录</h1>
                <Redirect to='/user'/>
                {/* 将登陆页面路由重定向到/user */}
            </div>
        )
    }
}

class User extends Component {
    render() {
        return (
            <div>
                <h1>登录</h1>
                
            </div>
        )
    }
}

export class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Link to='/login'>登录</Link>

                    <Route path='/login' component={Login}/>
                    <Route path='/user' component={User}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
