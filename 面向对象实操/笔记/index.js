// 回调函数中的this指向了window，需要中间量来承接
// 面向对象中的函数里边才可以定义this

var obj = {
  fun: function(name) {
    this.name = name // 此处的this就是obj，name就是obj下的属性
  }
}


