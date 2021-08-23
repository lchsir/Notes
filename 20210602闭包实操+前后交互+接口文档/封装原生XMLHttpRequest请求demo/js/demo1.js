window.onload  = function(){
    document.querySelector(".login").onclick = function(){
        var _mobile = document.querySelector('.mobile').value,  //手机号获取
            _password = document.querySelector('.password').value;  //密码获取
        sendData(_mobile,_password);
    }
    //发送请求
    function sendData(mobile,password){
        var data = JSON.stringify({   //send()发送请求
            mobile:mobile,
            password:password
        });
       Http().request('post','/form_login',data,
            function(res){   //res ====xmlhttp.responseText返回的数据
                console.log(res);
            },function(error){

            })
    }
};