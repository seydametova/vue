import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import modal from './plugins/modalWindow'
import paymentMenu from './plugins/ModalContextMenu'

Vue.config.productionTip = false
Vue.use(modal)
Vue.use(paymentMenu)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
