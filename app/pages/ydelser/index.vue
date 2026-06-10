<script setup lang="ts">
const { data: page } = await usePageContent('services')
const { openQuote } = useQuoteModal()

const sortedServices = computed(() => {
  if (!page.value) return []
  const ordered = page.value.services.filter(s => s.order != null).sort((a, b) => a.order! - b.order!)
  const unordered = page.value.services.filter(s => s.order == null)
  return [...ordered, ...unordered]
})

useScrollReveal()
</script>

<template>
  <UPageSection
    description="Vælg blandt vores specialiserede ydelser inden for udvendig rengøring – vi tilbyder alt fra vinduespolering til facaderens, altid med fokus på kvalitet og grundighed."
    :ui="{
      title: 'hero-reveal block [--reveal-delay:0.3s]',
      root: 'dark -mt-25 bg-slate-900 relative z-5 h-120 lg:h-170 flex items-center bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12)_0%,transparent_70%)] overflow-hidden',
      description: 'hero-reveal block [--reveal-delay:0.5s] text-slate-300',
    }"
  >
    <template #headline>
      <SharedEyebrow class="hero-reveal [--reveal-delay:0.1s]" label="Vores ydelser" />
    </template>


    <template #title>
      Alt inden for
      <span class="text-primary-600">udvendig rengøring</span>
    </template>
  </UPageSection>

    <!-- Services grid -->
    <UPageSection
      v-if="page"
      :ui="{
        root: ' overflow-hidden z-10 relative overflow-visible bg-slate-100',
        container: 'pt-0 lg:pt-0 sm:pt-0 pb-24',
        footer: 'scroll-reveal text-center delay-500',
      }"
    >
      <template #body>
        <div class="-mt-30 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(280px,1fr)]">
          <div
            v-for="(service, index) in sortedServices"
            :key="service.title"
            :style="{ transitionDelay: `${(index * 100) + 600}ms` }"
            :class="[
              'scroll-reveal',
              service.colSpan === 2 ? 'sm:col-span-2' : '',
              service.rowSpan === 2 ? 'sm:row-span-2' : '',
            ]"
          >
            <ServicesCard
              :title="service.title"
              :description="service.description"
              :icon="service.icon"
              :to="service.to"
              :image="service.image"
            />
          </div>
        </div>
      </template>

      <template #footer>
        <UButton
          variant="outline"
          color="primary"
          size="lg"
          trailing-icon="i-lucide-arrow-right"
          @click="openQuote()"
        >
          Kontakt os for et tilbud
        </UButton>
      </template>
    </UPageSection>
</template>
