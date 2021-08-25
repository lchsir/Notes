const obj ={
    m:new Map(),
    choose:name=>document.querySelector(name),
    bind:function(){
        this.choose('.submit').onclick = ()=>{
            let [name,message] = [this.choose('.name').value,this.choose('.message').value];
            if(!name || !message) return;
            this.m.set(name,message);
            this.showList();
        }
    },
    showList:function(){
        let str = "";
        for(let [k,v] of this.m){
            str +=`<li class="list-group-item">${k}
                        <span>说：</span>${v}
                    </li>`
        };
        this.choose('.messageList').innerHTML = str;
    }
}
window.onload = function(){
    obj.bind();
    
}