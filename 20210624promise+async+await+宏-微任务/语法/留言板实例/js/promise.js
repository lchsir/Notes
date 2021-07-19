 //Promise对象实现Ajax封装
const getJson = function(url ,type, data=null){
    const promise = new Promise(function(resolve, reject){
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open(type,url);
        if(type=='GET'){
            xmlHttp.send();
        }else {
            xmlHttp.setRequestHeader("Content-Type", "application/json");
            xmlHttp.send(JSON.stringify(data));
        };
        xmlHttp.responseType = "json";
        xmlHttp.onreadystatechange = function(){
            if (xmlHttp.readyState !== 4) return;
            if(xmlHttp.status==200){
                resolve(xmlHttp.response);
            }else {
                reject(new Error(xmlHttp.statusText));
            }
        }
    });
    return promise;
};


// var f = function(){
//     return promise
// };
// f().then(function(){},function(){})


