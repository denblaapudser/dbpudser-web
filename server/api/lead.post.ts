import nodemailer from 'nodemailer'

interface ContactLead {
  type: 'contact'
  token?: string
  name: string
  email: string
  phone?: string
  message: string
}

interface QuoteLead {
  type: 'quote'
  token?: string
  name: string
  email: string
  phone?: string
  message?: string
  services: string[]
  customerType?: string
  homeType?: string
  floors?: string
  frequency?: string
  street?: string
  zip?: string
  city?: string
  estimate?: number
}

type Lead = ContactLead | QuoteLead

/** Verify a Cloudflare Turnstile token. Skipped if no secret is configured (dev). */
async function verifyTurnstile(secret: string, token: string | undefined, ip?: string): Promise<boolean> {
  if (!secret) return true
  if (!token) return false

  const body = new URLSearchParams()
  body.append('secret', secret)
  body.append('response', token)
  if (ip) body.append('remoteip', ip)

  try {
    const result = await $fetch<{ success: boolean }>(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      { method: 'POST', body }
    )
    return result.success === true
  } catch {
    return false
  }
}

function renderLead(lead: Lead): { subject: string, html: string } {
  const row = (label: string, value?: string | number) =>
    value ? `<tr><td style="padding:4px 12px 4px 0;color:#64748b">${label}</td><td style="padding:4px 0;font-weight:600">${value}</td></tr>` : ''

  if (lead.type === 'contact') {
    return {
      subject: `Ny besked fra ${lead.name}`,
      html: `
        <h2>Ny kontaktbesked</h2>
        <table>
          ${row('Navn', lead.name)}
          ${row('Email', lead.email)}
          ${row('Telefon', lead.phone)}
        </table>
        <p style="margin-top:16px;white-space:pre-wrap">${lead.message}</p>
      `
    }
  }

  return {
    subject: `Ny tilbudsanmodning fra ${lead.name}`,
    html: `
      <h2>Ny tilbudsanmodning</h2>
      <table>
        ${row('Ydelser', lead.services?.join(', '))}
        ${row('Kundetype', lead.customerType)}
        ${row('Boligtype', lead.homeType)}
        ${row('Etager', lead.floors)}
        ${row('Hyppighed', lead.frequency)}
        ${row('Adresse', [lead.street, [lead.zip, lead.city].filter(Boolean).join(' ')].filter(Boolean).join(', '))}
        ${row('Est. pris', lead.estimate ? `${lead.estimate} kr.` : undefined)}
        ${row('Navn', lead.name)}
        ${row('Email', lead.email)}
        ${row('Telefon', lead.phone)}
      </table>
      ${lead.message ? `<p style="margin-top:16px;white-space:pre-wrap">${lead.message}</p>` : ''}
    `
  }
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const lead = await readBody<Lead>(event)

  // Basic validation
  if (!lead || (lead.type !== 'contact' && lead.type !== 'quote')) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid request' })
  }
  if (!lead.name || !lead.email) {
    throw createError({ statusCode: 400, statusMessage: 'Navn og email er påkrævet' })
  }
  if (lead.type === 'contact' && !lead.message) {
    throw createError({ statusCode: 400, statusMessage: 'Besked er påkrævet' })
  }
  if (lead.type === 'quote' && (!lead.services || lead.services.length === 0)) {
    throw createError({ statusCode: 400, statusMessage: 'Vælg mindst én ydelse' })
  }

  // Bot protection
  const ip = getRequestIP(event, { xForwardedFor: true })
  const human = await verifyTurnstile(config.turnstileSecretKey, lead.token, ip)
  if (!human) {
    throw createError({ statusCode: 400, statusMessage: 'Bekræft venligst at du ikke er en robot' })
  }

  const { subject, html } = renderLead(lead)

  // Send via SMTP if configured, otherwise log (dev fallback). Auth is optional:
  // with user+pass → SMTP AUTH; without → IP-based relay (M365 connector / direct send).
  if (config.smtpHost) {
    const port = Number(config.smtpPort) || 587
    const secure = port === 465 // 465 = implicit TLS; 25/587 = STARTTLS
    const hasAuth = !!(config.smtpUser && config.smtpPass)

    const transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port,
      secure,
      requireTLS: !secure,
      auth: hasAuth ? { user: config.smtpUser, pass: config.smtpPass } : undefined
    })

    await transporter.sendMail({
      from: config.leadEmailFrom || config.smtpUser,
      to: config.leadEmailTo || config.smtpUser,
      replyTo: lead.email,
      subject,
      html
    })
  } else {
    console.info('[lead] (no SMTP configured, logging instead)', { subject, lead })
  }

  return { ok: true }
})
