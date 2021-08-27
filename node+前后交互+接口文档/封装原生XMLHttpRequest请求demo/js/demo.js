window.onload  = function(){
    document.querySelector(".login").onclick = function(){
        var _mobile = document.querySelector('.mobile').value,  //手机号获取
            _password = document.querySelector('.password').value;  //密码获取
        sendData(_mobile,_password);
    }
    //发送请求
    function sendData(mobile,password){
        var xmlhttp = new XMLHttpRequest(); //XMLHttpRequest是一个浏览器接口
        xmlhttp.open("post", "http://localhost:3333/form_login"); //异步  open()初始化
        xmlhttp.setRequestHeader("Content-Type","application/json");  //请求头
        xmlhttp.send(JSON.stringify({   //send()发送请求
            mobile:mobile,
            password:password
        })); //发送
        //onreadystatechange事件   当readystate属性发生改变时，
        //xmlhttp.readyState 请求的状态 0-4 
        //xmlhttp.status 响应的状态 200
        xmlhttp.onreadystatechange = function() { 
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log(xmlhttp.responseText)   //xmlhttp.responseText返回的数据
                
            }
        }
    }
};