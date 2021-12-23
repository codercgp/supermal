import { shopInfo } from '@/api/index'
const state = {
  shopinfo: {}
}
const mutations = {
  GETSHOPINFO (state, data) {
    console.log(data)
    state.shopinfo = data
  }
}
const actions = {
  async getShopInfo ({ commit }, id) {
    const res = await shopInfo(id)
    if (res.code === 200) {
      commit('GETSHOPINFO', res.data)
    }
  }
}
const getters = {
  getBrand (state) {
    return state.shopinfo.categoryView || {}
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
