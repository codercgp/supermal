import { searchList } from '@/api/index'
const state = {
  searchlist: {}
}
const mutations = {
  GETSEARCHLIST (state, res) {
    state.searchlist = res
  }
}
const actions = {
  async searchlist ({ commit }, params = {}) {
    const res = await searchList(params)
    if (res.code === 200) {
      commit('GETSEARCHLIST', res.data)
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
