<script setup lang="ts">
useSeo('om-os')

const team = [
  'Flemming René Jensen (ejer)',
  'Kim Hansen',
  'Jan Kingo Christensen',
  'Dennis Thagaard',
  'Michael Clausen',
  'Kenneth Iversen',
  'Christoffer B. Andersen',
  'René Lunding'
]
</script>

<template>
  <div>
    <UPageHero
      title="Om Os"
      description="Mød teamet bag Flemming René Vinduespolering - din pålidelige partner i professionel rengøring siden 2006."
    />

    <UPageSection>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/img/om-os.jpg"
            alt="Flemming René Vinduespolering team"
            class="rounded-lg shadow-lg w-full h-auto"
          >
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4">Hvem er vi?</h2>
          <p class="text-muted mb-4">
            Virksomheden blev etableret i 2006 og beskæftiger i dag 8 dedikerede medarbejdere. Vi fremhæver tre kerneværdier i alt, hvad vi gør: <strong>kvalitet, stabilitet og loyalitet</strong>.
          </p>
          <p class="text-muted mb-4">
            Vores team består af uddannede og erfarne fagfolk, hvor flere medarbejdere har over 30 års erfaring i branchen. Vi prioriterer medarbejdernes trivsel og tilbyder fordele som pension og sundhedsforsikring.
          </p>
          <p class="text-muted">
            I slutningen af 2017 udvidede vi ud over vinduespolering til at tilbyde rengøringsydelser til både private og erhvervskunder på Fyn, Trekantområdet og dele af København.
          </p>
        </div>
      </div>
    </UPageSection>

    <UPageSection class="bg-muted/30">
      <template #title>Vores Team</template>
      <template #description>
        8 erfarne vinduespudsere der leverer kvalitet hver dag
      </template>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <UCard
          v-for="member in team"
          :key="member"
          class="text-center"
        >
          <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
            <UIcon name="i-lucide-user" class="w-8 h-8 text-primary" />
          </div>
          <p class="font-medium text-sm">{{ member }}</p>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <UIcon name="i-lucide-award" class="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">Kvalitet</h3>
          <p class="text-muted">Vi sætter en ære i vores håndværk og leverer altid et resultat, du kan være stolt af.</p>
        </div>
        <div>
          <UIcon name="i-lucide-shield-check" class="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">Stabilitet</h3>
          <p class="text-muted">Med faste medarbejdere og rutiner sikrer vi en ensartet og pålidelig service.</p>
        </div>
        <div>
          <UIcon name="i-lucide-heart-handshake" class="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">Loyalitet</h3>
          <p class="text-muted">Vi værdsætter langvarige kunderelationer og er altid til rådighed.</p>
        </div>
      </div>
    </UPageSection>

    <UPageSection class="bg-primary/5">
      <UPageCTA
        title="Klar til at samarbejde?"
        description="Kontakt os i dag for at høre mere om, hvordan vi kan hjælpe dig med professionel rengøring."
        :links="[{
          label: 'Kontakt os',
          to: '/kontakt',
          trailingIcon: 'i-lucide-arrow-right'
        }]"
      />
    </UPageSection>
  </div>
</template>
