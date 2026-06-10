/**
 * Composable that adds an 'is-visible' class to elements with the
 * given selector when they enter the viewport via IntersectionObserver.
 */
export function useScrollReveal(selector: string = '.scroll-reveal') {
  onMounted(() => {
    const elements = document.querySelectorAll(selector)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))
  })
}
