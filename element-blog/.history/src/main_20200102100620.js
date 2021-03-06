import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
//引入markdown编辑器
import mavonEditor from 'mavon-editor';

// use
Vue.use(mavonEditor)

Vue.use(ElementUI);

Vue.config.productionTip = false

import axios from 'axios'

Vue.prototype.$http = axios.create({
  baseURL:'http://localhost:3001/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
