const isOpen = ref(false)
const activeTab = ref<'message' | 'quote'>('message')
const selectedService = ref<string | undefined>()

export function useContactSlideover() {
  function openContact() {
    activeTab.value = 'message'
    selectedService.value = undefined
    isOpen.value = true
  }

  function openQuote(service?: string) {
    activeTab.value = 'quote'
    selectedService.value = service
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  return {
    isOpen,
    activeTab,
    selectedService,
    openContact,
    openQuote,
    close
  }
}
