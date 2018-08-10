import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import eventBus from "@/utils/eventBus"
eventBus.$on("test",()=>{
  console.log("Event Test");
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
