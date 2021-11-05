
// 第一准则是：this永远指向函数运行时所在的对象，而不是函数被创建时所在的对象。
// •	普通的函数调用，函数被谁调用，this就是谁。
// •	构造函数的话，如果不用new操作符而直接调用，那即this指向window。用new操作符生成对象实例后，this就指向了新生成的对象。
// •	匿名函数或不处于任何对象中的函数指向window 。
// •	如果是call，apply等，指定的this是谁，就是谁。
// 注意：this定义：只能在函数内部使用
// 指向规则：判断有没有调用者，如果有调用者指向调用者，没有指向window，严格模式下指向undefined
// !!! 自执行函数内部的this指向window


// 1、内置函数 setTimeout、setInterval
setTimeout(function(){
  console.log(this)    //由于内置函数中没有调用者，直接指向window
},1000)


// 2、回调函数：一个函数被作为参数传递给另外一个函数
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

// 3、构造函数
function f5(name) {
  this.name = name
  console.log(this)  // 如果没有调用者，指向window
  this.action = function() {
    console.log(this) // 为this指向的是新创建的对象，而不是构造函数本身
  }
}
// f5()
var f5 = new f5('amy')
f5.action()


// ------------ 改变this的指向apply、call、bind  ------------

// a.apply(b)  // 将a中的成员放到b中，this直接指向b
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
o2.name // o2

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
console.log(x2.call(obj2)) // 注意：绑定之后是不能再改变this的指向的