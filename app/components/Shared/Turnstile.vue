<script setup lang="ts">
const emit = defineEmits<{ verified: [token: string], expired: [], error: [] }>()
const model = defineModel<string | undefined>()

const config = useRuntimeConfig()
const siteKey = computed(() => config.public.turnstileSiteKey)

const container = ref<HTMLElement | null>(null)
let widgetId: string | undefined

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

function ensureScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.turnstile) return resolve()

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () => reject(new Error('Turnstile script failed to load')))
      return
    }

    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.defer = true
    script.addEventListener('load', () => resolve())
    script.addEventListener('error', () => reject(new Error('Turnstile script failed to load')))
    document.head.appendChild(script)
  })
}

async function render() {
  if (!siteKey.value || !container.value) return
  try {
    await ensureScript()
  } catch {
    emit('error')
    return
  }
  if (!window.turnstile || !container.value) return

  widgetId = window.turnstile.render(container.value, {
    sitekey: siteKey.value,
    callback: (token) => {
      model.value = token
      emit('verified', token)
    },
    'expired-callback': () => {
      model.value = undefined
      emit('expired')
    },
    'error-callback': () => {
      model.value = undefined
      emit('error')
    }
  })
}

function reset() {
  model.value = undefined
  if (widgetId !== undefined && window.turnstile) window.turnstile.reset(widgetId)
}

defineExpose({ reset })

onMounted(render)

onBeforeUnmount(() => {
  if (widgetId !== undefined && window.turnstile) {
    window.turnstile.remove(widgetId)
    widgetId = undefined
  }
})
</script>

<template>
  <div v-if="siteKey" ref="container" class="min-h-[65px]" />
</template>
