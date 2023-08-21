<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle: string
    color?: string
  }>(),
  {
    color: 'rgba(0, 0, 0, 0.6'
  }
)
</script>

<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div class="subtitle">{{ subtitle }}</div>
    <slot />
  </div>
</template>

<style scoped>
.container {
  padding-top: 12rem;
  padding-bottom: 6.4rem;
  text-align: center;

  .title {
    margin-bottom: 1.6rem;
    font-family: HYYakuHei, serif;
    font-weight: 300;
    font-size: 3.2rem;
    letter-spacing: 1.6rem;
    color: v-bind(color);
  }

  .subtitle {
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
    color: v-bind(color);
    line-height: 1.75;
  }
}
</style>
