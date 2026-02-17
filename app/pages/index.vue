<script setup lang="ts">
const { data: page } = await usePageContent('frontpage')
</script>

<template>
  <template v-if="page">
    <FrontpageHeroSection
      :video-url="page.hero.videoUrl"
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
