function Http(){
    var xmlhttp = new XMLHttpRequest(); //XMLHttpRequest是一个浏览器接口
    var _url = "http://localhost:3333";
    return {
        request:function(method,url,data,success,error){  
            //method请求类型，url接口地址,data传入的参数json,success回调函数（成功） error(失败)
            xmlhttp.open(method, _url+url); //异步  open()初始化
            if(method =='GET'){
                xmlhttp.send();
            }else {
                xmlhttp.setRequestHeader("Content-Type","application/json");  //请求头
                xmlhttp.send(data); //发送
            };
            xmlhttp.onreadystatechange = function() { 
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    console.log(xmlhttp.responseText)   //xmlhttp.responseText返回的数据
                    success(xmlhttp.responseText);
                }else {
                    error()
                }
            }
        }
    }
}