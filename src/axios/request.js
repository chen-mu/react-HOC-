import axios from 'axios'

// 创建实例时设置配置的默认值
const instance = axios.create({
    baseURL: 'http://172.10.3.165:3000',
    timeout: 1000,
});

// 添加请求拦截器
instance.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    /**
      1、比如添加token之类的请求头信息
      2、添加每次请求loading等
    */
    config.headers.token = 'token';
    console.log('请求拦截', config);
    if (config.method === 'post') {
        config.headers['Content-Type'] = 'application/json';
    }
    if (config.method === 'get') {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }



    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use((response) => {
    // 对响应数据做点什么
    /**
      1、集中处理响应数据（如错误码处理）
    */

    if (response.status === 200) {
        return response.data.data;
    }

    return response;
}, (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance