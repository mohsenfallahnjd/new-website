<script setup lang="ts">
    import { useMeta } from 'vue-meta';
    import { ref, Ref } from 'vue';
    import { ReloadPWA, ThemeToggle, Footer } from '@components/index.ts';

    const webTitle: Ref<string> = ref('Mohsen Fallahnejad Personal website');

    useMeta({
        title    : 'Front-end developer',
        htmlAttrs: {
            lang: ['en'],
        },
    });
</script>

<template>
    <ReloadPWA />

    <header>
        <ThemeToggle />
    </header>

    <metainfo>
        <template #title="{ content }">
            {{ content ? `${webTitle} | ${content}`: webTitle }}
        </template>
    </metainfo>

    <router-view />

    <Footer />
</template>

<style src="@/assets/scss/style.scss" lang="scss" />
