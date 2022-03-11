<script setup lang="ts">
    import { ref, Ref } from 'vue';
    import Built from './built.json';

    const built:Ref<Array<{[k: string]: any}>> = ref(Built.items);
</script>

<template>
    <ul class="c-built">
        <template v-for="item in built">
            <li
                v-if="item.active"
                :key="item.name"
                class="c-built__item"
            >
                <span class="c-built__item__title">{{ item.name }}</span>
                <span class="c-built__item__description">{{ item.description }}</span>

                <a
                    v-if="item.repo"
                    :href="item.repo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="c-built__item__link"
                >
                    <span class="c-built__item__link-title">
                        {{ `${$t('home.source')}: ${item.repo}` }}
                    </span>
                </a>

                <ul
                    v-if="item.technologies && item.technologies.length"
                    class="c-built__item__technologies"
                >
                    <li class="c-built__item__technology c-built__item__technology--title">
                        {{ $t('home.technologies') }}
                    </li>
                    <li
                        v-for="t in item.technologies"
                        :key="t"
                        class="c-built__item__technology"
                    >
                        {{ t }}
                    </li>
                </ul>

                <div class="c-built__item__footer">
                    <span
                        v-if="item.pwa"
                        class="c-built__item__pwa-badge"
                    >
                        <img
                            src="/img/skills/pwa.png"
                            alt="pwa"
                        >
                    </span>

                    <a
                        v-if="item.demo"
                        :href="item.demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="c-built__item__demo-link"
                    >
                        <span
                            class="iconify"
                            data-icon="fluent:movies-and-tv-16-regular"
                        />
                        {{ $t('home.demo') }}
                    </a>
                    <div
                        v-else
                        class="c-built__item__demo-link c-built__item__demo-link--disable"
                    >
                        <span
                            class="iconify"
                            data-icon="fluent:movies-and-tv-16-regular"
                        />
                        {{ $t('home.demo') }}
                    </div>
                </div>
            </li>
        </template>
    </ul>
</template>

<style src="./index.scss" lang="scss" />
