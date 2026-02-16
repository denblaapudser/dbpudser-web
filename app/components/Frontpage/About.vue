<script setup lang="ts">
useScrollReveal()

const stats = [
  { value: '2006', label: 'Etableret' },
  { value: '8', label: 'Medarbejdere' },
  { value: '30+', label: 'Års erfaring' },
  { value: '16m', label: 'Rækkevidde' }
]

const benefits = [
  { icon: 'i-lucide-award', text: 'Uddannede fagfolk' },
  { icon: 'i-lucide-droplets', text: 'Rentvandsanlæg' },
  { icon: 'i-lucide-message-circle', text: 'Dansktalende personale' },
  { icon: 'i-lucide-shield-check', text: 'Forsikret & certificeret' }
]
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
    <div class="scroll-reveal relative" style="transition-delay: 0.1s">
      <img
        src="/img/om-os.jpg"
        alt="DB Pudser teamet"
        class="relative w-full rounded-2xl object-cover shadow-xl"
      >
      <div class="absolute -bottom-6 left-6 right-6 grid grid-cols-4 gap-3 rounded-xl border border-gray-200 bg-white/90 p-4 shadow-lg backdrop-blur-sm">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="text-center"
        >
          <div class="text-xl font-bold text-cyan-600 lg:text-2xl">
            {{ stat.value }}
          </div>
          <div class="text-xs text-gray-500">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>

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
      <div
        class="scroll-reveal grid grid-cols-2 gap-4"
        style="transition-delay: 0.5s"
      >
        <div
          v-for="benefit in benefits"
          :key="benefit.text"
          class="flex items-center gap-3"
        >
          <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-50">
            <UIcon :name="benefit.icon" class="size-5 text-cyan-600" />
          </div>
          <span class="text-sm font-medium text-gray-700">{{ benefit.text }}</span>
        </div>
      </div>
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
