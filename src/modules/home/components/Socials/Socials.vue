<script setup lang="ts">
    import { ref, Ref } from 'vue';
    import Socials from './socials.json';

    const socials: Ref<Array<{[k: string]: any}>> = ref(Socials.items);
</script>

<template>
    <ul class="c-socials">
        <template v-for="item in socials">
            <li
                v-if="item.active"
                :key="item.name"
                class="c-socials__item"
            >
                <a
                    :href="item.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="c-socials__item__link"
                >
                    <img
                        :src="`/img/socials/${item.icon}`"
                        :alt="item.name"
                        class="c-socials__item__logo"
                    >
                    <span class="c-socials__item__title">{{ item.name }}</span>
                </a>
            </li>
        </template>
    </ul>
</template>

<style src="./index.scss" lang="scss" />
