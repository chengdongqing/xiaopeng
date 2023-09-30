<script setup lang="ts">
import { options } from './resources.ts'
</script>

<template>
  <div class="container">
    <div v-for="item in options" :key="item.title">
      <div class="title">{{ item.title }}</div>
      <div class="children">
        <div class="item" v-for="name in item.children" :key="name">
          {{ name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 99rem;
  margin: auto;
  border-radius: 0.4rem;
  padding: 8rem 16rem 6.4rem;
  background-color: var(--color-background);
  display: flex;
  justify-content: space-between;

  .title {
    font-size: 2.4rem;
    letter-spacing: 0.4rem;
    color: rgba(0, 0, 0, 0.9);
    margin-bottom: 3.4rem;
  }

  .item {
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 1.6rem;
  }
}
</style>