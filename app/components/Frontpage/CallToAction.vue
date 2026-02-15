<template>
  <UPageSection>
    <UPageCTA
      title="Klar til skinnende rene resultater?"
      description="Kontakt os i dag for et uforpligtende tilbud. Vi vender tilbage inden for 24 timer."
      variant="subtle"
      :links="[
        {
          label: 'Kontakt os',
          to: '/kontakt',
          trailingIcon: 'i-lucide-arrow-right',
          color: 'neutral'
        },
        {
          label: 'Ring til os',
          to: 'tel:+4512345678',
          icon: 'i-lucide-phone',
          color: 'neutral',
          variant: 'outline'
        }
      ]"
    />
  </UPageSection>
</template>
