import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router'
// ⽩名单
const whiteList = ['/', '/404']
NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.matched.length === 0) {
   next('/404') // 判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404⻚⾯
  }
  if (whiteList.indexOf(to.path) !== -1) {
    // 在免登录⽩名单，直接进⼊
    next()
  } else {
    next()
    NProgress.done()
  }
})

router.afterEach(() => {
  NProgress.done()
})