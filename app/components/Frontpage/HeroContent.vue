<template>
  <div class="lg:col-span-3">
    <!-- Eyebrow -->
    <div class="hero-fade mb-6 flex items-center gap-3" style="animation-delay: 0.1s">
      <span class="h-px w-8 bg-cyan-400" />
      <span class="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
        Professionel rengøring
      </span>
    </div>

    <!-- Headline -->
    <h1
      class="hero-fade mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
      style="animation-delay: 0.25s"
    >
      Krystalklart
      <span class="text-cyan-400">resultat</span>,<br>
      hver gang
    </h1>

    <!-- Description -->
    <p
      class="hero-fade mb-8 max-w-lg text-lg leading-relaxed text-neutral-300"
      style="animation-delay: 0.4s"
    >
      Vi leverer professionel vinduespudsning, algebehandling og tagrens
      til private og erhverv.
    </p>

    <!-- CTA Row -->
    <div
      class="hero-fade mb-10 flex flex-wrap items-center gap-5"
      style="animation-delay: 0.55s"
    >
      <UButton size="xl" color="primary" trailing-icon="i-lucide-arrow-right">
        Få et tilbud
      </UButton>

      <a
        href="#services"
        class="text-sm font-medium text-white/70 transition-colors hover:text-white"
      >
        Se vores tjenester
      </a>
    </div>

    <!-- Benefits -->
    <div class="hero-fade" style="animation-delay: 0.7s">
      <FrontpageHeroBenefits />
    </div>
  </div>
</template>
