window.onload = function(){

  var a = 1, b = [2,3], c=[4,5], d = 6;
  function fn (data) {
    return data
  }
  fn([a, ...b , ...c, d])

  var obj = {
    id:5,
    name:'abc',
    sex:'男',
    arr:[1,2,3,4]
  };

  const data = [obj.id, ...obj.arr]
  const sum = data.reduce((total, currentValue) =>{
    return Number(total) + Number(currentValue)
  })

  var a1 = [1,2,3,4,5,6,4,5,6];
  var a2 = [4,5,6,7,8,9,7,8,9];

  // 并集
  const res1 = [...a1, ...a2]
  // 交集
  const res2 = [...new Set(a1)].filter((t) => {
    return new Set(a2).has(t)
  })
  // 差集
  const res3 = [...new Set(a1)].filter((t) => {
    return !new Set(a2).has(t)
  })


  //	map类型转为数组
  const m1 = new Map([['a',1],['b',2],['c',3]]);
  let array = []
  for(let [k, i] of m1) {
    array = [
      ...array,
      {
        [k]: i
      }
    ]
  }

  //	map类型转为objet
  const m1 = new Map([['a',1],['b',2],['c',3]]);
  let obj = []
  for(let [k, i] of m1) {
    obj = {
      ...obj,
      [k]: i
    }
  }
  
  // 3)	object转为map
  let obj = {'name': 'jindu', "qq":"2429462491"};
  const mapData = new Map(Object.entries(obj));

  
  const set = new Set([1, 2, 3, 4, 5]);
  const arrayData = [...set]


  new Promise((resolve, reject) => {
    resolve(1)
  }).then(res1 => {
    return new Promise((resolve, reject) => {
      resolve(++res1)
    })
  }).then(res2 => {
    return new Promise((resolve, reject) => {
      resolve(++res2)
    })
  }).then(res3 => {
    console.log(res3)
  })

  const array = null
  array.forEach(t => {
    console.log(1)
  });

  console.log(array.length)

}