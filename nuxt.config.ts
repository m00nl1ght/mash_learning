// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],
  modules: ['nuxt-quasar-ui'],
  quasar: {
    plugins: [
      // 'BottomSheet',
      // 'Dialog',
      // 'Loading',
      // 'LoadingBar',
      // 'Notify',
      // 'Dark',
    ],
    extras: {
      font: 'roboto-font',
      fontIcons: ['material-icons']
    }
  }
})
