<template>
  <div class="qy-header">
    <div class="header-left">
      <span class="header-collapse" @click="toggleCollapsed">          
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </span>
      <div class="header-crumbs">
        <Breadcrumb />
      </div>
    </div>

    <div class="right">
      <span>退出</span>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import { computed } from 'vue';
import { useStore } from 'vuex';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons-vue';

export default {
  components: {
    Breadcrumb,
    MenuFoldOutlined,
    MenuUnfoldOutlined
  },
  setup() {
    let store = useStore(); //定义store
    let collapsed = computed(() => store.state.menu.collapsed);
    // 切换
    const toggleCollapsed = () => {
      store.commit('TOGGLE_COLLAPSED')
    }

    return {
      collapsed,
      store,
      toggleCollapsed
    }
  },
}
</script>


<style lang="scss" scoped>
.qy-header {
  height: 60px;
  padding: 0 20px 0 10px;
  border-bottom: 1px solid #d1d1d1;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-left {
    display: flex;
    align-items: center;
    .header-collapse {
      cursor: pointer;
      font-size: 20px;
    }
    .header-crumbs {
      color: #606266;
      margin-left: 10px;
    }
  }
}
</style>