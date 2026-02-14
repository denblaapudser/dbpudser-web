<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  { label: 'Forside', to: '/' },
  { label: 'Om os', to: '/om-os' },
  { label: 'Services', to: '/services' },
  { label: 'Kontakt', to: '/kontakt' }
]
</script>

<template>
  <UHeader>
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2">
        <span class="text-xl font-bold text-primary">FL-René</span>
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UButton
        to="tel:+4540829240"
        icon="i-lucide-phone"
        color="primary"
        variant="soft"
        class="hidden sm:flex"
      >
        40 82 92 40
      </UButton>
    </template>
  </UHeader>
</template>
