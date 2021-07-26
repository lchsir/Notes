window.onload = function () {
    var flag = false; //布尔类型
    var num = 15; //数值类型
    var str = 'abc'; //字符串类型
    var str2 = "hello," + str;
    var msg = "hello," + str + "," + num;
    var u = undefined;
    var n = null;
    var a = 1;
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
    function sum2(n1, n2) {
        return n1 + n2;
    }
    //sum(1,2);  //3
    //sum('1','a');  //12
    sum2(1, 2);
    //sum2(1,'3');
};
