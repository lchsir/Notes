import React, { useState, useEffect } from 'react'

// useEffect看作组件加载、组件更新、组件卸载的三个生命周期方法的组合
function Page() {
    const [age, setage] = useState(18)
    const [money, setmoney] = useState(1000)
    const [star, setStar] = useState(['刘亦菲', '迪丽热巴', '古力娜扎', '杨幂'])

    // useEffect(() => {
    //     console.log('我被执行了')
    // }, [])

    // TODO:
    // 1、什么都不传，任何状态更改都会执行
    // 2、传空数组[],只有在第一次渲染的时候才执行
    // 3、数组传入的是依赖项,只有数组中的状态发生了改变,才会去触发useEffect执行
    // 4、如果传入多个,多个中任意一个被改变,useEffect就会被触发执行

    // eg：
    // useEffect(() => {
    //     console.log('我被执行了')
    // }, [age, money])

    useEffect(() => {
        console.log('我被执行了') // 监控star，只有star变化了才会执行
    }, [star])

    return <div>
        <h1>Page component</h1>
        <h2>{age}</h2>
        <h2>{money}</h2>
        <button onClick={() => setage(age + 1)}>长大</button>
        <button onClick={() => setmoney(money + 1000)}>变得更有钱</button>
        <ul>
            {
                star.map((item) => {
                    return (
                        <li key={item}>{item}</li>
                    )
                })
            }
        </ul>
        <button onClick={() => {setStar([...star, '憨憨'])}}>给数组添加元素</button>

    </div>
}

export default function App() {
    const [show, setshow] = useState(true)
    return (
        <div>
            <h1>{show}</h1>
            <button onClick={() => setshow(!show)}>切换</button>
            {show && <Page/>}
        </div>
    )
}
