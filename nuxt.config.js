export default {
  components: true,
  head: {
    titleTemplate: "Nuxt app: %s",
    htmlAttrs: {
      lang: "en"
    },
    meta: [{
      charset: "utf-8"
    }]
  },
  router: {
    prefetchLinks: false
  }
}