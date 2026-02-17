<script setup lang="ts">
defineProps<{
  references: string[]
  footerText: string
}>()

useScrollReveal()
</script>

<template>
  <UPageSection
    id="references"
    :ui="{
      root: 'bg-slate-100 overflow-hidden py-0',
      container: 'py-24 lg:py-45',
      title: 'scroll-reveal block delay-200',
      description: 'scroll-reveal delay-300',
      footer: 'scroll-reveal delay-600',
    }"
  >
    <template #headline>
      <USeparator
        class="scroll-reveal flex items-center justify-center gap-3"
        style="transition-delay: 0.1s"
        color="primary"
        label="Referencer"
        :ui="{
          border: 'w-8',
          label: 'text-xs font-semibold uppercase tracking-[0.2em]',
        }"
      />
    </template>

    <template #title>
      Virksomheder der
      <span class="text-cyan-600">stoler på os</span>
    </template>

    <template #description>
      <UMarquee :repeat="6" :overlay="false" :ui="{ root: '[--duration:50s] py-12 max-w-screen' }">
        <img
          v-for="file in references"
          :key="file"
          :src="`/img/references/${file}`"
          :alt="file.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')"
          class="h-42 w-auto shrink-0 object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
        >
      </UMarquee>
    </template>

    <template #footer>
      <UButton
        class="mx-auto block"
        variant="link"
        color="neutral"
      >
        {{ footerText }}
      </UButton>
    </template>
  </UPageSection>
</template>
