import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';
import router from './plugins/router';
import store from './plugins/store';


createApp(App)
    .use(vuetify)
    .use(i18n)
    .use(router)
    .use(store)
    .mount('#app')
