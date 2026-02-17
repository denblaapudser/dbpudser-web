<script setup lang="ts">
const { data: page } = await usePageContent('about')

useScrollReveal()
</script>

<template>
  <template v-if="page">
    <!-- Hero with background image -->
    <div class="relative -mt-25 overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url(${page.image})` }"
      />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.6)_0%,rgba(2,6,23,0.90)_70%,rgba(2,6,23,1)_100%)]" />
      <UPageSection
        :description="page.description"
        :ui="{
          root: 'dark relative z-10 h-170 flex items-center',
          title: 'scroll-reveal text-4xl font-bold leading-tight text-white delay-300 lg:text-5xl',
          description: 'scroll-reveal text-lg leading-relaxed text-slate-300 delay-500',
        }"
      >
        <template #headline>
          <USeparator
            class="scroll-reveal flex items-center justify-center gap-3"
            style="transition-delay: 0.1s"
            color="primary"
            label="Om os"
            :ui="{
              border: 'w-8',
              label: 'text-xs font-semibold uppercase tracking-[0.2em] text-primary',
            }"
          />
        </template>

        <template #title>
          Passion for
          <span class="text-cyan-400">rene overflader</span>
        </template>
      </UPageSection>
    </div>

    <!-- Our story -->
    <UPageSection
      :ui="{
        root: 'bg-white overflow-hidden',
        container: 'py-24 lg:py-45',
      }"
    >
      <template #body>
        <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div class="scroll-reveal order-2 lg:order-1" style="transition-delay: 0.1s">
            <AboutImageCard :image="page.image" :stats="page.stats" />
          </div>
          <div class="scroll-reveal order-1 lg:order-2" style="transition-delay: 0.2s">
            <USeparator
              class="mb-4"
              color="primary"
              label="Vores historie"
              :ui="{
                root: 'flex items-center justify-start gap-3',
                border: 'w-8',
                label: 'text-xs font-semibold uppercase tracking-[0.2em] text-primary',
              }"
            />
            <h2 class="mb-6 text-3xl font-bold text-gray-900">
              Fra én mand til et
              <span class="text-cyan-600">stærkt team</span>
            </h2>
            <p class="mb-8 text-lg leading-relaxed text-gray-600">
              {{ page.story }}
            </p>
            <AboutBenefits :benefits="page.benefits" />
          </div>
        </div>
      </template>
    </UPageSection>

    <!-- Values -->
    <UPageSection
      :ui="{
        root: 'bg-slate-100 overflow-hidden',
        container: 'py-24',
        header: 'max-w-2xl mx-auto',
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
            label: 'text-xs font-semibold uppercase tracking-[0.2em] text-primary',
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
          <UCard
            v-for="(value, index) in page.values"
            :key="value.title"
            class="scroll-reveal text-center"
            :style="{ transitionDelay: `${0.2 + index * 0.1}s` }"
            :ui="{
              root: 'shadow-sm rounded-2xl hover:shadow-lg transition-shadow duration-300',
              body: 'p-8',
            }"
          >
            <UIcon :name="value.icon" class="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-primary p-3.5" />
            <h3 class="mb-2 text-xl font-bold text-gray-900">
              {{ value.title }}
            </h3>
            <p class="text-sm leading-relaxed text-gray-600">
              {{ value.description }}
            </p>
          </UCard>
        </div>
      </template>
    </UPageSection>

    <!-- Team -->
    <UPageSection
      :ui="{
        root: 'bg-white overflow-hidden',
        container: 'py-24',
        header: 'max-w-2xl mx-auto',
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
            label: 'text-xs font-semibold uppercase tracking-[0.2em] text-primary',
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
          <UCard
            v-for="(member, index) in page.team"
            :key="member.name"
            class="scroll-reveal text-center"
            :style="{ transitionDelay: `${0.2 + index * 0.05}s` }"
            :ui="{
              root: 'shadow-sm rounded-2xl hover:shadow-lg transition-shadow duration-300',
              body: 'p-6',
            }"
          >
            <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 text-2xl font-bold text-white">
              {{ member.name.charAt(0) }}
            </div>
            <h3 class="text-base font-bold text-gray-900">
              {{ member.name }}
            </h3>
            <p class="text-sm text-gray-500">
              {{ member.role }}
            </p>
          </UCard>
        </div>
      </template>
    </UPageSection>
  </template>
</template>
