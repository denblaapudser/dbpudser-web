<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { openContact, openQuote } = useContactSlideover()

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

const items: NavigationMenuItem[] = [
  { label: 'Hjem', to: '/' },
  {
    label: 'Tjenester',
    children: [
      { label: 'Vinduespolering', description: 'Professionel polering op til 16 meter', icon: 'i-lucide-sparkles', to: '/tjenester/vinduespolering' },
      { label: 'Solcellevask', description: 'Skånsom rengøring med filtreret vand', icon: 'i-lucide-sun', to: '/tjenester/solcellevask' },
      { label: 'Fliserens', description: 'Grundig højtryksvask og efterbehandling', icon: 'i-lucide-grid-2x2', to: '/tjenester/fliserens' },
      { label: 'Algebehandling af tag', description: 'Fjerner mos og alger effektivt', icon: 'i-lucide-home', to: '/tjenester/algebehandling-tag' },
      { label: 'Algebehandling af facade', description: 'Giver facaden sit udseende tilbage', icon: 'i-lucide-building', to: '/tjenester/algebehandling-facade' }
    ]
  },
  { label: 'Om os', to: '/om-oss' }
]
</script>

<template>
  <UHeader
    :class="[
        {'dark h-25 bg-transparent border-none backdrop-filter-none': !scrolled },
        {'bg-white/90 backdrop-blur-sm shadow-md': scrolled }
    ]"
    :ui="{ 
      root: 'transition-all duration-300', 
      right: 'gap-4' 
    }"
  >
    <template #title>
      <span
        class="font-bold text-2xl transition-colors duration-300"
      >
        DBPUDSER
      </span>
    </template>

    <template #right>
      <UNavigationMenu
        class="hidden lg:flex"
        :items="items"
        variant="link"
        color="neutral"
        :ui="{
          viewportWrapper: 'w-200 !left-auto right-0'
        }"
        />
      <USeparator orientation="vertical" class="hidden lg:flex h-7 px-5" :ui="{border: 'dark:border-gray-400 border-gray-300'}"/>
      <UButton class="hidden lg:inline-flex" variant="outline" color="neutral" @click="openContact()">Kontakt os</UButton>
      <UButton color="primary" @click="openQuote()">Få et tilbud</UButton>
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        color="neutral"
      />
      <div class="mt-6 flex flex-col gap-3">
        <UButton block color="primary" @click="openQuote()">Få et tilbud</UButton>
        <UButton block variant="outline" color="neutral" @click="openContact()">Kontakt os</UButton>
      </div>
    </template>
  </UHeader>
</template>
