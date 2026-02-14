/**
 * Mock API endpoint for SEO data.
 * Simulates fetching SEO metadata from a headless WordPress.
 */
export default defineEventHandler((event) => {
  const page = getRouterParam(event, 'page') || 'home'

  const seoData: Record<string, { title: string; description: string; ogImage?: string }> = {
    home: {
      title: 'Flemming René Vinduespolering | Kvalitet - Stabilitet - Loyalitet',
      description: 'Professionel vinduespolering, solcellevask, algebehandling og tagrens på Fyn og omegn. Erfarne medarbejdere og stabil service siden 2006.',
      ogImage: '/img/windowcleaner.jpg'
    },
    'om-os': {
      title: 'Om Os | Flemming René Vinduespolering',
      description: 'Mød teamet bag Flemming René Vinduespolering. Etableret i 2006 med 8 erfarne medarbejdere. Vi prioriterer kvalitet, stabilitet og loyalitet.',
      ogImage: '/img/om-os.jpg'
    },
    services: {
      title: 'Vores Services | Flemming René Vinduespolering',
      description: 'Vinduespolering, solcellevask, algebehandling og tagrens. Vi tilbyder professionelle rengøringsløsninger til private og erhverv.',
      ogImage: '/img/windowcleaner.jpg'
    },
    kontakt: {
      title: 'Kontakt Os | Flemming René Vinduespolering',
      description: 'Kontakt Flemming René Vinduespolering for et uforpligtende tilbud. Ring 40 82 92 40 eller skriv til info@fl-rene.dk.',
      ogImage: '/img/contact.jpg'
    }
  }

  return seoData[page] || seoData.home
})
