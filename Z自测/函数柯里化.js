


// 函数柯里化：将接受多个参数的函数变为接受一个参数的函数，并且返回剩余参数的函数
function getInfo(a, b, c) {
  console.log(`${a}${b}${c}`)
}

getInfo('国家', '职业', '人物1')
getInfo('国家', '职业', '人物2')
getInfo('国家', '职业', '人物3')

// 柯里化
function doThing(a) {
  return function(b) {
    return function(c) {
      console.log(`${a}${b}${c}`)
    }
  }
}

const dos = doThing('国家')('职业')
dos('人物1')
dos('人物2')
dos('人物3')

