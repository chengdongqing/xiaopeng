<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  color?: string
}>()
</script>

<template>
  <div class="title-bar">
    <div class="title" :style="{ color }">{{ title }}</div>
    <div class="subtitle" :style="{ color }">{{ subtitle }}</div>
    <slot />
  </div>
</template>

<style scoped>
.title-bar {
  padding-top: 12rem;
  padding-bottom: 6.4rem;
  text-align: center;

  .title {
    margin-bottom: 1.6rem;
    font-family: HYYakuHei, serif;
    font-size: 3.2rem;
    letter-spacing: 1rem;
    display: inline-block;
    margin-right: -1rem;
  }

  .subtitle {
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.75;
  }
}
</style>
