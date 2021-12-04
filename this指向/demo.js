

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