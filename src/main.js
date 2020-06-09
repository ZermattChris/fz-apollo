import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// Global Mixin. Capitalize first letter of word.
// Available to all Components
Vue.mixin({
  methods: {
    capitaliseFirstLetter: function (str) {
      if (typeof str !== 'string') return ''
      //console.log('capitaliseFirstLetter of: ' + str)
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
})