// 定义：是书写异步代码的一种方式，主要用于解决回调嵌套问题


// 语法：
// 1. 创建一个promise对象
const p = new Promise((resolve, reject) => {
  // resolve 和 reject 都是promise内部提供的
  // resolve 是成功时候需要调的函数
  // reject 是失败时候需要调的函数
})

// 2.使用promise对象
p.then(res => {
}).catch(err => {
})


// 原理：既然可以new，那说明promise是一个类，还可以调then等方法，说明是这些方法应该是当前实例原型上的方法

class Promise {
  constructor(executor) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined

    const resolve = (value) => {
      // 做判断，因为状态只能改变一次
      if (this.state === 'pending') {
        this.state = 'fulfilled' // 更新状态
        this.value = value // 记录成功信息
      }
    }

    const reject = (value) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = value  // 记录失败原因
      }
    }
    executor(resolve, reject)
  }
}
