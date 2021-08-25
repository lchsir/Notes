window.onload = function(){
    // 微任务与宏任务的区别
    // 就像去银行办业务一样，先要取号进行排号。
    // 一般上边都会印着类似：“您的号码为XX，前边还有XX人。”之类的字样。
    // 由于柜员只能处理一个来办理业务的客户，这时每一个来办理业务的人就可以认为是银行柜员的一个宏任务来存在的；
    // 当柜员处理完当前客户的问题以后，选择接待下一位，广播报号，也就是下一个宏任务的开始。
    // 所以多个宏任务合在一起就可以认为有一个任务队列在这，里边是当前银行中所有排号的客户。
    // 如果叫到你的时候你不在，那么你当前的号牌就作废了，柜员会选择直接跳过进行下一个客户的业务处理，等你回来以后还需要重新取号
    // 而且一个宏任务在执行的过程中，是可以添加一些微任务的，就像在柜台办理业务，你前边的一位老大爷可能在存款，结果在存款这个业务办理完以后，柜员会问老大爷还有没有其他需要办理的业务，这时老大爷想了一下：“想选择稳一些的理财”，这时候柜员肯定不能告诉老大爷说：“您再上后边取个号去，重新排队”。
    // 所以本来快轮到你来办理业务，会因为老大爷临时添加的“理财业务”而往后推。
    // 也许老大爷在办完理财以后还想 再办一个信用卡？或者 再买点儿纪念币？
    // 无论是什么需求，只要是柜员能够帮她办理的，都会在处理你的业务之前来做这些事情，这些都可以认为是微任务。
    // 在当前的微任务没有执行完成时，是不会执行下一个宏任务的。

    // JS单线程
    // 同步 异步(微任务  宏任务)
    // 1234 理解 为同步办理业务， 微任务  宏任务办理过程中的突发事件
    // 1号办理。。。1号办完
    // 2号办理。。。办理过程 中需要复印                  （等待队列 微任务）
    // 3号办理。。。办理过程 中少了资料（回去）     （等待队列 宏任务）
    // 4号办理。。。办理过程 中需要复印                   （等待队列 微任务）
    // n号办理。。。
    // 等待队列处理：微任务  宏任务
    // 2号用户提交资料，办理过程中添加业务，先处理2号的其它业务，下一位是4号用户，最后处理3号用户
    // 微任务：promise的then  async await
    // 宏任务: setTimeout  setInterval

    //同步
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);

    //promise是同步还是异步？   promise是同步
    console.log(1);
    var a = new Promise((res,rej)=>{
        console.log(2);
    });
    console.log(3);
    var a2 = new Promise((res,rej)=>{
        console.log(4);
    });
    console.log(5);
    // 1 2 3 4 5 

    console.log(1);  //1号用户 - 同步
    var a = new Promise((res,rej)=>{  //2号用户 - 同步
        console.log(2);
        res(4)
    });
    a.then(res=>{     //微任务  办理过程中需要复印 - 等待队列
        console.log(res)
    });
    console.log(3);  //3号用户 - 同步
    // 1 2 3 4

    //扩展一
    console.log(1);   //同步
    var a = new Promise((res,rej)=>{  
        console.log(2);  //同步
        res()
    });
    a.then(res=>{      //微任务  办理过程中需要复印 - 等待队列
        console.log(3)
    });
    console.log(4);  //同步
    var b = new Promise((res,rej)=>{  
        console.log(5);  //同步
        res()
    });
    b.then(res=>{      //微任务  办理过程中需要复印 - 等待队列
        console.log(6)
    });
    console.log(7);  //同步
    //1 2 4 5 7 3 6 

    ////扩展二
    setTimeout(()=>{    //宏任务   等待队列
        console.log(1)
    },0)
    new Promise((res,rej)=>{  
        console.log(3);  //同步
        res()
    }).then(res=>{      //微任务  办理过程中需要复印 - 等待队列
        console.log(2)
    });
    //3 2 1

    ////扩展三
    setTimeout(()=>{    //宏任务   等待队列
        console.log(1)
    },10)
    setTimeout(()=>{    //宏任务   等待队列
        console.log(5)
    },0)
    new Promise((res,rej)=>{  
        console.log(3);  //同步
        res()
    }).then(res=>{      //微任务  办理过程中需要复印 - 等待队列
        console.log(2)
    });
    console.log(4); 
    //3 4 2 5 1
    
    
}