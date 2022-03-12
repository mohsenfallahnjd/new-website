<script setup lang="ts">
    import { useMeta } from 'vue-meta';
    import { ref, Ref } from 'vue';
    import { ReloadPWA, ThemeToggle, Footer } from '@components/index.ts';
    import info from './controller/manifest.json';

    const webTitle: Ref<string> = ref('Mohsen Fallahnejad Personal website');

    useMeta({
        title    : 'Front-end developer',
        htmlAttrs: {
            lang: ['en'],
            amp : true,
        },
        charset    : 'UTF-8',
        description: info.description,
        og         : {
            site_name  : webTitle.value,
            title      : info.short_name,
            description: info.description,
            image      : ['https://themohsen.me/icon-192.png'],
            url        : 'https://themohsen.me/',
        },
        twitter: {
            title      : info.short_name,
            description: info.description,
            image      : ['https://themohsen.me/icon-192.png'],
            creator    : '@mohsenfallahnjd',
            card       : 'summary_large_image',
            url        : 'https://themohsen.me/',
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
