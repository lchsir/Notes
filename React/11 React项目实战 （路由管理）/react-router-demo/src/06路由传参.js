import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import querystring from 'query-string'

class User extends Component {
    render() {
        console.log(this.props)
        return <h2>用户id：{this.props.match.params.id}</h2>
    }
}

class UserInfo extends Component {
    render() {
        return <h2>用户姓名：  ---用户年领：</h2>
    }
}

class UserDetail extends Component {
    render() {
        console.log(this.props)
        console.log(querystring.parse(this.props.location.search))
        
        // 1、接受【对象】形式的参数
        let { name, age } = this.props.location.state
        // 2、接受【字符串】形式的参数 -- querystring
        let { name, age } = querystring.parse(this.props.location.search)
        return <div>
            <h2>用户详情</h2>
            <h2>用户姓名： {name} ---用户年领：{age}</h2>
        </div>
    }
}

export class APP extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <ul>
                        <li><Link to='/user/:id'>用户中心</Link></li>
                        <li><Link to='/userinfo'>用户信息</Link></li>
                        <li><Link to={
                            {
                                pathname: '/userdetail', // 跳转的路径
                                // 1、对象形式：
                                state: {name: 'casey', age: 18},
                                // 2、字符串形式
                                search: 'name=hahaha&age=18'
                            }
                        }>用户详情</Link></li>
                    </ul>
                    <Switch>
                        <Route path='/user/:id' exact component={User}/>
                        <Route path='/userinfo' component={UserInfo}/>
                        <Route path='/userdetail' component={UserDetail}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default APP
