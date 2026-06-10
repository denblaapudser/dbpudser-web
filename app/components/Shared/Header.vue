<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { openContact } = useContactSlideover()
const { openQuote } = useQuoteModal()
const { services } = useSiteConfig()

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
    label: 'Vi tilbyder',
    children: services.map(s => ({
      label: s.label,
      description: s.description,
      icon: s.icon,
      to: `/ydelser/${s.slug}`
    }))
  },
  { label: 'Om os', to: '/om-os' }
]
</script>

<template>
  <UHeader
    mode="slideover"
    :class="[
        {'dark h-25 bg-transparent border-none backdrop-filter-none': !scrolled },
        {'bg-white/90 backdrop-blur-sm shadow-md': scrolled }
    ]"
    :ui="{
      root: 'transition-all duration-300',
      right: 'gap-4',
      title: ['flex items-center gap-2 text-lg/5 md:text-xl/5 uppercase font-normal text-white/80', scrolled && '!text-gray-900'],
      content: 'w-[20rem] max-w-[85vw]',
      header: '[&_[data-slot=title]>div]:hidden [&_.header-bar-only]:hidden'
    }"
  >
    <template #title>
      <img src="/img/favicon.png" alt="Flemming René Favicon" class="h-10 w-auto mr-2 inline-block" />
      <div>
        <span class="text-[1.3rem] md:text-[1.44rem] block">Flemming René</span>
        <span class="block text-primary">Vinduespolering</span>
      </div>
    </template>

    <template #right>
      <UNavigationMenu
        class="hidden lg:flex"
        :items="items"
        variant="link"
        color="neutral"
        :ui="{
          viewportWrapper: 'w-200 !left-auto right-0',
          viewport: 'light'
        }"
        />
      <USeparator orientation="vertical" class="hidden lg:flex h-7 px-5" :ui="{border: 'dark:border-gray-400 border-gray-300'}"/>
      <UButton class="hidden lg:inline-flex" variant="outline" color="neutral" @click="openContact()">Kontakt os</UButton>
      <UButton class="header-bar-only hidden sm:block" color="primary" @click="openQuote()">Få et tilbud</UButton>
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
