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
  <section id="about" class="relative overflow-hidden bg-white py-24 lg:py-60">
    <!-- Subtle warm accent -->
    <div class="absolute -top-60 right-0 h-[800px] w-[800px] rounded-full bg-cyan-50/80 blur-3xl" />
    <div class="absolute -bottom-60 left-0 h-[800px] w-[800px] rounded-full bg-cyan-700/10 blur-3xl" />

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <!-- Image side -->
        <div class="scroll-reveal relative" style="transition-delay: 0.1s">
          <img
            src="/img/om-os.jpg"
            alt="DB Pudser teamet"
            class="relative w-full rounded-2xl object-cover shadow-xl"
          >

          <!-- Stats overlay -->
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

        <!-- Content side -->
        <div>
          <!-- Eyebrow -->
          <div class="scroll-reveal mb-6 flex items-center gap-3" style="transition-delay: 0.2s">
            <span class="h-px w-8 bg-cyan-500" />
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Om os
            </span>
          </div>

          <h2
            class="scroll-reveal mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
            style="transition-delay: 0.3s"
          >
            Passion for
            <span class="text-cyan-600">rene overflader</span>
          </h2>

          <p
            class="scroll-reveal mb-8 max-w-lg text-lg leading-relaxed text-gray-500"
            style="transition-delay: 0.4s"
          >
            Vi er et dedikeret team med mange års erfaring inden for udvendig rengøring.
            Vores mission er at levere resultater, der taler for sig selv — hver gang.
          </p>

          <!-- Benefits grid -->
          <div
            class="scroll-reveal mb-10 grid grid-cols-2 gap-4"
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

          <!-- CTAs -->
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
        </div>
      </div>
    </div>
  </section>
</template>
