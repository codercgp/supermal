
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
