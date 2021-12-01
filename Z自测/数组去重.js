
// 数组去重
let arr1 = [0,1,2,3,4,5];
let arr2 = [0,4,6,1,3,9];
let arr = Array.from(new Set(arr1.concat(arr2)));
let arr = [...(new Set(arr1.concat(arr2)))];

