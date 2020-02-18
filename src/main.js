import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
// import VueWaves from 'vue-waves-button';
import 'vue-waves-button/waves.css';
import Ripple from 'vue-ripple-directive'
// import NProgress from 'vue-nprogress'
import VueProgressBar from 'vue-progressbar'
import Transitions from 'vue2-transitions'
import Toasted from 'vue-toasted';
import VuejsDialog from 'vuejs-dialog';
import VuejsDialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js'; // only needed in custom components

 // include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css';


const options = {
  // color: '#bffaf3',
  color: 'rgb(143, 255, 199)',
  failedColor: '#874b4b',
  // failedColor: 'red',
  height: '2px',
  thickness: '5px',
  transition: {
    speed: '0.5s',
    opacity: '0.8s',
    termination: 300
  },
  autoRevert: true,
  autoFinish:true
  // location: 'left',
  // inverse: false
}
Vue.use(VuejsDialog);
Vue.use(Toasted)
Vue.use(VueProgressBar, options)
Vue.directive('ripple', Ripple)
Vue.use(Transitions)
Vue.config.productionTip = false
// Vue.use(VueMaterial)
// Vue.use(NProgress)
// const nprogress = new NProgress({ parent: '.nprogress-container' })
 

/* eslint-disable no-new */
const my_app = new Vue({
  // nprogress,
  data: { loading: false },  
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

export default my_app;

// Vue.use(VueWaves, {
//   name: 'waves',
//   duration: 500,
//   delay: 200
// })