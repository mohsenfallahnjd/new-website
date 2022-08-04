<script setup lang="ts">

    /**
     * Props
     */
    defineProps({
        title: {
            type: String,
        },

        col: {
            type: Boolean,
        },
    });

</script>

<template>
    <div :class="['c-section', { 'c-section--col': col }]">
        <div class="c-section__title neon">
            {{ title }}
        </div>
        <div class="c-section__content">
            <slot />
        </div>
    </div>
</template>

<style src="./index.scss" lang="scss" />
