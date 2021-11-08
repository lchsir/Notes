import React, { Component } from 'react'

export class App extends Component {
    state = {
        students: [
            { id: 1, name: '小红', age: 12 },
            { id: 2, name: '小蓝', age: 13 },
            { id: 3, name: '小明', age: 14 }
        ]
    }

    render() {
        return (
            <div>
                <h2>学生列表</h2>
                <ul>
                    {
                        this.state.students.map((item) => {
                            return (
                                <li key={item.id}>
                                    <span>姓名：{item.name}</span>
                                    <span>年龄：{item.age}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.insertData}>增加数据</button>
                <button onClick={this.insertDataNice}>增加数据推荐方法</button>
            </div>
        )
    }

    insertData = () => {
        let obj = { id: 4, name: 'casey', age: 18 }
        this.state.students.push(obj)
        this.setState({students: this.state.students})
    }

    // shouldComponentUpdate里会去对比nextState.students和this.state.students，这个时候它们的地址是一样的
    // 就会直接return false导致不再更新渲染
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.students !== this.state.students) {
            return true
        }
        return false
    }

    insertDataNice = () => {
        // 如果非要改变数据的数据内容，那么就拷贝一份数组再操作
        let newStudents = [...this.state.students]
        let obj = { id: 4, name: 'casey', age: 18 }
        newStudents.push(obj)
        this.setState({students: newStudents})
    }
}

export default App
