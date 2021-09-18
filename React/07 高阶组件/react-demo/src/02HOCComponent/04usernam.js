import React, { Component } from 'react'

// 高阶组件也是一个函数，它的参数是一个组件，返回的是一个新的组件
function PropUsername(WrapComponent) {
    class NewComponent extends Component {
        state = {
            username: ''
        }

        // 获取username,假装是使用axios,所以在生命周期中获取
        componentDidMount() {
            const username = 'admin-casey' // 通过接口获取到的
            this.setState({username})
        }

        render() {
            return <WrapComponent username={this.state.username} />
        }
    }
    return NewComponent
}

export default PropUsername
