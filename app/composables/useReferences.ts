/**
 * Composable for dynamically loading reference logos.
 * Loads all images from /img/references/ directory.
 */
export function useReferences() {
  const references = [
    { name: 'Egeskov', src: '/img/references/egeskov.png' },
    { name: 'Assens Skibsværft', src: '/img/references/assens-skibsværft.png' },
    { name: 'AT Biler', src: '/img/references/ATbiler.png' },
    { name: 'Stutteri', src: '/img/references/stutteri.png' }
  ]

  return { references }
}
