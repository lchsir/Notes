  
  // *预解析： 把变量或函数预先解析到它们被使用的环境中 --- 变态机制（关系户，走后门）

  
  // 拓展练习一
  console.log(a, b, c, d, e)
  var a = 10;
  var b;
  c = 100;
  function d() { console.log('d') }
  var e = function () {
    console.log('e')
  }
  // *************** 解析过程  
  // !!! 预解析
  var a;
  var b;
  function d() { console.log('d') }
  var e;
  // !!! 逐行解析
  console.log(a, b, c, d, e) // undefined undefined 报错  function d () {console.log('d')} undefined
  a = 10
  c = 100
  e = function () { console.log('e') }
  

  // 拓展练习二
  console.log(a)
  var a = 1
  function a() { console.log(3) }
  console.log(a)
  var a = 3
  console.log(a)
  function a() { console.log(4) }
  console.log(a)

  // 解析过程
  // !!! 预解析
  var a;
  function a() {
    console.log(2)
  }
  function a() {
    console.log(4)
  }
  
  // !!! 逐行执行
  console.log(a) // function a() {console.log(4)}
  a = 1; 
  console.log(a)  // 1
  a = 3
  console.log(a)  // 3
  console.log(a)  // 3

  var a = []
  console.log(typeof a)


