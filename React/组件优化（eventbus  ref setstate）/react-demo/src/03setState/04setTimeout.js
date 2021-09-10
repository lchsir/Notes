import React, { Component } from 'react'
// 在setTimeout是同步的
export class App extends Component {
    state = {
        count: 0
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({count: 1})
            console.log(this.state.count)
        }, 500)
    }
    render() {
        return (
            <div>
                <h2>react</h2>
            </div>
        )
    }
}

export default App
