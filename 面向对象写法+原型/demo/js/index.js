window.onload = function(){
   //原型
   //普通对象object和函数对象function
   //prototype是函数才有的属性 __proto__是每个对象都有的属性
    //普通对象和函数对象区别
    //普通对象 
    var o = {};
    //函数对象
    function f(){}  // var f = function(){}
    //
    var f1 = new f();  ////实例是普通对象

    //具体原型的写法
    function Person(){}; //定义一个函数对象
    Person.prototype.name="abc"; //原型对象中添加属性
    Person.prototype.action=function(){} //原型对象中添加属性
    var p1 = new Person(); //实例化 
    var p2 = new Person();

    //构造函数   类   抽象    
    function Person(name,age){
        this.name = name;
        this.age = age;
    }; 
    var x = new Person('x',20); //实例化


    //创建多个对象
    var o1 = {
        name:'o1',
        id:1,
        age:1,
        action:function(){}
    };
    var o2 = {
        name:'o2',
        id:2,
        age:1,
        action:function(){}
    };
    var o3 = {
        name:'o3',
        id:2,
        age:1,
        action:function(){}
    };
    var o4 = {
        name:'o4',
        id:2,
        age:1
    };
    var o5 = {
        name:'o5',
        id:2,
        age:1
    };


    //复用
    function Cat(name,id,age){
        return {
            name:name,
            id:id,
            age:age
        }
    };
    var o1 = Cat('o1',1,1);
    var o2 = Cat('o2',2,1);

    //构造函数
    function Cat(name,id,age){
        this.name = name;
        this.id = id;
        this.age = age;
        //this.type = '动物';
        //this.eat = function(){console.log('吃鱼')};
    };
    Cat.prototype.type = '动物';
    Cat.prototype.eat = function(){console.log('吃鱼')};
    var o1 = new Cat('o1',1,1);
    var o2 = new Cat('o2',2,1);
    o1.type;
    o2.eat();
}