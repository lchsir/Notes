import Home from '../pages/home'
import Button from '../pages/ui/button'
import Rich from '../pages/rich'
import City from '../pages/city'
import Order from '../pages/order'
import User from '../pages/user'
import BikeMap from '../pages/bikemap'

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
        path: '/ui',
        component: Button
    },
    {
        path: '/rich',
        component: Rich
    },
    {
        path: '/city',
        component: City
    },
    {
        path: '/order',
        component: Order
    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/bikemap',
        component: BikeMap
    },
]

export default routes