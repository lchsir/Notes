<template>
  <div id="nav">
    欢迎来到vue3的世界
    <div>
      内容：{{ name }}
      <p>a: {{ a }}</p>
      <p>c: {{ c }}</p>
      <p>refVal: {{ refVal }}</p>
      <p>id: {{ id }}</p>
      <p>type: {{ type }}</p>
      <button @click="change()">click</button>
      <button @click="go()">跳转</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted, toRefs, computed, watch } from 'vue' // 按需加载
import { useRouter } from 'vue-router'
export default {
  setup (props, context) { // beforeCreate之前调用
    console.log('context', context)

    const router = useRouter();
    // 1、reactive：(复杂类型，基本类型不能) 创建响应式数据对象，相当于vue中的data()
    const state = reactive({
      id: 0,
      name: 'abc',
      type: '',
      refVal: ref(200),
      // 计算属性
      n1: computed(() => {
        state.id += 1
      })
    })
    let x = reactive(10) // 注：无法处理基本类型，因为不是响应式


    // 2、ref（基本类型）
    var a = 100 // 非响应式
    var c = ref(10) // 响应式，返回一个只有value属性的对象


    // 4、生命周期
    onMounted(() => {
      setInterval(function () {
        state.refVal += 10  // 如果ref在reactive中定义，直接state.属性名
      }, 1000)
    })


    // 3、定义函数方法
    const change = () => {
      a += 1
      c.value += 1
      console.log(c.value)

      if (c.value == 20) {
        stopWatch() // 清除监听
      }
    }

    // 4、定义方法组
    const methods = {
      fun1 () { },
      fun2 () { },
      go() {
        console.log('路由跳转')
        router.push({
          path: '/gome/about',
          query: {
            id: 1
          }
        })
      }
    }

    // 5、watch
    const stopWatch = watch(() => c.value, (cur, old) => {
      state.type = cur % 2 === 0 ? '偶数' : '奇数'
    })


    // setup函数中将响应式数据对象return出去供template使用
    return {
      a,
      c,
      ...toRefs(state), // 用到扩展运算符、解构等，需要使用toRefs将其变为响应式的
      ...methods,
      change
    }
  }
}
</script>


<style>
</style>
