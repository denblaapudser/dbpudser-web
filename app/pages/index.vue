<script setup lang="ts">
const { data: seo } = await useFetch('/api/seo', {
  query: { path: '/' }
})

useSeoMeta({
  title: seo.value?.title,
  description: seo.value?.description,
  ogTitle: seo.value?.title,
  ogDescription: seo.value?.description
})
</script>

<template>
  <div>
    <FrontpageHero />
    <FrontpageServices />
    <FrontpageWhyUs />
    <FrontpageCallToAction />
  </div>
</template>
