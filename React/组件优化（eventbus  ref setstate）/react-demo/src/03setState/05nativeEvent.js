import React, { Component } from 'react'
// 在原生事件里是同步
export class App extends Component {
    state = {
        count: 0
    }

    componentDidMount() {
        document.querySelector('button').addEventListener(
            'click',
            () => {
                this.click()
            },
            false
        )
    }

    click() {
        this.setState({count: 1})
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <h2>react</h2>
                <button>按钮</button>
            </div>
        )
    }
}

export default App
