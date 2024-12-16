<template>
  <TooltipProvider>
    <TooltipRoot v-bind="$attrs">
      <slot />
    </TooltipRoot>
  </TooltipProvider>
</template>

<script setup lang="ts">
import { TooltipProvider, TooltipRoot } from 'radix-vue'
</script>

<template>
  <TooltipTrigger as="slot" />
</template>

<script setup lang="ts">
import { TooltipTrigger } from 'radix-vue'
</script>

<template>
  <TooltipContent
    :class="[
      'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      props.class,
    ]"
    v-bind="$attrs"
  >
    <slot />
  </TooltipContent>
</template>

<script setup lang="ts">
import { TooltipContent } from 'radix-vue'

const props = defineProps<{ class?: string }>()
</script>

