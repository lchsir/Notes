window.onload = function(){
    //async  generator的语法糖   内置执行器
    async function f(){
        return 123;
    };
    f(); //async返回的是promise实例，默认的是成功的状态
    f().then(function(d){console.log(d)});


    //扩展一
    async function f1(){
        return 999;
    };
    f1().then(res=>{
        console.log(res)
    });
    console.log(1000);
    //1000  999

    //扩展二
    async function f1(){
        console.log(88);  //同步
        return 999;
    };
    f1().then(res=>{    //微任务
        console.log(res)  
    });
    console.log(1000);  //同步
    //88 1000  999




    
}