<template>
  <ScrollAreaPrimitive.Root ref="scrollArea" class="relative overflow-hidden" v-bind="$attrs">
    <ScrollAreaPrimitive.Viewport ref="viewport" class="h-full w-full rounded-[inherit]">
      <slot />
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import * as ScrollAreaPrimitive from '@radix-vue/vue-scroll-area'
import { ScrollBar } from './scroll-bar.vue'

const scrollArea = ref(null)
const viewport = ref(null)

defineExpose({ scrollArea, viewport })
</script>

