// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],
  runtimeConfig: {
    public: {
      api: "http://110.46.192.54:5000",
      REGIST_TOKEN: "",
      LOG_SPEED: "",
      map: {
        MAP_BOX_TOKEN: "",
        MAP_BOX_BASE_MAP_URL: "",
      },
    },
  },
  devServer: {
    host: "0.0.0.0",
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
