import type { FrontpageData, ServicesPageData, AboutPageData, ContactPageData, ServiceItem } from '~~/app/types/page'

const sharedServices: ServiceItem[] = [
  {
    title: 'Vinduespolering',
    description: 'Professionel vinduespolering med rentvandsanlæg. Vi når alle højder og vinduestyper — op til 16 meter uden stiger.',
    icon: 'i-lucide-sparkles',
    to: '/tjenester/vinduespolering',
    image: '/img/windowcleaner.jpg'
  },
  {
    title: 'Solcellevask',
    description: 'Øg udbyttet af dine solceller med skånsom rengøring. Vi bruger filtreret vand ved 45°C for kalkfrie resultater.',
    icon: 'i-lucide-sun',
    to: '/tjenester/solcellevask',
    image: '/img/windowcleaner.jpg'
  },
  {
    title: 'Fliserens',
    description: 'Vi giver dine fliser og terrasser nyt liv med grundig højtryksvask og efterbehandling.',
    icon: 'i-lucide-grid-2x2',
    to: '/tjenester/fliserens',
    image: '/img/windowcleaner.jpg'
  },
  {
    title: 'Algebehandling af tag',
    description: 'Forlæng tagets levetid med professionel algebehandling, der fjerner mos og alger effektivt.',
    icon: 'i-lucide-home',
    to: '/tjenester/algebehandling-tag',
    image: '/img/windowcleaner.jpg'
  },
  {
    title: 'Algebehandling af facade',
    description: 'Giv facaden sit oprindelige udseende tilbage. Vi behandler alle typer facader skånsomt og effektivt.',
    icon: 'i-lucide-building',
    to: '/tjenester/algebehandling-facade',
    image: '/img/windowcleaner.jpg'
  }
]

const frontpage: FrontpageData = {
  hero: {
    description: 'Vi leverer professionel vinduespudsning, algebehandling og tagrens til private og erhverv.',
    videoUrl: '/videos/intro.mp4',
    benefits: [
      { label: 'Gratis tilbud', icon: 'i-lucide-check' },
      { label: 'Over 10 års erfaring', icon: 'i-lucide-award' },
      { label: 'Privat & erhverv', icon: 'i-lucide-building-2' }
    ]
  },
  services: {
    description: 'Vi tilbyder en bred vifte af professionelle rengøringsløsninger til både private og erhverv.',
    services: sharedServices
  },
  about: {
    description: 'Vi er et dedikeret team med mange års erfaring inden for udvendig rengøring. Vores mission er at levere resultater, der taler for sig selv — hver gang.',
    image: '/img/om-os.jpg',
    stats: [
      { value: '2006', label: 'Etableret' },
      { value: '8', label: 'Medarbejdere' },
      { value: '30+', label: 'Års erfaring' },
      { value: '16m', label: 'Rækkevidde' }
    ],
    benefits: [
      { icon: 'i-lucide-award', text: 'Uddannede fagfolk' },
      { icon: 'i-lucide-droplets', text: 'Rentvandsanlæg' },
      { icon: 'i-lucide-message-circle', text: 'Dansktalende personale' },
      { icon: 'i-lucide-shield-check', text: 'Forsikret & certificeret' }
    ]
  },
  references: {
    references: [
      'ATbiler.png',
      'assens-skibsværft.png',
      'egeskov.png',
      'stutteri.png',
      'calwin.png',
      'echoship.png',
      'elogdata.png',
      'schelenborg-gods.png',
      'tv2.png'
    ],
    footerText: 'Skal din virksomhed være vores næste reference? Kontakt os i dag for en uforpligtende snak!'
  }
}

const services: ServicesPageData = {
  description: 'Vi tilbyder en bred vifte af professionelle rengøringsløsninger til både private og erhverv. Alle vores tjenester udføres med professionelt udstyr og mange års erfaring.',
  services: sharedServices
}

const about: AboutPageData = {
  description: 'Vi er et dedikeret team med mange års erfaring inden for udvendig rengøring. Vores mission er at levere resultater, der taler for sig selv — hver gang.',
  image: '/img/om-os.jpg',
  story: 'DBPUDSER blev grundlagt i 2006 med en simpel vision: at levere den bedste udvendige rengøring på Fyn. Gennem årene har vi opbygget et stærkt team af dedikerede fagfolk, der deler vores passion for kvalitet og kundetilfredshed. Vi startede med vinduespolering og har siden udvidet vores tjenester til at dække alt inden for udvendig rengøring — fra solcellevask og fliserens til algebehandling af tage og facader. I dag betjener vi både private og erhvervskunder i hele Fyn, Trekantområdet og dele af København.',
  stats: [
    { value: '2006', label: 'Etableret' },
    { value: '8', label: 'Medarbejdere' },
    { value: '30+', label: 'Års erfaring' },
    { value: '16m', label: 'Rækkevidde' }
  ],
  benefits: [
    { icon: 'i-lucide-award', text: 'Uddannede fagfolk' },
    { icon: 'i-lucide-droplets', text: 'Rentvandsanlæg' },
    { icon: 'i-lucide-message-circle', text: 'Dansktalende personale' },
    { icon: 'i-lucide-shield-check', text: 'Forsikret & certificeret' }
  ],
  values: [
    {
      title: 'Kvalitet',
      description: 'Vi går aldrig på kompromis med kvaliteten. Hvert job udføres grundigt og professionelt.',
      icon: 'i-lucide-award'
    },
    {
      title: 'Stabilitet',
      description: 'Med over 18 års erfaring er vi en stabil partner, du kan stole på — gang efter gang.',
      icon: 'i-lucide-shield-check'
    },
    {
      title: 'Loyalitet',
      description: 'Vi værdsætter langvarige kunderelationer og arbejder altid for at overgå forventningerne.',
      icon: 'i-lucide-heart-handshake'
    }
  ],
  team: [
    { name: 'Flemming', role: 'Grundlægger & Direktør' },
    { name: 'Lars', role: 'Driftsleder' },
    { name: 'Mikkel', role: 'Teamleder' },
    { name: 'Peter', role: 'Servicetekniker' },
    { name: 'Jesper', role: 'Servicetekniker' },
    { name: 'Thomas', role: 'Servicetekniker' },
    { name: 'Anders', role: 'Servicetekniker' },
    { name: 'Kasper', role: 'Servicetekniker' }
  ]
}

const contact: ContactPageData = {
  description: 'Vi står altid klar til at hjælpe dig. Kontakt os for en uforpligtende snak om, hvordan vi kan hjælpe med dine rengøringsbehov.',
  image: '/img/om-os.jpg',
  contactInfo: {
    phone: '40 82 92 40',
    email: 'info@fl-rene.dk',
    address: 'Bøgevej 14, 5683 Haarby',
    hours: 'Man–Fre: 07:00–16:00'
  }
}

const pages: Record<string, unknown> = {
  frontpage,
  services,
  about,
  contact
}

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')

  if (!slug || !pages[slug]) {
    throw createError({
      statusCode: 404,
      statusMessage: `Page "${slug}" not found`
    })
  }

  return pages[slug]
})
