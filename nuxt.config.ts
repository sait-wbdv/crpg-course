// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase", "@nuxt/content", "@nuxt/ui"],
  ui: {
    global: true,
    icons: [],
  },
  supabase: {
    redirect: false,
  },
});
