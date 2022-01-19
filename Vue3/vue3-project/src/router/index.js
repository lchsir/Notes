import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/components/Layout/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: '404',
    path: '/:pathMatch(.*)*',
    component: () => import(/* webpackChunkName: "404" */ '../views/error/404.vue')
  },
  {
    component: Layout,
    meta: { title: '测试模块' },
    children: [{
      name: 'home',
      path: '/gome/home',
      meta: { title: '首页' },
      component: () => import(/* webpackChunkName: "home" */ '../views/gome/home.vue')
    },{
      name: 'about',
      path: '/gome/about',
      meta: { title: '关于' },
      component: () => import(/* webpackChunkName: "about" */ '../views/gome/about.vue')
    },
    {
      name: 'test',
      path: '/gome/test',
      meta: { title: '测试' },
      component: () => import(/* webpackChunkName: "test" */ '../views/gome/test.vue')
    },
    {
      name: 'antd',
      path: '/gome/antd',
      meta: { title: 'Antd Design' },
      component: () => import(/* webpackChunkName: "antd" */ '../views/gome/antd.vue')
    }]
  },
  
]

const router = createRouter({
  linkActiveClass: 'routeLinkActive',
  history: createWebHashHistory(),
  routes
})

export default router
