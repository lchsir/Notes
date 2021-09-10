import React, { Component } from 'react'
import eventBus from './event'

export class Footer extends Component {
    // 添加事件监听,监听从header组件发送过来的sayHello事件
    componentDidMount() {
        eventBus.addListener('sayHello', this.sayHelloListener)
    }

    // 处理事件监听
    sayHelloListener(a, b, c) {
        console.log(a, b, c)
    }

    // 移除事件监听
    componentWillUnmount() {
        eventBus.removeListener('sayHello', this.sayHelloListener)
    }
    
    render() {
        return (
            <div>
                footer page
            </div>
        )
    }
}

export default Footer
