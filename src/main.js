import '../css/main.css'
import VueMatomo from 'vue-matomo'
import '@/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import vi from './locales/vi.json'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
const head = createHead()
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('currentLocale') || 'vi',
  fallbackLocale: 'vi',
  messages: {
    vi,
    en
  }
})

app.use(pinia)
app.use(head)
app.use(i18n)
app.use(router)
app.use(VueMatomo, {
  host: 'https://tpz-tech.com',
  siteId: 1,
  trackerFileName: 'matomo',
  enableLinkTracking: true,
  requireConsent: false,
  trackInitialView: true,
  disableCookies: false,
  enableHeartBeatTimer: true,
  debug: false
})

app.mount('#app')
