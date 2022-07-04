import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBGMn1KYiSzb002Sx58nSPkTe0oz29ZCu0',
    libraries: 'places',
  }
});

const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

