import {resolve} from "path"
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({
  //...
  devtools: { enabled: false },
  runtimeConfig: {
    MONGO_URI: process.env.MONGODB_URI
  },
  css:[
    'vuetify/lib/styles/main.sass',
    "@mdi/font/css/materialdesignicons.css"
  ],
  alias: {
    "@": resolve(__dirname, "/")
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
    '@vee-validate/nuxt',
  ],
  nitro: {
    plugins: [
      '~/server/plugins/dbConnection.js'
      // Asegúrate de que la ruta es correcta y usa .ts si es un archivo TypeScript
    ]
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})

