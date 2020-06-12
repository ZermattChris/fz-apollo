import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

// Global Mixin. Capitalize first letter of word.
// Available to all Components
Vue.mixin({
  methods: {
    capitaliseFirstLetter: function (str) {
      if (typeof str !== 'string') return ''
      //console.log('capitaliseFirstLetter of: ' + str)
      return str.charAt(0).toUpperCase() + str.slice(1)
    }, 
    // tunnelEmit(event, ...payload) {
    //   let vm = this
    //   while (vm && !vm.$listeners[event]) {
    //     vm = vm.$parent
    //   }
    //   if (!vm) return console.error(`no target listener for event "${event}"`)
    //   vm.$emit(event, ...payload)
    // }
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
