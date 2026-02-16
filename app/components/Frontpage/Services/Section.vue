<script setup lang="ts">
useScrollReveal()

const services = [
  {
    title: 'Vinduespolering',
    description: 'Professionel vinduespolering med rentvandsanlæg. Vi når alle højder og vinduestyper — op til 16 meter uden stiger.',
    icon: 'i-lucide-sparkles',
    to: '/tjenester/vinduespolering'
  },
  {
    title: 'Solcellevask',
    description: 'Øg udbyttet af dine solceller med skånsom rengøring. Vi bruger filtreret vand ved 45°C for kalkfrie resultater.',
    icon: 'i-lucide-sun',
    to: '/tjenester/solcellevask'
  },
  {
    title: 'Fliserens',
    description: 'Vi giver dine fliser og terrasser nyt liv med grundig højtryksvask og efterbehandling.',
    icon: 'i-lucide-grid-2x2',
    to: '/tjenester/fliserens'
  },
  {
    title: 'Algebehandling af tag',
    description: 'Forlæng tagets levetid med professionel algebehandling, der fjerner mos og alger effektivt.',
    icon: 'i-lucide-home',
    to: '/tjenester/algebehandling-tag'
  },
  {
    title: 'Algebehandling af facade',
    description: 'Giv facaden sit oprindelige udseende tilbage. Vi behandler alle typer facader skånsomt og effektivt.',
    icon: 'i-lucide-building',
    to: '/tjenester/algebehandling-facade'
  }
]
</script>

<template>
  <UPageSection
    id="services"
    :ui="{
      root: 'bg-slate-100 py-0 sm:px-10 xl:px-32 overflow-hidden',
      container: 'py-24 ',
      header: 'max-w-2xl mx-auto'
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
          label: 'text-xs font-semibold uppercase tracking-[0.2em] text-primary '
        }"
      />
    </template>

    <template #title>
      <span class="scroll-reveal block" style="transition-delay: 0.2s">
        Alt inden for
        <span class="text-cyan-600">udvendig rengøring</span>
      </span>
    </template>

    <template #description>
      <span class="scroll-reveal block" style="transition-delay: 0.3s">
        Vi tilbyder en bred vifte af professionelle rengøringsløsninger til både private og erhverv.
      </span>
    </template>

    <template #body>
      <div class="scroll-reveal" style="transition-delay: 0.4s">
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
          />
        </UCarousel>
      </div>
    </template>

    <template #footer>
      <div class="scroll-reveal text-center" style="transition-delay: 0.5s">
        <UButton size="xl" color="primary" trailing-icon="i-lucide-arrow-right">
          Se alle tjenester
        </UButton>
      </div>
    </template>
  </UPageSection>
</template>
