import { shopInfo, addOrupdate } from '@/api/index'
import { getUUID } from '@/utils/uuid'
const state = {
  shopinfo: {},
  uuid: getUUID()
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
  },
  // 7. 添加到购物车(对已有物品进行数量改动)
  async addOrupdateShop ({ commit }, { skuId, skuNum }) {
    const res = await addOrupdate(skuId, skuNum)
    if (res.code === 200) {
      // 因为async后面的语句 是返回一个promise， 因此我们可以在此返回promises成功的结果
      console.log('ok')
      return Promise.resolve('ok')
    } else {
      // 返回失败的原因
      return Promise.reject(new Error('请求失败'))
    }
  }
}
const getters = {
  getBrand (state) {
    return state.shopinfo.categoryView || {}
  },
  getskuInfo (state) {
    return state.shopinfo.skuInfo || {}
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
