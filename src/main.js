import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router'
import VuePusher from '@/plugins/pusher'

Vue.config.productionTip = false

Vue.use(VuePusher, {
  api_key: '9ba9d78bd91108bb3657',
  options: {
    cluster: 'sa1',
    encrypted: true,
  },
})

new Vue({
  vuetify,
  router,

  render: function (h) {
    return h(App)
  },
}).$mount('#app')
