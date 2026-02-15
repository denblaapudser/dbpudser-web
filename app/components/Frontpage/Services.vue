<script setup lang="ts">
const { data: services } = await useFetch('/api/services')
</script>

<template>
  <UPageSection
    id="services"
    headline="Hvad vi tilbyder"
    title="Professionelle rengøringsløsninger"
    description="Fra vinduespudsning til erhvervsrengøring — vi har den rette løsning til dig."
    class="bubble-decoration"
  >
    <UPageGrid>
      <UPageCard
        v-for="service in services"
        :key="service.slug"
        :title="service.title"
        :description="service.description"
        :icon="service.icon"
        spotlight
        variant="outline"
      />
    </UPageGrid>
  </UPageSection>
</template>
