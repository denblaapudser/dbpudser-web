<script setup lang="ts">
import type { AboutBenefit } from '~/types/page'

defineProps<{
  benefits: AboutBenefit[]
}>()
</script>

<template>
  <div
    class="scroll-reveal grid grid-cols-2 gap-4"
    style="transition-delay: 0.5s"
  >
    <div
      v-for="benefit in benefits"
      :key="benefit.text"
      class="flex items-center gap-3"
    >
      <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50">
        <UIcon :name="benefit.icon" class="size-5 text-primary-600" />
      </div>
      <span class="text-sm font-medium text-gray-700">{{ benefit.text }}</span>
    </div>
  </div>
</template>
