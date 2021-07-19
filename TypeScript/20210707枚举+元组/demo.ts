window.onload=function(){
    //泛型
    function sum(n1:number,n2:number):number[] {
        return [n1,n2]
    }
    sum(1,2)


    function sum2(n1:any,n2:any):any[] {
        return [n1,n2]
    }
    sum2('1','2')

    function sum3<T>(n1:T,n2:T):T[] {
        return [n1,n2]
    }
    sum3<string>('1','2');
    sum3(3,5)  //类型推断

    //泛型在函数中的具体运用
    //函数声明
    function sum4<T>(n1:T,n2:T):T[] {
        return [n1,n2]
    }
    //函数表达式
    let s5 = function<U>(n1:U,n2:U):U[] {
        return [n1,n2]
    }
    //ES6
    let s6 = <U>(n1:U,n2:U):U[] =>[n1,n2];
    s6<string>('1','2');

    //泛型的约束
    interface ILengthNum {
        length:number;
    }
    function s7<T extends ILengthNum>(str:T):number {
        return str.length
    };
    s7('123');

    //泛型接口
    interface IO3{
        <T>(a:T,b:T):boolean
    }
    let o9:IO3 = function(x,y){
        return x==y
    };
    o9<number>(1111,5)

    //另一种 把泛型参数提前放在接口名上
    interface IO4<T>{
        (a:T,b:T):boolean
    }
    let o10:IO4<number> = function(x,y){
        return x==y
    };
    o10(1111,5)

    //另一种写法
    let f11:IO4<number>;
    f11= function(x,y){
        return x==y
    };
    f11('1',3)


    //泛型在类中的运用
    class A<T> {
        n:T;
        constructor(num:T){
            this.n = num;
        }
        add(n1:T):T{
            return n1
        }
    };
    var aa = new A<string>('123');
    
    //多个类型
    function multi<N, S>(sum: [N, S]): [S, N] { 
        return [sum[1], sum[0]]; 
    }
    multi<number,string>([1, 'one']);


    interface ILength {
        length:number;
        //slice():string;
    }
    interface ICreateArr<N,T extends ILength> {
        (length:N,value:T):Array<T>;
    }
    var c1 :ICreateArr<number,number[]>;
    c1 = function<N,T>(length,value){
        let arr = [];
        for(let i=0;i<length;i++){
            arr[i] = value;
        };
        return arr;
    }
    c1(3,[1,2,3]);  //['x','x','x']


    //枚举 enum类型是对JavaScript标准数据类型的一个补充
    //对于数组中获取数据，只能通过数组来获取，不能通过名称来获取
    var arr = ['x','y','z'];
    arr[0] //可以
    arr['x']  //error
    var obj = {x:'x',y:'y'};
    obj.x
    obj['x']
    obj[0]   //error

    enum Color {red,blue,green};
    var c11: Color = Color.blue;   //1      var a :string = '111'
    var c21 :string = Color[2];    // green


    enum Color2 {red = 1,blue=10,green=20};
    var c111: Color2 = Color2.blue;   //10

    //任意值
    var a11 = 'aaaa';
    enum Color3 {red = 1,blue=<any>a11,green='green'.length};
    var c3333: Color3 = Color3.blue;   //'aaaa'

    // 元组
    // 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
    // 我们知道数组中元素的数据类型都一般是相同的（any[] 类型的数组可以不同），如果存储的元素数据类
    // 型不同，则需要使用元组

    var arr11 :number[] = [1,2,3];
    var arr22 :(string |number)[] = [1,2,3,'a'];

    var arr33:Array<string | number> = [1,2,3,'a'];

    var arr44:any[] = [1,2,3,'a',true]

    var abc:[number,string] = [5,'abc'];




}

