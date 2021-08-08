
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  // icons: {
  //   iconfont: 'mdiSvg',
  // },
  theme: {
    themes: {
      light: {
        //primary: colors.purple.darken3,
        primary: colors.grey.darken3,
        secondary: colors.grey.darken1,
        success: colors.green.darken2,
        successBright: colors.green.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        fzPink: "#CB0073",
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
})

// Vuetify default colours.
// {
//   primary: '#1976D2',
//   secondary: '#424242',
//   accent: '#82B1FF',
//   error: '#FF5252',
//   info: '#2196F3',
//   success: '#4CAF50',
//   warning: '#FFC107',
// }
