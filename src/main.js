import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import BaseLink from "@/components/BaseLink.vue"

createApp(App)
.component('BaseLink', BaseLink)
.use(router)
.mount('#app')
