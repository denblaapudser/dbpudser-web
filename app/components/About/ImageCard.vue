<script setup lang="ts">
import type { AboutStat } from '~/types/page'

defineProps<{
  image: string
  stats: AboutStat[]
}>()
</script>

<template>
  <div class="scroll-reveal relative" style="transition-delay: 0.1s">
    <img
      :src="image"
      alt="DB Pudser teamet"
      class="relative w-full rounded-2xl object-cover shadow-xl"
    >
    <div class="absolute -bottom-6 left-6 right-6 grid grid-cols-4 gap-3 rounded-xl border border-gray-200 bg-white/90 p-4 shadow-lg backdrop-blur-sm">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="text-center"
      >
        <div class="text-xl font-bold text-cyan-600 lg:text-2xl">
          {{ stat.value }}
        </div>
        <div class="text-xs text-gray-500">
          {{ stat.label }}
        </div>
      </div>
    </div>
  </div>
</template>
