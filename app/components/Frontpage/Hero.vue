<template>
  <section class="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
    <!-- Video background -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/intro.mp4" type="video/mp4">
    </video>

    <!-- Gradient overlays -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
    <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />

    <!-- Animated pattern overlay -->
    <div class="absolute inset-0 bg-pattern-dots opacity-10" />

    <!-- Content -->
    <div class="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
        <span class="w-2 h-2 bg-primary rounded-full animate-pulse" />
        <span class="text-sm font-medium">Siden 2006</span>
      </div>

      <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        Flemming René
        <span class="block text-primary">Vinduespolering</span>
      </h1>

      <p class="text-xl md:text-2xl mb-3 text-white/90 font-light">
        Kvalitet - Stabilitet - Loyalitet
      </p>

      <p class="text-lg mb-10 text-white/70 max-w-2xl mx-auto">
        Professionel vinduespolering, solcellevask og rengøringsløsninger til private og erhverv på Fyn og omegn.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <UButton
          to="/kontakt"
          size="xl"
          icon="i-lucide-mail"
          class="shadow-2xl shadow-primary/30"
        >
          Få et tilbud
        </UButton>
        <UButton
          to="/services"
          size="xl"
          color="white"
          variant="outline"
          trailing-icon="i-lucide-arrow-right"
          class="backdrop-blur-sm"
        >
          Se vores services
        </UButton>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <UIcon name="i-lucide-chevron-down" class="w-8 h-8 text-white/50" />
      </div>
    </div>

    <!-- Decorative corner elements -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/30 to-transparent blur-3xl" />
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/20 to-transparent blur-3xl" />
  </section>
</template>
