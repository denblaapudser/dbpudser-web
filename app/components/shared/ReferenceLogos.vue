<script setup lang="ts">
const { data: references } = await useFetch('/api/references')
</script>

<template>
  <UPageSection v-if="references && references.length > 0" :ui="{ root: 'py-8' }">
    <UPageLogos
      title="Vores samarbejdspartnere"
      :items="references"
      marquee
    />
  </UPageSection>
</template>
