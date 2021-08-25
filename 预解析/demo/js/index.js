window.onload = function(){
    //封装一个方法 deep来实现对象的深拷贝
    var Animal={
        name: "duobi",
        skin: ["red", "green"],
        child: {
            xxx: "xxx"
        },
        say: function(){
            console.log("I am ", this.name, " skin:", this.skin)
        }
    }
    function deep(dest, obj){   //dest = {},obj = Animal
        var o = dest;
        for (var key in obj) {  // Key ==== 'name'   'child'
            if (typeof obj[key] === 'object'){   //obj[key]  === ["red", "green"] ,{xxx: "xxx"}
                //constructor 判断类型是数组还是对象
                o[key] = (obj[key].constructor===Array)?[]:{};
                deep(o[key], obj[key]);
            } else {  //如果obj[key]不是对象类型，直接赋值
                o[key] = obj[key]
            }
        }
        return o;
    };
    var x = deep({},Animal);


    // var o = {id:1,name:'fangfang'};
    // var o2 = {};
    // for(var k in o){
    //     o2[k] = o[k]
    // }

    //预解析
    console.log(a);
    var a = 10;
    //解析过程 
    var a;
    console.log(a);  //undefined
    a = 10;

    console.log(b);
    var b = 100;
    function b(){
        console.log(999)
    };
    //解析过程 
    //预解析
    var b;
    function b(){
        console.log(999)
    };
    //逐行解析
    console.log(b);  //[Function: b]
    b = 100;

    //测试变量和函数的优先级
    //预解析过程中，当变量和函数同名时：只留下函数的值，不管谁前谁后，所以函数优先级更高；
    console.log(b);
    function b(){
        console.log(999)
    };
    var b = 100;
    //解析过程 
    //预解析
    function b(){
        console.log(999)
    };
    var b;
    //逐行解析
    console.log(b);  //[Function: b]
    b = 100;

    //扩展练习一
    console.log(a,b,c,d,e);
    var a = 10;
    var b;
    c = 100;
    function d(){
        console.log('d')
    };
    var e = function(){
        console.log('e')
    };
    //解析过程 
    //预解析
    var a;
    var b;
    function d(){
        console.log('d')
    };
    var e;
    //逐行解析
    console.log(a,b,c,d,e);  //a = undefined;  b = undefined; c-报错;  d=function(){}; e = undefined; 
    a = 10;
    c = 100;
    e = function(){
        console.log('e')
    };

    //扩展练习二
    console.log(a);
    var a = 1;
    function a(){console.log(2)};
    console.log(a);
    var a = 3;
    console.log(a);
    function a(){console.log(4)};
    console.log(a);
    //解析过程 
    //预解析
    var a;
    function a(){console.log(2)};
    function a(){console.log(4)};
    //逐行解析
    console.log(a); //function a(){console.log(4)};
    a = 1;
    console.log(a);   //1
    a = 3;
    console.log(a);   //3
    console.log(a);   //3


    //作用域
    var a = 1;   //全局作用域
    function f1(){
        var b = 2;  //局部作用域  b属于f1下的作用域
        function f2(){
            var c = b;  //局部作用域    c属于f2下的作用域
            b = a;
            a = c;
            console.log(a,b,c)   //2 1 2
        };
        f2();
    };
    f1();

    //扩展
    //1)
    var a = 1;
    function f1(){
        console.log(a);
    };
    f1();  //1

    //2)
    function f1(){
        var a = 1;
    };
    f1(); 
    console.log(a);  //a is not defined

    //3)
    var a = 1;
    function f1(){
        console.log(a);  //1
        a = 2;   //改变全局变量的值
    };
    f1();
    console.log(a);  //2
    //解析过程 
    //预解析
    var a;
    function f1(){}
    //逐行解析
    a = 1;
    f1();
    //函数执行
    console.log(a);  //1
    a = 2;
    console.log(a);   //2


    //4)
    var a = 1;
    function f1(){
        console.log(a);    //undefined
        var a = 2;   //在全局变量和局部变量同名时，全局变量的作用域不包含同名局部变量的作用域。
    };
    f1();
    console.log(a);   //1
    //解析过程 
    //预解析
    var a;
    function f1(){}
    //逐行解析
    a = 1;
    f1();
    //函数执行
    //预解析
    var a;
    console.log(a);  ////undefined
    a = 2;

    console.log(a);  //var a = 1;   1


    //经典作用域面试题一
    var a = 10; 
    function f1(){ 
        var b = 2 * a; 
        var a = 20; 
        var c = a+1; 
        console.log(b); 
        console.log(c); 
    };
    f1();
    //解析过程 
    //预解析
    var a;
    function f1(){}
    //逐行解析
    a = 10;
    f1()//函数执行
    //函数内部的预解析
    var b;
    var a;
    var c;
    ////逐行解析
    b = 2*a;  //a = undefined  在全局变量和局部变量同名时，全局变量的作用域不包含同名局部变量的作用域
    a = 20;
    c = a+1;
    console.log(b);   //NaN
    console.log(c);   //21


    ////经典作用域面试题二
    var a=10; 
    function test(){ 
        console.log(a);    //undefined
        a=100;    //在全局变量和局部变量同名时，全局变量的作用域不包含同名局部变量的作用域
        console.log(this.a);  //this 指向window  10
        var a; 
        console.log(a); //100
    }
    test();


    //函数式编程与面向对象编程的异同
    function sum(n1,n2){   //求和函数
        return n1+n2
    };
    sum(1,2);
    function selector(name){   //选择器封装
        return document.querySelector(name)
    }
    selector(".div");

    //对象  字面量方式
    var obj = {
        name:1,
        age:20,
        sum:function(n1,n2){
            return n1+n2
        },
        selector:function(name){
            return document.querySelector(name)
        }
    };
    obj.sum(1,2)




}