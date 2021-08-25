var obj = {
    $:function(name){   //选择器封装
        return document.querySelector(name); 
    },
    init:function(){
        this.small_pic = this.$(".small_pic"),   //左侧的图片
        this.slider = this.$(".slider"),    //滑块
        this.big_pic = this.$(".big_pic"),    //右侧BOX
        this.big_img  = this.$(".big_img");    //右侧大图
        this.mousemove();
        this.mouseleave();
    },
    mousemove:function(){           //移入
        var self = this;
        this.small_pic.onmousemove = function(event){   //event对象  事件的状态
            self.slider.style.display = 'block';
            self.big_pic.style.display = 'block';
            //event.clientX  当前移入点与X轴的坐标   slider.offsetWidth   滑块的宽度
            var left = event.clientX - self.slider.offsetWidth/2;
            var top = event.clientY - self.slider.offsetHeight/2;
            var w = self.small_pic.offsetWidth - self.slider.offsetWidth;
            var h = self.small_pic.offsetHeight - self.slider.offsetHeight;
            //移动范围
            if(left <0) {
                left = 0;
            }else if(left > w) {
                left = w;
            };
            if(top <0) {
                top = 0;
            }else if(top > h) {
                top = h;
            };
            self.slider.style.left = left +'px';
            self.slider.style.top = top +'px';
            self.big_img.style.left = -(left*2) +'px';   //右侧大图的距离
            self.big_img.style.top = -(top*2) +'px';
        };
        
    },
    mouseleave:function(){  //移出  onmouseleave
        var self = this;
        self.small_pic.onmouseleave= function(){
            self.slider.style.display = 'none';
            self.big_pic.style.display = 'none';
        };
    }
}
window.onload = function(){
   obj.init();
}