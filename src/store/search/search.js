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
  async searchlist ({ commit }, queryList) {
    const res = await searchList({
      data: queryList
    })
    if (res.code === 200) {
      commit('GETSEARCHLIST', res.data)
    }
    console.log(res.data)
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
