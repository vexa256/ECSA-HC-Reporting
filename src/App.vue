<template>
  <div class="flex h-screen overflow-hidden">
    <Sidebar :is-open="isSidebarOpen" />
    <div class="flex flex-col flex-1 overflow-hidden">
      <TopBar 
        @settings-click="isSettingsOpen = true"
        @profile-click="isProfileOpen = true"
        @sidebar-toggle="toggleSidebar"
      />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <div class="container mx-auto px-6 py-8">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <UserSettingsModal :is-open="isSettingsOpen" @close="closeSettingsModal" />
    <ProfileModal :is-open="isProfileOpen" @close="closeProfileModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import TopBar from '@/components/layout/TopBar.vue'
import UserSettingsModal from '@/components/layout/UserSettingsModal.vue'
import ProfileModal from '@/components/layout/ProfileModal.vue'

const isSettingsOpen = ref(false)
const isProfileOpen = ref(false)
const isSidebarOpen = ref(true)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSettingsModal = () => {
  isSettingsOpen.value = false
}

const closeProfileModal = () => {
  isProfileOpen.value = false
}
</script>

<style>
@import '@/assets/tailwind.css';
</style>

