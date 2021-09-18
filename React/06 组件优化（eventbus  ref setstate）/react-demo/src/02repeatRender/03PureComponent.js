import React, { PureComponent } from 'react'

export class Root extends PureComponent {
    state = {
        num: 0
    }
    add = () => {
        this.setState({
            num: this.state.num + 1
        })
    }
    render() {
        console.log('Root组件渲染了')
        return (
            <div>
                Root
                <Header/>
                <Main/>
                <Footer/>
                <p>{this.state.num}</p>
                <button onClick={this.add}>add</button>
            </div>
        )
    }
}

class Main extends PureComponent {
    render() {
        console.log('Main组件渲染了')
        return (
            <div>
                Main
            </div>
        )
    }
}

class Header extends PureComponent {
    render() {
        console.log('Header组件渲染了')
        return (
            <div>
                Header
            </div>
        )
    }
}

function Footer() {
    console.log('Footer组件渲染了')
    return (
        <div>
            Footer
        </div>
    )
}

export default Root
