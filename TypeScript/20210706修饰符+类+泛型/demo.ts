window.onload = function () {
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

  // private 修饰的属性或方法是私有的，不能在声明它的类的外部访问；
  class Cat3 {
    private name: string;
    color: string;
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
    private eat() {   //
      return this.name + '吃'
    }
  };
  var c3 = new Cat3('黑猫', '黑');
  //c3.name;
  //c3.eat();

  // protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的；
  class Cat4 {
    private name: string;
    protected color: string;
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
    protected eat() {   //
      return this.name + '吃'
    }
  };
  //子类
  class obj4 extends Cat4 {
    a: string;
    b: string;
    constructor(a, b) {
      super(a, b);
      this.a = a;
      this.b = b;
    }
    action() {   //
      return this.color + this.name + this.eat()
    }
  };
  var o4 = new obj4(1, 2);
  //o4.name;  //public
  // o4.color;


  //类和接口
  //接口是对类的行为进行约束，而类是代码复用
  //接口只声明和类型定义，不做实现
  interface IFeatures {
    age: number,
    height?: number,
    weight?: number,
    name?: string;
    action(): string;
  }

  //对象受到接口的约束
  let obj100: IFeatures = {
    age: 18,
    action: function () {
      return 'abc'
    }
  };

  //类实现接口
  class Person100 implements IFeatures {
    age: number;
    a: string;
    action() {
      return 'abc'
    }
    action2() {
      return 'abc'
    }
  }

  //提取报警器  是一个接口
  interface IAlarm {
    sing();   //只是定义了叫的方法
  }
  //门是一个对象
  class Door {

  }
  //防盗门是一个对象是门的子类
  class SecurityDoor extends Door implements IAlarm {
    constructor() {
      super();
    }
    sing() {

    }
  }

  //车是一个对象
  class Car implements IAlarm {
    sing() {

    }
  }

  //一个类实现多个接口
  interface IAlarm2 {
    sing();   //只是定义了叫的方法
  }

  interface ILight {
    lightOn();
    lightOff();
  }

  class Car2 implements IAlarm2, ILight {
    sing() { }
    lightOn() {
      if (true) {

      }
    }
    lightOff() { }
  }

  //接口继承接口
  interface IAlarm3 {
    sing(s: string): void;   //只是定义了叫的方法
  }

  interface ILight3 extends IAlarm3 {
    lightOn();
    lightOff();
  }

  class Car3 implements ILight3 {
    sing() { }
    lightOn() { }
    lightOff() { }
  }

  //接口继承类
  class O2 {
    a: number;
    b: number;
  }
  interface O3 extends O2 {
    c: number;
  }
  var o3: O3 = { c: 3, a: 1, b: 2 }

  //泛型
  function sum(n1: number, n2: number): number[] {
    return [n1, n2]
  }
  sum(1, 2)


  function sum2(n1: any, n2: any): any[] {
    return [n1, n2]
  }
  sum2('1', '2')

  function sum3<T>(n1: T, n2: T): T[] {
    return [n1, n2]
  }
  sum3<string>('1', '2');
  sum3(3, 5)  //类型推断

  //泛型在函数中的具体运用
  //函数声明
  function sum4<T>(n1: T, n2: T): T[] {
    return [n1, n2]
  }
  //函数表达式
  let s5 = function <U>(n1: U, n2: U): U[] {
    return [n1, n2]
  }
  //ES6
  let s6 = <U>(n1: U, n2: U): U[] => [n1, n2];
  s6<string>('1', '2');

  //泛型的约束
  interface ILengthNum {
    length: number;
  }
  function s7<T extends ILengthNum>(str: T): number {
    return str.length
  };
  s7('123');

  //泛型接口
  interface IO3 {
    <T>(a: T, b: T): boolean
  }
  let o9: IO3 = function (x, y) {
    return x == y
  };
  o9<number>(1111, 5)

  //另一种 把泛型参数提前放在接口名上
  interface IO4<T> {
    (a: T, b: T): boolean
  }
  let o10: IO4<number> = function (x, y) {
    return x == y
  };
  o10(1111, 5)

  //另一种写法
  let f11: IO4<number>;
  f11 = function (x, y) {
    return x == y
  };
  f11('1', 3)
}

