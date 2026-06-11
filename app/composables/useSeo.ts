interface SeoOptions {
  title: string
  description: string
  /** Absolute path under the site, e.g. /img/foo.webp. Defaults to the hero image. */
  image?: string
}

/**
 * Sets per-page SEO: title (+ template), description, Open Graph, Twitter card
 * and a canonical URL pointing at the production domain.
 */
export function useSeo({ title, description, image }: SeoOptions) {
  const { public: { siteUrl } } = useRuntimeConfig()
  const route = useRoute()

  const base = siteUrl.replace(/\/$/, '')
  const url = `${base}${route.path}`
  const ogImage = `${base}${image ?? '/img/frontpagehero.webp'}`

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: url,
    ogImage,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage
  })

  useHead({
    link: [{ rel: 'canonical', href: url }]
  })
}
