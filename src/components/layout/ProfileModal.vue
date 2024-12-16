<template>
  <Dialog :open="isOpen" @update:open="$emit('close')">
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-right">Name</Label>
          <Input id="name" v-model="name" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="username" class="text-right">Username</Label>
          <Input id="username" v-model="username" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="bio" class="text-right">Bio</Label>
          <Textarea id="bio" v-model="bio" class="col-span-3" placeholder="Tell us about yourself" />
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
import { Textarea } from '../ui/textarea'

defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

defineEmits(['close'])

const name = ref('John Doe')
const username = ref('johndoe')
const bio = ref('')
</script>
