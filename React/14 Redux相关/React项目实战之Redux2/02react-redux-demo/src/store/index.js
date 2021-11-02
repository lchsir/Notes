import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

// applyMiddleware是redux原生的方法,将所有的中间件组成一个数组,依次执行,返回一个store对象
const storeEnhancer = applyMiddleware(thunk)

// storeEnhancer是一个增强型的store，其实是一个高阶函数
const store = createStore(reducer, storeEnhancer)

export default store
