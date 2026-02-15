export default defineEventHandler((event) => {
  const query = getQuery(event)
  const path = (query.path as string) || '/'

  const seoData: Record<string, { title: string, description: string }> = {
    '/': {
      title: 'DB Pudser | Professionel vinduespudsning og rengøring',
      description: 'DB Pudser tilbyder professionel vinduespudsning, facaderens, solcellerens og erhvervsrengøring i hele Danmark. Kontakt os for et uforpligtende tilbud.'
    },
    '/om-os': {
      title: 'Om os | DB Pudser',
      description: 'Lær mere om DB Pudser og vores dedikerede team af professionelle rengøringsspecialister.'
    },
    '/services': {
      title: 'Services | DB Pudser',
      description: 'Se vores fulde udvalg af professionelle rengøringsservices - vinduespudsning, facaderens, solcellerens og mere.'
    },
    '/kontakt': {
      title: 'Kontakt os | DB Pudser',
      description: 'Kontakt DB Pudser for et uforpligtende tilbud på vinduespudsning, facaderens eller erhvervsrengøring.'
    }
  }

  return seoData[path] || seoData['/']
})
