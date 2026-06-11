export interface ServiceLink {
  slug: string
  label: string
  icon: string
  description: string
}

/**
 * Canonical list of services. Single source for the header navigation,
 * footer columns and the contact form's service picker.
 */
const services: ServiceLink[] = [
  { slug: 'vinduespolering', label: 'Vinduespolering', icon: 'i-lucide-sparkles', description: 'Professionel polering op til 16 meter' },
  { slug: 'solcellevask', label: 'Solcellevask', icon: 'i-lucide-sun', description: 'Skånsom rengøring med filtreret vand' },
  { slug: 'fliserens', label: 'Fliserens', icon: 'i-lucide-grid-2x2', description: 'Grundig højtryksvask og efterbehandling' },
  { slug: 'algebehandling-tag', label: 'Algebehandling af tag', icon: 'i-lucide-home', description: 'Fjerner mos og alger effektivt' },
  { slug: 'algebehandling-facade', label: 'Algebehandling af facade', icon: 'i-lucide-building', description: 'Giver facaden sit udseende tilbage' }
]

/**
 * Brand identity — change these to rebrand the whole site (logo text, schema,
 * social links, footer, title suffix, etc.).
 */
const company = {
  name: 'Flemming René Vinduespolering',
  shortName: 'Flemming René',
  slogan: 'Kvalitet · Stabilitet · Loyalitet',
  founded: 2006,
  social: {
    facebook: 'https://www.facebook.com/Flemming-Rene-Vinduespolering/',
    youtube: 'https://youtu.be/kMPSAQV5r0s'
  },
  geo: { latitude: 55.2206, longitude: 10.1158 }
}

/**
 * Company contact details shared across footer, CTA, service pages and schema.
 */
const contact = {
  phone: '40 82 92 40',
  phoneHref: 'tel:40829240',
  phoneIntl: '+4540829240',
  email: 'info@fl-rene.dk',
  emailHref: 'mailto:info@fl-rene.dk',
  street: 'Bøgevej 14',
  postalCode: '5683',
  locality: 'Haarby',
  region: 'Fyn',
  country: 'DK',
  city: '5683 Haarby',
  address: 'Bøgevej 14, 5683 Haarby',
  hours: 'Man–Fre: 07:00–16:00',
  phoneHours: 'Mandag–Fredag 8:00–16:00',
  closedNote: 'Vi holder lukket i weekender og på helligdage',
  cvr: '45674355',
  area: 'Fyn, Trekantområdet & København'
}

export function useSiteConfig() {
  return { company, services, contact }
}
