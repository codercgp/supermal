import Vue from 'vue'
import App from './App.vue'
import router from './router'
import typenav from '@/components/TypeNav/typenav'
import store from '@/store'
// 全局引入swiper样式
import 'swiper/css/swiper.min.css'
// 引入mock数据
import './mock/mockServe'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 全局注册三级联动的组件
Vue.component('typenav', typenav)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
