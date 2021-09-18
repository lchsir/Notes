import React, { Component } from 'react'

class People extends Component {
    render() {
        let { name, age, hobby } = this.props
        return (
            <div>
                <h1>我是People组件</h1>
                <p>我的名字是：{name},我的年龄是：{age}</p>
                <p>我的爱好是：{hobby}</p>
            </div>
        )
    }
}

class Boy extends Component {
    render() {
        let { name, age, hobby } = this.props
        return (
            <div>
                <h1>我是Boy组件</h1>
                <p>我的名字是：{name},我的年龄是：{age}</p>
                <p>我的爱好是：{hobby}</p>
            </div>
        )
    }
}

// 需求：给每个组件多传一些props
// 用高阶组件实现
const PropsComponent = (Component) => {
    // 返回一个函数式组件
    const newComponent = (props) => {
        return <Component {...props} age='15' hobby='吃饭睡觉打豆豆' />
    }
    return newComponent
}

const PropsPeople = PropsComponent(People)
const PropsBoy = PropsComponent(Boy)

export class APP extends Component {
    render() {
        return (
            <div>
                <People name='张三' age='15' hobby='吃饭睡觉打豆豆' />
                <Boy name='李四' age='15' hobby='吃饭睡觉打豆豆'/>
                {/* 通过高阶组件去增强props */}
                <PropsPeople name='casey'/>
                <PropsBoy name='刘家小生'/>
            </div>
        )
    }
}

export default APP
