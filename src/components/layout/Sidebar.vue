<template>
  <aside class="flex flex-col border-r bg-white dark:bg-gray-800" :class="[isExpanded ? 'w-60' : 'w-16']">
    <div class="flex h-16 items-center justify-between px-4 border-b">
      <transition name="fade">
        <span v-if="isExpanded" class="text-lg font-semibold">MPA System</span>
      </transition>
      <Button variant="ghost" size="icon" @click="toggleExpanded" class="ml-auto">
        <ChevronRight :class="['h-4 w-4 transition-transform', { 'rotate-180': isExpanded }]" />
      </Button>
    </div>
    <div class="flex-1 overflow-y-auto">
      <nav class="flex flex-col gap-1 p-2">
        <RouterLink v-for="item in sidebarItems" :key="item.name" :to="item.href" v-slot="{ isActive }">
          <Button variant="ghost" :class="[
            'w-full justify-start',
            isActive
              ? 'bg-gray-200 text-blue-600 dark:bg-gray-700'
              : 'text-gray-900 dark:text-gray-400'
          ]">
            <component :is="item.icon" class="h-5 w-5" />
            <transition name="fade">
              <span v-if="isExpanded" class="ml-3 overflow-hidden">{{ item.name }}</span>
            </transition>
          </Button>
        </RouterLink>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ChevronRight, LayoutDashboard, Briefcase, Target, FileText, BarChart3, Users, Calendar, ClipboardList, PieChart, AlertCircle, Settings, HelpCircle } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const isExpanded = ref(true)

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

interface SidebarItem {
  name: string;
  href: string;
  icon: any; // You might want to use a more specific type here
}

const sidebarItems: SidebarItem[] = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Entities', href: '/entities', icon: Briefcase },
  { name: 'Indicators', href: '/indicators', icon: Target },
  { name: 'Reports', href: '/reports', icon: FileText },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'Tasks', href: '/tasks', icon: ClipboardList },
  { name: 'Performance', href: '/performance', icon: PieChart },
  { name: 'Alerts', href: '/alerts', icon: AlertCircle },
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Help', href: '/help', icon: HelpCircle },
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
