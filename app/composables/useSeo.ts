/**
 * Composable for fetching SEO metadata from the API.
 * In production, this would fetch from a headless WordPress.
 */
interface SeoData {
  title: string
  description: string
  ogImage?: string
}

export function useSeo(page: string) {
  const { data } = useFetch<SeoData>(`/api/seo/${page}`)

  useHead({
    title: () => data.value?.title,
    meta: [
      { name: 'description', content: () => data.value?.description },
      { property: 'og:title', content: () => data.value?.title },
      { property: 'og:description', content: () => data.value?.description },
      { property: 'og:image', content: () => data.value?.ogImage },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]
  })

  return data
}
