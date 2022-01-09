import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/home.vue'
import store from '@/store'
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
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register/register')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index')
  },
  {
    path: '/trade',
    name: 'Trade',
    component: () => import('@/views/Trade/trade')
  },
  {
    path: '/pay',
    name: 'Pay',
    component: () => import('@/views/Pay/index')
  },
  {
    path: '/paySuccess',
    name: 'PaySuccess',
    component: () => import('@/views/PaySuccess/index')
  },
  {
    path: '/center',
    name: 'Center',
    component: () => import('@/views/Center/index')
  }
]

const router = new VueRouter({
  routes,
  // 路由的滚动行为  可以指定左坐标  路由跳转就停留在该坐标
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
router.beforeEach(async (to, from, next) => {
  // 如果已经登录
  const token = store.state.user.token
  console.log(token)
  const name = store.state.user.userInfo.name
  console.log(name)
  if (token) {
    // 当前标识已经登录了   //已经登录而且还想去登录------不行
    if (to.path == '/login' || to.path == '/register') {
      next('/')
    } else {
      // 已经登陆了,访问的是非登录与注册
      // 登录了且拥有用户信息放行
      if (name) {
        next()
      } else {
        try {
          await store.dispatch('getUserInfos')
          next()
        } catch (e) {
        // token过期
          // token失效从新登录
          await store.dispatch('userOut')
          next('/login')
        }
      }
    }
  } else {
    // 未登录：不能去交易相关、不能去支付相关【pay|paysuccess】、不能去个人中心
    // 未登录去上面这些路由-----登录
    const toPath = to.path
    if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
      // 把未登录的时候向去而没有去成的信息，存储于地址栏中【路由】
      next('/login?redirect=' + toPath)
    } else {
      // 去的不是上面这些路由（home|search|shopCart）---放行
      next()
    }
    next()
  }
})
export default router
