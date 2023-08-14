// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // ...
    "@pinia/nuxt",
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  app: {
    baseURL: "/email-inbox-clone/", // baseURL: '/<repository>/'
    buildAssetsDir: "assets", // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
});
