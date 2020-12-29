import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Goods from '@/components/Goods'
import Cart from '@/components/Cart'
import Order from '@/components/Order'
import Login from '@/components/Login'
import Pay from '@/components/Pay'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path:'/login',
      name:'/Login',
      component: Login
    },
    {
      path:'/pay',
      name:'/Pay',
      component: Pay
    }
  ]
})
