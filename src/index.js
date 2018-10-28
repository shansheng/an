
import Vue from 'vue';
import App from './App.vue'
import router from './routes.js'

import './assets/styles/base.css'
import './assets/styles/checkbox.css'

import iView from './main';

Vue.use(iView);

// 开启错误提示
Vue.config.debug = true;

new Vue({
  router,
  el: '#appContainer',
  render: h => h(App)
})