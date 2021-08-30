// ref 和 relative 得区别
// 1、使用上ref得时候需要用变量名.value来访问,例如：a.value;
// relative是用直接state.变量名,例如：state.a
export default {
  setup() {
    var a = ref(10)
    var b = relative({ id: 10 }) // !!!同步渲染
    var c = relative(10) // !!!非同步
    const state = relative({
      a: ref(10)
    })
    // 打印a得值
    const methods = () => {
      console.log(a.value) // ref的方法
      console.log(stats.a) // relative的方法
    }
    return {
      methods
    }
  }
}

// 2、ref 基本类型、relative处理复杂的类型，且不能处理基本类型
