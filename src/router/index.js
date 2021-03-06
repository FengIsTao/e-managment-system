import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../components/Login.vue'
const Login = () => import(/* webpackChunkNama:"login_home_welcome" */ '../components/Login.vue')

import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue'
import Cate from '../components/goods/Cate.vue'
import Params from '../components/goods/Params.vue'
import GoodsList from '../components/goods/List.vue'
import Add from '../components/goods/Add.vue'
import Order from '../components/order/Order.vue'
import Report from '../components/report/Report.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirrect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', name: 'Welcome', component: Welcome },
        { path: '/users', name: 'Users', component: Users },
        { path: '/rights', name: 'Rights', component: Rights },
        { path: '/roles', name: 'Roles', component: Roles },
        { path: '/categories', name: 'Cate', component: Cate },
        { path: '/params', name: 'Params', component: Params },
        { path: '/goods', name: 'List', component: GoodsList },
        { path: '/goods/add', name: 'Add', component: Add },
        { path: '/orders', name: 'Order', component: Order },
        { path: '/reports', name: 'Report', component: Report }
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') return next()
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/login')
//   next()
// })

export default router
