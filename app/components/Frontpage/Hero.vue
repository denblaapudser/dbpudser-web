<script setup lang="ts">
useScrollReveal()

const videoOpen = ref(false)
</script>

<template>
  <section
    class="relative h-dvh min-h-[600px] overflow-hidden bg-white -mt-25"
  >
    <!-- Background Video -->
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 h-full w-full object-cover"
    >
      <source src="/videos/intro.mp4" type="video/mp4">
    </video>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-neutral-900/50 backdrop-blur-sm" />

    <!-- Content -->
    <div class="relative z-10 flex h-full items-center">
      <div class="mx-auto w-full max-w-(--ui-container) px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-8">
          <FrontpageHeroContent v-model:video-open="videoOpen" />

          <!-- Large Play Button -->
          <div
            class="scroll-reveal hidden lg:col-span-2 lg:flex lg:items-center lg:justify-center"
            style="transition-delay: 0.8s"
          >
            <FrontpageHeroPlayButton @click="videoOpen = true" />
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="scroll-reveal absolute inset-x-0 bottom-8 z-10 flex justify-center"
      style="transition-delay: 1.1s"
    >
      <FrontpageScrollIndicator />
    </div>
  </section>
</template>
