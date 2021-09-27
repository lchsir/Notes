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
                path: '/about/son',
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