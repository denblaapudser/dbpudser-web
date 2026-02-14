/**
 * Composable for fetching services from the API.
 * In production, this would fetch from a headless WordPress.
 */
export interface Service {
  id: number
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string
  features: string[]
  image: string
}

export function useServices() {
  return useFetch<Service[]>('/api/services')
}
