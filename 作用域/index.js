// 作用域：在函数中维护，表示变量或函数起作用的区域，指代了它们在什么样的上下文中执行（上下文执行环境）
// 执行上下文：当前代码的运行环境（当前js被解析和执行是存在的环境）


// 1、全局作用域
// !!!特点：不会被销毁，会一直存放在内存中
var a = 10
function fun() {
  console.log(a)
}
fun()




// 2、局部（函数）作用域
// !!!特点：存在生命周期，函数执行完以后，变量就被回收了
function fun() {
  var a = 1
  console.log(a)
}
fun()