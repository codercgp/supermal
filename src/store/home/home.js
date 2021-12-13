import { typeNavList } from '@/api/index'
const state = {
  // 定义左侧商品分类的初始值
  categoryList: []
}
const mutations = {
  // 直接修改state里面的数据
  CATEGORYLIST (state, res) {
    state.categoryList = res
  }
}
const actions = {
  // getTypeList () {
  //   const res = typeNavList
  //   console.log(res)
  // }
  async getTypeList ({ commit }) {
    console.log(111)
    const res = await typeNavList
    console.log(res)
    if (res.code === 200) {
      // 提交mutations
      commit('CATEGORYLIST', res.data)
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
