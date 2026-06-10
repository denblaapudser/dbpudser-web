export interface HeroBenefit {
  label: string
  icon: string
}

export interface HeroContent {
  description: string
  videoUrl: string
  imageUrl: string
  benefits: HeroBenefit[]
}

export interface ServiceItem {
  title: string
  description: string
  icon: string
  to: string
  image: string
  order?: number
  colSpan?: number
  rowSpan?: number
}

export interface ServicesContent {
  description: string
  services: ServiceItem[]
}

export interface AboutStat {
  value: string
  label: string
}

export interface AboutBenefit {
  icon: string
  text: string
}

export interface AboutContent {
  description: string
  image: string
  stats: AboutStat[]
  benefits: AboutBenefit[]
}

export interface ReferencesContent {
  references: string[]
  footerText: string
}

export interface FrontpageData {
  hero: HeroContent
  services: ServicesContent
  about: AboutContent
}

// Services page
export interface ServicesPageData {
  description: string
  services: ServiceItem[]
}

// Service detail page
export interface ProcessStep {
  title: string
  description: string
  icon: string
}

export interface ServiceFeature {
  title: string
  description: string
  icon: string
}

export interface ServiceDetailData {
  title: string
  description: string
  icon: string
  image: string
  longDescription: string
  features: ServiceFeature[]
  process: ProcessStep[]
  ctaText: string
}

// About page
export interface CompanyValue {
  title: string
  description: string
  icon: string
}

export interface TeamMember {
  name: string
  role: string
  image: string
}

export interface AboutPageData {
  description: string
  image: string
  story: string
  stats: AboutStat[]
  benefits: AboutBenefit[]
  values: CompanyValue[]
  team: TeamMember[]
}

// Contact page
export interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: string
}

export interface ContactPageData {
  description: string
  image: string
  contactInfo: ContactInfo
}
