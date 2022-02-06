import request from '../basic/request.js'

// request拦截器
request.interceptors.request.use(config => {
    config.headers['Authorization'] = 'my-token' // 让每个请求携带自定义token 请根据实际情况自行修改
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

request.get('/hi').then((result) => {
    console.log('result')
    console.log(result)
})