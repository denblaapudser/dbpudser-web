<script setup lang="ts">
useScrollReveal()

// Add new references by dropping an image in public/img/references/ and adding the filename here
const references = [
  'ATbiler.png',
  'assens-skibsværft.png',
  'egeskov.png',
  'stutteri.png',
  'calwin.png',
  'echoship.png',
  'elogdata.png',
  'schelenborg-gods.png',
  'tv2.png'
].map((file) => ({
  src: `/img/references/${file}`,
  name: file.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
}))
</script>

<template>
  <UPageSection
    id="references"
    :ui="{
      root: 'bg-slate-100 overflow-hidden py-0',
      container: 'py-24 lg:py-62'
    }"
  >
    <template #headline>
      <div class="scroll-reveal flex items-center justify-center gap-3" style="transition-delay: 0.1s">
        <span class="h-px w-8 bg-cyan-500" />
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
          Referencer
        </span>
        <span class="h-px w-8 bg-cyan-500" />
      </div>
    </template>

    <template #title>
      <span class="scroll-reveal block" style="transition-delay: 0.2s">
        Virksomheder der
        <span class="text-cyan-600">stoler på os</span>
      </span>
    </template>

    <template #description>
        <div class="scroll-reveal" style="transition-delay: 0.3s">
          <UMarquee :repeat="6" :overlay="false" :ui="{ root: '[--duration:50s] py-22 max-w-screen' }">
            <img
              v-for="ref in references"
              :key="ref.src"
              :src="ref.src"
              :alt="ref.name"
              class="h-42 w-auto shrink-0 object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            >
          </UMarquee>
        </div>
    </template>

    <template #footer>
      <UButton
        class="scroll-reveal mx-auto block"
        style="transition-delay: 0.6s"
        variant="link"
        color="neutral"
      >
        Skal din virksomhed være vores næste reference? Kontakt os i dag for en uforpligtende snak!
      </UButton>
    </template>
  </UPageSection>
</template>
