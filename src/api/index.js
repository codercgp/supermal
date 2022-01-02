
import requests from '@/api/ajax'
import mockajax from '@/api/mockajax'
// 获取左侧分类的请求
export const typeNavList = () => requests.get(
  '/product/getBaseCategoryList')
// 获取mock数据中的轮播图
export const bannerList = () => mockajax.get('/banner')
// 获取Home的商品信息
export const shopList = () => mockajax.get('/shopList')
// 获取搜索页的信息
export const searchList = (params = {}) => requests({
  method: 'post',
  url: '/list',
  data: params
})
export const shopInfo = (id) => requests({
  method: 'get',
  url: `/item/${id}`
})
export const addOrupdate = (skuId, skuNum) => requests({
  method: 'post',
  url: `/cart/addToCart/${skuId}/${skuNum}`
})
// 获取购物车的请求
export const reqcart = () => requests({
  url: '/cart/cartList',
  method: 'get'
})
// 商品是否选中
export const reqIsChecked = (skuId, isChecked) => requests({
  method: 'get',
  url: `/cart/checkCart/${skuId}/${isChecked}`
})
export const deleteShop = (skuId) => requests({
  method: 'delete',
  url: `/cart/deleteCart/${skuId}`
})
// 发送验证码
export const reqCode = (phone) => requests({
  method: 'get',
  url: `/user/passport/sendCode/${phone}`
})
// 注册用户
export const reqregister = (parmas) => requests({
  method: 'post',
  url: '/user/passport/register',
  data: parmas
})
// 登录用户
export const userInfo = (params) => requests({
  method: 'post',
  url: '/user/passport/login',
  data: params
})
// 获取用户信息
export const getInfo = () => requests({
  method: 'get',
  url: '/user/passport/auth/getUserInfo'
})
// 退出登录
export const loOut = () => requests({
  url: '/user/passport/logout',
  method: 'get'
})
// 获取用户的地址
export const uesrAdderss = () => mockajax({
  url: '/address',
  method: 'get'
})
// 获取商品清单
export const shopLists = () => requests({
  method: 'get',
  url: '/order/auth/trade'
})
// 获取商品列表
export const goodsList = (tradeNo, params) => requests({
  method: 'post',
  url: `order/auth/submitOrder?tradeNo=${tradeNo}`,
  data: params
})
// 提交订单
export const reqOrder = (tradeNo, params) => requests({
  method: 'post',
  url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
  data: params
})
// 获取支付信息
export const reqPayInfo = (orderId) => requests({
  method: 'get',
  url: `/payment/weixin/createNative/${orderId}`
})
// 查看订单的支付状态
export const reqPayed = (orderId) => requests({
  method: 'GET',
  url: `/payment/weixin/queryPayStatus/${orderId}`
})
// 发请求个人中心
export const reqMyOrder = (page, limit) => requests(
  {
    method: 'GET',
    url: `/order/auth/${page}/${limit}`
  }
)
