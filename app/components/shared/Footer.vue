<script setup lang="ts">
import type { FooterColumn } from '@nuxt/ui'

const columns: FooterColumn[] = [
  {
    label: 'Services',
    children: [
      { label: 'Vinduespudsning', to: '/services' },
      { label: 'Facaderens', to: '/services' },
      { label: 'Solcellerens', to: '/services' },
      { label: 'Algebehandling og tagrens', to: '/services' },
      { label: 'Erhvervsrengøring', to: '/services' }
    ]
  },
  {
    label: 'Virksomhed',
    children: [
      { label: 'Om os', to: '/om-os' },
      { label: 'Kontakt', to: '/kontakt' }
    ]
  }
]
</script>

<template>
  <div>
    <SharedReferenceLogos />

    <USeparator />

    <UFooter>
      <template #top>
        <UContainer>
          <UFooterColumns :columns="columns" />
        </UContainer>
      </template>

      <template #left>
        <p class="text-sm text-muted">
          &copy; {{ new Date().getFullYear() }} DB Pudser. Alle rettigheder forbeholdes.
        </p>
      </template>

      <template #right>
        <UButton
          icon="i-simple-icons-facebook"
          to="#"
          target="_blank"
          aria-label="Facebook"
          color="neutral"
          variant="ghost"
        />
        <UButton
          icon="i-simple-icons-instagram"
          to="#"
          target="_blank"
          aria-label="Instagram"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </div>
</template>
