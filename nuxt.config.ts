// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: false,
    tsConfig: {
      compilerOptions: {
        baseUrl: '.',
        moduleResolution: 'node'
      }
    }
  },
  // srcDir: 'src',
  imports: {
    autoImport: false,
    dirs:['stores']
  },
  components: [
    { path: '~/components', pathPrefix: false },
  ],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_API_BASE || 'https://api.example.com/',
    },
  },
  modules: [
    '@pinia/nuxt',
    'nuxt-quasar-ui'
  ],
  quasar: {
    config: {
      brand: {
        primary: '#222222',
        secondary: '#e8e8e8',
        accent: '#9C27B0',

        dark: '#1d1d1d',
        'dark-page': '#121212',

        positive: '#93e6a6',
        negative: '#e84659',
        info: '#537ae6',
        warning: '#f2ec38'
      }
    }
  }
})