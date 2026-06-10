// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  ui: {
    colorMode: false
  },

  runtimeConfig: {
    // Server-only secrets (set via NUXT_* env vars in production)
    turnstileSecretKey: '',
    smtpHost: '',
    smtpPort: '',
    smtpUser: '',
    smtpPass: '',
    leadEmailTo: '',
    leadEmailFrom: '',
    public: {
      // Exposed to the client (set via NUXT_PUBLIC_* env vars)
      turnstileSiteKey: ''
    }
  },

  // Prerender all pages at build time (static-fast), while the Node server
  // still handles dynamic routes like /api/lead.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/om-os',
        '/ydelser',
        '/job',
        '/ydelser/vinduespolering',
        '/ydelser/solcellevask',
        '/ydelser/fliserens',
        '/ydelser/algebehandling-tag',
        '/ydelser/algebehandling-facade'
      ]
    }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
