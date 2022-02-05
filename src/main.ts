import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "./assets/base.css"

import 'virtual:windi.css'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)

app.use(createPinia())

app.mount('#app')
