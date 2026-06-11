<script setup lang="ts">
import type { ReferencesContent } from '~/types/page'

const { data } = await useFetch<ReferencesContent>('/api/references')

useScrollReveal()
</script>

<template>
  <UPageSection
    v-if="data"
    id="references"
    :ui="{
      root: 'bg-slate-100 overflow-hidden py-0',
      container: 'max-w-full py-24 lg:py-45 px-0 lg:px-0',
      title: 'scroll-reveal block delay-200 px-5',
      description: 'scroll-reveal delay-300 p-0 w-full',
      footer: 'scroll-reveal delay-600',
    }"
  >
    <template #headline>
      <SharedEyebrow class="scroll-reveal" style="transition-delay: 0.1s" label="Referencer" />
    </template>

    <template #title>
      Virksomheder der
      <span class="text-primary-600">stoler på os</span>
    </template>

    <template #description>
      <div class="relative max-w-screen">
        <UMarquee :repeat="6" :overlay="false" :ui="{ root: '[--duration:50s] py-12 max-w-full' }">
          <img
            v-for="file in data.references"
            :key="file"
            :src="`/img/references/${file}`"
            :alt="file.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')"
            loading="lazy"
            class="h-42 w-auto shrink-0 object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          >
        </UMarquee>
      </div>
    </template>

    <template #footer>
      <UButton
        class="mx-auto block"
        variant="link"
        color="neutral"
      >
        {{ data.footerText }}
      </UButton>
    </template>
  </UPageSection>
</template>
