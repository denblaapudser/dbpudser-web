<script setup lang="ts">
import type { HeroBenefit } from '~/types/page'

defineProps<{
  description: string
  benefits: HeroBenefit[]
}>()
</script>

<template>
  <div class="lg:col-span-3">
    <!-- Eyebrow -->
    <div class="scroll-reveal mb-6 flex items-center gap-3" style="transition-delay: 0.1s">
      <span class="h-px w-8 bg-cyan-400" />
      <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
        Professionel rengøring
      </span>
    </div>

    <!-- Headline -->
    <h1
      class="scroll-reveal mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
      style="transition-delay: 0.25s"
    >
      Krystalklart
      <span class="text-cyan-400">resultat</span>,<br>
      hver gang
    </h1>

    <!-- Description -->
    <p
      class="scroll-reveal mb-8 max-w-lg text-lg leading-relaxed text-neutral-300"
      style="transition-delay: 0.4s"
    >
      {{ description }}
    </p>

    <!-- CTA Row -->
    <div
      class="scroll-reveal mb-10 flex flex-wrap items-center gap-5"
      style="transition-delay: 0.55s"
    >
      <UButton size="xl" color="primary" trailing-icon="i-lucide-arrow-right">
        Få et tilbud
      </UButton>

      <a
        href="#services"
        class="text-sm font-medium text-white/70 transition-colors hover:text-white"
      >
        Se vores tjenester
      </a>
    </div>

    <!-- Benefits -->
    <div class="scroll-reveal" style="transition-delay: 0.7s">
      <FrontpageHeroBenefits :benefits="benefits" />
    </div>
  </div>
</template>
