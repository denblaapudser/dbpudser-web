<template>
  <section class="relative py-32 overflow-hidden">
    <!-- Background with pattern -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
    <div class="absolute inset-0 bg-pattern-dots opacity-30" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="order-2 lg:order-1">
          <span class="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
            Om os
          </span>

          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Vi har gjort det i <span class="text-gradient">18+ år</span>
          </h2>

          <p class="text-lg text-muted mb-4">
            Siden 2006 har vi leveret professionel vinduespolering og rengøringsløsninger til kunder på Fyn, Trekantområdet og dele af København.
          </p>

          <p class="text-muted mb-8">
            Vores team på 8 erfarne medarbejdere prioriterer kvalitet, stabilitet og loyalitet i alt, hvad vi gør. Flere af vores medarbejdere har over 30 års erfaring i branchen.
          </p>

          <!-- Stats with gradient backgrounds -->
          <div class="grid grid-cols-3 gap-4 mb-8">
            <div class="relative p-4 rounded-xl bg-white shadow-sm border border-gray-100 text-center card-hover">
              <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl" />
              <p class="relative text-3xl font-bold text-gradient">8</p>
              <p class="relative text-sm text-muted">Medarbejdere</p>
            </div>
            <div class="relative p-4 rounded-xl bg-white shadow-sm border border-gray-100 text-center card-hover">
              <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl" />
              <p class="relative text-3xl font-bold text-gradient">18+</p>
              <p class="relative text-sm text-muted">Års erfaring</p>
            </div>
            <div class="relative p-4 rounded-xl bg-white shadow-sm border border-gray-100 text-center card-hover">
              <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl" />
              <p class="relative text-3xl font-bold text-gradient">30+</p>
              <p class="relative text-sm text-muted">Brancheerfaring</p>
            </div>
          </div>

          <UButton
            to="/om-os"
            variant="soft"
            size="lg"
            trailing-icon="i-lucide-arrow-right"
          >
            Læs mere om os
          </UButton>
        </div>

        <div class="order-1 lg:order-2 relative">
          <!-- Decorative elements -->
          <div class="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          <div class="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

          <!-- Image with fancy border -->
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-2xl transform rotate-3" />
            <img
              src="/img/om-os.jpg"
              alt="Flemming René Vinduespolering team"
              class="relative rounded-2xl shadow-2xl w-full h-auto transform -rotate-1 hover:rotate-0 transition-transform duration-500"
            >
          </div>

          <!-- Floating badge -->
          <div class="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 glass">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-full icon-gradient flex items-center justify-center">
                <UIcon name="i-lucide-award" class="w-6 h-6" />
              </div>
              <div>
                <p class="font-bold text-lg">Kvalitet</p>
                <p class="text-sm text-muted">Garanteret</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
