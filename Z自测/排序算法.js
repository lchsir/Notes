const arr = [4,2,6,5,1,8,7,3,9]

// 1、冒泡排序
// 思想：让数组中的当前项和后一项进行比较，如果当前项比后一项大，则大的靠后，交换位置



function bubble(arr) {
  // 外层循环控制比较的轮数
  let temp = null;
  for(let i = 0; i < arr.length - 1; i++) {

    // 数组末尾放了几个最大的值了
    // i = 0  0个
    // i = 1  1个
    // i = 2  2个

    // 每一轮比较的次数
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(bubble(arr))







// 2、快速排序
// 3、归序排序
// 4、选择排序
// 5、插入排序