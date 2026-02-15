<script setup lang="ts">
    const items = [
        { label: 'Hjem', href: '/' },
        { label: 'Tjenester', href: '/tjenester' },
        { label: 'Om oss', href: '/om-oss' },
        { label: 'Kontakt', href: '/kontakt' }
    ]
</script>

<template>
    <UHeader>
        <template #title>
            <SharedLogo />
        </template>
        <UNavigationMenu :items="items" />
        <template #right>
            <UButton color="primary">Få et tilbud</UButton>
        </template>
    </UHeader>
</template>