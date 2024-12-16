<template>
  <Dialog :open="isOpen" @update:open="$emit('close')">
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>User Settings</DialogTitle>
        <DialogDescription>
          Manage your account settings and preferences here.
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-right">Name</Label>
          <Input id="name" v-model="name" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="email" class="text-right">Email</Label>
          <Input id="email" v-model="email" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="notifications" class="text-right">Notifications</Label>
          <Switch
            id="notifications"
            v-model="notifications"
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Switch } from '../ui/switch'

defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

defineEmits(['close'])

const name = ref('John Doe')
const email = ref('john@example.com')
const notifications = ref(true)
</script>

