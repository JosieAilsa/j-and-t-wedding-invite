import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        dark: true,
        colors: {
          background: '#E7DBCB',
          surface: '#E7DBCB',
          // Link colors
          primary: '##2E3738',
          secondary: '##2E3738',
          // Text colors
          'on-background': '##2E3738', 
          'on-surface': '##2E3738',
          'on-primary': '#E7DBCB', 
          'on-secondary': '#E7DBCB',
          'on-tertiary': '#251F1F',
          anchor: '##2E3738',

          // Additional colors from your palette
          accent: '#D5AB6F',
          info: '#2E3738',
          success: '#2E3738',
        }
      }
    }
  }
})
