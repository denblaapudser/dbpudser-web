<script setup lang="ts">
import type { FooterColumn } from '@nuxt/ui'

useScrollReveal()

const columns: FooterColumn[] = [
  {
    label: 'Tjenester',
    children: [
      { label: 'Vinduespolering', to: '/tjenester/vinduespolering' },
      { label: 'Solcellevask', to: '/tjenester/solcellevask' },
      { label: 'Fliserens', to: '/tjenester/fliserens' },
      { label: 'Algebehandling af tag', to: '/tjenester/algebehandling-tag' },
      { label: 'Algebehandling af facade', to: '/tjenester/algebehandling-facade' }
    ]
  },
  {
    label: 'Virksomhed',
    children: [
      { label: 'Om os', to: '/#about' },
      { label: 'Referencer', to: '/#references' },
      { label: 'Kontakt', to: '/kontakt' },
      { label: 'Job', to: '/job' }
    ]
  },
  {
    label: 'Kontakt',
    children: [
      { label: '40 82 92 40', to: 'tel:40829240', icon: 'i-lucide-phone' },
      { label: 'info@fl-rene.dk', to: 'mailto:info@fl-rene.dk', icon: 'i-lucide-mail' },
      { label: 'Bøgevej 14, 5683 Haarby', icon: 'i-lucide-map-pin' }
    ]
  }
]
</script>

<template>
  <footer class="dark bg-gray-950">
    <!-- CTA -->
    <div class="relative py-24 lg:py-52 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12)_0%,transparent_70%)]"
    >

      <div class="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div class="scroll-reveal mb-6 flex items-center justify-center gap-3" style="transition-delay: 0.1s">
          <span class="h-px w-8 bg-cyan-400" />
          <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Gratis tilbud
          </span>
          <span class="h-px w-8 bg-cyan-400" />
        </div>

        <h2
          class="scroll-reveal mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          style="transition-delay: 0.2s"
        >
          Klar til et
          <span class="text-cyan-400">krystalklart</span>
          resultat?
        </h2>

        <p
          class="scroll-reveal mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-400"
          style="transition-delay: 0.3s"
        >
          Kontakt os i dag for en uforpligtende snak og et gratis tilbud. Vi dækker Fyn, Trekantområdet og dele af København.
        </p>

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
      </div>
    </div>

    <!-- Divider -->
    <div class="mx-auto max-w-(--ui-container) px-6 lg:px-8">
      <div class="h-px bg-white/10" />
    </div>

    <!-- Footer columns -->
    <div class="py-16">
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #left>
            <div class="flex flex-col gap-4">
              <span class="text-2xl font-bold text-white">DBPUDSER</span>
              <p class="text-sm text-gray-400">
                Kvalitet · Stabilitet · Loyalitet
              </p>
              <p class="text-sm text-gray-400 max-w-xs">
                Professionel vinduespolering og udvendig rengøring på Fyn, Trekantområdet og dele af København.
              </p>
            </div>
          </template>
        </UFooterColumns>
      </UContainer>
    </div>

    <!-- Bottom bar -->
    <div class="mx-auto max-w-(--ui-container) px-6 lg:px-8">
      <div class="h-px bg-white/10" />
    </div>
    <div class="flex items-center justify-between px-6 py-6 mx-auto max-w-(--ui-container) lg:px-8">
      <p class="text-sm text-gray-500">
        &copy; {{ new Date().getFullYear() }} DBPUDSER. Alle rettigheder forbeholdes.
      </p>
      <div class="flex gap-2">
        <UButton
          icon="i-simple-icons-facebook"
          color="neutral"
          variant="ghost"
          to="https://www.facebook.com/Flemming-Rene-Vinduespolering/"
          target="_blank"
          aria-label="Facebook"
        />
        <UButton
          icon="i-simple-icons-youtube"
          color="neutral"
          variant="ghost"
          to="https://youtu.be/kMPSAQV5r0s"
          target="_blank"
          aria-label="YouTube"
        />
      </div>
    </div>
  </footer>
</template>
