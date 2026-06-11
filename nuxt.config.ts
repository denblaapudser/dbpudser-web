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

  // Only generate the styles we actually use (no italics)
  fonts: {
    defaults: {
      styles: ['normal']
    }
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
      turnstileSiteKey: '',
      // Canonical production URL — used by robots.txt and sitemap.xml
      siteUrl: 'https://www.fl-rene.dk'
    }
  },

  // Long cache for static images (stable filenames — rename or purge on change)
  routeRules: {
    '/img/**': { headers: { 'cache-control': 'public, max-age=31536000' } }
  },

  // Prerender all pages at build time (static-fast), while the Node server
  // still handles dynamic routes like /api/lead.
  nitro: {
    // Pre-generate .br/.gz for public assets so the Node server serves them
    // compressed (the 196 KiB CSS → ~25 KiB on the wire)
    compressPublicAssets: {
      gzip: true,
      brotli: true
    },
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
