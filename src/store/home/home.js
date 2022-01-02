import { typeNavList, bannerList, shopList } from '@/api/index'
const state = {
  // 定义左侧商品分类的初始值
  categoryList: [],
  // 定义轮播图的数组
  bannerimages: [],
  // 定义Home商品的数组
  shoplist: []
}
const mutations = {
  // 直接修改state里面的数据
  CATEGORYLIST (state, res) {
    state.categoryList = res
  },
  // 修改state中的轮播图数据
  GETIMAGES (state, res) {
    state.bannerimages = res
  },
  GETSHOPLIST (state, res) {
    state.shoplist = res
  }
}
const actions = {
  // 获取左侧列表
  async getTypeList ({ commit }) {
    const res = await typeNavList()

    if (res.code === 200) {
      // 提交mutations
      commit('CATEGORYLIST', res.data)
    }
  },
  // 获取轮播图
  async getimages ({ commit }) {
    const res = await bannerList()
    if (res.code === 200) {
    // 修改mutations
      commit('GETIMAGES', res.data)
    }
  },
  // 获取home 的商品信息
  async getshopList ({ commit }) {
    const res = await shopList()
    if (res.code === 200) {
      commit('GETSHOPLIST', res.data)
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
