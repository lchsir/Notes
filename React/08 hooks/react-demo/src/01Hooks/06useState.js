import React, { useState } from 'react'

export default function App() {
    const [state, setstate] = useState(() => 100)
    /* 
        如果说,新的state需要通过之前的state去进行计算的话
        那么我们可以使用函数传递给setState,这个函数就是接收之前的state,并且返回一个更新的值
    */
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => {
                setstate(prve => prve + 100)
            }}>+ 100</button>
        </div>
    )
}
