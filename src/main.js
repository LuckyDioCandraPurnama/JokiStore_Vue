import { createApp } from 'vue'
import './main.css'
import router from './router/index'
import axios from 'axios'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app')
