
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

    // 1 7 10 4 5 8 9 2 3 6

    // 1 7 10 4 8 5 9 2 3 6



    //  -------------




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

