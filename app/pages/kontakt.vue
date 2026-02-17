<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

const { data: page } = await usePageContent('contact')

const state = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

type FormState = typeof state

function validate(state: Partial<FormState>): FormError[] {
  const errors: FormError[] = []
  if (!state.name) errors.push({ name: 'name', message: 'Navn er påkrævet' })
  if (!state.email) errors.push({ name: 'email', message: 'Email er påkrævet' })
  if (!state.message) errors.push({ name: 'message', message: 'Besked er påkrævet' })
  return errors
}

function onSubmit(event: FormSubmitEvent<FormState>) {
  console.log('Form submitted:', event.data)
}

useScrollReveal()
</script>

<template>
  <template v-if="page">
    <SharedHero eyebrow="Kontakt" :description="page.description">
      <template #title>
        Lad os tage en
        <span class="text-cyan-400">snak</span>
      </template>
    </SharedHero>

    <!-- Contact form + info -->
    <UPageSection
      :ui="{
        root: 'bg-white overflow-hidden',
        container: 'py-24'
      }"
    >
      <template #body>
        <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <!-- Left: Image + contact info -->
          <div class="scroll-reveal" style="transition-delay: 0.1s">
            <img
              :src="page.image"
              alt="Kontakt DBPUDSER"
              class="mb-8 w-full rounded-2xl object-cover shadow-xl"
            >

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-50">
                  <UIcon name="i-lucide-phone" class="size-5 text-cyan-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Telefon</h3>
                  <a :href="`tel:${page.contactInfo.phone.replace(/\s/g, '')}`" class="text-gray-600 hover:text-cyan-600">
                    {{ page.contactInfo.phone }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-50">
                  <UIcon name="i-lucide-mail" class="size-5 text-cyan-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Email</h3>
                  <a :href="`mailto:${page.contactInfo.email}`" class="text-gray-600 hover:text-cyan-600">
                    {{ page.contactInfo.email }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-50">
                  <UIcon name="i-lucide-map-pin" class="size-5 text-cyan-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Adresse</h3>
                  <p class="text-gray-600">{{ page.contactInfo.address }}</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-50">
                  <UIcon name="i-lucide-clock" class="size-5 text-cyan-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Åbningstider</h3>
                  <p class="text-gray-600">{{ page.contactInfo.hours }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Form -->
          <div class="scroll-reveal" style="transition-delay: 0.2s">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">Send os en besked</h2>
            <p class="mb-8 text-gray-600">Udfyld formularen, så vender vi tilbage hurtigst muligt.</p>

            <UForm :validate="validate" :state="state" class="space-y-6" @submit="onSubmit">
              <UFormField label="Navn" name="name">
                <UInput v-model="state.name" placeholder="Dit fulde navn" size="lg" class="w-full" />
              </UFormField>

              <UFormField label="Email" name="email">
                <UInput v-model="state.email" type="email" placeholder="din@email.dk" size="lg" class="w-full" />
              </UFormField>

              <UFormField label="Telefon" name="phone">
                <UInput v-model="state.phone" type="tel" placeholder="12 34 56 78" size="lg" class="w-full" />
              </UFormField>

              <UFormField label="Besked" name="message">
                <UTextarea v-model="state.message" placeholder="Fortæl os om din opgave..." :rows="5" size="lg" class="w-full" />
              </UFormField>

              <UButton type="submit" size="xl" color="primary" trailing-icon="i-lucide-send" block>
                Send besked
              </UButton>
            </UForm>
          </div>
        </div>
      </template>
    </UPageSection>
  </template>
</template>
