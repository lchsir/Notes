// 函数柯里化


// 优点：
// 1、参数复用：【参数】因闭包被外部引用所持久化
// 2、提前确认：因高阶函数是先调用一个函数【确认】，返回一个函数，前一个函数内可以确认返回什么样的函数
// 3、延迟运行：因高阶函数是先调用一个函数返回一个函数，再需要的时候【延迟再运行】

// 缺点：
// 存取arguments对象通常要比存取命名参数要慢一点 
// 一些老版本的浏览器在arguments.length的实现上是相当慢的 
// 使用fn.apply( 品）和 fn.cal1（ …）通常比直接调用fn( ⋯）稍徽慢点 
// 创建大量嵌套作用域和闭包西数会帶来花销，无论是在内存还是速度上


function add() {
  var _args = Array.prototype.slice.call(arguments)

  var _innerAdd = function() {
    _args.push(...arguments)
    return _innerAdd; // 第二次及以上调用
  }

  // 累计计算返回结果
  _innerAdd.getValue = function() {
    return _args.reduce((n1, n2)=>{
      return n1 + n2
    }, 0)
  }

  return _innerAdd
}

console.log(add(1,2,3,4)(1,2,3)(4,5).getValue())