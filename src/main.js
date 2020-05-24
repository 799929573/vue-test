import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import storage from './model/storage.js'
Vue.prototype.storage = storage

import VueResource from 'vue-resource'
Vue.use(VueResource)

import axios from 'axios'
Vue.prototype.$axios = axios

import router from './router/router.js'

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
