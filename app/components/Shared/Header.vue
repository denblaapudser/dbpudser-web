<script setup lang="ts">
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

const items = [
  { label: 'Hjem', href: '/' },
  { label: 'Tjenester', href: '/tjenester' },
  { label: 'Om oss', href: '/om-oss' },
  { label: 'Kontakt', href: '/kontakt' }
]
</script>

<template>
  <UHeader
    :class="[
        {'dark h-25 bg-transparent border-none backdrop-filter-none': !scrolled },
        {'bg-white/90 backdrop-blur-sm shadow-md': scrolled }
    ]"
    :ui="{ root: 'transition-all duration-300' }"
  >
    <template #title>
      <span
        class="font-bold text-2xl transition-colors duration-300"
      >
        DBPUDSER
      </span>
    </template>

    <UNavigationMenu 
        :items="items" 
        variant="link" 
        color="neutral"
        />

    <template #right>
      <UButton color="primary">Få et tilbud</UButton>
    </template>
  </UHeader>
</template>
