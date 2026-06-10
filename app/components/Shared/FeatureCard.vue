<script setup lang="ts">
withDefaults(defineProps<{
  icon: string
  title: string
  description: string
  align?: 'start' | 'center'
}>(), {
  align: 'start'
})
</script>

<template>
  <UPageCard
    :icon="icon"
    :title="title"
    :description="description"
    :ui="{
      root: [
        'shadow-sm rounded-2xl',
        align === 'center' && 'hover:shadow-lg transition-shadow duration-300'
      ],
      container: ['p-8 gap-0', align === 'center' && 'items-center text-center'],
      leading: [
        'mb-4 flex items-center justify-center rounded-xl bg-primary',
        align === 'center' ? 'mx-auto size-14 p-3.5' : 'size-12 p-3'
      ],
      leadingIcon: ['text-white', align === 'center' ? 'size-7' : 'size-6'],
      title: ['mb-2 font-bold text-highlighted', align === 'center' ? 'text-xl' : 'text-lg'],
      description: 'text-sm leading-relaxed text-muted'
    }"
  />
</template>
