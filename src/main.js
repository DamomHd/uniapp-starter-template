/*
 * @Author: Damom
 * @Date: 2020-09-09 20:32:00
 * @LastEditors: Damom
 * @LastEditTime: 2020-09-13 15:31:19
 * @Description: file content
 */
import Vue from 'vue'
import App from './App'
import store from '@/store'
import md5 from 'js-md5';
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$md5 = md5;
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
