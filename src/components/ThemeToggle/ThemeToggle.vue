
<script setup lang="ts">
    import 'https://code.iconify.design/1/1.0.4/iconify.min.js';

    import { onBeforeMount, Ref, ref } from 'vue';

    /**
     * The Value of dark mode toggle
     */
    const isDark : Ref<boolean> = ref(false);

    /**
     * Toggle theme
     */
    const toggle = () => {
        document.body.classList.toggle('dark');
    };

    /**
     * @inheritdoc
     */
    onBeforeMount(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark');
            isDark.value = true;
        } else {
            document.body.classList.remove('dark');
            isDark.value = false;
        }
    });

</script>

<template>
    <label for="theme-toggle-checkbox">
        <input
            id="theme-toggle-checkbox"
            v-model="isDark"
            class="toggle-checkbox"
            type="checkbox"
            @change="toggle"
        >
        <div class="toggle-slot">
            <div class="sun-icon-wrapper">
                <div
                    class="iconify sun-icon"
                    data-icon="feather-sun"
                    data-inline="false"
                />
            </div>
            <div class="toggle-button" />
            <div class="moon-icon-wrapper">
                <div
                    class="iconify moon-icon"
                    data-icon="feather-moon"
                    data-inline="false"
                />
            </div>
        </div>
    </label>
</template>

<style src="./index.scss" lang="scss" />
