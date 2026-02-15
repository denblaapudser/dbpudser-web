<script setup lang="ts">
useScrollReveal()

const services = [
  {
    title: 'Solcellepolering',
    description: 'Øg udbyttet af dine solceller med professionel rengøring. Vi fjerner snavs, pollen og kalkbelægninger skånsomt.',
    icon: 'i-lucide-sun'
  },
  {
    title: 'Fliserens',
    description: 'Vi giver dine fliser og terrasser nyt liv med grundig højtryksvask og efterbehandling.',
    icon: 'i-lucide-grid-2x2'
  },
  {
    title: 'Algebehandling af tag',
    description: 'Forlæng tagets levetid med professionel algebehandling, der fjerner mos og alger effektivt.',
    icon: 'i-lucide-home'
  },
  {
    title: 'Algebehandling af facade',
    description: 'Giv facaden sit oprindelige udseende tilbage. Vi behandler alle typer facader skånsomt og effektivt.',
    icon: 'i-lucide-building'
  }
]
</script>

<template>
  <section id="services" class="relative bg-gray-50 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section Header -->
      <div class="scroll-reveal max-w-2xl">
        <div class="mb-4 flex items-center gap-3">
          <span class="h-px w-8 bg-cyan-500" />
          <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Vores tjenester
          </span>
        </div>
        <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Alt inden for udvendig rengøring
        </h2>
        <p class="mt-4 text-lg leading-relaxed text-slate-500">
          Vi tilbyder en bred vifte af professionelle rengøringsløsninger til både private og erhverv.
        </p>
      </div>

      <!-- Service Cards -->
      <div class="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="scroll-reveal group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-cyan-300 hover:shadow-md"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="mb-5 flex size-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition-colors group-hover:bg-cyan-100">
            <UIcon :name="service.icon" class="size-6" />
          </div>
          <h3 class="mb-2 text-lg font-semibold text-slate-900">
            {{ service.title }}
          </h3>
          <p class="text-sm leading-relaxed text-slate-500">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
