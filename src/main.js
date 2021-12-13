import Vue from 'vue'
import App from './App.vue'
import router from './router'
import typenav from '@/components/TypeNav/typenav'
import store from '@/store'
// 全局注册三级联动的组件
Vue.component('typenav', typenav)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
