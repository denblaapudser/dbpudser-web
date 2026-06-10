<script setup lang="ts">
import type { FooterColumn } from '@nuxt/ui'

const { services, contact } = useSiteConfig()

const columns: FooterColumn[] = [
  {
    label: 'Ydelser',
    children: services.map(s => ({ label: s.label, to: `/ydelser/${s.slug}` }))
  },
  {
    label: 'Virksomhed',
    children: [
      { label: 'Om os', to: '/om-os' },
      { label: 'Ydelser', to: '/ydelser' },
      { label: 'Referencer', to: '/#references' },
      { label: 'Job', to: '/job' }
    ]
  },
  {
    label: 'Kontakt',
    children: [
      { label: contact.phone, to: contact.phoneHref, icon: 'i-lucide-phone' },
      { label: contact.email, to: contact.emailHref, icon: 'i-lucide-mail' },
      { label: contact.address, icon: 'i-lucide-map-pin' }
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
