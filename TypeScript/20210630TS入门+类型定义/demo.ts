window.onload = function () {
  let flag: boolean = false;  //布尔类型
  let num: number = 15;  //数值类型
  let str: string = 'abc'; //字符串类型
  let str2: string = `hello,${str}`;
  let msg: string = `hello,${str},${num}`;
  let u: undefined = undefined;
  let n: null = null;

  var a: number = 1;
  a = 10;
  a = 999;
  //定义一个求和函数，求参数的和
  // function sum(n1,n2){
  //     if(typeof n1 != 'number'){
  //         n1 = parseInt(n1);
  //     };
  //     if(typeof n2 != 'number'){
  //         n2 = parseInt(n2);
  //     };
  //     return n1+n2
  // };
  //参数的类型规范
  function sum2(n1: number, n2: number) {
    return n1 + n2
  }
  //sum(1,2);  //3
  //sum('1','a');  //12
  sum2(1, 2);
  //sum2(1,'3');

  //联合类型
  var id: number | string = 1;
  id = 'id';

  //任意值 any
  var s2: any = true;
  s2 = 1;
  s2 = 's2';

  //2、数组类型的定义
  //1、简单 的定义的方式 类型+方括号   number[]
  let arr1: number[] = [1, 2, 3, 4];
  let arr2: string[] = ['1', '2', 'a'];
  //2、泛型数组
  let arr3: Array<number> = [1, 2, 3];
  let arr4: Array<number | string> = ['1', 2, 3];

  //3、对象类型的定义
  //接口
  interface IObj {
    name: string;
    age: number;
  }
  let obj: IObj = {  //
    name: 'tom',
    age: 18
  }

  //4、函数类型的定义 输入类型，输出类型
  function f1(x: number, y: number): number {
    return x + y
  }
  let f2 = function (x: number, y: number): number {
    return x + y
  };
  function f3(x: number, y: number): number[] {
    return [x, y]
  };
  function f4(x: number, y: number): void {  //void无返回值
    if (x > y) {

    } else {

    }
  }
}