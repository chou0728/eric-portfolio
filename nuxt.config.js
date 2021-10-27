import pkg from './package';

export default {
  mode: 'universal',
  router: {
    middleware: 'i18n',
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'zh'
    },
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description || ''},
    ],
    link: [
      // {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    '@/assets/scss/main.scss',
  ],

  /*
  ** Scss styleResources
  */

  styleResources: {
    scss: [
      'assets/scss/_element-ui.scss',
      'assets/scss/_mixin.scss',
      'assets/scss/_reboot.scss',
      'assets/scss/_transition.scss',
      'assets/scss/_variables.scss',
      'assets/scss/_element-ui.scss'
    ],
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { ssr: true, src: '@/plugins/element-ui' },
    { ssr: true, src: '@/plugins/i18n' },
    { ssr: true, src: '@/plugins/firebase' },
    { ssr: false, src: '@/plugins/vue-lazyload' }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  */
  build: {
    // publicPath: '/',
    // analyze: true,
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    vendor: ['axios','element-ui', 'vue-i18n'],
    extractCSS: true,
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk',
          },
        ]
      ],
      comments: true,
    },
    extend (config, ctx) {},
  },
  /*
  ** Generate configuration
  */
  generate: {
    fallback: true,
    fallback: '/index.html',
    routes: [
      '/',
    ],
  },
  env: {
    baseUrl: process.env.BASE_URL,
  },
  // https://nuxtjs.org/api/configuration-transition
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },
  transition: {
    name: 'fade',
    mode: 'out-in',
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  }
};
