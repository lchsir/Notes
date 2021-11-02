import React from 'react'
import { connect } from 'react-redux'
import { decAction, addAction } from '../store/action'

function User(props) {
    console.log(props)
    return (
        <div>
            <h1>现金支付</h1>
            <h2>余额：{props.money}</h2>
            <h2>用户信息</h2>
            {/* <h2>姓名：{props.info.name}</h2>
            <h2>年龄：{props.info.age}</h2>
            <h2>性别：{props.info.sex}</h2> */}
            <button onClick={e => props.subNumber()}>支付1</button>
            <button onClick={e => props.makeMoney(50)}>收到50</button>
            <h2>用户信息</h2>
            <ul>
                {
                    props.userinfo.map(item => {
                        return (
                            <li key={item.key}>{item.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

// connect本身是一个函数,返回一个高阶组件,它有两个参数,mapStateToProps和mapDispatchProps

// 用于建立组件跟store的state的映射关系,有两个参数state和props,返回一个object
// react中的state和store中的state不是同一个概念,props就是props
const mapStateToProps = (state, props) => {
    console.log(state, props)
    return {
        money: state.money,
        info: props.info, // 接收在App.js传过来的数据
        userinfo: state.userinfo
    }
}

// 用来建建立组件跟store.dispatch的映射关系
const mapDispatchProps = (dispatch) => {
    return {
        subNumber: () => {
            dispatch(decAction())
        },
        makeMoney: (num) => {
            dispatch(addAction(num))
        }
    }
}

// const foo = connect(mapStateToProps, mapDispatchProps)

// export default foo(User)
export default connect(mapStateToProps, mapDispatchProps)(User)
