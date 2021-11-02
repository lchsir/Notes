import store from '../store'
import React, { Component } from 'react'
import { addAction, decAction } from '../store/action'

export class Wxpay extends Component {
    state = {
        money: store.getState().money
    }

    componentDidMount() {
        // 订阅store的修改
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                money: store.getState().money
            })
        })
    }

    componentWillUnmount() {
        // 取消 订阅
        this.unsubscribe()
    }

    render() {
        return (
            <div>
                <h1>微信</h1>
                <h1>余额：{this.state.money}</h1>
                <button onClick={e => this.decrement()}>支付 1</button>
                <button onClick={e => this.makeMoney(100)}>收钱 100</button>
            </div>
        )
    }
    makeMoney(num) {
        store.dispatch(addAction(num))
    }
    decrement() {
        store.dispatch(decAction())
    }
}

export default Wxpay
