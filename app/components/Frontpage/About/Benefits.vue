<script setup lang="ts">
const benefits = [
  { icon: 'i-lucide-award', text: 'Uddannede fagfolk' },
  { icon: 'i-lucide-droplets', text: 'Rentvandsanlæg' },
  { icon: 'i-lucide-message-circle', text: 'Dansktalende personale' },
  { icon: 'i-lucide-shield-check', text: 'Forsikret & certificeret' }
]
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
      <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-50">
        <UIcon :name="benefit.icon" class="size-5 text-cyan-600" />
      </div>
      <span class="text-sm font-medium text-gray-700">{{ benefit.text }}</span>
    </div>
  </div>
</template>
