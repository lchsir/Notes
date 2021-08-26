
// 定义：只能在函数内部使用
// 指向规则：判断有没有调用者，如果有调用者指向调用者，没有指向window，严格模式下指向undefined


// 内置函数 setTimeout、setInterval
setTimeout(function(){
  console.log(this)    //由于内置函数中没有调用者，直接指向window
},1000)


// 回调函数：一个函数被作为参数传递给另外一个函数
function f2(n) {
  console.log(n)
}
console.log(f2) // 单独引用，并没有调用，打印的是函数体
console.log(f2(100)) // 打印100


function test(callback, value) {
  callback(value)
}
test(f2, 1000)

// 另外一种写法
test(function(n){
  console.log(n)
}, 1000)






