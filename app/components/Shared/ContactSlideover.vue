<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

const { isOpen, close } = useContactSlideover()
const { contact } = useSiteConfig()
const config = useRuntimeConfig()
const toast = useToast()

const turnstileRequired = computed(() => !!config.public.turnstileSiteKey)

const state = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

type State = typeof state

const token = ref<string>()
const loading = ref(false)
const turnstile = ref<{ reset: () => void } | null>(null)

function validate(state: Partial<State>): FormError[] {
  const errors: FormError[] = []
  if (!state.name) errors.push({ name: 'name', message: 'Navn er påkrævet' })
  if (!state.email) errors.push({ name: 'email', message: 'Email er påkrævet' })
  if (!state.message) errors.push({ name: 'message', message: 'Besked er påkrævet' })
  if (turnstileRequired.value && !token.value) errors.push({ name: 'token', message: 'Bekræft at du ikke er en robot' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<State>) {
  loading.value = true
  try {
    await $fetch('/api/lead', {
      method: 'POST',
      body: { type: 'contact', token: token.value, ...event.data }
    })
    toast.add({ title: 'Tak for din besked!', description: 'Vi vender tilbage inden 24 timer.', icon: 'i-lucide-check', color: 'success' })
    Object.assign(state, { name: '', email: '', phone: '', message: '' })
    token.value = undefined
    turnstile.value?.reset()
    close()
  } catch (error: unknown) {
    const message = (error as { data?: { message?: string } })?.data?.message ?? 'Prøv igen, eller ring til os.'
    toast.add({ title: 'Noget gik galt', description: message, icon: 'i-lucide-alert-circle', color: 'error' })
    turnstile.value?.reset()
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <USlideover
    v-model:open="isOpen"
    :ui="{
      content: 'max-w-lg',
      header: 'bg-slate-900 p-6',
      close: 'text-slate-400 hover:text-white',
    }"
  >
    <template #header>
      <div>
        <h2 class="text-lg font-bold text-white">Kontakt os</h2>
        <p class="mt-1 text-sm text-slate-400">Vi vender tilbage inden 24 timer.</p>
      </div>
    </template>

    <template #body>
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-5"
        @submit="onSubmit"
      >
        <UFormField label="Navn" name="name" required>
          <UInput v-model="state.name" placeholder="Dit fulde navn" size="lg" class="w-full" />
        </UFormField>

        <UFormField label="Email" name="email" required>
          <UInput v-model="state.email" type="email" placeholder="din@email.dk" size="lg" class="w-full" />
        </UFormField>

        <UFormField label="Telefon" name="phone">
          <UInput v-model="state.phone" type="tel" placeholder="12 34 56 78" size="lg" class="w-full" />
        </UFormField>

        <UFormField label="Besked" name="message" required>
          <UTextarea v-model="state.message" placeholder="Hvad kan vi hjælpe med?" :rows="4" size="lg" class="w-full" />
        </UFormField>

        <UFormField name="token">
          <SharedTurnstile ref="turnstile" v-model="token" />
        </UFormField>

        <UButton type="submit" :loading="loading" size="xl" color="primary" trailing-icon="i-lucide-send" block>
          Send besked
        </UButton>
      </UForm>

      <USeparator class="my-8" label="Eller kontakt os direkte" />

      <div class="space-y-5 text-sm">
        <div class="flex items-start gap-3">
          <UIcon name="i-lucide-map-pin" class="mt-0.5 size-5 shrink-0 text-primary-600" />
          <span class="text-gray-600">{{ contact.street }}<br>{{ contact.city }}</span>
        </div>

        <a :href="contact.emailHref" class="flex items-center gap-3 text-gray-600 transition-colors hover:text-primary-600">
          <UIcon name="i-lucide-mail" class="size-5 shrink-0 text-primary-600" />
          {{ contact.email }}
        </a>

        <a :href="contact.phoneHref" class="flex items-center gap-3 text-gray-600 transition-colors hover:text-primary-600">
          <UIcon name="i-lucide-phone" class="size-5 shrink-0 text-primary-600" />
          {{ contact.phone }}
        </a>

        <div class="flex items-start gap-3">
          <UIcon name="i-lucide-clock" class="mt-0.5 size-5 shrink-0 text-primary-600" />
          <div class="text-gray-600">
            <p>Telefonen er åben:</p>
            <p class="font-medium text-gray-900">{{ contact.phoneHours }}</p>
            <p class="mt-1 text-gray-500">{{ contact.closedNote }}</p>
          </div>
        </div>

        <div class="flex items-center gap-3 border-t border-gray-100 pt-4 text-gray-500">
          <UIcon name="i-lucide-building-2" class="size-5 shrink-0 text-primary-600" />
          CVR: {{ contact.cvr }}
        </div>
      </div>
    </template>
  </USlideover>
</template>
