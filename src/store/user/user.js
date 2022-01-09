import { reqCode, reqregister, userInfo, getInfo, loOut, uesrAdderss } from '@/api/index'
const state = {
  code: '',
  token: '',
  userInfo: {},
  userAddress: []
}
const mutations = {
  GETCODE (state, code) {
    state.code = code
  },
  TOKEN (state, token) {
    state.token = token
  },
  // 用户信息
  USERINFO (state, data) {
    state.userInfo = data
  },
  // 用户地址
  USERADDRESS (state, data) {
    state.userAddress = data
  }
}
const actions = {
  async getCode ({ commit }, pone) {
    const res = await reqCode(pone)
    if (res.code == 200) {
      commit('GETCODE', res.data)
      return 'ok'
    } else {
      return Promise.error('Promise错误')
    }
  },
  // 注册
  async getregister ({ commit }, { phone: ipone, password, code }) {
    const res = await reqregister({ phone: ipone, password, code })
    if (res.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 登录
  async getUserInfo ({ commit }, { phone, password }) {
    const res = await userInfo({ phone, password })
    if (res.code == 200) {
      console.log(res.data)
      commit('TOKEN', res.data.token)
      localStorage.setItem('TOKEN', res.data.token)
      return Promise.resolve('ok')
    } else {
      return Promise.reject(new Error('请求失败in user.js'))
    }
  },
  // 获取用户的信息
  async getUserInfos ({ commit }) {
    const res = await getInfo()
    if (res.code == 200) {
      commit('USERINFO', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail in getUserInfos'))
    }
  },
  // 退出登录
  async userOut ({ commit }) {
    const res = await loOut()
    if (res.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('Promise in ueaeOut'))
    }
  },
  // 获取用户的地址
  async getAddress ({ commit }) {
    const res = await uesrAdderss()
    console.log(res)
    if (res.code == 200) {
      commit('USERADDRESS', res.data)
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
