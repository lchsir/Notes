// 作用域：

// 全局作用域
// !!!特点：不会被销毁，会一直存放在内存中
var a = 10
function fun() {
  console.log(a)
}
fun()

// 局部作用域
// !!!特点：存在生命周期，函数执行完以后，变量就被回收了
function fun() {
  var a = 1
  console.log(a)
}
fun()