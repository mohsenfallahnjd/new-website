<script setup lang="ts">
    import {
        Section, Skills, Socials, Built,
    } from '@modules/home/components/index.ts';
</script>

<template>
    <div class="m-home">
        <div class="m-home__intro-section">
            <h1 class="hello">
                {{ $t('home.hello') }}
            </h1>
            <p
                class="intro"
                v-html="$t('home.my_name', { name: `<b class='first-name'>${$t('home.first_name')}</b>` })"
            />

            <p class="description">
                {{ $t('home.my_description') }}
            </p>

            <p>
                <span>{{ $t('home.about') }}</span>
                <a
                    href="https://twitter.com/mohsenfallahnjd"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="twitter"
                >
                    <span
                        class="iconify"
                        data-icon="line-md:twitter-twotone"
                    />
                    <span
                        data-hover="Twitter"
                        class="neon"
                    >
                        {{ $t('home.twitter') }}
                    </span>
                </a>
                <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
                <span>{{ `.` }}</span>
            </p>

            <p v-html="$t('home.on_social',{ userName: `<span class='color-blue user-name neon-animation'>${$t('home.user_name')}</span>` })" />

            <p class="mt-15">
                {{ $t('home.outside') }}
            </p>
        </div>

        <Section :title="$t('home.skills')">
            <Skills />
        </Section>

        <Section
            :title="$t('home.built_things')"
            class="bold-title"
            col
        >
            <Built />
        </Section>

        <Section
            :title="$t('home.socials')"
            col
        >
            <Socials />
        </Section>
    </div>
</template>

<style src="../scss/home.scss" lang="scss" />
