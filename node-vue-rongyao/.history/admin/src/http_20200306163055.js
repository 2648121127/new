import axios from 'axios'
import Vue from 'vue'

const http = axios.create({
    baseURL:'http://localhost:3000/admin/api'
})

//请求拦截器
http.interceptors.request.use(config => {
    // Do something before request is sent
    return config;
  }, error => {
    // Do something with request error
    return Promise.reject(error);
  });

//响应拦截器
http.interceptors.response.use(res => {
    return res;
},err => {
    if(err.response.data.message){
        Vue.prototype.$message({
            type:'error',
            message:err.response.data.message,
        })
    }
    return Promise.reject(err)
})

export default http