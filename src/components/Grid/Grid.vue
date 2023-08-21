<script setup lang="ts">
defineProps<{
  columns: number
  gap?: string
}>()
</script>

<template>
  <div
    :style="{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap
    }"
  >
    <slot />
  </div>
</template>
