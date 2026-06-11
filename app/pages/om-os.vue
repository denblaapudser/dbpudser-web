<script setup lang="ts">
const { data: page } = await usePageContent('about')

useSeo({
  title: 'Om os',
  description: 'Flemming René Vinduespolering blev grundlagt i 2006. Mød teamet bag professionel udvendig rengøring på Fyn – med fokus på kvalitet, stabilitet og loyalitet.',
  image: '/img/om-os.webp'
})

useScrollReveal()
</script>

<template>
  <template v-if="page">
    <!-- Hero with background image -->
    <SharedHeroBackground :image="page.image">
      <UPageSection
        :description="page.description"
        :ui="{
          root: 'dark relative z-10 h-150 lg:h-170 flex items-center',
          title: 'hero-reveal [--reveal-delay:0.3s] text-4xl font-bold leading-tight text-white lg:text-5xl',
          description: 'hero-reveal [--reveal-delay:0.5s] text-lg leading-relaxed text-slate-300',
        }"
      >
        <template #headline>
          <SharedEyebrow class="hero-reveal" style="--reveal-delay: 0.1s" label="Om os" />
        </template>

        <template #title>
          Passion for
          <span class="text-primary-400">rene overflader</span>
        </template>
      </UPageSection>
    </SharedHeroBackground>

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
            <SharedEyebrow class="mb-4" align="start" label="Vores historie" />
            <h2 class="mb-6 text-3xl font-bold text-gray-900">
              Fra én mand til et
              <span class="text-primary-600">stærkt team</span>
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
        <SharedEyebrow class="scroll-reveal" style="transition-delay: 0.1s" label="Værdier" />
      </template>

      <template #title>
        <span class="scroll-reveal block" style="transition-delay: 0.2s">
          Det vi
          <span class="text-primary-600">står for</span>
        </span>
      </template>

      <template #body>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <SharedFeatureCard
            v-for="(value, index) in page.values"
            :key="value.title"
            class="scroll-reveal"
            :style="{ transitionDelay: `${0.2 + index * 0.1}s` }"
            align="center"
            :icon="value.icon"
            :title="value.title"
            :description="value.description"
          />
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
        <SharedEyebrow class="scroll-reveal" style="transition-delay: 0.1s" label="Teamet" />
      </template>

      <template #title>
        <span class="scroll-reveal block" style="transition-delay: 0.2s">
          Mød
          <span class="text-primary-600">teamet</span>
        </span>
      </template>

      <template #body>
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          <div
            v-for="(member, index) in page.team"
            :key="member.name"
            class="scroll-reveal group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-sm"
            :style="{ transitionDelay: `${0.2 + index * 0.05}s` }"
          >
            <img
              :src="member.image"
              :alt="member.name"
              loading="lazy"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/20 to-transparent" />
            <div class="absolute inset-x-0 bottom-0 p-5">
              <h3 class="text-base font-bold text-white">
                {{ member.name }}
              </h3>
              <p class="text-sm text-white/70">
                {{ member.role }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </UPageSection>
  </template>
</template>
