export interface QuoteForm {
  services: string[]
  customerType?: string
  homeType?: string
  floors?: string
  frequency?: string
  street: string
  zip: string
  city: string
  name: string
  email: string
  phone: string
  message: string
}

/**
 * ⚠️ PLACEHOLDER PRICING — replace these rates with the real prices.
 * The estimate is only indicative; the final quote is given after inspection.
 *
 * total = Σ(service base price) × homeType × floors × frequency × customerType
 */
const SERVICE_BASE: Record<string, number> = {
  vinduespolering: 249,
  solcellevask: 499,
  fliserens: 899,
  'algebehandling-tag': 1499,
  'algebehandling-facade': 1299
}

const HOME_TYPE_FACTOR: Record<string, number> = {
  lejlighed: 0.8,
  raekkehus: 1,
  villa: 1.3,
  andet: 1.2
}

const FREQUENCY_FACTOR: Record<string, number> = {
  engangs: 1,
  '8uger': 0.85,
  '4uger': 0.75,
  behov: 0.95
}

const CUSTOMER_FACTOR: Record<string, number> = {
  privat: 1,
  erhverv: 1.25
}

/** Returns the indicative price in DKK, rounded to the nearest 10. */
export function estimatePrice(form: QuoteForm): number {
  if (!form.services.length) return 0

  const base = form.services.reduce((sum, slug) => sum + (SERVICE_BASE[slug] ?? 0), 0)
  const home = HOME_TYPE_FACTOR[form.homeType ?? ''] ?? 1
  const floorsNum = form.floors === '3+' ? 3 : Number(form.floors || 1)
  const floorFactor = 1 + (floorsNum - 1) * 0.2
  const frequency = FREQUENCY_FACTOR[form.frequency ?? ''] ?? 1
  const customer = CUSTOMER_FACTOR[form.customerType ?? ''] ?? 1

  const raw = base * home * floorFactor * frequency * customer
  return Math.round(raw / 10) * 10
}

/** Formats a DKK amount the Danish way, e.g. 1.250 kr. */
export function formatPrice(amount: number): string {
  return `${new Intl.NumberFormat('da-DK').format(amount)} kr.`
}
