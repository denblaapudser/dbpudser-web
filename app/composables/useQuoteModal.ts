const isOpen = ref(false)
const presetService = ref<string | undefined>()

/**
 * Controls the multi-step "Beregn din pris" quote modal. `openQuote` may
 * preselect a service (e.g. from a service detail page).
 */
export function useQuoteModal() {
  function openQuote(service?: string) {
    presetService.value = service
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  return {
    isOpen,
    presetService,
    openQuote,
    close
  }
}
