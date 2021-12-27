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
  },
  {
    path: '/addcar',
    name: 'Addcar',
    component: () => import('@/views/AddCarSuccess/addCarSuccess')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart/cart')
  }
]

const router = new VueRouter({
  routes,
  // 路由的滚动行为  可以指定左坐标  路由跳转就停留在该坐标
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
