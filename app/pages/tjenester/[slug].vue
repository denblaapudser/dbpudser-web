<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: service } = await useServiceContent(slug)

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: 'Service not found' })
}

useScrollReveal()
</script>

<template>
  <template v-if="service">
    <!-- Hero -->
    <UPageSection
      :ui="{
        root: 'bg-gray-950 text-white pt-32 overflow-hidden',
        container: 'py-24',
        header: 'max-w-3xl mx-auto'
      }"
    >
      <template #headline>
        <div class="scroll-reveal flex items-center justify-center gap-3" style="transition-delay: 0.1s">
          <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
            <UIcon :name="service.icon" class="size-7 text-cyan-400" />
          </div>
        </div>
      </template>

      <template #title>
        <span class="scroll-reveal block" style="transition-delay: 0.2s">
          {{ service.title }}
        </span>
      </template>

      <template #description>
        <span class="scroll-reveal block text-gray-300" style="transition-delay: 0.3s">
          {{ service.description }}
        </span>
      </template>
    </UPageSection>

    <!-- About the service -->
    <UPageSection
      orientation="horizontal"
      :ui="{
        root: 'bg-white overflow-hidden',
        container: 'py-24 gap-16 lg:gap-20'
      }"
    >
      <template #body>
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div class="scroll-reveal" style="transition-delay: 0.1s">
            <h2 class="mb-6 text-3xl font-bold text-gray-900">
              Om {{ service.title.toLowerCase() }}
            </h2>
            <p class="text-lg leading-relaxed text-gray-600">
              {{ service.longDescription }}
            </p>
          </div>
          <div class="scroll-reveal" style="transition-delay: 0.2s">
            <img
              :src="service.image"
              :alt="service.title"
              class="w-full rounded-2xl object-cover shadow-xl"
            >
          </div>
        </div>
      </template>
    </UPageSection>

    <!-- Features -->
    <UPageSection
      :ui="{
        root: 'bg-slate-100 overflow-hidden',
        container: 'py-24',
        header: 'max-w-2xl mx-auto'
      }"
    >
      <template #headline>
        <USeparator
          class="scroll-reveal flex items-center justify-center gap-3"
          style="transition-delay: 0.1s"
          color="primary"
          label="Fordele"
          :ui="{
            border: 'w-8',
            label: 'text-xs font-semibold uppercase tracking-[0.2em] text-primary'
          }"
        />
      </template>

      <template #title>
        <span class="scroll-reveal block" style="transition-delay: 0.2s">
          Hvorfor vælge vores
          <span class="text-cyan-600">{{ service.title.toLowerCase() }}</span>?
        </span>
      </template>

      <template #body>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div
            v-for="(feature, index) in service.features"
            :key="feature.title"
            class="scroll-reveal rounded-2xl bg-white p-8 shadow-sm"
            :style="{ transitionDelay: `${0.2 + index * 0.1}s` }"
          >
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
              <UIcon :name="feature.icon" class="size-6 text-cyan-600" />
            </div>
            <h3 class="mb-2 text-lg font-bold text-gray-900">
              {{ feature.title }}
            </h3>
            <p class="text-sm leading-relaxed text-gray-600">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </template>
    </UPageSection>

    <!-- Process -->
    <UPageSection
      :ui="{
        root: 'bg-white overflow-hidden',
        container: 'py-24',
        header: 'max-w-2xl mx-auto'
      }"
    >
      <template #headline>
        <USeparator
          class="scroll-reveal flex items-center justify-center gap-3"
          style="transition-delay: 0.1s"
          color="primary"
          label="Proces"
          :ui="{
            border: 'w-8',
            label: 'text-xs font-semibold uppercase tracking-[0.2em] text-primary'
          }"
        />
      </template>

      <template #title>
        <span class="scroll-reveal block" style="transition-delay: 0.2s">
          Sådan
          <span class="text-cyan-600">foregår det</span>
        </span>
      </template>

      <template #body>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(step, index) in service.process"
            :key="step.title"
            class="scroll-reveal text-center"
            :style="{ transitionDelay: `${0.2 + index * 0.1}s` }"
          >
            <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 text-lg font-bold text-white">
              {{ index + 1 }}
            </div>
            <div class="mb-3 flex justify-center">
              <UIcon :name="step.icon" class="size-6 text-cyan-600" />
            </div>
            <h3 class="mb-2 text-lg font-bold text-gray-900">
              {{ step.title }}
            </h3>
            <p class="text-sm leading-relaxed text-gray-600">
              {{ step.description }}
            </p>
          </div>
        </div>
      </template>
    </UPageSection>

    <!-- CTA -->
    <UPageSection
      :ui="{
        root: 'bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12)_0%,transparent_70%)] overflow-hidden',
        container: 'py-24 lg:py-45',
        header: 'max-w-3xl mx-auto'
      }"
    >
      <template #title>
        <span class="scroll-reveal block" style="transition-delay: 0.1s">
          Klar til at
          <span class="text-cyan-400">komme i gang</span>?
        </span>
      </template>

      <template #description>
        <span class="scroll-reveal block mx-auto max-w-xl" style="transition-delay: 0.2s">
          {{ service.ctaText }}
        </span>
      </template>

      <template #links>
        <div
          class="scroll-reveal flex flex-col items-center justify-center gap-4 sm:flex-row"
          style="transition-delay: 0.3s"
        >
          <UButton size="xl" color="primary" trailing-icon="i-lucide-arrow-right" to="/kontakt">
            Få et gratis tilbud
          </UButton>
          <UButton size="xl" color="neutral" variant="outline" leading-icon="i-lucide-phone" to="tel:40829240">
            40 82 92 40
          </UButton>
        </div>
      </template>
    </UPageSection>
  </template>
</template>
