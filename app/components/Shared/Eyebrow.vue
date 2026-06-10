<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  align?: 'start' | 'center'
}>(), {
  align: 'center'
})
</script>

<template>
  <USeparator
    color="primary"
    :label="label"
    :ui="{
      root: ['flex items-center gap-3', align === 'start' ? 'justify-start' : 'justify-center'],
      border: 'w-8',
      label: 'text-xs font-semibold uppercase tracking-[0.2em] text-primary'
    }"
  />
</template>
