import React, { useState, useEffect } from 'react'

export default function App() {
    const [state, setstate] = useState(0)

    // 这样就能实现改变titlt以及更新状态
    useEffect(() => {
        document.title = `你点击了${state}次`
    })
    /* 
        默认情况下,useEffect会在第一次渲染之后和每次更新之前都会执行
        useEffect每一次渲染(不管是第一次或者是更新)完都会去执行
    */

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => setstate(state + 1)}>点击</button>
        </div>
    )
}
