<script setup lang="ts">
    import { useMeta } from 'vue-meta';
    import { ref, Ref } from 'vue';
    import { ReloadPWA, ThemeToggle, FooterComponent } from '@components/index.ts';

    const webTitle: Ref<string> = ref('Mohsen Fallahnejad Personal website');

    useMeta({
        title    : 'Front-end developer',
        htmlAttrs: {
            lang: ['en'],
        },
    });
</script>

<template>
    <reload-p-w-a />

    <header>
        <theme-toggle />
    </header>

    <metainfo>
        <template #title="{ content }">
            {{ content ? `${webTitle} | ${content}`: webTitle }}
        </template>
    </metainfo>

    <router-view />

    <footer-component />
</template>

<style src="@/assets/scss/style.scss" lang="scss" />
