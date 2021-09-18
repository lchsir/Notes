import React, { useState } from 'react'

/* 
useState本身是一个函数,来自于react,有参数和返回值
调用useState返回的是一个数组
数组第一个元素是：当前的状态state
第二个元素：是一个函数，这个函数的作用就是去修改和设置我们的状态
*/

// 函数式组件添加一个状态
export default function App() {
    // 调用一个函数，传入参数,1就是设置的初始状态
    const arr = useState(1)
    console.log(arr) // [1, f]
    const state = arr[0]
    const setState = arr[1]
    return (
        <div>
            <h1>Hooks</h1>
            <p>{state}</p>
            <button onClick={() => setState(state + 1)}>点击</button>
        </div>
    )
}
