import type { FrontpageData, ServicesPageData, AboutPageData, ContactPageData, ServiceDetailData } from '~/types/page'

type PageDataMap = {
  frontpage: FrontpageData
  services: ServicesPageData
  about: AboutPageData
  contact: ContactPageData
}

export function usePageContent<T extends keyof PageDataMap>(slug: T) {
  return useFetch<PageDataMap[T]>(`/api/pages/${slug}`)
}

export function useServiceContent(slug: string) {
  return useFetch<ServiceDetailData>(`/api/pages/service/${slug}`)
}
