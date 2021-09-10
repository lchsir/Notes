import React, { Component } from 'react'

export class App extends Component {
    render() {
        return (
            <div>
                <input type='text' ref='haha' />
                <button onClick={this.getText}>点击</button>
                <p ref='user'>user</p>
            </div>
        )
    }
    getText = () => {
        console.log(this.refs.haha.value)

        const user = this.refs.haha.value
        this.refs.user.innerHTML = user
    }
}

export default App
