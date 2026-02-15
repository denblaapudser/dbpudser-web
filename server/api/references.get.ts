import { readdirSync } from 'node:fs'
import { join } from 'node:path'

export default defineEventHandler(() => {
  const referencesDir = join(process.cwd(), 'public', 'references')
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.webp']

  try {
    const files = readdirSync(referencesDir)

    return files
      .filter(file => imageExtensions.some(ext => file.toLowerCase().endsWith(ext)))
      .map(file => ({
        src: `/references/${file}`,
        alt: file.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
      }))
  } catch {
    return []
  }
})
