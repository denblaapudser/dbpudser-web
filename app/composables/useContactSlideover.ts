const isOpen = ref(false)

/**
 * Controls the contact slideover (message form + company info).
 * Quotes are handled separately by [[useQuoteModal]].
 */
export function useContactSlideover() {
  function openContact() {
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  return {
    isOpen,
    openContact,
    close
  }
}
