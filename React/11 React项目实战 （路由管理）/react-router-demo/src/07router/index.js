import Home from '../01pages/home'
import About from '../01pages/about'
import User from '../01pages/user'
import Son from './Son'

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/home',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        component: About,
        routes: [
            {
                path: '/about/son', // 此处还未显示页面，后边扩展，子组件需要路由出口
                exact: true,
                component: Son
            }
        ]
    },
    {
        path: '/user',
        exact: true,
        component: User
    }
]

export default routes