<template>
  <a-menu class="gome-menu"
          mode="inline"
          theme="dark"
          :openKeys="openKeys"
          :inline-collapsed="collapsed">
    <section class="logo-box">
      <img class="box-logo"
          v-if="!collapsed"
          src="http://office.gome.inc/static/images/9e71df37-a.logo1.png" />
      <span class="logo-tip" v-else>国美</span>
    </section>
    <section class="menu-box">
      <SidebarItem :menuData="menuData" />
    </section>
  </a-menu>
</template>

<script>
import { reactive, toRefs, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import SidebarItem from './SidebarItem'

export default {
  setup () {
    let store = useStore(); // 定义store
    const collapsed = computed(() => store.state.menu.collapsed) // 是否展开状态值
    const state = reactive({
      selectedKeys: ['/gome/home'], // 当前选中的菜单项 key 数组
      openKeys: ['/gome'], // 当前展开的 SubMenu 菜单项 key 数组
      menuData: [{
        name: 'Antd',
        path: '/404',
        first: true
      },{
        name: '测试模块',
        path: '/gome',
        first: true,
        children: [{
          name: 'Home',
          path: '/gome/home',
        }, {
          name: 'Test',
          path: '/gome/test',
        }, {
          name: 'About',
          path: '/gome/about',
        }, {
          name: 'Antd',
          path: '/gome/antd',
        }]
      },{
        name: 'Navigation Two',
        path: '/custom',
        first: true,
        children: [{
          name: 'Option9',
          path: '/custom/404'
        }, {
          name: 'Submenu',
          path: '/submenu',
          children: [{
            name: 'Option11',
            path: '/submenu/404'
          }, {
            name: 'Option12',
            path: '/submenu/404',
            children: [{
              name: 'Option13',
              path: '/submenu/404',
            }]
          }]
        }]
      }]
    });


    return {
      ...toRefs(state),
      collapsed,
    };
  },
  components: {
    SidebarItem
  },
}
</script>

<style lang="scss" scoped>
.gome-menu {
  width: 260px; 
  height: 100vh;
  display: flex;
  flex-direction: column;
  .logo-box {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    background: rgb(14, 45, 80);
    .box-logo {
      width: 100px;
    }
    .logo-tip {
      font-size: 20px;
      font-weight: 600;
      color: #FFF;
      margin: 0 auto;
    }
  }
  .menu-box {
    flex: 1;
    overflow: auto;
  }
}
</style>