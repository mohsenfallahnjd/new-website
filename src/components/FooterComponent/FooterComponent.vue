
<template>
    <footer class="main-footer">
        <div class="text">
            {{ $t('general.copyright', { year: new Date().getFullYear() }) }}
        </div>
        <div class="text">
            {{ $t('general.powered_by') }}
        </div>
    </footer>
</template>

<style src="./index.scss" lang="scss" />
