<script setup lang="ts">
const { data: services } = await useServices()
</script>

<template>
  <section class="relative py-24 bg-gradient-section overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 bg-pattern-dots opacity-30" />

    <!-- Decorative blobs -->
    <div class="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 blob" />
    <div class="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 blob" style="animation-delay: -4s;" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
          Vores Services
        </span>
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          Professionelle <span class="text-gradient">rengøringsløsninger</span>
        </h2>
        <p class="text-lg text-muted max-w-2xl mx-auto">
          Vi tilbyder et bredt udvalg af professionelle rengøringsløsninger til både private og erhverv.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="service in services"
          :key="service.id"
          class="group relative bg-white rounded-2xl p-6 shadow-sm card-hover border border-gray-100"
        >
          <!-- Icon with gradient background -->
          <div class="w-14 h-14 mb-5 rounded-xl icon-gradient flex items-center justify-center shadow-lg shadow-primary/20">
            <UIcon :name="service.icon" class="w-7 h-7" />
          </div>

          <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {{ service.title }}
          </h3>

          <p class="text-muted text-sm mb-4 line-clamp-2">
            {{ service.shortDescription }}
          </p>

          <NuxtLink
            :to="`/services#${service.slug}`"
            class="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
          >
            Læs mere
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </NuxtLink>

          <!-- Hover gradient border effect -->
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
      </div>

      <div class="text-center mt-12">
        <UButton
          to="/services"
          size="lg"
          class="shadow-lg shadow-primary/20"
          trailing-icon="i-lucide-arrow-right"
        >
          Se alle services
        </UButton>
      </div>
    </div>
  </section>
</template>
