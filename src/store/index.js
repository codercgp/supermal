import Vue from 'vue'
import vuex from 'vuex'
import home from './home/home'
import search from '@/store/search/search'
Vue.use(vuex)
const store = new vuex.Store({
  modules: {
    home,
    search
  }
})
export default store
