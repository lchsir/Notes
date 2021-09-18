import React, { Component } from 'react'

export class Login extends Component {
    state = {
        username: ''
    }
    // 获取username,假装是使用axios,所以在生命周期中获取
    componentDidMount() {
        const username = 'admin' // 通过接口获取到的
        this.setState({username})
    }

    render() {
        return (
            <div>
                <h1>login</h1>
                <p>{this.state.username}登录了</p>
            </div>
        )
    }
}

export default Login
