import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
const axiosBase = axios.create({
  baseURL: 'https://kitanokaito.github.io/alcoToDo-dev/',
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: true,
  responseType: 'json'
})
Vue.use(VueAxios, axiosBase)

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
