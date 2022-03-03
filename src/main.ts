import { createApp } from 'vue';
import App from './App.vue';
import { CoreInit } from './init';

const app = createApp(App)
    .use(CoreInit.i18n)
    .use(CoreInit.createMetaManager())
    .use(CoreInit.router);

await CoreInit.router.isReady();
app.mount('#app');
