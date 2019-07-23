import Vue from 'vue'
import '@/plugins/vuetify.js'
import '@/plugins/vec-table.js'
import '@/plugins/firebase.js'
import store from '@/store/store.js'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
