import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import BaseLink from "@/components/BaseLink.vue"
import BaseImage from "@/components/BaseImage.vue"

createApp(App)
.component('BaseLink', BaseLink)
.component('BaseImage', BaseImage)
.use(router)
.mount('#app')
