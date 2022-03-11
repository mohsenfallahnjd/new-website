<script setup lang="ts">
    import { ref, Ref } from 'vue';
    import Skills from './skills.json';

    const skills: Ref<Array<{[k: string]: any}>> = ref(Skills.items);
</script>

<template>
    <ul class="c-skills">
        <template v-for="item in skills">
            <li
                v-if="item.active"
                :key="item.name"
                class="c-skills__item"
            >
                <a
                    :href="item.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="c-skills__item__link"
                >
                    <img
                        :src="`/img/skills/${item.icon}`"
                        :alt="item.name"
                        class="c-skills__item__logo"
                    >
                    <span class="c-skills__item__title">{{ item.name }}</span>
                </a>
            </li>
        </template>
    </ul>
</template>

<style src="./index.scss" lang="scss" />
