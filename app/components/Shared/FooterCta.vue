<script setup lang="ts">
const { openQuote } = useQuoteModal()
const { contact } = useSiteConfig()

useScrollReveal()
</script>

<template>
  <UPageSection
    :ui="{
      root: 'dark bg-gray-950 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12)_0%,transparent_70%)]',
      container: 'py-24 lg:py-45',
      header: 'max-w-3xl mx-auto'
    }"
  >
    <template #headline>
      <SharedEyebrow class="scroll-reveal" style="transition-delay: 0.1s" label="Gratis tilbud" />
    </template>

    <template #title>
      <span class="scroll-reveal block" style="transition-delay: 0.2s">
        Klar til et
        <span class="text-primary-400">krystalklart</span>
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
        <UButton size="xl" color="primary" trailing-icon="i-lucide-arrow-right" @click="openQuote()">
          Få et gratis tilbud
        </UButton>
        <UButton size="xl" color="neutral" variant="outline" leading-icon="i-lucide-phone" :to="contact.phoneHref">
          {{ contact.phone }}
        </UButton>
      </div>
    </template>
  </UPageSection>
</template>
