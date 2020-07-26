import axios from 'axios'

function request(config: object) {
  const instance = axios.create({
    baseURL: 'http://httpbin.org',
    // baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 8000,
  })
  // 请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config)
    return config
  }, err => {
    // console.log(err)
  })
  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  // 发送真正的网络请求
  return instance(config)
}


export default (Vue: Function) => {
  Vue.prototype.$my_http = (config:{method?:string,url:string,params?:object}):any => {
    // if(!config.method){
    //   config.method = 'get'
    // }
    return request({
      method: config.method,
      url: config.url,
      params: config.params
    })
  }
  Vue.prototype.$my_get = (config:{url:string,params?:object}):any => {
    return request({
      url: config.url,
      method: 'get',
      params: config.params
    })
  }
  Vue.prototype.$my_post = (config:{url:string,params?:object}):any => {
    return request({
      url:config.url,
      method: 'post',
      params: config.params
    })
  }
  Vue.prototype.$my_put = (config:{url:string,params?:object}):any => {
    return request({
      url: config.url,
      method: 'put',
      params: config.params
    })
  }
  Vue.prototype.$my_all = (arg:any[]) => {
    return axios.all(arg)
  }
}
