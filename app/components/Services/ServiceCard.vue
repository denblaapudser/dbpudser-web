<script setup lang="ts">
import type { Service } from '~/composables/useServices'

defineProps<{
  service: Service
  index: number
}>()
</script>

<template>
  <div
    :id="service.slug"
    class="scroll-mt-24 relative"
  >
    <!-- Background decoration -->
    <div
      v-if="index % 2 === 0"
      class="absolute -inset-4 bg-gradient-to-r from-primary/5 via-transparent to-transparent rounded-3xl"
    />

    <div
      class="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 rounded-3xl"
      :class="{ 'lg:flex-row-reverse': index % 2 === 1 }"
    >
      <!-- Content -->
      <div :class="{ 'lg:order-2': index % 2 === 1 }">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-16 h-16 rounded-2xl icon-gradient flex items-center justify-center shadow-lg shadow-primary/20">
            <UIcon :name="service.icon" class="w-8 h-8" />
          </div>
          <div>
            <span class="text-xs font-semibold uppercase tracking-wider text-primary">Service</span>
            <h2 class="text-3xl font-bold">{{ service.title }}</h2>
          </div>
        </div>

        <p class="text-lg text-muted mb-8 leading-relaxed">{{ service.description }}</p>

        <ul class="space-y-3 mb-8">
          <li
            v-for="feature in service.features"
            :key="feature"
            class="flex items-center gap-3 group"
          >
            <div class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-primary group-hover:text-white" />
            </div>
            <span class="text-gray-700">{{ feature }}</span>
          </li>
        </ul>

        <UButton
          to="/kontakt"
          size="lg"
          trailing-icon="i-lucide-arrow-right"
          class="shadow-lg shadow-primary/20"
        >
          Få et tilbud
        </UButton>
      </div>

      <!-- Image -->
      <div :class="{ 'lg:order-1': index % 2 === 1 }">
        <div class="relative group">
          <!-- Decorative background -->
          <div class="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-2 group-hover:rotate-1 transition-transform" />

          <!-- Image -->
          <img
            :src="service.image"
            :alt="service.title"
            class="relative rounded-2xl shadow-2xl w-full h-auto transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"
          >

          <!-- Floating icon -->
          <div class="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl icon-gradient flex items-center justify-center shadow-xl transform rotate-6 group-hover:rotate-0 transition-transform">
            <UIcon :name="service.icon" class="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
