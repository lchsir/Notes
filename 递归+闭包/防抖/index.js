// 防抖：事件函数在一段时间后才执行，如果这段时间内再次调用，则重新计算执行时间，否则执行
// 固定时间内，事件只允许发生一次


function debounce(fun, wait) {
  let timeout;
  return function() {
    let _this = this
    let arg = arguments

    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(function(){
      fun.apply(_this, arg)
    }, wait)
  }
}

function debounce(fun, wait) {
  let timeout;
  return function() {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(function(){
      fun()
    }, wait)
  }
}

