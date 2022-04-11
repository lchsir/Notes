<template>
  <div>
    <template v-for="item in menuList">
      <template v-if="!item.children">
        <a-menu-item :key="item.path">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </a-menu-item>
      </template>
      <template v-else>
        <a-sub-menu :key="item.path">
          <template #icon>
            <MailOutlined />
          </template>
          <template #title>{{ item.name }}</template>
          <SidebarItem :menuData="item.children" :key="item.path"/>
        </a-sub-menu>
      </template>
    </template>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue"
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';

export default {
  name: 'SidebarItem',
  props: {
    menuData: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined
  },
  setup(props) {

    const state = reactive({
      menuList: []
    })

    onMounted(() => {
      getMenuList()
    })

    const getMenuList = () => {
      state.menuList = props.menuData
    }
    
    return {
      ...toRefs(state)
    }
  }
}
</script>


<style lang="scss" scoped>
:deep(.ant-menu-item-selected) {
  background: #1890fd;
  .ant-menu-title-content {
    .routeLinkActive {
      color: #FFF;
    }
  }
}
</style>