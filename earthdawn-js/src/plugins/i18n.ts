import { createI18n } from 'vue-i18n'
import en from '@/i18n/en.json'
import fr from '@/i18n/fr.json'
export default createI18n({
    locale: 'fr',
    fallbackLocale: 'en',
    localeDir: 'i18n',
    messages: {
        en,
        fr
    },
    enableInSFC: true
})