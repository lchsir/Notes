window.onload = function(){
    // //方式二：动态定义
    // common.chooser("#red").innerHTML = '<button class="btn btn-red">红色按钮</button>';
    // common.chooser("#green").innerHTML = '<button class="btn btn-green">绿色按钮</button>';

    //方式三：字面量面向对象
    // common.chooser("#red").innerHTML = common.toBtn('red','提交');
    // common.chooser("#green").innerHTML = common.toBtn('blue','添加数据');

    //方式四：原型继承的方式
    //调用函数
    //var red = new Btn('red','提交审核');
    //渲染组件
    //common.chooser("#red").innerHTML = red.toHtml();

    //方式五：公共传参 在标签上传入不同的参数
    var btn = common.chooser(".btn2");
    btn.innerHTML = new Btn(btn).toHtml();
    
}