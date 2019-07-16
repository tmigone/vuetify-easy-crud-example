import Vue from 'vue'
import '@/plugins/vuetify.js'
import '@/plugins/vec-table.js'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
