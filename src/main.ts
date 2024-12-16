import { createApp } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from './App.vue'
import Dashboard from '@/pages/Dashboard.vue'
import Entities from '@/pages/Entities.vue'
import Indicators from '@/pages/Indicators.vue'
import Reports from '@/pages/Reports.vue'
import Analytics from '@/pages/Analytics.vue'
import Users from '@/pages/Users.vue'
import Calendar from '@/pages/Calendar.vue'
import Tasks from '@/pages/Tasks.vue'
import Performance from '@/pages/Performance.vue'
import Alerts from '@/pages/Alerts.vue'
import Settings from '@/pages/Settings.vue'
import Help from '@/pages/Help.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/entities', name: 'Entities', component: Entities },
  { path: '/indicators', name: 'Indicators', component: Indicators },
  { path: '/reports', name: 'Reports', component: Reports },
  { path: '/analytics', name: 'Analytics', component: Analytics },
  { path: '/users', name: 'Users', component: Users },
  { path: '/calendar', name: 'Calendar', component: Calendar },
  { path: '/tasks', name: 'Tasks', component: Tasks },
  { path: '/performance', name: 'Performance', component: Performance },
  { path: '/alerts', name: 'Alerts', component: Alerts },
  { path: '/settings', name: 'Settings', component: Settings },
  { path: '/help', name: 'Help', component: Help },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

