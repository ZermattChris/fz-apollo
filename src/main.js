import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/storex"
import vuetify from './plugins/vuetify'

import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://cf9cb6a8113a40c3a7775e71978e27cc@o456804.ingest.sentry.io/5450195",
  integrations: [
    new VueIntegration({
      Vue,
      tracing: true,
    }),
    new Integrations.BrowserTracing(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

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
    }
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


