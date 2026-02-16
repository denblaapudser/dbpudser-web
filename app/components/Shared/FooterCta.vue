<script setup lang="ts">
useScrollReveal()
</script>

<template>
  <UPageSection
    :ui="{
      root: 'bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12)_0%,transparent_70%)]',
      container: 'py-24 lg:py-45',
      header: 'max-w-3xl mx-auto'
    }"
  >
    <template #headline>
      <USeparator
        class="scroll-reveal flex items-center justify-center gap-3"
        style="transition-delay: 0.1s"
        color="primary"
        label="Gratis tilbud"
        :ui="{
          border: 'w-8',
          label: 'text-xs font-semibold uppercase tracking-[0.2em]'
        }"
      />
    </template>

    <template #title>
      <span class="scroll-reveal block" style="transition-delay: 0.2s">
        Klar til et
        <span class="text-cyan-400">krystalklart</span>
        resultat?
      </span>
    </template>

    <template #description>
      <span class="scroll-reveal block mx-auto max-w-xl" style="transition-delay: 0.3s">
        Kontakt os i dag for en uforpligtende snak og et gratis tilbud. Vi dækker Fyn, Trekantområdet og dele af København.
      </span>
    </template>

    <template #links>
      <div
        class="scroll-reveal flex flex-col items-center justify-center gap-4 sm:flex-row"
        style="transition-delay: 0.4s"
      >
        <UButton size="xl" color="primary" trailing-icon="i-lucide-arrow-right">
          Få et gratis tilbud
        </UButton>
        <UButton size="xl" color="neutral" variant="outline" leading-icon="i-lucide-phone" to="tel:40829240">
          40 82 92 40
        </UButton>
      </div>
    </template>
  </UPageSection>
</template>
