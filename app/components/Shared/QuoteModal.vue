<script setup lang="ts">
import { estimatePrice, formatPrice, type QuoteForm } from '~/composables/usePriceEstimate'

const { isOpen, presetService, close } = useQuoteModal()
const { services } = useSiteConfig()
const config = useRuntimeConfig()
const toast = useToast()

const turnstileRequired = computed(() => !!config.public.turnstileSiteKey)
const token = ref<string>()
const submitting = ref(false)
const turnstile = ref<{ reset: () => void } | null>(null)

const steps = [
  { key: 'address', label: 'Adresse', icon: 'i-lucide-map-pin' },
  { key: 'service', label: 'Ydelse', icon: 'i-lucide-sparkles' },
  { key: 'customer', label: 'Kundetype', icon: 'i-lucide-users' },
  { key: 'scope', label: 'Omfang', icon: 'i-lucide-ruler' },
  { key: 'frequency', label: 'Hyppighed', icon: 'i-lucide-calendar-clock' },
  { key: 'contact', label: 'Kontakt', icon: 'i-lucide-user' }
]

const customerTypes = [
  { value: 'privat', label: 'Privat', icon: 'i-lucide-house' },
  { value: 'erhverv', label: 'Erhverv', icon: 'i-lucide-building-2' }
]

const homeTypes = [
  { value: 'villa', label: 'Villa', icon: 'i-lucide-house' },
  { value: 'raekkehus', label: 'Rækkehus', icon: 'i-lucide-home' },
  { value: 'lejlighed', label: 'Lejlighed', icon: 'i-lucide-building' },
  { value: 'andet', label: 'Andet', icon: 'i-lucide-ellipsis' }
]

const floorOptions = [
  { value: '1', label: '1 etage' },
  { value: '2', label: '2 etager' },
  { value: '3+', label: '3+ etager' }
]

const frequencies = [
  { value: 'engangs', label: 'Engangs', hint: 'Én enkelt gang' },
  { value: '4uger', label: 'Hver 4. uge', hint: 'Fast aftale · bedst pris' },
  { value: '8uger', label: 'Hver 8. uge', hint: 'Fast aftale' },
  { value: 'behov', label: 'Efter behov', hint: 'Vi aftaler løbende' }
]

const step = ref(0)
const submitted = ref(false)

const form = reactive<QuoteForm>({
  services: [],
  customerType: undefined,
  homeType: undefined,
  floors: undefined,
  frequency: undefined,
  street: '',
  zip: '',
  city: '',
  name: '',
  email: '',
  phone: '',
  message: ''
})

// ── DAWA address autocomplete (api.dataforsyningen.dk) ──────────────────────
interface DawaItem {
  tekst: string
  adresse: {
    vejnavn: string
    husnr: string
    etage?: string | null
    dør?: string | null
    postnr: string
    postnrnavn: string
  }
}

const addressSearch = ref('')
const addressItems = ref<DawaItem[]>([])
const addressLoading = ref(false)
const selectedAddress = ref<DawaItem>()
let addressDebounce: ReturnType<typeof setTimeout> | undefined

watch(addressSearch, (q) => {
  clearTimeout(addressDebounce)
  if (!q || q.trim().length < 3) {
    addressItems.value = []
    return
  }
  addressLoading.value = true
  addressDebounce = setTimeout(async () => {
    try {
      addressItems.value = await $fetch<DawaItem[]>('https://api.dataforsyningen.dk/adresser/autocomplete', { query: { q } })
    } catch {
      addressItems.value = []
    } finally {
      addressLoading.value = false
    }
  }, 300)
})

watch(selectedAddress, (item) => {
  if (!item) return
  const a = item.adresse
  const unit = [a.etage ? `${a.etage}.` : '', a.dør].filter(Boolean).join(' ')
  form.street = `${a.vejnavn} ${a.husnr}${unit ? ` ${unit}` : ''}`.trim()
  form.zip = a.postnr
  form.city = a.postnrnavn
})

