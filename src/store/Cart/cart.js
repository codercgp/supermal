import { reqcart, reqIsChecked, deleteShop } from '@/api/index'
const state = {
  getCarInfo: []
}
const mutations = {
  GETCARINFO (state, res) {
    state.getCarInfo = res
  }
}
const actions = {
  // 异步获取购物车商品
  async getCart ({ commit }) {
    const res = await reqcart()
    if (res.code === 200) {
      commit('GETCARINFO', res.data)
    }
  },
  // 修改是否选中
  async IsChecked ({ commit }, { skuId, isChecked }) {
    const res = await reqIsChecked(skuId, isChecked)
    if (res.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('失败的Promise'))
    }
  },
  // 删除商品
  async shopDelete ({ commit }, skuId) {
    const res = await deleteShop(skuId)
    if (res.code == 200) {
      return Promise.resolve('ok')
    } else {
      return Promise.reject(new Error('请求失败in cart.js'))
    }
  }
}
const getters = {
  cartInfo (state) {
    return state.getCarInfo[0] || {}
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
