import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Dashboard from './pages/Dashboard.vue'
import Entities from './pages/Entities.vue'
import Indicators from './pages/Indicators.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/entities', component: Entities },
  { path: '/indicators', component: Indicators },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

