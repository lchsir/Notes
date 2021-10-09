import React, { useReducer } from 'react'

export default function App() {
  // useReducer接受两个参数, 第一个参数reducer函数，第二个参数是初始值
  const [state, dispatch] = useReducer((state, action)=>{
    if (action === 'add') {
      return state + 1
    }
    return state
  }, 0)

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>dispatch('add')}>加1</button>
    </div>
  )
}

/**
 * dispatch 是一个可以发布事件来更新state
 * 
 */