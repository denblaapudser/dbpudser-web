<script setup lang="ts">
const { company, contact } = useSiteConfig()

const qualifications = [
  'Du er dygtig til dit fag og har minimum 5 års erfaring med vinduespudsning – der arbejdes både med vaskeanlæg og pudsning i hånden.',
  'Du arbejder selvstændigt og går højt op i at levere kvalitet i dit arbejde.',
  'Du har en positiv energi, der smitter af på dine omgivelser.',
  'Du er i fysisk god form og holder af en hverdag, hvor du kan være aktiv i dit job.',
  'Du kan fremvise en ren straffeattest.'
]

const benefits = [
  'Fastansættelse i et spændende job med fart over feltet, hvor du hver dag møder mange forskellige kunder – primært i det vestfynske område.',
  'Firmabil (kørekort B påkrævet).',
  'Arbejdstøj og sko.',
  'God løn med pension.',
  'En ugentlig arbejdstid på 37 timer med vekslende arbejdstider, primært mellem kl. 04.00 og 16.00.'
]

const applyHref = `${contact.emailHref}?subject=Job-Vinduespudser`

useSeo({
  title: 'Job: Vinduespudser søges',
  description: 'Vi søger en dygtig vinduespudser til opstart hurtigst muligt. Fastansættelse, firmabil, god løn med pension og fokus på trivsel. Søg jobbet hos Flemming René Vinduespolering på Fyn.'
})

useScrollReveal()
</script>

