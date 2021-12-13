
import requests from '@/api/ajax'
export const typeNavList = requests.get(
  '/product/getBaseCategoryList')
