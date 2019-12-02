import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
// import VueWaves from 'vue-waves-button';
import 'vue-waves-button/waves.css';

Vue.config.productionTip = false
// Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// Vue.use(VueWaves, {
//   name: 'waves',
//   duration: 500,
//   delay: 200
// })