import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,

  head: {
    titleTemplate: '%s - LaicaG',
    title: 'QR Code Scanner',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: [],

  plugins: [
     { src: '~/plugins/html5-qrcode.client.js', mode: 'client' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  axios: {
    baseURL: 'http://localhost:8000', // Your backend API base URL
  },

  auth: {
    redirect: {
      login: '/auth/signin',         // Where to redirect if user is not authenticated
      logout: '/auth/signin',        // After logout
      callback: '/auth/callback', // Callback URL after Google redirects back
      home: '/'  // After successful login
    },
    autofetchUser: false,
    strategies: {
      google: {
        clientId: '149773114344-g071sfiru9cjvqj1m63bt711v15pnua5.apps.googleusercontent.com',
        scheme: 'oauth2',
        endpoints: {
         authorization: 'https://accounts.google.com/o/oauth2/auth',
         userinfo: 'https://www.googleapis.com/oauth2/v3/userinfo',
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800,
        },
        responseType: "token id_token",
        scope: ['openid', 'profile', 'email'],
        redirectUri: process.env.REDIRECT_URI,
        codeChallengeMethod: "",
      }
    }
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {}
}