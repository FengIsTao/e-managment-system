import Vue from "vue";
import Router from 'vue-router'

import Login from '../components/Logo.vue'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      redirrect:'/login'
    },
    {
      path:'/login',
      component:Login
    }
  ]
})