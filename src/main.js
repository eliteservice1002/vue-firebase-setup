import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
