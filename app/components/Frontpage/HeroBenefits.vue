<script setup lang="ts">
const benefits = [
  { label: 'Gratis tilbud', icon: 'i-lucide-check' },
  { label: 'Over 10 års erfaring', icon: 'i-lucide-award' },
  { label: 'Privat & erhverv', icon: 'i-lucide-building-2' }
]
</script>

<template>
  <div class="flex flex-wrap items-center gap-x-6 gap-y-2">
    <div
      v-for="(benefit, index) in benefits"
      :key="benefit.label"
      class="flex items-center gap-2 text-sm text-white/50"
    >
      <UIcon :name="benefit.icon" class="size-4 text-cyan-400/60" />
      <span>{{ benefit.label }}</span>
      <span v-if="index < benefits.length - 1" class="ml-4 hidden text-white/15 sm:inline">&bull;</span>
    </div>
  </div>
</template>
