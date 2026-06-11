<script setup lang="ts">
import type { HeroBenefit } from '~/types/page'

defineProps<{
  description: string
  benefits: HeroBenefit[]
}>()

const { company } = useSiteConfig()
const { openQuote } = useQuoteModal()
</script>

<template>
  <div class="lg:col-span-2">
    <!-- Eyebrow -->
    <div class="hero-reveal mb-6 flex items-center gap-3" style="--reveal-delay: 0.1s">
      <span class="h-px w-8 bg-primary-400" />
      <span class="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">
        {{ company.slogan }}
      </span>
    </div>

    <!-- Headline -->
    <h1
      class="hero-reveal mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
      style="--reveal-delay: 0.25s"
    >
      Vinduespolering med<br>
      <span class="text-primary-400">krystalklart</span> resultat
    </h1>

    <!-- Description -->
    <p
      class="hero-reveal mb-8 max-w-2xl max-w-2xl leading-relaxed text-neutral-300"
      style="--reveal-delay: 0.4s"
    >
      {{ description }}
    </p>

    <!-- CTA Row -->
    <div
      class="hero-reveal mb-10 flex flex-wrap items-center gap-5"
      style="--reveal-delay: 0.55s"
    >
      <UButton class="sm:py-4 sm:px-7" size="xl" color="primary" @click="openQuote()">
        Få et tilbud
      </UButton>

      <UButton size="xl" class="dark sm:py-4 sm:px-7" color="neutral" variant="outline" to="/ydelser">
        Se vores ydelser
      </UButton>
    </div>

    <!-- Benefits -->
    <div class="hero-reveal" style="--reveal-delay: 0.7s">
      <FrontpageHeroBenefits :benefits="benefits" />
    </div>
  </div>
</template>
