/**
 * Mock API endpoint for services.
 * Simulates fetching services from a headless WordPress.
 */
export default defineEventHandler(() => {
  return [
    {
      id: 1,
      slug: 'vinduespolering',
      title: 'Vinduespolering',
      shortDescription: 'Professionel vinduespolering med rentvandsanlæg til private og erhverv.',
      description: 'Hos os sætter vi en ære i vores håndværk. Vores services når de fleste højder og vinduestyper. Vi tilbyder rentvandsrensningssystemer og skræddersyede serviceaftaler. Vores rentvandsanlæg filtrerer alle bakterier, mineraler og metaller ud af vandet, så du får et perfekt resultat uden striber.',
      icon: 'i-lucide-sparkles',
      features: [
        'Rentvandsanlæg uden kemikalier',
        'Op til 16 meters højde uden stiger',
        'Rammerengøring der forlænger levetiden',
        'Skræddersyede serviceaftaler'
      ],
      image: '/img/windowcleaner.jpg'
    },
    {
      id: 2,
      slug: 'solcellevask',
      title: 'Solcellevask',
      shortDescription: 'Professionel rengøring af solceller for optimal ydeevne.',
      description: 'Det er blevet mere almindeligt at have solceller, både i erhverv og hos private. Beskidte paneler reducerer ydeevnen markant. Vi bruger rentvandsanlæg for at forhindre kalkopbygning og vasker med vand omkring 45°C, da koldt vand kan beskadige panelerne.',
      icon: 'i-lucide-sun',
      features: [
        'Rentvandsanlæg uden kalk',
        'Opvarmet vand (45°C) for skånsom rengøring',
        'Minimum 2 årlige rengøringer anbefales',
        'Øger solcellernes effektivitet'
      ],
      image: '/img/windowcleaner.jpg'
    },
    {
      id: 3,
      slug: 'algebehandling',
      title: 'Algebehandling',
      shortDescription: 'Effektiv fjernelse af alger, mos og lav fra facader og overflader.',
      description: 'Alger, mos og lav kan over tid nedbryde og misfarve dine facader, fliser og andre overflader. Vores professionelle algebehandling fjerner effektivt disse organismer og forebygger ny vækst, så dine overflader holder sig pæne længere.',
      icon: 'i-lucide-leaf',
      features: [
        'Skånsom behandling af alle overflader',
        'Langvarig forebyggelse mod ny vækst',
        'Miljøvenlige produkter',
        'Velegnet til facader, fliser og tag'
      ],
      image: '/img/windowcleaner.jpg'
    },
    {
      id: 4,
      slug: 'tagrens',
      title: 'Tagrens',
      shortDescription: 'Professionel rensning og vedligeholdelse af dit tag.',
      description: 'Et rent tag forlænger tagets levetid og forbedrer boligens udseende. Vi tilbyder professionel tagrensning, der fjerner mos, alger og snavs uden at beskadige tagmaterialet. Efter rensning kan vi tilbyde imprægnering for langvarig beskyttelse.',
      icon: 'i-lucide-home',
      features: [
        'Skånsom højtryksrensning',
        'Fjernelse af mos og alger',
        'Mulighed for imprægnering',
        'Forlænger tagets levetid'
      ],
      image: '/img/windowcleaner.jpg'
    }
  ]
})
