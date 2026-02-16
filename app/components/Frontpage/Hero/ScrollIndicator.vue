<template>
  <div class="flex flex-col items-center gap-2">
    <span class="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">
      Rul ned og se mere
    </span>
    <span class="scroll-line block h-8 w-px bg-gradient-to-b from-slate-300 to-transparent" />
  </div>
</template>

<style scoped>
.scroll-line {
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}
</style>
