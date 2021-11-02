import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { decAction, addAction, getHomeAction } from '../store/action'

class Home extends PureComponent {
    componentDidMount() {
        this.props.getHomeData()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Home</h1>
                <h2>余额：{this.props.money}</h2>
                <button onClick={e => this.props.subNumber()}>支付1</button>
                <button onClick={e => this.props.makeMoney(50)}>收到50</button>
                <p>取信息</p>
                <ul>
                    {
                        this.props.userinfo.map(item => {
                            return (
                                <li key={item.key}>{item.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
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
        },
        getHomeData: () => {
            dispatch(getHomeAction)
        }
    }
}

// const foo = connect(mapStateToProps, mapDispatchProps)

// export default foo(Home)
export default connect(mapStateToProps, mapDispatchProps)(Home)
