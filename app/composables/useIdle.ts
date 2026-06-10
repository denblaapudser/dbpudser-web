/**
 * Returns a ref that flips to `true` once the browser is idle after the first
 * paint. Used to lazy-load above-the-fold background images without blocking the
 * initial render — the page renders (and looks right) before JS runs, so JS can
 * safely be deferred.
 */
export function useIdle() {
  const idle = ref(false)

  onMounted(() => {
    const reveal = () => {
      idle.value = true
    }
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(reveal, { timeout: 2000 })
    } else {
      setTimeout(reveal, 1000)
    }
  })

  return idle
}
