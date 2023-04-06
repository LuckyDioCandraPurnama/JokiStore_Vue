import { createApp } from 'vue'
// Tailwind
import './main.css'
// JS
import router from './router/index'
import './scroll/index'
//  Axios
import axios from 'axios'
// Pinia
import { createPinia } from 'pinia'
import 'boxicons'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.config.globalProperties.axios = axios
app.mount('#app')
