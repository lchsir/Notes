import React, { useReducer } from 'react'

// 外边定义初始值
const initState = { count: 0 }

// 处理函数
function reducer(state, action) {
  switch(action.type) {
    case 'add':
      return {count: state.count + 1}
    case 'sub':
      return {count: state.count - 1}
    default: 
      throw new Error()
  }
} 

export default function App() {
  // useReducer接受两个参数
  // 第一个参数reducer函数，第二个参数是初始值
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type: 'add'})}>加1</button>
      <button onClick={()=>dispatch({type: 'sub'})}>减1</button>
    </div>
  )
}

/**
 * dispatch 是一个可以发布事件来更新state
 * 
 */