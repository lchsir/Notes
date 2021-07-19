window.onload = function () {
  //泛型 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，
  //而在使用的时候再指定类型的一种特性。
  let arr7: Array<number> = [1, 2, 3];

  function f5(n1: number, n2: number): boolean {
    if (n1 > n2) {
      return true
    } else {
      return false
    }
  };
  f5(1, 2);

  function f6(n1: string, n2: string): string[] {
    return [n1, n2]
  };
  f6('a', 'b');

  function f7(n1: boolean, n2: boolean): boolean[] {
    return [n1, n2]
  };
  f7(true, false);

  //泛型  泛型变量T T表示任何类型
  function f8<T>(n1: T, n2: T): T[] {
    return [n1, n2]
  };
  f8<string>('1', '2');
  f8<boolean>(true, false);
  f8<number>(6, 7);   //[6,7]
  f8<number | string>(6, 'a');

  function f9<T>(n1: T, n2: T): boolean {
    if (n1 > n2) {
      return true
    } else {
      return false
    }
  };
  f9<number>(1, 2);

  // function f10<T>(n1:T,n2:T):T{
  //     return n1+n2
  // };
  // f10<number>(1,2);

  // function f11(str:string):number{
  //     return str.length
  // };
  // f11('a');

  // function f11<T>(str:T):number{
  //     return str.length
  // };
  // f11<string>('a');

  function f12(str: string | number[]): number {
    return str.length
  };
  f12('a');


  //接口
  //在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象
  //接口（Interfaces）可以用于对「对象的形状（Shape）」进行描述。
  interface IPhone {  //定义手机对象接口
    mic: boolean;
    camera: boolean;
    charge: string;
    call(): string
  }
  let oppo: IPhone = {  //定义的对象oppo受到IPhone的约束
    mic: true,
    camera: true,
    charge: 'c',
    call: function () {
      return 'call'
    }
  }

  //定义person接口
  interface IPerson {
    name?: string;
    date: string;
    sex: string;
    action(): void;
  };
  let obj3: IPerson = {  //obj3受到IPerson接口的约束
    date: '2020-2-2',
    sex: 'man',
    action: function () {

    }
  }

  //接口 可选属性  name?:string;
  interface IPerson4 {
    name?: string;    //选填
    date: string;   //必填
    sex?: string;   //选填
    action(): void;   //必填
  };
  let obj4: IPerson4 = {  //obj3受到IPerson接口的约束
    //name:'abc',
    date: '2020-2-2',
    //sex:'man',
    action: function () {

    }
  }

  //接口 任意属性 
  interface IPerson5 {
    name?: string;    //选填
    date: string;   //必填
    sex?: string;   //选填
    action(): void;   //必填
    [propName: string]: any;   //任意属性   
    //需要注意的是，一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性
  };
  let obj5: IPerson5 = {  //obj3受到IPerson接口的约束
    //name:'abc',
    date: '2020-2-2',
    //sex:'man',
    a: 'a',
    b: 'b',
    call: function () { },
    action: function () {

    }
  }


  //4、函数类型的定义 输入类型，输出类型
  //可选参数
  function f10(x: number = 1, y?: number): number {
    return x + y
  }
  //y?:number 表示y参数选传   注意：可选参数后面不允许出现必选参数
  //x:number=1  添加默认值
  f10(3);
  f10();

  //接口在函数中运用
  function fn1(o: IObj1) {
    console.log(o.name);
  };
  var o1 = { id: 1, name: '342' };
  fn1(o1);

  //定义接口
  interface IObj1 {
    id: number;
    name: string;
  }

  //扩展题
  //定义函数检查类型  在函数中传入2个参数，一个参数是否在另一个参数，返回true
  interface SearchFun {
    (a: string, b: string): boolean
  };
  let fn2: SearchFun = function (s1: string, s2: string): boolean {
    let i = s1.search(s2);
    return i > -1
  };
  fn2('abc', 'a');

  //泛型
  interface SearchFun3 {
    <T>(a: T, b: T): boolean
  };
  let fn3: SearchFun3 = function <T>(s1: T, s2: T): boolean {
    return s1 == s2
  };
  fn3<string>('abc', 'a');


  //别名 type
  type abc = string | number[];
  type n = number;
  type s = string;

  let n1: abc;
  n1 = '4';
  n1 = [1];

  function fn4(str: abc): n {
    return str.length
  };
  fn4('a');


  //类
  class Cat {
    name: string;
    color: string;
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
    eat() {
      return '吃'
    }
  };
  var c = new Cat('黑猫', '黑');
  c.name;

  //修饰符  static  public  private
  // public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的；
  // private 修饰的属性或方法是私有的，不能在声明它的类的外部访问；
  // protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的；
  //static 不需要实例化  调用类，直接调用
  class Cat2 {
    name: string;
    color: string;
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
    static eat() {   //
      return '吃'
    }
  };
  var c2 = new Cat2('黑猫', '黑');
  Cat2.eat();
  c2.name;

  // function fn(x1: string, x2: string): string[] {
  //   return [x1, x2]
  // }

  function fxFun<T>(x1: T, x2: T): T[] {
    return [x1, x2]
  }

  fxFun(1, 2)
  fxFun('1', '2')


  class A {
    a: string
    b: string
    constructor() {
      this.a = 'a'
      this.b = 'b'
    }
    hello() { }
  }

  console.log(A)



}