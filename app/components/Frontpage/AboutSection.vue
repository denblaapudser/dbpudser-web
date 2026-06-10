<script setup lang="ts">
import type { AboutStat, AboutBenefit } from '~/types/page'

defineProps<{
  description: string
  image: string
  stats: AboutStat[]
  benefits: AboutBenefit[]
}>()

useScrollReveal()
</script>

<template>
  <UPageSection
    id="about"
    :description="description"
    orientation="horizontal"
    reverse
    :ui="{
      root: 'bg-white z-10 overflow-hidden shadow-[0_-20px_40px_-10px_rgba(0,0,0,0.15),0_20px_40px_-10px_rgba(0,0,0,0.15)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(to_right,transparent,var(--color-primary-500),transparent)] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[linear-gradient(to_right,transparent,var(--color-primary-500),transparent)]',
      container: 'py-24 lg:py-45 gap-16 lg:gap-20',
      headline: 'scroll-reveal delay-200',
      title: 'scroll-reveal block delay-300',
      description: 'scroll-reveal block max-w-lg delay-400',
      links: 'scroll-reveal flex flex-wrap items-center gap-4 delay-600',
    }"
  >
    <AboutImageCard :image="image" :stats="stats" />

    <template #headline>
      <div class="flex items-center gap-3">
        <span class="h-px w-8 bg-primary-500" />
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
          Om os
        </span>
      </div>
    </template>

    <template #title>
      Passion for
      <span class="text-primary-600">rene overflader</span>
    </template>

    <template #body>
      <AboutBenefits :benefits="benefits" />
    </template>

    <template #links>
      <UButton size="lg" color="primary" trailing-icon="i-lucide-arrow-right">
        Kontakt os
      </UButton>
      <UButton size="lg" color="neutral" variant="subtle" leading-icon="i-lucide-phone" to="tel:40829240">
        40 82 92 40
      </UButton>
    </template>
  </UPageSection>
</template>
