
import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
const requests = axios.create({
  baseURL: '/api',
  timeout: 5000
})
requests.interceptors.request.use((config) => {
  // config是什么?配置对象
  nprogress.start()
  // 如果有uuid 则 添加到请求头中
  if (store.state.detail.uuid) {
    config.headers.userTempId = store.state.detail.uuid
  }
  if (localStorage.getItem('TOKEN')) {
    config.headers.token = localStorage.getItem('TOKEN')
  }
  return config
})

// 响应拦截器----当服务器手动请求之后，做出响应（相应成功）会执行的
requests.interceptors.response.use(
  (res) => {
    nprogress.done()
    return res.data
  }, (err) => {
    alert(' 服务器响应数据失败 ' + err)
  }
)

export default requests
