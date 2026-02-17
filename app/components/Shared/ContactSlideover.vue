<script setup lang="ts">
import type { FormError, FormSubmitEvent, TabsItem } from '@nuxt/ui'

const { isOpen, activeTab, selectedService, close } = useContactSlideover()

const tabs: TabsItem[] = [
  { label: 'Send besked', icon: 'i-lucide-message-square', value: 'message', slot: 'message' },
  { label: 'Få et tilbud', icon: 'i-lucide-file-text', value: 'quote', slot: 'quote' }
]

const serviceOptions = [
  { label: 'Vinduespolering', value: 'vinduespolering' },
  { label: 'Solcellevask', value: 'solcellevask' },
  { label: 'Fliserens', value: 'fliserens' },
  { label: 'Algebehandling af tag', value: 'algebehandling-tag' },
  { label: 'Algebehandling af facade', value: 'algebehandling-facade' }
]

const messageState = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const quoteState = reactive({
  name: '',
  email: '',
  phone: '',
  service: undefined as { label: string, value: string } | undefined,
  address: '',
  details: ''
})

// Sync selectedService from composable
watch(selectedService, (slug) => {
  if (slug) {
    quoteState.service = serviceOptions.find(s => s.value === slug)
  }
})

type MessageState = typeof messageState
type QuoteState = typeof quoteState

function validateMessage(state: Partial<MessageState>): FormError[] {
  const errors: FormError[] = []
  if (!state.name) errors.push({ name: 'name', message: 'Navn er påkrævet' })
  if (!state.email) errors.push({ name: 'email', message: 'Email er påkrævet' })
  if (!state.message) errors.push({ name: 'message', message: 'Besked er påkrævet' })
  return errors
}

function validateQuote(state: Partial<QuoteState>): FormError[] {
  const errors: FormError[] = []
  if (!state.name) errors.push({ name: 'name', message: 'Navn er påkrævet' })
  if (!state.email) errors.push({ name: 'email', message: 'Email er påkrævet' })
  if (!state.service) errors.push({ name: 'service', message: 'Vælg en tjeneste' })
  return errors
}

function onSubmitMessage(event: FormSubmitEvent<MessageState>) {
  console.log('Message submitted:', event.data)
  close()
}

function onSubmitQuote(event: FormSubmitEvent<QuoteState>) {
  console.log('Quote submitted:', event.data)
  close()
}
</script>

<template>
  <USlideover
    v-model:open="isOpen"
    :ui="{
      content: 'max-w-lg',
      body: 'p-0',
      header: 'bg-slate-900 p-6',
      title: 'text-white text-lg',
      description: 'text-slate-400',
      close: 'text-slate-400 hover:text-white',
    }"
  >
    <template #header>
      <div>
        <h2 class="text-lg font-bold text-white">
          {{ activeTab === 'message' ? 'Kontakt os' : 'Få et tilbud' }}
        </h2>
        <p class="mt-1 text-sm text-slate-400">
          {{ activeTab === 'message' ? 'Vi vender tilbage inden 24 timer.' : 'Uforpligtende tilbud med fast pris.' }}
        </p>
      </div>
    </template>

    <template #body>
      <UTabs
        :items="tabs"
        :model-value="activeTab"
        color="primary"
        variant="pill"
        :ui="{
          root: 'px-6 pt-6',
          list: 'bg-slate-100 rounded-lg p-1',
          trigger: 'text-sm',
          content: 'px-6 pb-6',
        }"
        @update:model-value="activeTab = $event as 'message' | 'quote'"
      >
        <template #message>
          <UForm
            :validate="validateMessage"
            :state="messageState"
            class="space-y-5 pt-6"
            @submit="onSubmitMessage"
          >
            <UFormField label="Navn" name="name" required>
              <UInput v-model="messageState.name" placeholder="Dit fulde navn" size="lg" class="w-full" />
            </UFormField>

            <UFormField label="Email" name="email" required>
              <UInput v-model="messageState.email" type="email" placeholder="din@email.dk" size="lg" class="w-full" />
            </UFormField>

            <UFormField label="Telefon" name="phone">
              <UInput v-model="messageState.phone" type="tel" placeholder="12 34 56 78" size="lg" class="w-full" />
            </UFormField>

            <UFormField label="Besked" name="message" required>
              <UTextarea v-model="messageState.message" placeholder="Hvad kan vi hjælpe med?" :rows="4" size="lg" class="w-full" />
            </UFormField>

            <UButton type="submit" size="xl" color="primary" trailing-icon="i-lucide-send" block>
              Send besked
            </UButton>
          </UForm>
        </template>

        <template #quote>
          <UForm
            :validate="validateQuote"
            :state="quoteState"
            class="space-y-5 pt-6"
            @submit="onSubmitQuote"
          >
            <UFormField label="Tjeneste" name="service" required>
              <USelectMenu
                v-model="quoteState.service"
                :items="serviceOptions"
                placeholder="Vælg en tjeneste"
                size="lg"
                class="w-full"
                value-key="value"
                :search-input="false"
              />
            </UFormField>

            <UFormField label="Navn" name="name" required>
              <UInput v-model="quoteState.name" placeholder="Dit fulde navn" size="lg" class="w-full" />
            </UFormField>

            <UFormField label="Email" name="email" required>
              <UInput v-model="quoteState.email" type="email" placeholder="din@email.dk" size="lg" class="w-full" />
            </UFormField>

            <UFormField label="Telefon" name="phone">
              <UInput v-model="quoteState.phone" type="tel" placeholder="12 34 56 78" size="lg" class="w-full" />
            </UFormField>

            <UFormField label="Adresse" name="address">
              <UInput v-model="quoteState.address" placeholder="Hvor skal arbejdet udføres?" size="lg" class="w-full" />
            </UFormField>

            <UFormField label="Beskrivelse" name="details">
              <UTextarea v-model="quoteState.details" placeholder="Fortæl os om opgaven (antal vinduer, areal, etc.)" :rows="3" size="lg" class="w-full" />
            </UFormField>

            <UButton type="submit" size="xl" color="primary" trailing-icon="i-lucide-arrow-right" block>
              Anmod om tilbud
            </UButton>
          </UForm>
        </template>
      </UTabs>
    </template>

    <template #footer>
      <div class="flex items-center justify-center gap-6 text-xs text-gray-400">
        <span class="flex items-center gap-1.5">
          <UIcon name="i-lucide-clock" class="size-3.5" />
          Svar inden 24t
        </span>
        <span class="flex items-center gap-1.5">
          <UIcon name="i-lucide-shield-check" class="size-3.5" />
          Dine data er sikre
        </span>
      </div>
    </template>
  </USlideover>
</template>
