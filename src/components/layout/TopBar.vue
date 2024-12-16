<template>
  <header class="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-4 dark:bg-gray-800">
    <div class="flex items-center gap-4">
      <Button variant="ghost" size="icon" @click="$emit('sidebar-toggle')" class="md:hidden">
        <Menu class="h-5 w-5" />
      </Button>
      <form class="relative">
        <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        <Input
          type="search"
          placeholder="Search..."
          class="w-full appearance-none rounded-md pl-8 pr-4"
        />
      </form>
    </div>
    <div class="flex items-center gap-4">
      <Button variant="ghost" size="icon">
        <Bell class="h-5 w-5" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="ghost" size="icon">
            <User class="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem @click="$emit('profile-click')">Profile</DropdownMenuItem>
          <DropdownMenuItem @click="$emit('settings-click')">Settings</DropdownMenuItem>
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Bell, Search, User, Menu } from 'lucide-vue-next'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

defineEmits(['settings-click', 'profile-click', 'sidebar-toggle'])
</script>

