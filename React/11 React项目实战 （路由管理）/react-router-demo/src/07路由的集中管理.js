import React, { Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './07router/index'

export class APP extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <ul>
                        <li><Link to='/home'>首页</Link></li>
                        <li><Link to='/about'>关于</Link></li>
                        <li><Link to='/about/son'>关于儿子</Link></li>
                        <li><Link to='/user'>会员中心</Link></li>
                    </ul>

                    {renderRoutes(routes)}
                </BrowserRouter>
            </div>
        )
    }
}

export default APP
