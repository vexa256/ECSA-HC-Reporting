<template>
  <div :class="classes">
    <slot></slot>
    <span v-if="!$slots.default" class="sr-only">{{ alt }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  alt: {
    type: String,
    default: ''
  }
})

const classes = computed(() => [
  'inline-block overflow-hidden rounded-full',
  {
    'w-8 h-8': props.size === 'sm',
    'w-10 h-10': props.size === 'md',
    'w-12 h-12': props.size === 'lg'
  }
])
</script>

