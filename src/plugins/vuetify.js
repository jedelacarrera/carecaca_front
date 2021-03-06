import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    current: 'es',
  },
  icons: {
    iconfont: 'mdi',
    value: {},
  },
  theme: {
    options: {
      customProperties: true,
      variations: false,
    },
    dark: false,
    themes: {
      light: {
        primary: colors.purple.base,
        secondary: colors.grey.darken1,
        success: colors.green.base,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
})
