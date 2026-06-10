// Public, indexable routes. Keep in sync with the service slugs in
// useSiteConfig / the prerender list in nuxt.config.
const routes = [
  { loc: '/', priority: '1.0' },
  { loc: '/ydelser', priority: '0.9' },
  { loc: '/ydelser/vinduespolering', priority: '0.8' },
  { loc: '/ydelser/solcellevask', priority: '0.8' },
  { loc: '/ydelser/fliserens', priority: '0.8' },
  { loc: '/ydelser/algebehandling-tag', priority: '0.8' },
  { loc: '/ydelser/algebehandling-facade', priority: '0.8' },
  { loc: '/om-os', priority: '0.7' },
  { loc: '/job', priority: '0.5' }
]

export default defineEventHandler((event) => {
  const base = useRuntimeConfig().public.siteUrl.replace(/\/$/, '')

  setResponseHeader(event, 'content-type', 'application/xml; charset=utf-8')

  const urls = routes
    .map(r => `  <url>\n    <loc>${base}${r.loc}</loc>\n    <priority>${r.priority}</priority>\n  </url>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
})
