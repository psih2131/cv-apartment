// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  css: [
    '~/assets/style/fonts.scss',
    '~/assets/style/main.scss'
  ],
  modules: ['@pinia/nuxt'],
})