import React, { Component } from 'react'
// 在合成事件中setState的异步的，这里的异步并不是说是内部的异步代码实现的
export class App extends Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div>
                <h2>react</h2>
                <button onClick={this.click}>点击</button>
            </div>
        )
    }
    click = () => {
        this.setState({ count: 1 })
        console.log(this.state.count)
    }
}

export default App
