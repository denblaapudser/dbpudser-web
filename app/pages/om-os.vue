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

const values = [
  {
    icon: 'i-lucide-award',
    title: 'Kvalitet',
    description: 'Vi sætter en ære i vores håndværk og leverer altid et resultat, du kan være stolt af.'
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Stabilitet',
    description: 'Med faste medarbejdere og rutiner sikrer vi en ensartet og pålidelig service.'
  },
  {
    icon: 'i-lucide-heart-handshake',
    title: 'Loyalitet',
    description: 'Vi værdsætter langvarige kunderelationer og er altid til rådighed.'
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/10">
      <div class="absolute inset-0 bg-pattern-dots opacity-30" />
      <div class="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 blob" />

      <div class="relative max-w-4xl mx-auto px-4 text-center">
        <span class="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
          Hvem er vi
        </span>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Om <span class="text-gradient">Os</span>
        </h1>
        <p class="text-xl text-muted max-w-2xl mx-auto">
          Mød teamet bag Flemming René Vinduespolering - din pålidelige partner i professionel rengøring siden 2006.
        </p>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Image -->
          <div class="relative group">
            <div class="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-2 group-hover:rotate-1 transition-transform" />
            <img
              src="/img/om-os.jpg"
              alt="Flemming René Vinduespolering team"
              class="relative rounded-2xl shadow-2xl w-full h-auto transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"
            >

            <!-- Stats badge -->
            <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 glass">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-xl icon-gradient flex items-center justify-center">
                  <UIcon name="i-lucide-calendar" class="w-7 h-7" />
                </div>
                <div>
                  <p class="text-3xl font-bold text-gradient">18+</p>
                  <p class="text-sm text-muted">Års erfaring</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div>
            <span class="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
              Vores historie
            </span>
            <h2 class="text-4xl font-bold mb-6">Hvem er vi?</h2>
            <p class="text-lg text-muted mb-4">
              Virksomheden blev etableret i 2006 og beskæftiger i dag 8 dedikerede medarbejdere. Vi fremhæver tre kerneværdier i alt, hvad vi gør: <strong class="text-foreground">kvalitet, stabilitet og loyalitet</strong>.
            </p>
            <p class="text-muted mb-4">
              Vores team består af uddannede og erfarne fagfolk, hvor flere medarbejdere har over 30 års erfaring i branchen. Vi prioriterer medarbejdernes trivsel og tilbyder fordele som pension og sundhedsforsikring.
            </p>
            <p class="text-muted mb-8">
              I slutningen af 2017 udvidede vi ud over vinduespolering til at tilbyde rengøringsydelser til både private og erhvervskunder på Fyn, Trekantområdet og dele af København.
            </p>

            <!-- Mini stats -->
            <div class="grid grid-cols-3 gap-4">
              <div class="p-4 rounded-xl bg-primary/5 text-center">
                <p class="text-2xl font-bold text-gradient">8</p>
                <p class="text-xs text-muted">Medarbejdere</p>
              </div>
              <div class="p-4 rounded-xl bg-primary/5 text-center">
                <p class="text-2xl font-bold text-gradient">2006</p>
                <p class="text-xs text-muted">Etableret</p>
              </div>
              <div class="p-4 rounded-xl bg-primary/5 text-center">
                <p class="text-2xl font-bold text-gradient">30+</p>
                <p class="text-xs text-muted">Års erfaring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="relative py-32 bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/20 rounded-full">
            Vores DNA
          </span>
          <h2 class="text-4xl font-bold mb-4">Vores Kerneværdier</h2>
          <p class="text-white/60 max-w-2xl mx-auto">
            Disse værdier guider alt hvad vi gør og sikrer, at du altid får den bedste service.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="value in values"
            :key="value.title"
            class="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm card-hover group text-center"
          >
            <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
              <UIcon :name="value.icon" class="w-8 h-8 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 class="font-bold text-xl mb-3">{{ value.title }}</h3>
            <p class="text-white/60">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="relative py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div class="absolute inset-0 bg-pattern-dots opacity-30" />

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
            Teamet
          </span>
          <h2 class="text-4xl font-bold mb-4">Mød Vores <span class="text-gradient">Team</span></h2>
          <p class="text-muted max-w-2xl mx-auto">
            8 erfarne vinduespudsere der leverer kvalitet hver dag
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            v-for="(member, index) in team"
            :key="member"
            class="group relative bg-white rounded-2xl p-6 shadow-sm card-hover border border-gray-100 text-center"
          >
            <div
              class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
              :class="index === 0 ? 'icon-gradient' : 'bg-primary/10 group-hover:bg-primary/20 transition-colors'"
            >
              <UIcon
                :name="index === 0 ? 'i-lucide-crown' : 'i-lucide-user'"
                class="w-10 h-10"
                :class="index === 0 ? 'text-white' : 'text-primary'"
              />
            </div>
            <p class="font-semibold">{{ member }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
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
