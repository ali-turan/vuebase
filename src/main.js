import Vue from 'vue'
import App from '@/App.vue'

// Core
import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'

// Import Plugins, Utils And Directives
import "@/loader"

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
