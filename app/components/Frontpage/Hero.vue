<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const links: ButtonProps[] = [
  {
    label: 'Få et tilbud',
    to: '/kontakt',
    trailingIcon: 'i-lucide-arrow-right',
    size: 'xl'
  },
  {
    label: 'Vores services',
    to: '#services',
    size: 'xl',
    color: 'neutral',
    variant: 'subtle'
  }
]
</script>

<template>
  <div class="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
    <!-- Background video -->
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/intro.mp4" type="video/mp4">
    </video>

    <!-- Gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-cyan-900/40" />

    <!-- Decorative bubbles -->
    <div class="absolute top-20 right-20 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl" />
    <div class="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-cyan-300/8 blur-2xl" />

    <!-- Content -->
    <UContainer class="relative z-10 py-24 lg:py-32">
      <div class="max-w-2xl">
        <p class="text-cyan-300 font-semibold text-sm uppercase tracking-wider mb-4">
          Professionel rengøring
        </p>
        <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Skinnende rene resultater, <span class="text-cyan-400">hver gang</span>
        </h1>
        <p class="text-lg text-gray-200 mb-8 max-w-xl">
          DB Pudser leverer professionel vinduespudsning, facaderens og erhvervsrengøring til private og virksomheder i hele Danmark.
        </p>
        <div class="flex flex-wrap gap-4">
          <UButton
            v-for="link in links"
            :key="link.label"
            v-bind="link"
          />
        </div>
      </div>
    </UContainer>
  </div>
</template>
