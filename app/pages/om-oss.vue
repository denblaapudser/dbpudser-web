<script setup lang="ts">
const { data: page } = await usePageContent('about')

useScrollReveal()
</script>

<template>
  <template v-if="page">
    <SharedHero eyebrow="Om os" :description="page.description">
      <template #title>
        Passion for
        <span class="text-cyan-400">rene overflader</span>
      </template>
    </SharedHero>

    <!-- Our story -->
    <UPageSection
      orientation="horizontal"
      reverse
      :ui="{
        root: 'bg-white overflow-hidden',
        container: 'py-24 lg:py-45 gap-16 lg:gap-20'
      }"
    >
      <template #body>
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div class="scroll-reveal order-2 lg:order-1" style="transition-delay: 0.1s">
            <AboutImageCard :image="page.image" :stats="page.stats" />
          </div>
          <div class="scroll-reveal order-1 lg:order-2" style="transition-delay: 0.2s">
            <div class="flex items-center gap-3 mb-4">
              <span class="h-px w-8 bg-cyan-500" />
              <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">Vores historie</span>
            </div>
            <h2 class="mb-6 text-3xl font-bold text-gray-900">
              Fra én mand til et
              <span class="text-cyan-600">stærkt team</span>
            </h2>
            <p class="text-lg leading-relaxed text-gray-600">
              {{ page.story }}
            </p>
          </div>
        </div>
      </template>
    </UPageSection>

    <!-- Values -->
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
          label="Værdier"
          :ui="{
            border: 'w-8',
            label: 'text-xs font-semibold uppercase tracking-[0.2em] text-primary'
          }"
        />
      </template>

      <template #title>
        <span class="scroll-reveal block" style="transition-delay: 0.2s">
          Det vi
          <span class="text-cyan-600">står for</span>
        </span>
      </template>

      <template #body>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div
            v-for="(value, index) in page.values"
            :key="value.title"
            class="scroll-reveal rounded-2xl bg-white p-8 text-center shadow-sm"
            :style="{ transitionDelay: `${0.2 + index * 0.1}s` }"
          >
            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
              <UIcon :name="value.icon" class="size-7 text-cyan-600" />
            </div>
            <h3 class="mb-2 text-xl font-bold text-gray-900">
              {{ value.title }}
            </h3>
            <p class="text-sm leading-relaxed text-gray-600">
              {{ value.description }}
            </p>
          </div>
        </div>
      </template>
    </UPageSection>

    <!-- Benefits -->
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
          label="Fordele"
          :ui="{
            border: 'w-8',
            label: 'text-xs font-semibold uppercase tracking-[0.2em] text-primary'
          }"
        />
      </template>

      <template #title>
        <span class="scroll-reveal block" style="transition-delay: 0.2s">
          Hvorfor vælge
          <span class="text-cyan-600">DBPUDSER</span>?
        </span>
      </template>

      <template #body>
        <div class="scroll-reveal mx-auto max-w-xl" style="transition-delay: 0.3s">
          <AboutBenefits :benefits="page.benefits" />
        </div>
      </template>
    </UPageSection>

    <!-- Team -->
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
          label="Teamet"
          :ui="{
            border: 'w-8',
            label: 'text-xs font-semibold uppercase tracking-[0.2em] text-primary'
          }"
        />
      </template>

      <template #title>
        <span class="scroll-reveal block" style="transition-delay: 0.2s">
          Mød
          <span class="text-cyan-600">teamet</span>
        </span>
      </template>

      <template #body>
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          <div
            v-for="(member, index) in page.team"
            :key="member.name"
            class="scroll-reveal text-center"
            :style="{ transitionDelay: `${0.2 + index * 0.05}s` }"
          >
            <div class="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-200">
              <UIcon name="i-lucide-user" class="size-10 text-gray-400" />
            </div>
            <h3 class="text-base font-bold text-gray-900">
              {{ member.name }}
            </h3>
            <p class="text-sm text-gray-500">
              {{ member.role }}
            </p>
          </div>
        </div>
      </template>
    </UPageSection>

    <!-- CTA -->
    <SharedFooterCta />
  </template>
</template>
