import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/home.vue'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search/:keyword?',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search/search')
  },
  // parmas参数必须使用占位符
  {
    path: '/detail/id',
    name: 'Detail',
    component: () => import('@/views/Detail/index')
  }
]

const router = new VueRouter({
  routes
})

export default router
