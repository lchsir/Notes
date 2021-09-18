import React, { Component } from 'react'

// 登录组件
class Login extends Component {
    render() {
        return (
            <div>
                <h1>登录页面</h1>
            </div>
        )
    }
}

// 管理员组件
class Admin extends Component {
    render() {
        return (
            <div>
                <h1>管理员页面</h1>
            </div>
        )
    }
}

// 高阶组件去实现登录鉴权
function AuthComponent(Component1, Component2) {
    const NewComp = (props) => {
        const { isLogin } = props
        if (isLogin) {
            return <Component1 {...props} />
        } else {
            return <Component2 {...props} />
        }
    }
    return NewComp
}

const AuthAdmin = AuthComponent(Admin, Login)

export class App extends Component {
    state = {
        isLogin: true
    }

    render() {
        return (
            <div>
                <AuthAdmin isLogin={this.state.isLogin}/>
                {this.state.isLogin ? <Admin/> : <Login/>}
                <button onClick={this.check}>{this.state.isLogin ? '退出' : '请登录'}</button>
            </div>
        )
    }
    check = () => {
        this.setState({isLogin: !this.state.isLogin})
    }
}

export default App
// 高阶函数传函数返回新函数，高阶组件传组件返新组件