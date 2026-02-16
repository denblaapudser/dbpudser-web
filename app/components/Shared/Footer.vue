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
    <UPageSection
      :ui="{
        root: 'bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12)_0%,transparent_70%)]',
        container: 'py-24 lg:py-52',
        header: 'max-w-3xl mx-auto'
      }"
    >
      <template #headline>
        <div class="scroll-reveal flex items-center justify-center gap-3" style="transition-delay: 0.1s">
          <span class="h-px w-8 bg-cyan-400" />
          <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Gratis tilbud
          </span>
          <span class="h-px w-8 bg-cyan-400" />
        </div>
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

    <!-- Footer with columns and bottom bar -->
    <UFooter
      :ui="{
        top: 'py-16',
        container: 'py-6'
      }"
    >
      <template #top>
        <USeparator :ui="{ border: 'border-white/10' }" />

        <UContainer class="py-16">
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

        <USeparator :ui="{ border: 'border-white/10' }" />
      </template>

      <template #left>
        <p class="text-sm text-gray-500">
          &copy; {{ new Date().getFullYear() }} DBPUDSER. Alle rettigheder forbeholdes.
        </p>
      </template>

      <template #right>
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
      </template>
    </UFooter>
  </footer>
</template>
