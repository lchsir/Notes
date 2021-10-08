
import React, { Component } from 'react';
import { Menu } from 'antd';
import menuConfig from '../../config/menu.js' // 引入菜单数据
import './index.scss'
import { Link } from 'react-router-dom'
const { SubMenu } = Menu;

class Index extends Component {
    state = {
        menuItem: ''
    }
    componentDidMount() {
        // console.log(menuConfig)
        let menuItem = this.getMenuItem(menuConfig)
        this.setState({menuItem})
    }

    // 递归写法（递归的本质：自己调用自己）
    // 在用递归的时候一定要给判断或者结束的条件，否则会导致栈溢出的错误
    getMenuItem = (data) => {
        return data.map(item => {
            if(item.children) {
                return <SubMenu title={item.title} key={item.key}>
                    {this.getMenuItem(item.children)}
                </SubMenu>
            } else {
                return <Menu.Item title={item.title} key={item.key}>
                    <Link to={item.key}>{item.title}</Link>
                </Menu.Item>
            }
        })
    }

    render() {
        return (
            <div className='nav-left'>
                <h1>金渡管理系统</h1>
                <Menu
                    theme='dark'
                    mode="inline">
                    {this.state.menuItem}
                </Menu>
            </div>
        );
    }
}

export default Index
