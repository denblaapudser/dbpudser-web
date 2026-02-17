<script setup lang="ts">
const { data: page } = await usePageContent('services')

useScrollReveal()
</script>

<template>
  <template v-if="page">
    <!-- Hero -->
    <UPageSection
      :ui="{
        root: 'bg-gray-950 text-white pt-32 overflow-hidden',
        container: 'py-24',
        header: 'max-w-3xl mx-auto'
      }"
    >
      <template #headline>
        <USeparator
          class="scroll-reveal flex items-center justify-center gap-3"
          style="transition-delay: 0.1s"
          color="primary"
          label="Vores tjenester"
          :ui="{
            border: 'w-8',
            label: 'text-xs font-semibold uppercase tracking-[0.2em] text-primary'
          }"
        />
      </template>

      <template #title>
        <span class="scroll-reveal block" style="transition-delay: 0.2s">
          Alt inden for
          <span class="text-cyan-400">udvendig rengøring</span>
        </span>
      </template>

      <template #description>
        <span class="scroll-reveal block text-gray-300" style="transition-delay: 0.3s">
          {{ page.description }}
        </span>
      </template>
    </UPageSection>

    <!-- Services grid -->
    <UPageSection
      :ui="{
        root: 'bg-slate-100 overflow-hidden',
        container: 'py-24'
      }"
    >
      <template #body>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(service, index) in page.services"
            :key="service.title"
            class="scroll-reveal"
            :style="{ transitionDelay: `${0.1 + index * 0.1}s` }"
          >
            <FrontpageServicesCard
              :title="service.title"
              :description="service.description"
              :icon="service.icon"
              :to="service.to"
              :image="service.image"
            />
          </div>
        </div>
      </template>
    </UPageSection>

    <!-- CTA -->
    <SharedFooterCta />
  </template>
</template>
