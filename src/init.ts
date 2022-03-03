// -------------------------------------------------------------------------- //
// Init modules
// -------------------------------------------------------------------------- //
import { createMetaManager } from 'vue-meta';
import i18n from '../src/controller/i18n';
import router from '../src/controller/router';

export const CoreInit = {
    i18n,
    router,
    createMetaManager,
};
