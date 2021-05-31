import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import store from './store'

import VueLazyLoad from 'vue-lazyload'
import VueCookies from 'vue-cookies'
import vuetify from './plugins/vuetify';
import vueScrollto from 'vue-scrollto'
Vue.use(vueScrollto)

Vue.use(VueLazyLoad)
Vue.use(VueCookies)
Vue.use(ElementUI);

//set global config
Vue.$cookies.config('7d')

// set global cookie
Vue.$cookies.set('theme', 'default');
Vue.$cookies.set('hover-time', '1s');

Vue.config.productionTip = false
// Vue.config.devtools = false;

// Vue.config.errorHandler = function(err, vm, info) {
//   console.log(`Error: ${err.toString()}\nInfo: ${info}`);
// }

// Vue.config.warnHandler = function(msg, vm, trace) {
//   console.log(`Warn: ${msg}\nTrace: ${trace}`);
// }

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
