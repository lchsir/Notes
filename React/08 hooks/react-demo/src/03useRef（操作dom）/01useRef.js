import React, {createRef, useRef, useEffect} from 'react'

export default function App() {

  // createRef：每次重新渲染的时候都会创建一个新的ref对象
              //（配套使用：class组件中使用）

  // useRef：第一次渲染的时候创建一个对象以后，之后重新渲染的时候，如果发现这个对象已经创建过，将不再创建新的ref对象，useRef性能好一些
              //（配套使用：函数式组件中使用）

  const inputRef = createRef()
  console.log(inputRef) // {current: null} 

  const useInputRef = useRef()
  console.log(useInputRef)  // {current: undefined} 

  // TODO: 想要获取dom对象，需要在生命周期中
  // 在useEffect中就可以看到渲染完成后的input的dom对象
  useEffect(()=>{
    console.log(inputRef)
  })

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={()=>{inputRef.current.focus()}}>获取焦点</button>
    </div>
  )
}
