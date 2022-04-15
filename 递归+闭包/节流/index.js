// 节流：一段时间内，只执行一次某个操作，过了这段时间，还有操作的话，继续执行新的操作
// 一定时间内的多个事件合为一个


// 1、定时器
function throttle(fun, wait) {
  let args, _this, timeout;
  
  return function() {
    _this = this;
    args = arguments;
    if (timeout) {
      return
    }
    timeout = setTimeout(function() {
      fun.apply(_this, args)
      clearTimeout(timeout)
    }, wait)
  }
}


// 2、时间戳
function throttle(fun, wait) {
  let args, _this;
  // 之前的时间戳
  let old = 0;
  return function() {
    _this = this;
    args = arguments;
    // 获取当前的时间戳
    let now = new Date().valueOf();
    if (now - old > wait) {
      // 立即执行
      fun.apply(_this, args)
      old = now
    }
  }
}

