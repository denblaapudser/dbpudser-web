<script setup lang="ts">
const { company, contact } = useSiteConfig()
const { public: { siteUrl } } = useRuntimeConfig()
const base = siteUrl.replace(/\/$/, '')

// Brand-driven head (title suffix + og:site_name come from useSiteConfig)
useSeoMeta({ ogSiteName: company.name })

// Site-wide structured data: WebSite + LocalBusiness (matches the visible
// contact details, opening hours and service area).
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${base}/#website`,
      url: `${base}/`,
      name: company.name,
      inLanguage: 'da-DK',
      publisher: { '@id': `${base}/#business` }
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${base}/#business`,
      name: company.name,
      image: `${base}/img/frontpagehero.webp`,
      url: `${base}/`,
      telephone: contact.phoneIntl,
      email: contact.email,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: contact.street,
        postalCode: contact.postalCode,
        addressLocality: contact.locality,
        addressRegion: contact.region,
        addressCountry: contact.country
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: company.geo.latitude,
        longitude: company.geo.longitude
      },
      areaServed: [
        { '@type': 'Place', name: 'Fyn' },
        { '@type': 'Place', name: 'Odense' },
        { '@type': 'Place', name: 'Trekantområdet' },
        { '@type': 'Place', name: 'København' }
      ],
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '16:00'
      }],
      sameAs: [company.social.facebook, company.social.youtube]
    }
  ]
}

useHead({
  titleTemplate: title => (title ? `${title} | ${company.name}` : company.name),
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <SharedContactSlideover />
    <SharedQuoteModal />
  </UApp>
</template>
