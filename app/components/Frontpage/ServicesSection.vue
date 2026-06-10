<script setup lang="ts">
import type { ServiceItem } from '~/types/page'

defineProps<{
  description: string
  services: ServiceItem[]
}>()

useScrollReveal()
</script>

<template>
  <UPageSection
    id="services"
    :description="description"
    :ui="{
      root: 'bg-slate-100 py-0 sm:px-10 xl:px-32 overflow-hidden',
      container: 'py-24 ',
      header: 'max-w-2xl mx-auto',
      title: 'scroll-reveal block delay-200',
      description: 'scroll-reveal block delay-300',
      body: 'scroll-reveal delay-400',
      footer: 'scroll-reveal text-center delay-500'
    }"
  >
    <template #headline>
      <SharedEyebrow class="scroll-reveal" style="transition-delay: 0.1s" label="Vores ydelser" />
    </template>

    <template #title>
      Alt inden for
      <span class="text-primary-600">udvendig rengøring</span>
    </template>

    <template #body>
      <UCarousel
        v-slot="{ item }"
        :items="services"
        loop
        arrows
        wheel-gestures
        align="start"
        :autoplay="{ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false }"
        :ui="{
          item: 'basis-full md:basis-1/2 lg:basis-1/3 h-auto py-8',
          container: 'items-stretch',
          prev: '-left-4 sm:-start-13',
          next: '-right-4 sm:-end-13'
        }"
      >
        <ServicesCard
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
          :to="item.to"
          :image="item.image"
        />
      </UCarousel>
    </template>

    <template #footer>
      <UButton size="xl" color="primary" trailing-icon="i-lucide-arrow-right">
        Se alle ydelser
      </UButton>
    </template>
  </UPageSection>
</template>
