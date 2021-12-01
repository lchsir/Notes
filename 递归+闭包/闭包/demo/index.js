// 闭包要先理解全局变量、局部变量

// 定义：读取其他函数内部变量的函数
// 形式：定义在一个函数内部的函数
// 本质：将函数内部和函数外部链接起来的桥梁

// 为什么要用到？
// 1、读取函数内部的变量
// 2、让变量的值始终保持在内存中，不会自动清除


// 总结：局部变量无法共享和长久的保存，而全局变量回造成变量污染，当我们希望有一种机制即可以长久的保存变量又不会造成全局的污染。


window.onload = function(){
    //如何从外部读取函数内部的局部变量？
	function f1(){
        var a = 1;
        function f2(){
            console.log(a);
        };
        f2();
    };
    f1();


    // 这样不也可以返回局部变量吗？？？
    function f3(){
        var a = 2;
        return a;
    };
    f3();


    //闭包的写法
    function f1(){
        var a = 1;
        function f2(){
            a++;
            console.log(a);
        };
        return f2;
    };
    var f = f1();   //f1()执行的结果是闭包   
    //f1执行的结果被赋给了一个全局变量f,导致f2和a始终在内存中没有被回收
    //返回的是一个函数，并且这个函数对变量存在引用，这样就形成了闭包的包含关系，可以维持变量的状态
    f();

    //简化的写法
    function f1(){
        var a = 1;
        return function(){
            a++;
            console.log(a);
        };
    };
    var f = f1();
    f()

    //这种方式不是闭包
    function f3(){
        var a = 2;
        a++;
        return a;
    };
    var f33 = f3;  //直接把函数赋 给了一个全局变量，当f33()执行时，相当于就是直接的执行了f3();
    f33();

    //比如有多个行走，A  B  C利用一个变量来维持不同的状态的值
    function f1(){
        var x = 0;
        return function(){
            return x++
        };
    };
    var a = f1();  //A状态的值
    var b = f1();
    var c = f1();

}