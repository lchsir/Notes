window.onload = function(){
    //原型继承
    function Animal(){   //  Animal构造函数
        this.type = "动物";
        this.action = function(){}
    };

    function Cat(name,color){  //Cat构造函数
        this.name = name;
        this.color = color;
    };
    Cat.prototype = new Animal();  // Cat.prototype cat的原型对象 = new Animal()
    var c1 = new Cat('tom','白色');
    var c2 = new Cat('ben','黑色');
    //c1.type = 'c1';  //为自身添加了type属性值
    c1.__proto__.type='猫科动物'
    c2.type


    //构造函数的继承
    function Animal(){   //  Animal构造函数
        this.type = "动物";
        this.action = function(){}
    };

    function Cat(name,color){  //Cat构造函数
        Animal.apply(this); //将Animal对象的成员放到Cat对象上
        this.name = name;
        this.color = color;
    };
    var c1 = new Cat('tom','白色');
    var c2 = new Cat('ben','黑色');
    c1.__proto__.type='猫科动物'
    c2.type

    // function Cat(name,color){  //Cat构造函数
    //     this.name = name;
    //     this.color = color;
    // };
    // var o = {};
    // Cat.call(o,'tom','white');
    // o.name

    //组合继承
    function Animal(){   //  Animal构造函数
        this.type = "动物";
    };
    Animal.prototype.eat= function(){console.log('吃')};//通过apply/call只能拷贝成员，原型对象不会拷贝

    function Cat(name,color){  //Cat构造函数
        Animal.apply(this); //将Animal对象的成员放到Cat对象上
        this.name = name;
        this.color = color;
    };
    Cat.prototype = new Animal();  // Cat.prototype cat的原型对象 = new Animal()
    var c1 = new Cat('tom','白色');
    var c2 = new Cat('ben','黑色');
    c2.__proto__.type="动物ABC";
    c1.type = 'c1';
    c1.type;
    c2.type;


}