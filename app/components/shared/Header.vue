<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Forside',
    to: '/'
  },
  {
    label: 'Om os',
    to: '/om-os'
  },
  {
    label: 'Services',
    to: '/services'
  },
  {
    label: 'Kontakt',
    to: '/kontakt'
  }
])
</script>

<template>
  <UHeader>
    <template #title>
      <span class="text-xl font-bold text-primary">DB Pudser</span>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UButton
        label="Kontakt os"
        to="/kontakt"
        icon="i-lucide-phone"
        size="sm"
      />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
