<script>
import { ref, reactive, onMounted, toRefs, computed, watch } from 'vue'
export default {
  props: ['msg'],
  setup(props, context) {
    // setup第一个参数是props,是响应式的,不能使用es6解构,否则消除prop的响应式
    // setup中第二个参数是一个普通JS对象,暴露了其他可能在setup中有用的值,它是一个普通的JS对象,不是响应式的。可以使用es6解构
    // console.log(props.msg, context)

    // 如果要解构prop,可以在setup函数中使用toRefs函数来完成操作
    let { msg } = toRefs(props)
    // console.log(msg.value)

    // ref()函数用来根据给定的值创建一个响应式的数据对象
    // ref()函数调用的返回值是一个对象,这个对象上只包含一个value属性
    const count = ref(1)

    // 如果要为JS对象创建响应式状态,可以用reactive
    const obj = reactive({ title: 'Vue3 Guide' })
    // reactive用法与ref用法相似,也是将数据变成响应式数据,不同的是ref用于基本数据类型
    // reactive用于复杂数据类型,reactive的转换是'深度转换',它会影响传递对象的所有嵌套property

    const init = () => {
      console.log('hello world init')
    }

    // 我们可以在setup里注册生命周期钩子函数,组合式API上的生命周期钩子函数不变,但是有前缀on,onMounted
    onMounted(init)

    // 独立的computed计算属性
    // console.log(count.value)
    const com = computed(() =>count.value * 2 )

    // watch不用加on就可以使用,可以接收三个参数
    watch(count, (newVal, oldVal) => {
      console.log(count.value, newVal, oldVal)
    })

    return {
      count,
      obj,
      com
    }

  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ count }}</h2>
  <h3>{{ obj.title }}</h3>
  <h4>{{ com }}</h4>
  <button @click="count++">count is: {{count}}</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
