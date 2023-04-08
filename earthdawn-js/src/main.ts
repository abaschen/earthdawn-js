import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import messages from './i18n'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createI18n } from 'vue-i18n'

const vuetify = createVuetify({
    components,
    directives,
})
const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'en',
    messages,
})

createApp(App).use(vuetify).use(i18n).mount('#app')
