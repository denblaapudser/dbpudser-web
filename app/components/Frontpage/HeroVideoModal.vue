<script setup lang="ts">
const open = defineModel<boolean>('open', { required: true })
const modalVideoRef = ref<HTMLVideoElement | null>(null)

watch(open, (isOpen) => {
  if (isOpen) {
    nextTick(() => {
      modalVideoRef.value?.play()
    })
  } else {
    modalVideoRef.value?.pause()
    if (modalVideoRef.value) {
      modalVideoRef.value.currentTime = 0
    }
  }
})
</script>

<template>
  <UModal
    v-model:open="open"
    fullscreen
    title="DBPUDSER intro video"
    :ui="{ content: 'bg-transparent ring-0 shadow-none backdrop-blur-sm', overlay: 'bg-black/80 backdrop-blur-sm' }"
  >
    <slot />

    <template #content>
      <div class="relative flex h-full w-full items-center justify-center p-4 sm:p-12">
        <button
          class="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          @click="open = false"
        >
          <UIcon name="i-lucide-x" class="size-5" />
        </button>
        <video
          ref="modalVideoRef"
          src="/videos/intro.mp4"
          controls
          class="max-h-full max-w-full rounded-lg shadow-2xl"
        />
      </div>
    </template>
  </UModal>
</template>
