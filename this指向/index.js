
// this定义：只能在函数内部使用
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


// 改变this的指向apply、call、bind

// apply、call 
// !!! a.apply(b)  // 将a中的成员放到b中，this直接指向b
function o1(name, color) {
  this.name = name
  this.color = color
}
var a1 = new o1('ssa', 'red')
var o2 = {};
// 需求：o2想调用o1里边的东西
// o1对象在o2中执行，此时o1 指向 02
o1.apply(o2, ['o2', 'o2'])
o1.call(o2, 'o2', 'o2')
o2.name

// !!!注: bind指向发生变化后，就不能再改回去了
var num = 10;
function test() {
 return this.num
}

var obj = {
  num: 5,
  fun: test()
}

var obj2 = {
  num: 999,
  fun: test()
}

var x2 = test.bind(obj) // x2() = 5, this的指向变更为obj, this.num = obj.num
var x2 = test.bind(obj2) // x2() = 999, this的指向变更为obj2, this.num = obj2.num
x2();
console.log(x2.call(obj2)) // 绑定之后是不能再改变this的指向的


// !!! 自执行函数内部的this指向window
