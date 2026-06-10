<script setup lang="ts">
defineProps<{
  image: string
}>()

// Lazy-load the hero image once the browser is idle. The dark base shows until
// then, so the hero renders immediately and JS can be deferred.
const ready = useIdle()
</script>

<template>
  <div class="relative -mt-25 overflow-hidden bg-slate-950">
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="ready ? { backgroundImage: `url(${image})` } : undefined"
    />
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.6)_0%,rgba(2,6,23,0.90)_70%,rgba(2,6,23,1)_100%)]" />
    <slot />
  </div>
</template>
