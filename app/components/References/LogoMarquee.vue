<script setup lang="ts">
const { references } = useReferences()

const items = references.map(ref => ({ src: ref.src, alt: ref.name }))
</script>

<template>
  <section class="relative py-16 overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

    <div class="relative">
      <p class="text-center text-sm font-semibold uppercase tracking-wider text-muted mb-8">
        Betroet af førende virksomheder
      </p>

      <ClientOnly>
        <UPageLogos
          :items="items"
          marquee
        />
        <template #fallback>
          <div class="flex justify-center gap-12 opacity-60">
            <div v-for="ref in items" :key="ref.alt" class="h-12 w-24 bg-muted/20 rounded animate-pulse" />
          </div>
        </template>
      </ClientOnly>
    </div>
  </section>
</template>
