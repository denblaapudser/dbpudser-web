<template>
  <button
    class="group relative flex flex-col items-center gap-4 cursor-pointer"
    aria-label="Afspil video"
  >
    <span class="play-ring relative flex size-32 items-center justify-center rounded-full">
      <span
        class="absolute inset-0 rounded-full border border-white/30 transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400/30"
      />
      <span
        class="absolute inset-3 rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-cyan-400/10"
      />
      <UIcon
        name="i-lucide-play"
        class="relative ml-1.5 size-10 text-white transition-transform duration-300 group-hover:scale-110"
      />
    </span>
    <span class="text-sm font-medium tracking-wide text-white/50 transition-colors group-hover:text-cyan-400">
      Se video
    </span>
  </button>
</template>

<style scoped>
.play-ring::before {
  content: '';
  position: absolute;
  inset: -10px;
  border-radius: 9999px;
  border: 1px solid rgba(34, 211, 238, 0.12);
  animation: pulseRing 3s ease-in-out infinite;
}

@keyframes pulseRing {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.1);
    opacity: 0;
  }
}
</style>
