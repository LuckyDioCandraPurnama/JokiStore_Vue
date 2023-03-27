import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
// import router from './router'
// import login from './login'
// import VueAxios from 'vue-axios'
import axios from 'axios'
import './assets/css/style.css'
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Classic from './components/ml/clas.vue'
import RankPack from './components/ml/rank-pack.vue'
import RankStar from './components/ml/rank-star.vue'
// import Header from './components/Header2.vue'
// import Footer from './components/Footer2.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/login', component: Login },
  { path: '/rank-pack', component: RankPack },
  { path: '/rank-star', component: RankStar },
  { path: '/classic', component: Classic },
]

// app.config.productionTip = false;

// app.component('Header', Header);
// app.component('Footer', Footer);

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app')
