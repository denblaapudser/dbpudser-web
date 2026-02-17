<script setup lang="ts">
defineProps<{
  headline?: string
  description: string
}>()

useScrollReveal()
</script>

<template>
  <UPageSection
    :description="description"
    :ui="{
      root: 'bg-gray-950 text-white pt-32 overflow-hidden',
      container: 'py-24',
      header: 'max-w-3xl mx-auto',
      title: 'scroll-reveal block delay-200',
      description: 'scroll-reveal block text-gray-300 delay-300',
    }"
  >
    <template #headline>
      <USeparator
        v-if="headline"
        class="scroll-reveal flex items-center justify-center gap-3"
        style="transition-delay: 0.1s"
        color="primary"
        :label="headline"
        :ui="{
          border: 'w-8',
          label: 'text-xs font-semibold uppercase tracking-[0.2em] text-primary'
        }"
      />
    </template>

    <template #title>
      <slot name="title" />
    </template>
  </UPageSection>
</template>
