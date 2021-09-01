// *ref 和 relative 得区别

// 1、使用上ref得时候需要用变量名.value来访问,例如：a.value;
// relative是用直接state.变量名,例如：state.a

// 2、ref 基本类型、relative处理复杂的类型，且不能处理基本类型
// relative 中的数据是基本类型的，就不会是响应式的

export default {
  setup() {
    var a = ref(10)
    var b = relative({ id: 10 }) // !!!同步渲染
    var c = relative(10) // !!!非同步

    // 结合使用  
    const state = relative({
      a: ref(10)
    })
    // 打印a得值
    const methods = () => {
      console.log(a.value) // ref的方法
      console.log(stats.a) // relative的方法
    }
    
    // 将多个方法放到一个对象中
    const methods = {
      fun1() {},
      fun2() {}
    }
    return {
      methods,
      ...toRefs(state) // 转成ref形式的响应数据
                       // 原因：es6 中的扩展运算符和解构会把双向数据渲染的特性取消
                       // toRefs 函数可以把reactive创建出来的对象都转换为ref形式的响应式数据
    }
  }
}


// *vue3.0父子组件传参得三种方式

// 1：延伸vue2.x的方式，通过props
// 2: 通过provide, inject  //!!!注：provide 不支持异步，只能拿到数据重新赋值
// 3：Suspense 插槽包裹异步组件 

{/* 
<Suspense>
  <template #default>
    <List />
  </template>
  <template #fallback>
    <div>loading...</div>
  </template>
</Suspense>
*/}