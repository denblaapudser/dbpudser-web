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
      <USeparator
        class="scroll-reveal flex items-center justify-center gap-3"
        style="transition-delay: 0.1s"
        color="primary"
        label="Vores tjenester"
        :ui="{
          border: 'w-8',
          label: 'text-xs font-semibold uppercase tracking-[0.2em] text-primary ',
        }"
      />
    </template>

    <template #title>
      Alt inden for
      <span class="text-cyan-600">udvendig rengøring</span>
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
        <FrontpageServicesCard
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
        Se alle tjenester
      </UButton>
    </template>
  </UPageSection>
</template>
