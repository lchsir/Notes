import React, { Component } from 'react'

// 使用生命周期方法把p标签的内容实时的展示在title中
export class App extends Component {
    state = {
        count: 0
    }

    componentDidMount() {
        // 此时标题改了,但是次数不会累加,因为在这个生命周期中组件第一次渲染完成,DOM节点已经生成了
        document.title = `你点击了${this.state.count}次`
    }

    // 更新了组件,这样就能实现次数的累加
    componentDidUpdate() {
        document.title = `你点击了${this.state.count}次`
    }

    render() {
        return (
            <div>
                <p>你点击了：{this.state.count}次</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>点击</button>
            </div>
        )
    }
}

export default App
