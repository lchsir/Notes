import React, { Component } from 'react'

export class Root extends Component {
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
                {/* 
                    此时父组件中的state或者props发生更新的时候,无论子组件中的props或者state更不更新,都会触发子组件的更新
                    会导致很多没必要的render
                */}
            </div>
        )
    }
}

class Main extends Component {
    // 根据最新的props和state去判断是否需要调用render方法
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.num !== nextProps.num) {
            return true
        }
        return false
    }

    render() {
        console.log('Main组件渲染了')
        return (
            <div>
                Main
            </div>
        )
    }
}

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.num !== nextProps.num) {
            return true
        }
        return false
    }
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