function resetForm() {
  step.value = 0
  submitted.value = false
  token.value = undefined
  Object.assign(form, {
    services: presetService.value ? [presetService.value] : [],
    customerType: undefined,
    homeType: undefined,
    floors: undefined,
    frequency: undefined,
    street: '',
    zip: '',
    city: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  selectedAddress.value = undefined
  addressSearch.value = ''
  addressItems.value = []
}

watch(isOpen, (open) => {
  if (open) resetForm()
})

function toggleService(slug: string) {
  const index = form.services.indexOf(slug)
  if (index === -1) form.services.push(slug)
  else form.services.splice(index, 1)
}

const price = computed(() => estimatePrice(form))
const perVisit = computed(() => !!form.frequency && form.frequency !== 'engangs')
const priceLabel = computed(() => `${formatPrice(price.value)}${perVisit.value ? ' / gang' : ''}`)

const emailValid = computed(() => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))

const currentStep = computed(() => steps[step.value]?.key)

const canProceed = computed(() => {
  switch (currentStep.value) {
    case 'address': return !!form.street && !!form.zip && !!form.city
    case 'service': return form.services.length > 0
    case 'customer': return !!form.customerType
    case 'scope': return !!form.homeType && !!form.floors
    case 'frequency': return !!form.frequency
    case 'contact': return !!form.name && emailValid.value && !!form.phone && (!turnstileRequired.value || !!token.value)
    default: return true
  }
})

function next() {
  if (canProceed.value && step.value < steps.length - 1) step.value++
}

function prev() {
  if (step.value > 0) step.value--
}

function goTo(index: number) {
  if (index < step.value) step.value = index
}

async function submit() {
  if (!canProceed.value) return
  submitting.value = true
  try {
    await $fetch('/api/lead', {
      method: 'POST',
      body: { type: 'quote', token: token.value, ...form, estimate: price.value }
    })
    submitted.value = true
  } catch (error: unknown) {
    const message = (error as { data?: { message?: string } })?.data?.message ?? 'Prøv igen, eller ring til os.'
    toast.add({ title: 'Noget gik galt', description: message, icon: 'i-lucide-alert-circle', color: 'error' })
    turnstile.value?.reset()
    token.value = undefined
  } finally {
    submitting.value = false
  }
}

const choiceBase = 'flex items-center gap-3 rounded-xl border p-4 text-left transition-colors cursor-pointer'
function choiceClass(active: boolean) {
  return active
    ? `${choiceBase} border-primary bg-primary-50`
    : `${choiceBase} border-gray-200 hover:border-gray-300`
}

const serviceLabel = (slug: string) => services.find(s => s.slug === slug)?.label ?? slug
</script>

<template>
  <UModal v-model:open="isOpen" :ui="{ content: 'max-w-xl' }">
    <template #content>
      <div class="flex max-h-[88vh] flex-col">
        <!-- Header -->
        <div class="shrink-0 border-b border-gray-200 p-6">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h2 class="text-lg font-bold text-gray-900">Beregn din pris</h2>
              <p v-if="!submitted" class="mt-0.5 text-xs text-gray-500">
                Trin {{ step + 1 }} af {{ steps.length }} · {{ steps[step].label }}
              </p>
            </div>
            <UButton icon="i-lucide-x" color="neutral" variant="ghost" aria-label="Luk" @click="close" />
          </div>
          <div v-if="!submitted" class="mt-5 flex items-center">
            <template v-for="(s, i) in steps" :key="s.key">
              <button
                type="button"
                :disabled="i >= step"
                :aria-label="s.label"
                class="flex size-8 shrink-0 items-center justify-center rounded-full border-2 transition-colors"
                :class="[
                  i < step ? 'border-primary bg-primary text-white' : i === step ? 'border-primary text-primary-600' : 'border-gray-200 text-gray-400',
                  i < step ? 'cursor-pointer' : 'cursor-default'
                ]"
                @click="goTo(i)"
              >
                <UIcon :name="i < step ? 'i-lucide-check' : s.icon" class="size-4" />
              </button>
              <div
                v-if="i < steps.length - 1"
                class="h-0.5 flex-1 transition-colors"
                :class="i < step ? 'bg-primary' : 'bg-gray-200'"
              />
            </template>
          </div>
        </div>

        <!-- Success -->
        <div v-if="submitted" class="flex flex-col items-center px-6 py-12 text-center">
          <div class="mb-5 flex size-16 items-center justify-center rounded-full bg-primary-50">
            <UIcon name="i-lucide-check" class="size-8 text-primary-600" />
          </div>
          <h3 class="mb-2 text-xl font-bold text-gray-900">Tak for din anmodning!</h3>
          <p class="mb-6 max-w-sm text-sm leading-relaxed text-gray-600">
            Vi har modtaget dine oplysninger og vender tilbage med et uforpligtende tilbud hurtigst muligt.
          </p>
          <UButton color="primary" size="lg" @click="close">Luk</UButton>
        </div>

        <!-- Steps -->
        <div v-else class="flex-1 overflow-y-auto p-6">
          <!-- 0 · Ydelse -->
          <div v-if="currentStep === 'service'">
            <h3 class="mb-1 text-base font-semibold text-gray-900">Hvilke ydelser er du interesseret i?</h3>
            <p class="mb-5 text-sm text-gray-500">Vælg en eller flere.</p>
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                v-for="s in services"
                :key="s.slug"
                type="button"
                :class="choiceClass(form.services.includes(s.slug))"
                @click="toggleService(s.slug)"
              >
                <UIcon :name="s.icon" class="size-6 shrink-0" :class="form.services.includes(s.slug) ? 'text-primary-600' : 'text-gray-400'" />
                <span class="text-sm font-medium text-gray-900">{{ s.label }}</span>
                <UIcon v-if="form.services.includes(s.slug)" name="i-lucide-check" class="ml-auto size-5 text-primary-600" />
              </button>
            </div>
          </div>

          <!-- 1 · Kundetype -->
          <div v-else-if="currentStep === 'customer'">
            <h3 class="mb-5 text-base font-semibold text-gray-900">Er du privat eller erhverv?</h3>
            <div class="grid grid-cols-2 gap-3">
              <button
                v-for="opt in customerTypes"
                :key="opt.value"
                type="button"
                :class="choiceClass(form.customerType === opt.value)"
                @click="form.customerType = opt.value"
              >
                <UIcon :name="opt.icon" class="size-6 shrink-0" :class="form.customerType === opt.value ? 'text-primary-600' : 'text-gray-400'" />
                <span class="text-sm font-medium text-gray-900">{{ opt.label }}</span>
              </button>
            </div>
          </div>

          <!-- 2 · Omfang -->
          <div v-else-if="currentStep === 'scope'" class="space-y-6">
            <div>
              <h3 class="mb-4 text-base font-semibold text-gray-900">Hvilken boligtype?</h3>
              <div class="grid grid-cols-2 gap-3">
                <button
                  v-for="opt in homeTypes"
                  :key="opt.value"
                  type="button"
                  :class="choiceClass(form.homeType === opt.value)"
                  @click="form.homeType = opt.value"
                >
                  <UIcon :name="opt.icon" class="size-6 shrink-0" :class="form.homeType === opt.value ? 'text-primary-600' : 'text-gray-400'" />
                  <span class="text-sm font-medium text-gray-900">{{ opt.label }}</span>
                </button>
              </div>
            </div>
            <div>
              <h3 class="mb-4 text-base font-semibold text-gray-900">Antal etager</h3>
              <div class="grid grid-cols-3 gap-3">
                <button
                  v-for="opt in floorOptions"
                  :key="opt.value"
                  type="button"
                  class="rounded-xl border p-4 text-center text-sm font-medium text-gray-900 transition-colors cursor-pointer"
                  :class="form.floors === opt.value ? 'border-primary bg-primary-50' : 'border-gray-200 hover:border-gray-300'"
                  @click="form.floors = opt.value"
                >
                  {{ opt.label }}
                </button>
              </div>
            </div>
          </div>

          <!-- 3 · Hyppighed -->
          <div v-else-if="currentStep === 'frequency'">
            <h3 class="mb-5 text-base font-semibold text-gray-900">Hvor ofte ønsker du ydelsen?</h3>
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                v-for="opt in frequencies"
                :key="opt.value"
                type="button"
                class="flex flex-col gap-1 rounded-xl border p-4 text-left transition-colors cursor-pointer"
                :class="form.frequency === opt.value ? 'border-primary bg-primary-50' : 'border-gray-200 hover:border-gray-300'"
                @click="form.frequency = opt.value"
              >
                <span class="text-sm font-medium text-gray-900">{{ opt.label }}</span>
                <span class="text-xs text-gray-500">{{ opt.hint }}</span>
              </button>
            </div>
          </div>

          <!-- 4 · Adresse -->
          <div v-else-if="currentStep === 'address'" class="space-y-4">
            <h3 class="text-base font-semibold text-gray-900">Hvor skal opgaven udføres?</h3>
            <UFormField label="Adresse" hint="Søg og vælg din adresse">
              <USelectMenu
                v-model="selectedAddress"
                v-model:search-term="addressSearch"
                :items="addressItems"
                :loading="addressLoading"
                ignore-filter
                label-key="tekst"
                icon="i-lucide-map-pin"
                placeholder="Søg din adresse…"
                size="lg"
                class="w-full"
                :search-input="{ placeholder: 'Skriv mindst 3 tegn…', icon: 'i-lucide-search' }"
              >
                <template #empty>
                  {{ addressSearch.trim().length < 3 ? 'Skriv mindst 3 tegn' : 'Ingen adresser fundet' }}
                </template>
              </USelectMenu>
            </UFormField>

            <div v-if="form.street" class="grid grid-cols-3 gap-4">
              <UFormField label="Postnr." class="col-span-1">
                <UInput v-model="form.zip" size="lg" class="w-full" disabled />
              </UFormField>
              <UFormField label="By" class="col-span-2">
                <UInput v-model="form.city" size="lg" class="w-full" disabled />
              </UFormField>
            </div>
          </div>

          <!-- 5 · Kontakt + opsummering -->
          <div v-else-if="currentStep === 'contact'" class="space-y-5">
            <div class="rounded-xl bg-slate-900 p-5">
              <p class="text-xs font-semibold uppercase tracking-wider text-slate-400">Estimeret pris</p>
              <p class="mt-1 text-2xl font-bold text-white">{{ priceLabel }}</p>
              <p class="mt-1 text-xs text-slate-400">Vejledende — endeligt tilbud gives efter besigtigelse.</p>
            </div>

            <div class="flex flex-wrap gap-2">
              <UBadge v-for="slug in form.services" :key="slug" color="neutral" variant="subtle">
                {{ serviceLabel(slug) }}
              </UBadge>
            </div>

            <UFormField label="Navn" required>
              <UInput v-model="form.name" placeholder="Dit fulde navn" size="lg" class="w-full" />
            </UFormField>
            <UFormField label="Email" required>
              <UInput v-model="form.email" type="email" placeholder="din@email.dk" size="lg" class="w-full" />
            </UFormField>
            <UFormField label="Telefon" required>
              <UInput v-model="form.phone" type="tel" placeholder="12 34 56 78" size="lg" class="w-full" />
            </UFormField>
            <UFormField label="Besked" hint="Valgfri">
              <UTextarea v-model="form.message" :rows="3" placeholder="Eventuelle detaljer om opgaven" size="lg" class="w-full" />
            </UFormField>

            <SharedTurnstile ref="turnstile" v-model="token" />
          </div>
        </div>

        <!-- Footer -->
        <div v-if="!submitted" class="flex shrink-0 items-center justify-between gap-3 border-t border-gray-200 p-6">
          <UButton v-if="step > 0" variant="ghost" color="neutral" leading-icon="i-lucide-arrow-left" @click="prev">
            Tilbage
          </UButton>
          <span v-else />

          <div class="flex items-center gap-4">
            <span v-if="price > 0" class="hidden text-sm text-gray-500 sm:block">
              Est. <strong class="text-gray-900">{{ priceLabel }}</strong>
            </span>
            <UButton
              v-if="step < steps.length - 1"
              color="primary"
              trailing-icon="i-lucide-arrow-right"
              :disabled="!canProceed"
              @click="next"
            >
              Videre
            </UButton>
            <UButton
              v-else
              color="primary"
              trailing-icon="i-lucide-send"
              :loading="submitting"
              :disabled="!canProceed"
              @click="submit"
            >
              Send anmodning
            </UButton>
          </div>
        </div>
      </div>
    </template>
  </UModal>
</template>
