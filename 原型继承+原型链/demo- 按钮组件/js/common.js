//方式三：字面量面向对象
var common = {
    chooser:function(name){
        return document.querySelector(name)
    },
    toBtn:function(color,title){
        return '<button class="btn btn-'+color+'">'+title+'</button>'
    }
}

//方式四：原型继承的方式
// function Btn(color,title){   //  Btn构造函数
//     this.color = color;
//     this.title = title;
// };
// Btn.prototype.toHtml = function(){
//     return '<button class="btn btn-'+this.color+'">'+this.title+'</button>'
// }

//方式五：公共传参
function Btn(btn){   //  Btn构造函数
    this.color = btn.getAttribute('color') || 'red';
    this.title = btn.getAttribute('title') || '按钮';
};
Btn.prototype.toHtml = function(){
    return '<button class="btn btn-'+this.color+'">'+this.title+'</button>'
}