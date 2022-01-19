<template>
  <div>
    <h1>antd 组件</h1>
    <a-radio-group :value="size">
      <a-radio-button value="large">Large</a-radio-button>
      <a-radio-button value="default">Default</a-radio-button>
      <a-radio-button value="small">Small</a-radio-button>
    </a-radio-group>
    <br />
    <br />
    <a-radio-group name="radioGroup"
                   :value="value">
      <a-radio value="1">A</a-radio>
      <a-radio value="2">B</a-radio>
      <a-radio value="3">C</a-radio>
      <a-radio value="4">D</a-radio>
    </a-radio-group>
    <br />
    <div ref="domRef">获取dom元素</div>
    <br />
    <a-button type="primary"
              :size="size">Primary</a-button>
    <a-button :size="size">Normal</a-button>
    <a-button type="dashed"
              :size="size">Dashed</a-button>
    <a-button danger
              :size="size">Danger</a-button>
    <a-button type="link"
              :size="size">Link</a-button>
    <br />
    <br />
    <a-table :dataSource="dataSource"
             :columns="columns" />

  </div>
</template>
<script>
import { onMounted, ref } from 'vue'

export default {
  setup () {
    const value = ref(1);
    const domRef = ref()
    const size = ref('normal')

    onMounted(()=>{
      console.log('获取dom元素：', domRef.value)
    })
    return {
      value,
      domRef,
      size,
      dataSource: [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ],
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
      ],
    };
  },
}
</script>

