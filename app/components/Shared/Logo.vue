<script setup lang="ts">
const { company } = useSiteConfig()

// "Flemming René" + "Vinduespolering" for the two-line logo
const logoSuffix = company.name.replace(company.shortName, '').trim()
</script>

<template>
  <div class="flex items-center gap-2 text-lg/5 md:text-xl/5 uppercase font-normal">
    <img src="/img/favicon.png" :alt="`${company.name} logo`" class="h-10 w-auto mr-2 inline-block">
    <div>
      <span class="text-[1.3rem] md:text-[1.44rem] block">{{ company.shortName }}</span>
      <span class="block text-primary">{{ logoSuffix }}</span>
    </div>
  </div>
</template>
