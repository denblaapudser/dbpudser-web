<script setup lang="ts">
import type { HeroBenefit } from '~/types/page'

defineProps<{
  videoUrl: string
  imageUrl: string
  description: string
  benefits: HeroBenefit[]
}>()

const videoOpen = ref(false)

// Desktop gets the background video, mobile gets the background image. Both are
// lazy-loaded once the browser is idle so they never compete with the initial
// render — the dark section background is shown until then.
const idle = useIdle()
const isDesktop = ref(false)
let desktopQuery: MediaQueryList | undefined

function updateIsDesktop() {
  isDesktop.value = desktopQuery?.matches ?? false
}

onMounted(() => {
  desktopQuery = window.matchMedia('(min-width: 1024px)')
  desktopQuery.addEventListener('change', updateIsDesktop)
  updateIsDesktop()
})

onUnmounted(() => {
  desktopQuery?.removeEventListener('change', updateIsDesktop)
})

const showVideo = computed(() => idle.value && isDesktop.value)
const showImage = computed(() => idle.value && !isDesktop.value)
</script>

<template>
  <section
    class="relative h-dvh min-h-[600px] overflow-hidden bg-slate-950 -mt-25 xl:px-32"
  >
    <!-- Background image — mobile only, lazy-loaded. A CSS background (not an
         <img>) so it is never fetched on desktop, and only applied once idle so
         the dark base shows until then. -->
    <div
      class="absolute inset-0 bg-cover bg-center lg:hidden"
      :style="showImage ? { backgroundImage: `url(${imageUrl})` } : undefined"
    />

    <!-- Background video — only loaded on desktop, lazily, to keep mobile light -->
    <video
      v-if="showVideo"
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 h-full w-full object-cover"
    >
      <source :src="videoUrl" type="video/mp4">
    </video>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-950/90 to-slate-800/50 backdrop-blur-sm" />

    <!-- Content -->
    <div class="relative z-10 flex h-full items-center">
      <div class="mx-auto w-full max-w-(--ui-container) px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-3 lg:gap-8">
          <FrontpageHeroContent v-model:video-open="videoOpen" :description="description" :benefits="benefits" />

          <!-- Large Play Button -->
          <div
            class="hero-reveal hidden lg:col-span-1 lg:flex lg:items-center lg:justify-center"
            style="--reveal-delay: 0.8s"
          >
            <FrontpageHeroButton @click="videoOpen = true" />
          </div>
        </div>
      </div>
    </div>

    <!-- Video Modal -->
    <FrontpageHeroVideoModal v-model:open="videoOpen" :video-url="videoUrl" />

    <!-- Scroll Indicator -->
    <div
      class="hero-reveal absolute inset-x-0 bottom-8 z-10 flex justify-center"
      style="--reveal-delay: 1.1s"
    >
      <FrontpageHeroScrollIndicator />
    </div>
  </section>
</template>
