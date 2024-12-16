<template>
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    class="flex touch-none select-none transition-colors"
    :class="[
      orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-[1px]',
      orientation === 'horizontal' && 'h-2.5 border-t border-t-transparent p-[1px]',
    ]"
    :orientation="orientation"
  >
    <ScrollAreaPrimitive.ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
</template>

<script setup lang="ts">
import * as ScrollAreaPrimitive from '@radix-vue/vue-scroll-area'

withDefaults(defineProps<{ orientation?: 'vertical' | 'horizontal' }>(), {
  orientation: 'vertical',
})
</script>

