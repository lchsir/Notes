import React, { Component } from 'react'

export class App extends Component {
    state = {
        msg: 'hello'
    }
    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <button onClick={this.changeText}>改变文本</button>
            </div>
        )
    }
    changeText = () => {
        this.setState({msg: 'casey'})
    }
}

export default App
