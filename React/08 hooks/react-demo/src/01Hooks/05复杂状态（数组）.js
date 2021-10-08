import React, { useState } from 'react'

// 给数组的每一个价格都给一个可以涨价的按钮
export default function App() {
    const [movies, setMovies] = useState([
        {id: 1, name: '你好，李焕英', price: 35},
        {id: 2, name: '哆啦A梦', price: 45},
        {id: 3, name: '守岛人', price: 50},
        {id: 4, name: '1921', price: 60},
        {id: 5, name: '中国医生', price: 55}
    ])

    function changePrice(index) {
        console.log(index)
        const movieList = [...movies]
        movieList[index].price += 1
        setMovies(movieList)
    }

    return (
        <div>
            <ul>
                {
                    movies.map((item, index) => {
                        return (
                            <li key={item.id}>
                                <span>电影名《{item.name}》</span>
                                <span>票价：{item.price}</span>
                                <button onClick={() => changePrice(index)}>涨价了 + 1</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
