const redux = require('redux')
// redux有三大块：store、action、reducer

const initState = {
    count: 0
}

// 3、reducer是连接store和action,在默认的情况下state是没有值，因此我们需要把initState传过来
const reducer = (state=initState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'DECREMENT':
            return {...state, count: state.count - 1}
        case 'ADD_NUMBER':
            return {...state, count: state.count + action.num}
        case 'SUB_NUMBER':
            return {...state, count: state.count - action.num}
        default:
            return state
    }
}

// 1、store保存状态,创建一个对象即可
const store = redux.createStore(reducer)

// 2、action用来修改store
const action1 = { type: 'INCREMENT' }
const action2 = { type: 'DECREMENT' }
const action3 = { type: 'ADD_NUMBER', num: 10 }
const action4 = { type: 'SUB_NUMBER', num: 15 }

// 5、在派发之前监听store的变化
store.subscribe(() => {
    // console.log('store被修改了')
    console.log(`count:${store.getState().count}`)
})

// 4、派发action
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)
