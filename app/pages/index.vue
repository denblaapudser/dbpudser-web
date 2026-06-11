<script setup lang="ts">
const { data: page } = await usePageContent('frontpage')

useSeo({
  title: 'Vinduespudser på Fyn',
  description: 'Professionel vinduespolering, solcellevask, fliserens og algebehandling på Fyn, i Trekantområdet og dele af København. Få et uforpligtende tilbud hos Flemming René – kvalitet, stabilitet og loyalitet siden 2006.'
})
</script>

<template>
  <template v-if="page">
    <FrontpageHeroSection
      :video-url="page.hero.videoUrl"
      :image-url="page.hero.imageUrl"
      :description="page.hero.description"
      :benefits="page.hero.benefits"
    />
    <FrontpageServicesSection
      :description="page.services.description"
      :services="page.services.services"
    />
    <FrontpageAboutSection
      :description="page.about.description"
      :image="page.about.image"
      :stats="page.about.stats"
      :benefits="page.about.benefits"
    />
  </template>
</template>
