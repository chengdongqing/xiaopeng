<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import options from './options.ts'
</script>

<template>
  <div class="container">
    <TitleBar title="多种驾驶模式，满足个性驾驶乐趣" />

    <div class="modes">
      <div class="mode-item" v-for="item in options" :key="item.name">
        <img :src="item.iconUrl" alt="" class="icon" />
        <div class="name" v-html="item.name" />
        <div class="description">{{ item.description }}</div>
      </div>
    </div>

    <div class="bottom">
      <Button arrow>预约试驾</Button>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-bottom: 12rem;
  text-align: center;
  background-color: var(--color-background);
}

.modes {
  width: 132rem;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;

  .mode-item {
    flex: 1;
    height: 37.2rem;
    border-radius: 1rem;
    background-color: #fff;
    display: grid;
    justify-items: center;
    align-content: center;

    .icon {
      width: 5.6rem;
      height: 5.6rem;
      margin-bottom: 1.6rem;
    }

    .name {
      font-size: 1.8rem;
      margin-bottom: 0.4rem;
    }

    .description {
      font-size: 1.4rem;
      color: #b3b3b3;
      padding: 0 5.6rem;
    }
  }
}

.bottom {
  margin-top: 6.4rem;
  text-align: center;
}
</style>