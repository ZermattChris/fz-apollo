import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/storex"
import vuetify from './plugins/vuetify'
import i18n from './i18n'

import Bugsnag from '@bugsnag/js'
import BugsnagPluginVue from '@bugsnag/plugin-vue'

Bugsnag.start({
  apiKey: 'cb57aa27093fb50e11a5f5c1873a8923',
  plugins: [new BugsnagPluginVue()]
})

Vue.config.productionTip = false


// Global Mixin. Capitalize first letter of word.
// Available to all Components
// NOTE: This isn't what Mixins are designed for,
//       but is okay as a first try...
Vue.mixin({
  methods: {
    capitaliseFirstLetter: function (str) {
      if (typeof str !== 'string') return ''
      //console.log('capitaliseFirstLetter of: ' + str)
      return str.charAt(0).toUpperCase() + str.slice(1)
    }, 
    isObjEmpty: function (obj) {
      //console.log('Object empty test: ', Object.keys(obj).length)
      if (obj == null) return true
      if (Object.keys(obj).length > 0) return false
      return true
    },
    scrollToId: function (elIdToTarget = '') {
      setTimeout(() => { this.$scrollTo(elIdToTarget, 500) }, 100)
    },
    // // Think this needs to be an input element.
    // copy: function (elIdToTarget = '') {
    //   let copyText = document.querySelector(elIdToTarget);
    //   copyText.select();
    //   document.execCommand("copy");
    // }
  }
})

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')


Bugsnag.getPlugin('vue').installVueErrorHandler(Vue)
// Test error shows up in bugsnag.com
//Bugsnag.notify(new Error('Test error'))


const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)