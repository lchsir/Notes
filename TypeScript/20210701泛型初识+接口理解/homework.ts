window.onload = function () {
  var a: number | string = 1
  arr = [1, 2, 3, 'a', 'b', 6]
  var arr: Array<number | string> = [1, 2, 3, 'a', 'b', 6]

  interface IPerson {
    name?: string;
    height: number;
    weight: number;
    [prop: string]: any
  }

  function Sum(a: number = 1, b: number = 1) {
    return a + b
  }

  interface ISearchFunc {
    (a: string, b: string): boolean;
  }

  const fn: ISearchFunc = function (a, b) {
    const index = a.search(b)
    return index > -1
  }


  // 定义接口 ILengthN，其中名称为length的参数类型为number,必选项
  interface ILengthN {
    length: number;
  }
  // 定义函数接口 ISearchFun
  // 函数接受两个参数a, b, 类型为泛型，并且受接口ILengthN的约束，返回值为boolean
  // 类型为 boolean
  interface ISearchFun {
    <T extends ILengthN>(a: T, b: T): boolean;
  }

  // 函数f实现了ISearchFun的接口，函数接受的参数s1、s2的类型为泛型，返回值为boolean
  let f: ISearchFun = function <T>(s1: T, s2: T): boolean {
    return s1 == s2;
  }

  f<string>('1', '3'); // 调用参数类型为string函数



  // function Cat(name, color) {
  //   this.name = name;
  //   this.color = color;
  // };
  // Cat.prototype.sayName = function () {
  //   return `My name is ${this.name}`;
  // };
  // Cat.prototype.eat = function () {
  //   return console.log("吃老鼠");
  // };
  // var cat1 = new Cat("大明", "黄色");
  // var cat2 = new Cat("小明", "白色");

  class Cat {
    name: string;
    color: string;
    constructor(name: string, color: string) {
      this.name = name;
      this.color = color
    }
    sayName() {
      return `My name is ${this.name}`;
    }
    eat() {
      return console.log("吃老鼠");
    }
  }

  class Obj {
    static str: string = "fangfang";
    static sum(n1, n2) {
      return n1 + n2;
    }
  }
  // 如何获取str的值及调用sum(1,5);

  Obj.str
  Obj.sum(1, 5)


  interface IObj {
    name: string;
    action(): string;
  }

  class ObjClass implements IObj {
    name: string;
    constructor(name: string) {
      this.name = name
    }
    action(): string {
      return this.name
    }
  }


  interface IUser {
    name: string;
    age?: number
  }

  var tom: IUser = {
    name: '1',
    // age: 12
  }


  class Animal {
    name: string;
    constructor(name) {
      this.name = name;
    }
    eat() {
      return "吃骨头";
    }
  }

  class Dog extends Animal {
    constructor(name) {
      super(name)
    }
    do() {
      return this.name + this.eat()
    }
  }

  var dog = new Dog('小花')
  console.log(dog.do())








}