import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.devtools = false

import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue';
Vue.use(Antd)

import Util from './common/util'
Vue.use(Util)

import Storage from './common/storage'
Vue.use(Storage)

import Http from './common/request'
import { Layout } from 'ant-design-vue'
Vue.use(Http)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
