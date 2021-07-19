const obj ={
    url:'http://127.0.0.1:3000',
    choose:name=>document.querySelector(name),
    bind:function(){
        this.choose('.submit').onclick = ()=>{
            let [name,message] = [this.choose('.name').value,this.choose('.message').value];
            if(!name || !message) return;
            //发送请求POST
            this.submitData(name,message);
        }
    },
    submitData:function(name,message){  //提交数据
        getJson(this.url+'/submit_data','post',{name:name,message:message})
            .then(res=>{
                console.log(res); 
                let {code} = res;
                if(code == '200'){
                    this.getData();
                } 
            },error=>{
                console.log(error)
            })
    },
    getData:function(){   //查询数据
        getJson(this.url+'/get_data','get')
            .then(res=>{
                let {code,result} = res;
                if(code == '200'){
                    this.showList(result);
                } 
            },error=>{
                console.log(error)
            })
    },
    showList:function(result){
        let str = "";
        for(let obj of result){
            str +=`<li class="list-group-item">${obj.name}
                        <span>说：</span>${obj.message}
                    </li>`
        };
        this.choose('.messageList').innerHTML = str;
    }
}
window.onload = function(){
    obj.bind();
    
}