import React, { useReducer } from 'react'

export default function App() {
  // useReducer接受两个参数
  // 第一个参数reducer函数，第二个参数是初始值
  const [state, dispatch] = useReducer((state, action)=>{
    switch(action) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      default: 
        return state
    }
  }, 0)

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>dispatch('add')}>加1</button>
      <button onClick={()=>dispatch('sub')}>减1</button>
    </div>
  )
}

/**
 * dispatch 是一个可以发布事件来更新state
 * 
 */