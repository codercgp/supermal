import Vue from 'vue'
import vuex from 'vuex'
import home from './home/home'
Vue.use(vuex)
const store = new vuex.Store({
  modules: {
    home
  }
})
export default store
