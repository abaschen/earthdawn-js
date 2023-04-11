import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/dist/vuetify.min.css';
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import { fr, en } from 'vuetify/locale'
import { md3 } from 'vuetify/blueprints'

export default createVuetify({
    blueprint: md3,
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    locale: {
        locale: 'fr',
        fallback: 'en',
        messages: { fr, en },
    }
})