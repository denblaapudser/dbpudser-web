<script setup lang="ts">
import type { FooterColumn } from '@nuxt/ui'

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
  <UFooter
    :ui="{
      root: 'dark bg-gray-950',
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
</template>
