
import React, { Component } from 'react';
import { Menu } from 'antd';
import menuConfig from '../../config/menu.js' // 引入菜单数据
import './index.scss'

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

    // 直接遍历，写出菜单
    getMenuItem = (data) => {
        console.log(data)
        return data.map(item => {
            if(item.children) {
                return <SubMenu title={item.title} key={item.key}>
                    {
                        item.children.map(items => {
                            console.log(items)
                            return <Menu.Item title={items.title} key={items.key}>{items.title}</Menu.Item>
                        })
                    }
                </SubMenu>
            } else {
                return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
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
