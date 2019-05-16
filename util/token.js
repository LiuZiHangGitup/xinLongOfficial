const key = 'token'
export const getToken = () =>  {
  return localStorage.getItem(key)
}
export const setToken = (token) =>  {
  return localStorage.setItem(key, token)
}
export const setUserName = (userName) =>  {
  return localStorage.setItem('username', userName)
}
export const removeTocken = () =>  {
  return localStorage.removeItem(key)
}
