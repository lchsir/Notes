window.onload  = function(){
    document.querySelector(".login").onclick = function(){
        var _mobile = document.querySelector('.mobile').value,
            _password = document.querySelector('.password').value;
        sendData(_mobile,_password);
    }

    function sendData(mobile,password){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("post", "http://localhost:3333/form_login"); //异步
        xmlhttp.setRequestHeader("Content-Type","application/json");  //请求头
        xmlhttp.send(JSON.stringify({
            mobile:mobile,
            password:password
        })); //发送
        xmlhttp.onreadystatechange = function() { 
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log(xmlhttp.responseText) 
                
            }
        }
    }
};