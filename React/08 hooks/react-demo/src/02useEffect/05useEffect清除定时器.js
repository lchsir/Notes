import React, { useState, useEffect } from 'react'

export default function App() {
    const [state, setstate] = useState(0)

    const timer = useEffect(() => {
        setInterval(() => {
            setstate((prev) => prev + 1)
        }, 500)
        // 清除定时器
        return () => clearInterval(timer)
    }, [])

    return (
        <div>
            <h1>{state}</h1>
        </div>
    )
}
