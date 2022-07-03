import Vue from 'vue'
import App from './App.vue'

const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

