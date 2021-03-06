
    console.log(1)
    new Promise((resolve, reject) => {
      resolve()
      setTimeout(() => {
        new Promise((resolve, reject) => {
          console.log(2)
          resolve()
        }).then(() => {
          console.log(3)
        })
      })
    })
      .then(() => {
        console.log(4)
      })
      .then(() => {
        console.log(5)
      })

    setTimeout(() => {
      console.log(6)
    })

    new Promise((resolve, reject) => {
      console.log(7)
      resolve()
    })
      .then(() => {
        console.log(8)
      })
      .then(() => {
        console.log(9)
      })
    console.log(10)

    // 输出：
    // 1 7 10 4 8 5 9 2 3 6



class Animal {
  constructor() {
    this.name = 'cat'
  }
  speak() {
    console.log(this.name)
  }
  eat = () => {
    console.log(this.name)
  }
}

const n = new Animal()
n.speak() // eat
n.eat()  // eat


const a = n.speak
const b = n.eat
a() // 报错。。。
b() // cat


var name = "My city is WH";
var resultStr = name.split('');
// var resultStr = name.split('').reverse().join(''); 
console.log(resultStr)

var fn = function() {
  var a1 = 0;
  return function() {
    a1++
    console.log(a1)
  }
}

var fn1 = fn
var fn2 = fn
var fn3 = fn




var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice());

var arr = [1, [2, 3, [4, 5]]]
console.log(arr.toString())