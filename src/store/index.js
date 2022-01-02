import Vue from 'vue'
import vuex from 'vuex'
import home from './home/home'
import search from '@/store/search/search'
import detail from '@/store/Detail/Detail'
import cart from '@/store/Cart/cart'
import user from '@/store/user/user'
Vue.use(vuex)
const store = new vuex.Store({
  modules: {
    home,
    search,
    detail,
    cart,
    user
  }
})
export default store
