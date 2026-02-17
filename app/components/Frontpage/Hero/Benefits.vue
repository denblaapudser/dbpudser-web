<script setup lang="ts">
import type { HeroBenefit } from '~/types/page'

defineProps<{
  benefits: HeroBenefit[]
}>()
</script>

<template>
  <div class="flex flex-wrap items-center gap-x-6 gap-y-2">
    <div
      v-for="(benefit, index) in benefits"
      :key="benefit.label"
      class="flex items-center gap-2 text-sm text-slate-400"
    >
      <UIcon :name="benefit.icon" class="size-4 text-cyan-500" />
      <span>{{ benefit.label }}</span>
      <span v-if="index < benefits.length - 1" class="ml-4 hidden text-slate-300 sm:inline">&bull;</span>
    </div>
  </div>
</template>
