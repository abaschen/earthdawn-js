import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    '__VUE_I18N_FULL_INSTALL__': JSON.stringify(true),
    '__VUE_I18N_LEGACY_API__': JSON.stringify(false),
    '__INTLIFY_PROD_DEVTOOLS__': JSON.stringify(true)
  },
  plugins: [vue(), vueI18n({
    include: path.resolve(__dirname, './src/i18n/**')
  })],
  
  base: './',
  
  resolve: {
    alias: {
    'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
      '@': '/src' // Replace with the path to your source directory

    }
  }
})
