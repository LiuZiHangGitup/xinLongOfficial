import {getToken, setToken, setUserName }from '@/util/token'
import {login, getUserInfo }from '@/api/index'
const user =  {
  state: {
    token:getToken(), 
    username:localStorage.getItem('username')
  }, 
  mutations: {}, 
  actions: {}
}
export default user
