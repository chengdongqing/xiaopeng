<script setup lang="ts">
defineProps<{
  columns: number | string
  itemWidth?: string
  gap?: string
}>()
</script>

<template>
  <div
    :style="{
      display: 'grid',
      justifyContent: 'center',
      gridTemplateColumns: `repeat(${columns}, ${itemWidth || '1fr'})`,
      gap
    }"
  >
    <slot />
  </div>
</template>
