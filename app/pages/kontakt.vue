<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

useSeo('kontakt')

const schema = z.object({
  name: z.string().min(2, 'Navn skal være mindst 2 tegn'),
  email: z.string().email('Ugyldig email adresse'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Beskeden skal være mindst 10 tegn')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  name: undefined,
  email: undefined,
  phone: undefined,
  message: undefined
})

const loading = ref(false)
const submitted = ref(false)

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  console.log('Form submitted:', event.data)
  submitted.value = true
  loading.value = false
}
</script>

<template>
  <div>
    <UPageHero
      title="Kontakt Os"
      description="Har du spørgsmål eller ønsker et tilbud? Udfyld formularen, eller kontakt os direkte."
    />

    <UPageSection>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img
            src="/img/contact.jpg"
            alt="Kontakt Flemming René Vinduespolering"
            class="rounded-lg shadow-lg w-full h-auto mb-8"
          >

          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <UIcon name="i-lucide-map-pin" class="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 class="font-semibold mb-1">Adresse</h3>
                <p class="text-muted">Bøgevej 14, 5683 Haarby</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <UIcon name="i-lucide-phone" class="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 class="font-semibold mb-1">Telefon</h3>
                <p class="text-muted">
                  <a href="tel:+4540829240" class="hover:text-primary transition-colors">40 82 92 40</a>
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <UIcon name="i-lucide-mail" class="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 class="font-semibold mb-1">Email</h3>
                <p class="text-muted">
                  <a href="mailto:info@fl-rene.dk" class="hover:text-primary transition-colors">info@fl-rene.dk</a>
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <UIcon name="i-lucide-clock" class="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 class="font-semibold mb-1">Åbningstider</h3>
                <p class="text-muted">Mandag - Fredag: 8:00 - 16:00</p>
                <p class="text-muted text-sm">Lukket weekender og helligdage</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <UIcon name="i-lucide-building" class="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 class="font-semibold mb-1">CVR</h3>
                <p class="text-muted">21745979</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <UCard>
            <template #header>
              <h2 class="text-xl font-semibold">Send os en besked</h2>
            </template>

            <div v-if="submitted" class="text-center py-8">
              <UIcon name="i-lucide-check-circle" class="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 class="text-xl font-semibold mb-2">Tak for din henvendelse!</h3>
              <p class="text-muted mb-4">Vi vender tilbage til dig hurtigst muligt.</p>
              <UButton variant="soft" @click="submitted = false">
                Send en ny besked
              </UButton>
            </div>

            <UForm
              v-else
              :schema="schema"
              :state="state"
              class="space-y-4"
              @submit="onSubmit"
            >
              <UFormField label="Navn" name="name" required>
                <UInput v-model="state.name" placeholder="Dit navn" />
              </UFormField>

              <UFormField label="Email" name="email" required>
                <UInput v-model="state.email" type="email" placeholder="din@email.dk" />
              </UFormField>

              <UFormField label="Telefon" name="phone">
                <UInput v-model="state.phone" type="tel" placeholder="Dit telefonnummer (valgfrit)" />
              </UFormField>

              <UFormField label="Besked" name="message" required>
                <UTextarea
                  v-model="state.message"
                  placeholder="Beskriv hvad vi kan hjælpe dig med..."
                  :rows="5"
                />
              </UFormField>

              <UButton type="submit" block :loading="loading">
                Send besked
              </UButton>
            </UForm>
          </UCard>
        </div>
      </div>
    </UPageSection>
  </div>
</template>
