import Vue from 'vue'
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from './router/index'
import '../src/assets/css/global.css'

Vue.use(ElementUI)

new Vue({
  router,
  render:h=>h(App)
}).$mount('#app')