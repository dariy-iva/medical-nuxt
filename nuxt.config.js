export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'LOreal ACD',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Medical site' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ],
    noscript: [ { children: 'JavaScript is required' } ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ 'element-ui/lib/theme-chalk/index.css', '@/assets/styles/main.scss' ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ '@/plugins/element-ui' ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@pinia/nuxt'
  ],

  // Pinia module configuration: https://pinia.vuejs.org/ssr/nuxt.html
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore' // import { defineStore } from 'pinia'
      // [ 'defineStore', 'definePiniaStore' ] // import { defineStore as definePiniaStore } from 'pinia'
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [ /^element-ui/ ]
  }
};
