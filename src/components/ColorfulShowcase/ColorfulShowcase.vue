<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import { ref } from 'vue'

defineProps<{
  id: string
  name: string
  title: string
  subtitle?: string
  nameIconUrl: string
  options: {
    name: string
    paneUrl: string
    pictureUrl: string
  }[]
}>()

const current = ref(0)
</script>

<template>
  <div class="container">
    <TitleBar :title="title" :subtitle="subtitle" />

    <div class="main">
      <img :src="nameIconUrl" class="name-icon" alt="" />
      <img
        v-for="(item, index) in options"
        :key="item.name"
        :src="item.pictureUrl"
        :class="{ active: index === current }"
        class="car-img"
        alt=""
      />
    </div>

    <div class="color-bar">
      <div
        v-for="(item, index) in options"
        :key="item.name"
        class="color-item"
        :class="{ active: index === current }"
        @click="current = index"
      >
        <img :src="item.paneUrl" alt="" class="img-pane" />
        <span class="name">{{ item.name }}</span>
      </div>
      <Button arrow class="btn">定制我的{{ name }}</Button>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-bottom: 12rem;
}

.main {
  width: 112rem;
  height: 47.8rem;
  margin: -2rem auto 0.9rem;

  .name-icon {
    position: absolute;
    width: 43rem;
    height: 28rem;
    left: 7.2rem;
    top: -3.5rem;
    z-index: -1;
  }

  .car-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.3s;

    &:not(.active) {
      transition: 0.8s;
    }

    &.active {
      opacity: 1;
    }
  }
}

.color-bar {
  display: flex;
  align-items: center;
  justify-content: center;

  .color-item {
    display: flex;
    align-items: center;
    margin-right: 4rem;
    border-radius: 4.4rem;
    padding: 0.8rem 1.6rem 0.8rem 0.8rem;
    transition: 0.3s;
    cursor: pointer;

    &.active {
      background-color: rgba(0, 0, 0, 0.03);
      cursor: default;
    }

    &:hover:not(.active) .name {
      opacity: 0.6;
    }

    .img-pane {
      width: 2.8rem;
      height: 2.8rem;
      margin-right: 0.8rem;
    }

    .name {
      font-size: 1.6rem;
      letter-spacing: 0.2rem;
      transition: 0.3s;
    }
  }

  .btn:hover {
    border-width: 0.1rem;
    border-color: transparent;
  }
}
</style>