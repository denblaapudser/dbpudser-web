<script setup lang="ts">
useScrollReveal()
</script>

<template>
  <UPageSection
    id="about"
    orientation="horizontal"
    reverse
    :ui="{
      root: 'bg-white z-10 overflow-hidden shadow-[0_-20px_40px_-10px_rgba(0,0,0,0.15),0_20px_40px_-10px_rgba(0,0,0,0.15)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(to_right,transparent,var(--color-primary-500),transparent)] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[linear-gradient(to_right,transparent,var(--color-primary-500),transparent)]',
      container: 'py-24 lg:py-45 gap-16 lg:gap-20',
    }"
  >
    <!-- Image side (default slot = illustration) -->
    <FrontpageAboutImageCard />

    <template #headline>
      <div class="scroll-reveal flex items-center gap-3" style="transition-delay: 0.2s">
        <span class="h-px w-8 bg-cyan-500" />
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
          Om os
        </span>
      </div>
    </template>

    <template #title>
      <span class="scroll-reveal block" style="transition-delay: 0.3s">
        Passion for
        <span class="text-cyan-600">rene overflader</span>
      </span>
    </template>

    <template #description>
      <span class="scroll-reveal block max-w-lg" style="transition-delay: 0.4s">
        Vi er et dedikeret team med mange års erfaring inden for udvendig rengøring.
        Vores mission er at levere resultater, der taler for sig selv — hver gang.
      </span>
    </template>

    <template #body>
      <FrontpageAboutBenefits />
    </template>

    <template #links>
      <div
        class="scroll-reveal flex flex-wrap items-center gap-4"
        style="transition-delay: 0.6s"
      >
        <UButton size="lg" color="primary" trailing-icon="i-lucide-arrow-right">
          Kontakt os
        </UButton>
        <UButton size="lg" color="neutral" variant="subtle" leading-icon="i-lucide-phone" to="tel:40829240">
          40 82 92 40
        </UButton>
      </div>
    </template>
  </UPageSection>
</template>
