import React, { createRef, Component } from 'react'

export class App extends Component {
    // constructor() {
    //     super()
    //     this.headerRefs = createRef()
    // }
    // 也可以这样写
    headerRefs = createRef()
    userRefs = createRef()
    inputRefs = createRef()

    render() {
        return (
            <div>
                <Header ref={this.headerRefs} />
                <p ref={this.userRefs}>user</p>
                <input type='text' ref={this.inputRefs} />
                <button onClick={this.changeText}>点击</button>
            </div>
        )
    }
    changeText = () => {
        console.log(this.headerRefs.current.state.name)
        console.log(this.headerRefs.current)
        console.log(this.inputRefs.current.value)
        this.userRefs.current.innerHTML = this.inputRefs.current.value
    }
}

class Header extends Component {
    state = {
        name: 'casey'
    }
    render() {
        return (
            <div>
                header component
            </div>
        )
    }
}

export default App
