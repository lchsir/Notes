import React, { Component } from 'react'
// setState在生命周期是异步的
export class App extends Component {
    state = {
        count: 0
    }

    // 组件第一次渲染
    componentDidMount() {
        this.setState({ count: 1 })
        console.log(this.state.count) // 0
    }

    // 更新后立即调用
    componentDidUpdate() {
        console.log(this.state.count) // 1
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default App
