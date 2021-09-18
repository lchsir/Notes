import React, { useState } from 'react'

export default function App() {
    const [age, setAge] = useState(18)
    const [money, setMoney] = useState(1000)
    const [star, setStar] = useState(['刘亦菲', '迪丽热巴', '古力娜扎', '杨幂'])
    const [obj, setObj] = useState({name: '李四', obj: '前端开发'})
    return (
        <div>
            <h1>张三同学{age}岁</h1>
            <p>他的存款：{money}元</p>
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
            <h2>{obj.name}是一名{obj.obj}</h2>
        </div>
    )
}
