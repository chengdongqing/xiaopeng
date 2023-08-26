<script setup lang="ts">
defineProps<{
  options: {
    name: string
    value: number
    unit?: string
  }[]
  darkTheme?: boolean
}>()
</script>

<template>
  <div class="name-value-group" :class="{ dark: darkTheme }">
    <div v-for="item in options" :key="item.name">
      <div class="name" v-html="item.name" />
      <div class="value">
        <span>{{ item.value }}</span>
        <span v-if="item.unit" class="unit">{{ item.unit }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.name-value-group {
  display: flex;
  justify-content: space-between;
  color: #fff;

  &.dark {
    color: #000;

    .name {
      opacity: 0.6;
    }
  }

  .name {
    opacity: 0.8;
    font-size: 1.6rem;
    font-weight: 200;
    line-height: 2.4rem;
  }

  .value {
    font-size: 4rem;
    line-height: 5.6rem;

    .unit {
      font-size: 1.6rem;
      font-weight: 200;
      margin-left: 0.4rem;
    }
  }
}
</style>
