<script setup lang="ts">
const currentYear = new Date().getFullYear()

const links = [
  { label: 'Forside', to: '/' },
  { label: 'Om os', to: '/om-os' },
  { label: 'Services', to: '/services' },
  { label: 'Kontakt', to: '/kontakt' }
]
</script>

<template>
  <footer class="relative">
    <!-- References section -->
    <ReferencesLogoMarquee />

    <!-- Main footer -->
    <div class="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 bg-pattern-grid opacity-5" />

      <!-- Gradient orbs -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- Brand -->
          <div class="lg:col-span-2">
            <h3 class="text-2xl font-bold mb-2">
              <span class="text-primary">FL-René</span> Vinduespolering
            </h3>
            <p class="text-white/60 mb-6 max-w-md">
              Professionel vinduespolering, solcellevask og rengøringsløsninger til private og erhverv siden 2006.
            </p>

            <!-- Social links -->
            <div class="flex gap-3">
              <a
                href="tel:+4540829240"
                class="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <UIcon name="i-lucide-phone" class="w-5 h-5" />
              </a>
              <a
                href="mailto:info@fl-rene.dk"
                class="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <UIcon name="i-lucide-mail" class="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/Flemming-Rene-Vinduespolering/"
                target="_blank"
                class="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <UIcon name="i-simple-icons-facebook" class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Quick links -->
          <div>
            <h4 class="font-semibold text-white mb-4">Sider</h4>
            <ul class="space-y-2">
              <li v-for="link in links" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  class="text-white/60 hover:text-primary transition-colors"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact info -->
          <div>
            <h4 class="font-semibold text-white mb-4">Kontakt</h4>
            <ul class="space-y-3 text-white/60">
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-map-pin" class="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Bøgevej 14<br>5683 Haarby</span>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-lucide-phone" class="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+4540829240" class="hover:text-primary transition-colors">40 82 92 40</a>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-lucide-mail" class="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@fl-rene.dk" class="hover:text-primary transition-colors">info@fl-rene.dk</a>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-lucide-building" class="w-5 h-5 text-primary shrink-0" />
                <span>CVR: 21745979</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="relative border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>&copy; {{ currentYear }} Flemming René Vinduespolering. Alle rettigheder forbeholdes.</p>
            <p class="flex items-center gap-1">
              Kvalitet - Stabilitet - Loyalitet
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
