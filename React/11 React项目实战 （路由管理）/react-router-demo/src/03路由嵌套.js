import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

function Color() {
    return (
        <h1>颜色</h1>
    )
}

function Yellow() {
    return (
        <h1>黄色</h1>
    )
}

function Red() {
    return (
        <h1>红色</h1>
    )
}

function Pink() {
    return (
        <h1>粉色</h1>
    )
}

export class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <ul>
                        <li><Link to='/color'>颜色</Link></li>
                        <li><Link to='/color/yellow'>黄色</Link></li>
                        <li><Link to='/color/red'>红色</Link></li>
                        <li><Link to='/color/pink'>粉色</Link></li>
                    </ul>
                    <Switch>
                        <Route path='/color' exact component={Color}/>
                        <Route path='/color/yellow' component={Yellow}/>
                        <Route path='/color/red' component={Red}/>
                        <Route path='/color/pink' component={Pink}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
