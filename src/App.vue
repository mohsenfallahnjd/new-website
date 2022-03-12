<script setup lang="ts">
    import { useMeta } from 'vue-meta';
    import { ref, Ref } from 'vue';
    import { ReloadPWA, ThemeToggle, Footer } from '@components/index.ts';
    import info from './controller/manifest.json';

    const webTitle: Ref<string> = ref('Mohsen Fallahnejad Personal website');

    useMeta({
        title    : 'Front-end developer',
        htmlAttrs: {
            lang: 'en',
            amp : true,
        },
        meta: [
            { vmid: 'description', name: 'description', content: info.description },
            { vmid: 'image', name: 'image', content: '/icon-192.png' },

            { vmid: 'twitter:title', name: 'twitter:title', content: webTitle.value },
            { vmid: 'twitter:description', name: 'twitter:description', content: info.description },
            { vmid: 'twitter:image', name: 'twitter:image', content: '/icon-192.png' },
            { vmid: 'twitter:creator', name: 'twitter:creator', content: '@mohsenfallahnjd' },
            { vmid: 'twitter:card', name: 'twitter:card', content: 'summary' },
            { property: 'twitter:url', content: 'themohsen.me' },

            { property: 'og:site_name', content: info.short_name },
            { property: 'og:title', content: webTitle.value },
            { property: 'og:description', content: info.description },
            { property: 'og:image', content: '/icon-192.png' },
            { property: 'og:url', content: 'themohsen.me' },
        ],
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
