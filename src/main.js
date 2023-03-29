import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// import login from './login'
// import VueAxios from 'vue-axios'
import axios from 'axios'
import './assets/css/style.css'

// app.config.productionTip = false;

// app.component('Header', Header);
// app.component('Footer', Footer);

const app = createApp(App)
app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app')
