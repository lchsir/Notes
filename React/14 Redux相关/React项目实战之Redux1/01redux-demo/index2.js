/* 
    纯函数
    1、函数的返回结果只依赖于它的参数
    2、函数在执行的过程中是没有副作用的
*/

const a = 2
const fn = (b) => a + b
// console.log(fn(2))
// fn不是纯函数

const b = 3
const add = (a, b) => a + b
// console.log(add(1, 2))
// add 才是纯函数

// 这个函数虽然看起来是依赖自己的参数,但是在执行的过程中修改了count对象中x属性的值
// 所以它是一个有副作用的函数,所以不是一个纯函数
const ffn = (obj, b) => {
    obj.x = 2
    return obj.x + b
}
const count = {x: 1}
console.log(ffn(count, 3))

// 改写成这个就是一个纯函数
const fnfn = (obj, b) => {
    return obj.x + b
}
const con = {x: 1}
console.log(fnfn(con, 3))
