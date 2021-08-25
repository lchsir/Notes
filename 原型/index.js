window.onload = function(){
    //原型
    //普通对象object和函数对象function
    //prototype是函数才有的属性 __proto__是每个对象都有的属性
    //普通对象和函数对象区别
    //普通对象 
    var o = {};
    //函数对象
    function f(){}  // var f = function(){}
    // !!!实例是普通对象
    var f1 = new f();

    //具体原型的写法
    function Person(){}; //定义一个函数对象
    Person.prototype.name="abc"; //原型对象中添加属性
    Person.prototype.action=function(){} //原型对象中添加属性
    var p1 = new Person(); //实例化 
    var p2 = new Person();


    // TODO:构造函数：其实就是个普通函数，也是个类（es5 中类也是通过构造函数实现的）, 抽象的概念
    function Person(name,age){
        this.name = name;
        this.age = age;
    }; 
    var x = new Person('x',20); //实例化，将抽象概念的类具体化成


    // 为什么存在原型对象 ？？？如下案例：

    // 创建多个对象（普通笨拙）
    var o1 = {
        name:'o1',
        id:1,
        age:1,
        action:function(){} // !!!有公共的方法的时候需要每个都加action，太累太菜
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

    // 复用
    // 1、 普通函数
    // 缺点：无原型，无公共、两个对象无任何关系
    function Cat(name,id,age){
        return {
            name:name,
            id:id,
            age:age
        }
    };
    var o1 = Cat('o1',1,1);
    var o2 = Cat('o2',2,1);

    // 2、构造函数
    // 优点：实例有关系，可以实现继承
    function Cat(name,id,age){
        this.name = name;
        this.id = id;
        this.age = age;
        // !!!放到里边每次都创建，不环保、占用内存，故放到原型中
        //this.type = '动物';
        //this.eat = function(){console.log('吃鱼')}; 
    };
    // 实现共享,O1、O2都可以使用
    Cat.prototype.type = '动物';
    Cat.prototype.eat = function() { console.log('吃鱼')};
    var o1 = new Cat('o1',1,1);
    var o2 = new Cat('o2',2,1);
    o1.type;
    o2.eat();


    
}