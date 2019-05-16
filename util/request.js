import axios from 'axios'
// import store from '../store'
import {getToken, setToken }from '@/util/token' // 导入token
// const baseUrl = process.env.BASE_API
// 小程序绑定接口
axios.defaults.isRetryRequest = false
// 创建axios实例
// request拦截器
axios.interceptors.request.use(
  config =>  {
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    // 查看是否有token  让每个请求携带自定义token
    // 暂时不加token
    if (getToken()) {config.headers['token'] = getToken()}return config
  })


export const postRequest = (url, data) =>  {
  // 判断是否表单验证接口 并已经登录
  if (url == '/service/service_submit' &&  ! getToken()) {
    const oldUrl = window.location.pathname 
    localStorage.setItem('oldUrl', oldUrl)
    window.location.href = '/login'
  }else {return new Promise((resolve, reject) =>  {axios.post('http://47.105.165.101:8686/xinlong/home' + url, data).then(res =>  {resolve(res)}).catch(err =>  {reject(err)})})}
}

export const GET = (url, data =  {}) =>  {
  return new Promise((resolve, reject) =>  {
    axios.get('http://47.105.165.101:8686/xinlong/home' + url).then(res =>  {
resolve(res.data)
    }).catch(err =>  {
      reject(err)
    })
  })
}
