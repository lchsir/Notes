window.onload = function(){
    const m = new Map();
    //选择器封装
    let choose = name => document.querySelector(name);

    //提交
    choose('.submit').onclick = ()=>{
        let [name,message] = [choose('.name').value,choose('.message').value];
        if(!name || !message) return;
        m.set(name,message);
        showList();
    };
    //展示
    let showList =()=>{
        let str = "";
        for(let [k,v] of m){
            str +=`<li class="list-group-item">${k}
                        <span>说：</span>${v}
                    </li>`
        };
        choose('.messageList').innerHTML = str;
    }

    
}