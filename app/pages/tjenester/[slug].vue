<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: service } = await useServiceContent(slug)
const { openContact, openQuote } = useContactSlideover()

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: 'Service not found' })
}

const breadcrumbs = computed(() => [
  { label: 'Hjem', icon: 'i-lucide-home', to: '/' },
  { label: 'Tjenester', to: '/tjenester' },
  { label: service.value?.title ?? '' }
])

useScrollReveal()
</script>

<template>
  <template v-if="service">
    <!-- Hero -->
    <div class="relative -mt-25 overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url(${service.image})` }"
      />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.6)_0%,rgba(2,6,23,0.90)_70%,rgba(2,6,23,1)_100%)]" />
      <UPageSection
        :description="service.description"
        :ui="{
          root: 'dark relative z-10 h-120 lg:h-170 flex items-end',
          header: 'max-w-2xl',
          title: 'text-left scroll-reveal text-4xl font-bold leading-tight text-white delay-300 lg:text-5xl',
          description: 'scroll-reveal text-lg leading-relaxed text-slate-300 delay-500',
        }"
      >
        <template #headline>
          <UBreadcrumb
            :items="breadcrumbs"
            class="scroll-reveal mb-8"
            style="transition-delay: 0.1s"
            :ui="{
              link: 'text-slate-400 hover:text-white transition-colors',
              linkLabel: 'text-xs',
              linkLeadingIcon: 'size-3.5',
              separatorIcon: 'text-slate-600 size-3.5',
            }"
          />
          <span class="text-primary delay-200 scroll-reveal mb-8">{{ service.title }}</span>
        </template>

        <template #title>
          {{ service.title }}
        </template>
      </UPageSection>
    </div>

    <!-- About + Sidebar -->
    <UPageSection
      :ui="{
        root: 'relative z-10 bg-white',
        container: 'py-16 lg:py-50',
      }"
    >
      <template #body>
        <div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-3">
          <!-- Om tjenesten -->
          <div class="lg:col-span-2 scroll-reveal" style="transition-delay: 0.1s">
            <USeparator
              class="mb-4"
              color="primary"
              label="Om tjenesten"
              :ui="{
                root: 'flex items-center justify-start gap-3',
                border: 'w-8',
                label: 'text-xs font-semibold uppercase tracking-[0.2em] text-primary',
              }"
            />
            <h2 class="mb-6 text-3xl font-bold text-gray-900">
              Om {{ service.title.toLowerCase() }}
            </h2>
            <p class="text-lg leading-[1.8] text-gray-600">
              {{ service.longDescription }}
            </p>
          </div>

          <!-- Sidebar — pulled up into hero -->
          <div class="scroll-reveal lg:-mt-140 lg:col-span-1 lg:sticky lg:top-32 space-y-7" style="transition-delay: 0.6s">
              <!-- CTA card -->
              <UCard
                :ui="{
                  root: 'shadow-2xl rounded-2xl overflow-hidden',
                  header: 'bg-slate-900 px-7 py-6',
                  body: 'px-7 py-6',
                  footer: 'px-7 py-6',
                }"
              >
                <template #header>
                  <h3 class="text-2xl font-bold text-white">Få et uforpligtende tilbud!</h3>
                  <p class="mt-1 text-xs text-slate-400">Uforpligtende &middot; Altid fast pris</p>
                </template>

                <p class="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">Inkluderet</p>
                <ul class="space-y-3">
                  <li
                    v-for="feature in service.features"
                    :key="feature.title"
                    class="flex items-start gap-3"
                  >
                    <UIcon name="i-lucide-check" class="mt-0.5 size-5 shrink-0 rounded-full bg-primary p-0.5" />
                    <div>
                      <span class="text-sm font-medium text-gray-900">{{ feature.title }}</span>
                      <p class="text-xs leading-relaxed text-gray-500">{{ feature.description }}</p>
                    </div>
                  </li>
                </ul>

                <template #footer>
                  <div class="space-y-3">
                    <UButton color="primary" size="xl" block trailing-icon="i-lucide-arrow-right" @click="openQuote(slug)">
                      Få et uforpligtende tilbud
                    </UButton>
                    <UButton variant="outline" color="neutral" size="lg" block leading-icon="i-lucide-message-square" @click="openContact()">
                      Kontakt os
                    </UButton>
                  </div>
                  <div class="mt-5 flex items-center justify-center gap-4 text-xs text-gray-400">
                    <span class="flex items-center gap-1">
                      <UIcon name="i-lucide-clock" class="size-3.5" />
                      Svar inden 24t
                    </span>
                    <span class="flex items-center gap-1">
                      <UIcon name="i-lucide-shield-check" class="size-3.5" />
                      Forsikret
                    </span>
                  </div>
                </template>
              </UCard>

              <!-- Info card -->
              <UCard
                :ui="{
                  root: 'shadow-xl rounded-2xl',
                  body: 'p-10 space-y-4',
                }"
              >
                <h3 class="text-sm font-bold text-gray-900">Kontakt oplysninger</h3>
                <a href="tel:40829240" class="flex items-center gap-3 text-sm text-gray-600 transition-colors hover:text-cyan-600">
                  <UIcon name="i-lucide-phone" class="size-4 shrink-0 text-cyan-600" />
                  40 82 92 40
                </a>
                <a href="mailto:info@fl-rene.dk" class="flex items-center gap-3 text-sm text-gray-600 transition-colors hover:text-cyan-600">
                  <UIcon name="i-lucide-mail" class="size-4 shrink-0 text-cyan-600" />
                  info@fl-rene.dk
                </a>
                <p class="flex items-center gap-3 text-sm text-gray-600">
                  <UIcon name="i-lucide-clock" class="size-4 shrink-0 text-cyan-600" />
                  Man–Fre: 07:00–16:00
                </p>
                <p class="flex items-center gap-3 text-sm text-gray-600">
                  <UIcon name="i-lucide-map-pin" class="size-4 shrink-0 text-cyan-600" />
                  Fyn, Trekantområdet &amp; København
                </p>
              </UCard>
          </div>
        </div>
      </template>
    </UPageSection>

    <!-- Features -->
    <UPageSection
      :ui="{
        root: 'lg:h-250 flex items-center bg-slate-100 overflow-hidden',
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
          <UCard
            v-for="(feature, index) in service.features"
            :key="feature.title"
            class="scroll-reveal"
            :style="{ transitionDelay: `${0.2 + index * 0.1}s` }"
            :ui="{
              root: 'shadow-sm rounded-2xl',
              body: 'p-8',
            }"
          >
            <UIcon :name="feature.icon" class="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary p-3" />
            <h3 class="mb-2 text-lg font-bold text-gray-900">
              {{ feature.title }}
            </h3>
            <p class="text-sm leading-relaxed text-gray-600">
              {{ feature.description }}
            </p>
          </UCard>
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
            <UIcon :name="step.icon" class="mx-auto mb-3 size-6 text-cyan-600" />
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
  </template>
</template>
