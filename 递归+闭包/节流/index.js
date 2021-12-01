// 节流：设置一个时间，在这个时间内无论你触发多少次事件，只会有一个定时器，等待后只执行一次


// 时间戳
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


// 定时器
function throttle(fun, wait) {
  let args, _this, timeout;
  
  return function() {
    _this = this;
    args = arguments;
    
    if (!timeout) {
      timeout = setTimeout(function() {
        fun.apply(_this, args)
        timeout = null
      }, wait)
    }

  }
}

