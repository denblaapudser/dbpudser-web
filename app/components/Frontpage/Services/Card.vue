<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
  to: string
  image: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="group relative mx-5 sm:mx-0 overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block h-full"
  >
    <img
      :src="image"
      alt=""
      class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    >
    <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-gray-950/30 transition-opacity duration-300 group-hover:opacity-90" />
    <div class="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
    <div class="relative p-8">
      <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm transition-colors duration-300 group-hover:bg-cyan-500">
        <UIcon :name="icon" class="size-7 text-white" />
      </div>
      <h3 class="mb-3 text-xl font-bold text-white">
        {{ title }}
      </h3>
      <p class="mb-6 text-sm leading-relaxed text-gray-300">
        {{ description }}
      </p>
      <UButton as="span" variant="link" color="primary" trailing-icon="i-lucide-arrow-right" class="text-cyan-400!">
        Læs mere
      </UButton>
    </div>
  </NuxtLink>
</template>