<template>
  <!-- Hero -->
  <SharedHeroBackground image="/img/service/windowcleaner.jpg">
    <UPageSection
      description="Vi har rivende travlt og søger til opstart hurtigst muligt en dygtig vinduespudser."
      :ui="{
        root: 'dark relative z-10 h-120 lg:h-150 flex items-center',
        title: 'hero-reveal [--reveal-delay:0.3s] text-4xl font-bold leading-tight text-white lg:text-5xl',
        description: 'hero-reveal [--reveal-delay:0.5s] text-lg leading-relaxed text-slate-300',
      }"
    >
      <template #headline>
        <SharedEyebrow class="hero-reveal" style="--reveal-delay: 0.1s" label="Ledig stilling" />
      </template>

      <template #title>
        Vinduespudser
        <span class="text-primary-400">søges</span>
      </template>
    </UPageSection>
  </SharedHeroBackground>

  <!-- Content + sidebar -->
  <UPageSection
    :ui="{
      root: 'bg-white',
      container: 'py-16 lg:py-24',
    }"
  >
    <template #body>
      <div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-3 lg:gap-16">
        <!-- Main -->
        <div class="lg:col-span-2 space-y-12">
          <!-- Urgency note -->
          <div class="scroll-reveal flex items-start gap-3 rounded-xl border border-primary-200 bg-primary-50 p-4">
            <UIcon name="i-lucide-clock" class="mt-0.5 size-5 shrink-0 text-primary-600" />
            <p class="text-sm leading-relaxed text-primary-900">
              <strong>Stillingen skal besættes hurtigst muligt.</strong> Vi holder løbende samtaler, da vi har rivende travlt – så vent ikke med at søge.
            </p>
          </div>

          <!-- Intro -->
          <p class="scroll-reveal text-lg leading-relaxed text-gray-600">
            Hvis du søger et arbejde, hvor der lægges stor vægt på medarbejdertrivsel, og hvor grundværdierne kvalitet, stabilitet og loyalitet følges til punkt og prikke, er du kommet til det helt rette sted. Som vores nye vinduespudser kommer du til at arbejde selvstændigt med opgaver hos både private og virksomheder, så det er vigtigt, at du er serviceminded, venlig og imødekommende over for alle, du møder.
          </p>

          <!-- Kvalifikationer -->
          <div class="scroll-reveal">
            <SharedEyebrow class="mb-4" align="start" label="Dine kvalifikationer" />
            <h2 class="mb-6 text-2xl font-bold text-gray-900">
              Det forventer vi af dig
            </h2>
            <ul class="space-y-4">
              <li
                v-for="item in qualifications"
                :key="item"
                class="flex items-start gap-3"
              >
                <UIcon name="i-lucide-check" class="mt-0.5 size-5 shrink-0 rounded-full bg-primary p-0.5 text-white" />
                <span class="leading-relaxed text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Virksomheden tilbyder -->
          <div class="scroll-reveal">
            <SharedEyebrow class="mb-4" align="start" label="Vi tilbyder" />
            <h2 class="mb-6 text-2xl font-bold text-gray-900">
              Det får du hos os
            </h2>
            <ul class="space-y-4">
              <li
                v-for="item in benefits"
                :key="item"
                class="flex items-start gap-3"
              >
                <UIcon name="i-lucide-check" class="mt-0.5 size-5 shrink-0 rounded-full bg-primary p-0.5 text-white" />
                <span class="leading-relaxed text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Om arbejdspladsen -->
          <div class="scroll-reveal">
            <SharedEyebrow class="mb-4" align="start" label="Om arbejdspladsen" />
            <h2 class="mb-6 text-2xl font-bold text-gray-900">
              Din nye arbejdsplads
            </h2>
            <div class="space-y-4 leading-relaxed text-gray-600">
              <p>
                Flemming René Vinduespolering blev grundlagt i 2006. For os vægter vi tre grundprincipper utrolig højt: kvalitet, stabilitet og loyalitet – det afspejler sig både gennem vores services og gennem vores medarbejdere. Vi ansætter altid uddannede og erfarne medarbejdere, og flere af dem har mere end 30 år i branchen – derfor kan vi garantere en professionel service, hvor punktlighed, kvalitet og et godt samarbejde altid prioriteres.
              </p>
              <p>
                Vi lægger stor vægt på god trivsel blandt vores medarbejdere, da det i vores øjne er vejen frem til et godt samarbejde – både medarbejdere imellem og mellem medarbejder og kunde. Vores medarbejdere bliver derfor alle tilbudt blandt andet pension, sundhedsforsikring m.v.
              </p>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="scroll-reveal lg:col-span-1 lg:sticky lg:top-32">
          <UCard
            :ui="{
              root: 'shadow-xl rounded-2xl overflow-hidden',
              header: 'bg-slate-900 px-7 py-6',
              body: 'px-7 py-6',
            }"
          >
            <template #header>
              <h3 class="text-xl font-bold text-white">Søg stillingen</h3>
              <p class="mt-1 text-xs text-slate-400">Vi holder løbende samtaler</p>
            </template>

            <p class="text-sm leading-relaxed text-gray-600">
              Send din ansøgning og cv, hvor du redegør for dine kompetencer og motivation for stillingen, til
              <a :href="contact.emailHref" class="font-medium text-primary-600 hover:underline">{{ contact.email }}</a>.
              Mærk din ansøgning <strong>”Job-Vinduespudser”</strong> i emnefeltet.
            </p>

            <USeparator class="py-6" />

            <p class="mb-3 block text-xs font-semibold uppercase tracking-wider text-gray-400">
              Har du spørgsmål?
            </p>
            <p class="mb-4 text-sm leading-relaxed text-gray-600">
              Kontakt Flemming René for yderligere information om jobbet.
            </p>
            <a :href="contact.phoneHref" class="flex items-center gap-3 text-sm text-gray-600 transition-colors hover:text-primary-600">
              <UIcon name="i-lucide-phone" class="size-4 shrink-0 text-primary-600" />
              {{ contact.phone }}
            </a>
            <a :href="contact.emailHref" class="mt-3 flex items-center gap-3 text-sm text-gray-600 transition-colors hover:text-primary-600">
              <UIcon name="i-lucide-mail" class="size-4 shrink-0 text-primary-600" />
              {{ contact.email }}
            </a>
            <p class="mt-3 flex items-start gap-3 text-sm text-gray-600">
              <UIcon name="i-lucide-map-pin" class="mt-0.5 size-4 shrink-0 text-primary-600" />
              <span>{{ company.name }}<br>{{ contact.street }}, {{ contact.city }}</span>
            </p>
          </UCard>
        </div>
      </div>
    </template>
  </UPageSection>
</template>
