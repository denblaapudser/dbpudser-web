<script setup lang="ts">
import type { Service } from '~/composables/useServices'

defineProps<{
  service: Service
}>()
</script>

<template>
  <div
    :id="service.slug"
    class="scroll-mt-24 group relative h-[500px] rounded-3xl overflow-hidden card-hover"
  >
    <!-- Background image -->
    <img
      :src="service.image"
      :alt="service.title"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    >

    <!-- Gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

    <!-- Content -->
    <div class="absolute inset-0 p-8 flex flex-col justify-end text-white">
      <!-- Icon -->
      <div class="w-14 h-14 mb-4 rounded-xl icon-gradient flex items-center justify-center shadow-lg">
        <UIcon :name="service.icon" class="w-7 h-7" />
      </div>

      <!-- Title -->
      <h2 class="text-2xl font-bold mb-3">{{ service.title }}</h2>

      <!-- Description -->
      <p class="text-white/80 mb-6 line-clamp-2">{{ service.shortDescription }}</p>

      <!-- Features -->
      <ul class="space-y-2 mb-6">
        <li
          v-for="feature in service.features.slice(0, 3)"
          :key="feature"
          class="flex items-center gap-2 text-sm text-white/70"
        >
          <UIcon name="i-lucide-check" class="w-4 h-4 text-primary shrink-0" />
          <span>{{ feature }}</span>
        </li>
      </ul>

      <!-- CTA -->
      <UButton
        to="/kontakt"
        size="lg"
        trailing-icon="i-lucide-arrow-right"
        class="w-fit"
      >
        Få et tilbud
      </UButton>
    </div>
  </div>
</template>
