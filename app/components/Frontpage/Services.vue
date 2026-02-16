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
  <section id="services" class="relative overflow-hidden bg-slate-100 py-24 lg:py-62">
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header -->
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <div class="scroll-reveal mb-6 flex items-center justify-center gap-3" style="transition-delay: 0.1s">
          <span class="h-px w-8 bg-cyan-500" />
          <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Vores tjenester
          </span>
          <span class="h-px w-8 bg-cyan-500" />
        </div>

        <h2
          class="scroll-reveal mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          style="transition-delay: 0.2s"
        >
          Alt inden for
          <span class="text-cyan-600">udvendig rengøring</span>
        </h2>

        <p
          class="scroll-reveal text-lg text-gray-500"
          style="transition-delay: 0.3s"
        >
          Vi tilbyder en bred vifte af professionelle rengøringsløsninger til både private og erhverv.
        </p>
      </div>

      <!-- Services carousel -->
      <div class="scroll-reveal" style="transition-delay: 0.4s">
        <UCarousel
          v-slot="{ item }"
          :items="services"
          loop
          arrows
          :autoplay="{ delay: 4000 }"
          :ui="{
            item: 'basis-full md:basis-1/2 lg:basis-1/3',
          }"
        >
          <NuxtLink
            :to="item.to"
            class="group relative mx-3 overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block h-full"
          >
            <!-- Hover accent -->
            <div class="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-cyan-500 transition-transform duration-300 group-hover:scale-x-100" />

            <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 transition-colors duration-300 group-hover:bg-cyan-500">
              <UIcon :name="item.icon" class="size-7 text-cyan-600 transition-colors duration-300 group-hover:text-white" />
            </div>

            <h3 class="mb-3 text-xl font-bold text-gray-900">
              {{ item.title }}
            </h3>

            <p class="mb-6 text-sm leading-relaxed text-gray-500">
              {{ item.description }}
            </p>

            <span class="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition-all duration-300 group-hover:gap-3">
              Læs mere
              <UIcon name="i-lucide-arrow-right" class="size-4" />
            </span>
          </NuxtLink>
        </UCarousel>
      </div>

      <!-- CTA -->
      <div class="scroll-reveal mt-12 text-center" style="transition-delay: 0.5s">
        <UButton size="lg" color="primary" trailing-icon="i-lucide-arrow-right">
          Se alle tjenester
        </UButton>
      </div>
    </div>
  </section>
</template>
