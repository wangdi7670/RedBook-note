// 测试拦截器

const { default: axios } = require("axios");

const instance = axios.create({
    baseURL: 'http://localhost:8080'
})

// 在请求之前执行
instance.interceptors.request.use((config) => {
    // Do something before request is sent
    console.log('request-before')
    // console.log(config)
    return config
}, (error) => {
    // Do something with request error
    console.log(error) 
    return Promise.reject(error)
})

// 在获取response之后
// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('response-after')
    // console.log(response)
    return response.data;
}, function (error) {

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});



setTimeout(() => {
    console.log('定时器----------------')
}, 0)

instance.get('/hi')
.then((res) => {
    console.log('res: ' + res)
})

