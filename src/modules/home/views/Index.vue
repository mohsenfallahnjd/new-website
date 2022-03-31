<script setup lang="ts">
    import { Ref, ref } from 'vue';
    import {
        Section, Skills, Socials, Built,
    } from '@modules/home/components/index.ts';

    /**
     * The information of currently play track on spotify
     */
    const trackInfo : Ref<{[k: string]: any}| null> = ref({});

    /**
     * Artists list
     */
    const artists: Ref<string> = ref('');

    /**
     * Return anchor link
     *
     * @param {string} link
     * @param {string} title
     * @returns {string}
     */
    const formatLink = (link: string, title: string): string => `<a class='color-blue text-decoration' href='${link}' target='_blank'><span>${title}</span></a>`;

    /**
     * Fetch spotify currently track information
     */
    const fetchInfo = () => {
        fetch('https://themohsen.me/api/get')
            .then((response) => response.json())
            .then((data) => {
                trackInfo.value = data.data;
                if (data.data && data.data.artists) {
                    artists.value = data.data.artists.map((i: any) => (
                        formatLink(i.external_urls.spotify, i.name))).join(', ');
                }
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    };

    /**
     * interval time for refresh fetchInfo
     */
    fetchInfo();
    setInterval(fetchInfo, 180000);
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
                        :data-hover="$t('home.twitter')"
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
                <br>
                <br>
                <a
                    href="mailto:mohsenfallahnjd@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="twitter text-decoration"
                >
                    <span
                        class="iconify"
                        data-icon="bi:emoji-smile"
                    />
                    <span
                        :data-hover="$t('home.say_hi')"
                        class="neon"
                    >
                        {{ $t('home.say_hi') }}
                    </span>
                </a>
            </p>

            <div
                v-if="trackInfo"
                class="spotify-play"
            >
                <p v-if="trackInfo.artists">
                    <span
                        v-html="$t(
                            'home.listening_to',
                            {
                                time: trackInfo.is_playing ? 'Now, I\'m Listening to ' : 'A few minutes ago, I was listening to',
                                track: `<br />
                                track: ${formatLink(trackInfo.href, trackInfo.name)} <br />
                                ${trackInfo.album.total_tracks > 1 ? `album: ${formatLink(trackInfo.album.external_urls.spotify, trackInfo.album.name)} <br />` : ''}`,
                                artist: `from: ${artists} <br />`
                            }
                        )"
                    />
                </p>
                <div
                    v-if="trackInfo.album"
                    class="preview"
                >
                    <a
                        v-if="trackInfo.album.images"
                        :href="trackInfo.album.images[0].url"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            :src="trackInfo.album.images.at(-1).url"
                            :alt="trackInfo.album.name"
                        >
                    </a>
                    <audio
                        controls
                        :src="trackInfo.preview_url"
                        :disabled="!trackInfo.preview_url"
                    >
                        <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
                        {{ `Your browser does not support the` }} <code>{{ `audio` }}</code> {{ `element.` }}
                        <track kind="captions">
                    </audio>
                </div>
            </div>
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
