import type { ServiceDetailData } from '~~/app/types/page'

const services: Record<string, ServiceDetailData> = {
  vinduespolering: {
    title: 'Vinduespolering',
    description: 'Professionel vinduespolering med rentvandsanlæg — op til 16 meter uden stiger.',
    icon: 'i-lucide-sparkles',
    image: '/img/service/windowcleaner.jpg',
    longDescription: 'Vores vinduespolering udføres med avanceret rentvandsanlæg, der sikrer et perfekt resultat uden striber eller kalkaflejringer. Vi kan nå vinduer op til 16 meters højde uden brug af stiger, hvilket gør processen både sikker og effektiv. Uanset om det er private boliger, etageejendomme eller erhvervsbygninger, tilpasser vi vores metode til dine specifikke behov. Vi tilbyder både enkeltstående rengøring og faste abonnementsaftaler.',
    features: [
      { title: 'Rentvandsanlæg', description: 'Filtreret vand uden mineraler giver stribefrie vinduer uden brug af kemikalier.', icon: 'i-lucide-droplets' },
      { title: 'Op til 16 meter', description: 'Med teleskopstænger når vi alle vinduer — uden stiger eller lifte.', icon: 'i-lucide-ruler' },
      { title: 'Miljøvenligt', description: 'Ingen brug af sæbe eller kemikalier. Kun rent, filtreret vand.', icon: 'i-lucide-leaf' },
      { title: 'Abonnement', description: 'Faste aftaler med rabat. Vi kommer regelmæssigt, så du aldrig behøver tænke på det.', icon: 'i-lucide-calendar-check' }
    ],
    process: [
      { title: 'Besigtigelse', description: 'Vi vurderer opgaven og giver et gratis, uforpligtende tilbud.', icon: 'i-lucide-search' },
      { title: 'Planlægning', description: 'Vi aftaler tidspunkt og frekvens, der passer dig.', icon: 'i-lucide-calendar' },
      { title: 'Udførelse', description: 'Professionel rengøring med rentvandsanlæg og teleskopstænger.', icon: 'i-lucide-sparkles' },
      { title: 'Kvalitetskontrol', description: 'Vi tjekker resultatet og sikrer din fulde tilfredshed.', icon: 'i-lucide-check-circle' }
    ],
    ctaText: 'Få skinnende rene vinduer uden besvær. Kontakt os i dag for et gratis tilbud på vinduespolering.'
  },
  solcellevask: {
    title: 'Solcellevask',
    description: 'Øg udbyttet af dine solceller med skånsom, professionel rengøring.',
    icon: 'i-lucide-sun',
    image: '/img/service/solcellevask.webp',
    longDescription: 'Beskidte solceller kan miste op til 25% af deres effektivitet. Vores professionelle solcellevask fjerner skidt, pollen, fugleklatter og andre aflejringer skånsomt og effektivt. Vi bruger filtreret vand opvarmet til 45°C, som sikrer kalkfrie resultater uden at beskadige panelernes overflade. Regelmæssig rengøring forlænger levetiden og maksimerer dit energiudbytte.',
    features: [
      { title: 'Opvarmet vand', description: 'Filtreret vand ved 45°C løsner skidt effektivt uden kemikalier.', icon: 'i-lucide-thermometer' },
      { title: 'Kalkfrit resultat', description: 'Demineraliseret vand efterlader ingen kalkpletter på panelerne.', icon: 'i-lucide-droplets' },
      { title: 'Øget udbytte', description: 'Rene solceller producerer op til 25% mere energi.', icon: 'i-lucide-trending-up' },
      { title: 'Skånsom metode', description: 'Ingen højtryk eller skrappe kemikalier — kun blød børste og rent vand.', icon: 'i-lucide-shield-check' }
    ],
    process: [
      { title: 'Inspektion', description: 'Vi inspicerer dine solceller og vurderer rengøringsbehovet.', icon: 'i-lucide-search' },
      { title: 'Forberedelse', description: 'Opvarmning af filtreret vand og klargøring af udstyr.', icon: 'i-lucide-settings' },
      { title: 'Rengøring', description: 'Skånsom vask med blød børste og opvarmet, demineraliseret vand.', icon: 'i-lucide-sparkles' },
      { title: 'Eftersyn', description: 'Vi kontrollerer alle paneler og sikrer optimalt resultat.', icon: 'i-lucide-check-circle' }
    ],
    ctaText: 'Maksimér dit energiudbytte med professionel solcellevask. Få et gratis tilbud i dag.'
  },
  fliserens: {
    title: 'Fliserens',
    description: 'Vi giver dine fliser og terrasser nyt liv med grundig rengøring.',
    icon: 'i-lucide-grid-2x2',
    image: '/img/service/fliserens.webp',
    longDescription: 'Over tid ophobes snavs, alger og mos på fliser, terrasser og indkørsler, hvilket gør dem glatte og uanseelige. Vores professionelle fliserens fjerner effektivt selv de mest genstridige belægninger med skånsom højtryksvask og specialiseret efterbehandling. Vi behandler alle typer fliser — fra betonsten og klinker til natursten — og efterlader dem som nye.',
    features: [
      { title: 'Højtryksvask', description: 'Professionelt udstyr fjerner selv dybt indgroet snavs effektivt.', icon: 'i-lucide-zap' },
      { title: 'Efterbehandling', description: 'Vi påfører imprægnering, der beskytter mod ny alge- og mosvækst.', icon: 'i-lucide-shield' },
      { title: 'Alle flisetyper', description: 'Vi behandler beton, klinker, natursten og alle andre flisetyper.', icon: 'i-lucide-layers' },
      { title: 'Fugtsikring', description: 'Vi sikrer, at fuger er intakte og eventuelt efterfylder med sand.', icon: 'i-lucide-droplets' }
    ],
    process: [
      { title: 'Vurdering', description: 'Vi besigter arealet og identificerer den bedste behandlingsmetode.', icon: 'i-lucide-search' },
      { title: 'Forbehandling', description: 'Påføring af specialmiddel for at løsne alger og mos.', icon: 'i-lucide-flask-conical' },
      { title: 'Højtryksvask', description: 'Grundig rengøring med professionelt højtryksudstyr.', icon: 'i-lucide-sparkles' },
      { title: 'Efterbehandling', description: 'Imprægnering og fugefyldning for langvarigt resultat.', icon: 'i-lucide-check-circle' }
    ],
    ctaText: 'Giv dine fliser og terrasser nyt liv. Kontakt os for et gratis tilbud på fliserens.'
  },
  'algebehandling-tag': {
    title: 'Algebehandling af tag',
    description: 'Forlæng tagets levetid med professionel algebehandling.',
    icon: 'i-lucide-home',
    image: '/img/service/algebehandling-tag.webp',
    longDescription: 'Alger og mos på taget er ikke bare usmukt — det kan også skade tagmaterialet og forkorte tagets levetid markant. Vores professionelle algebehandling fjerner belægninger skånsomt og påfører en langvarig beskyttelse, der forhindrer genvækst i op til 5 år. Vi arbejder med alle tagtyper, herunder tegl, betontagsten, eternit og stålplader.',
    features: [
      { title: 'Skånsom metode', description: 'Ingen højtryk på taget — vi bruger kemisk behandling, der ikke skader materialet.', icon: 'i-lucide-shield-check' },
      { title: 'Langvarig effekt', description: 'Beskyttelsen holder i op til 5 år mod ny alge- og mosvækst.', icon: 'i-lucide-timer' },
      { title: 'Alle tagtyper', description: 'Vi behandler tegl, beton, eternit, stål og andre tagmaterialer.', icon: 'i-lucide-home' },
      { title: 'Forlænget levetid', description: 'Regelmæssig behandling kan forlænge tagets levetid markant.', icon: 'i-lucide-trending-up' }
    ],
    process: [
      { title: 'Taginspektion', description: 'Vi inspicerer taget og vurderer omfanget af alge- og mosvækst.', icon: 'i-lucide-search' },
      { title: 'Rengøring', description: 'Forsigtigt fjernes løst mos og blade fra tagets overflade.', icon: 'i-lucide-brush' },
      { title: 'Behandling', description: 'Påføring af professionelt algebehandlingsmiddel.', icon: 'i-lucide-sparkles' },
      { title: 'Opfølgning', description: 'Behandlingen virker over tid — alger forsvinder gradvist over uger.', icon: 'i-lucide-check-circle' }
    ],
    ctaText: 'Beskyt dit tag mod alger og mos. Få et gratis tilbud på professionel algebehandling.'
  },
  'algebehandling-facade': {
    title: 'Algebehandling af facade',
    description: 'Giv facaden sit oprindelige udseende tilbage med professionel behandling.',
    icon: 'i-lucide-building',
    image: '/img/service/algebehandling-facade.webp',
    longDescription: 'Grønne og sorte belægninger på facaden er et tydeligt tegn på alge- og svampevækst, der langsomt nedbryder overfladen. Vores professionelle facadebehandling fjerner belægninger effektivt og påfører en beskyttende coating, der forhindrer genvækst. Vi behandler alle typer facader — fra puds og murværk til træbeklædning og fibercementplader — og genopretter facadens oprindelige udseende.',
    features: [
      { title: 'Alle facadetyper', description: 'Vi behandler puds, mur, træ, fibercementplader og andre materialer.', icon: 'i-lucide-building' },
      { title: 'Skånsom proces', description: 'Lavtryk og specialmidler sikrer, at facaden ikke beskadiges.', icon: 'i-lucide-shield-check' },
      { title: 'Beskyttende coating', description: 'Efterbehandling, der forhindrer ny vækst i flere år.', icon: 'i-lucide-paintbrush' },
      { title: 'Æstetisk løft', description: 'Facaden genvinder sit oprindelige udseende og farve.', icon: 'i-lucide-eye' }
    ],
    process: [
      { title: 'Facadevurdering', description: 'Vi vurderer facadens tilstand og vælger den rette behandling.', icon: 'i-lucide-search' },
      { title: 'Forbehandling', description: 'Skånsom rengøring for at fjerne løst snavs og belægninger.', icon: 'i-lucide-brush' },
      { title: 'Behandling', description: 'Påføring af professionelt algebehandlingsmiddel med lavtryk.', icon: 'i-lucide-sparkles' },
      { title: 'Beskyttelse', description: 'Afsluttende coating for langvarig beskyttelse mod genvækst.', icon: 'i-lucide-check-circle' }
    ],
    ctaText: 'Giv din facade et nyt liv. Kontakt os i dag for et gratis tilbud på facadebehandling.'
  }
}

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')

  if (!slug || !services[slug]) {
    throw createError({
      statusCode: 404,
      statusMessage: `Service "${slug}" not found`
    })
  }

  return services[slug]
})
