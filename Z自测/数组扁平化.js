
// 数组扁平化

var arr = [1, [2, 3, [4, 5]]]

// 1、flat
console.log(arr.flat('Infinity'))

// 2、toString() 和 split
console.log(arr.toString().split(',').map(t => {
  return Number(t)
}));

// 3、join() 和 split
console.log(arr.join(',').split(',').map(t => {
  return Number(t)
}));


