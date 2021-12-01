
// 引用类型实现深拷贝

// 一、Array
  var arr = [1,2,3]

  // 1、slice
  var arr2 = arr.slice()
  arr2.push(5) // 不影响arr

  // 2、concat
  var arr2 = arr.concat()
  arr2.push(5) // 不影响arr

  //注：上边的仅支持一维数组


// 二、Object

  // 1、new Object()
  var obj = {
    name: '张三',
    age: 18
  }

  var obj2 = new Object()
  obj2.name = obj.name
  obj2.age = obj.age

  obj.name = '里斯' //不影响obj2


  // 2、JSON.parse(JSON.stringify(obj))

  // 缺点：如果存在时间对象，时间对象会变成字符串
  // 有函数、undefined、结果会丢失
  // 等等。。。


  // 3、Object.assign() 一级深拷贝、二级浅拷贝













