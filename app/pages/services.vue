<script setup lang="ts">
useSeo('services')

const { data: services } = await useServices()

const features = [
  { icon: 'i-lucide-droplets', title: 'Rentvandsanlæg', description: 'Kalkfrit resultat uden striber' },
  { icon: 'i-lucide-users', title: 'Erfarne medarbejdere', description: 'Over 30 års brancheerfaring' },
  { icon: 'i-lucide-leaf', title: 'Miljøvenligt', description: 'Skånsomme metoder og produkter' },
  { icon: 'i-lucide-calendar-check', title: 'Fleksible aftaler', description: 'Skræddersyede serviceaftaler' }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/10">
      <div class="absolute inset-0 bg-pattern-dots opacity-30" />
      <div class="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 blob" />

      <div class="relative max-w-4xl mx-auto px-4 text-center">
        <span class="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
          Hvad vi tilbyder
        </span>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Vores <span class="text-gradient">Services</span>
        </h1>
        <p class="text-xl text-muted max-w-2xl mx-auto">
          Professionelle rengøringsløsninger til private og erhverv. Vi tilbyder vinduespolering, solcellevask, algebehandling og tagrens.
        </p>
      </div>
    </section>

    <!-- Services -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-24">
          <ServicesServiceCard
            v-for="(service, index) in services"
            :key="service.id"
            :service="service"
            :index="index"
          />
        </div>
      </div>
    </section>

    <!-- Why choose us -->
    <section class="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      <div class="absolute inset-0 bg-pattern-grid opacity-5" />
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/20 rounded-full">
            Fordele
          </span>
          <h2 class="text-4xl font-bold mb-4">Hvorfor vælge os?</h2>
          <p class="text-white/60 max-w-2xl mx-auto">
            Med over 18 års erfaring og et dedikeret team leverer vi altid kvalitetsarbejde.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm card-hover group"
          >
            <div class="w-14 h-14 mb-4 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
              <UIcon :name="feature.icon" class="w-7 h-7 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 class="font-semibold text-lg mb-2">{{ feature.title }}</h3>
            <p class="text-white/60 text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
      <div class="absolute inset-0 bg-pattern-diagonal opacity-50" />

      <div class="relative max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-4">
          Få et <span class="text-gradient">uforpligtende</span> tilbud
        </h2>
        <p class="text-lg text-muted mb-8 max-w-xl mx-auto">
          Kontakt os i dag, så finder vi den bedste løsning til dine behov.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton
            to="/kontakt"
            size="xl"
            trailing-icon="i-lucide-arrow-right"
            class="shadow-lg shadow-primary/20"
          >
            Kontakt os
          </UButton>
          <UButton
            to="tel:+4540829240"
            size="xl"
            color="neutral"
            variant="outline"
            icon="i-lucide-phone"
          >
            Ring 40 82 92 40
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>
