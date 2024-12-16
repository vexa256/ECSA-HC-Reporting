<template>
  <div :class="['rounded-lg border bg-card text-card-foreground shadow-sm', className]">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div :class="['p-6', className]">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div :class="['px-6 py-4 font-semibold', className]">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <h3 :class="['text-2xl font-semibold leading-none tracking-tight', className]">
    <slot></slot>
  </h3>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <p :class="['text-sm text-muted-foreground', className]">
    <slot></slot>
  </p>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: ''
  }
})
</script>

