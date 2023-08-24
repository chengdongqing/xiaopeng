<script setup lang="ts">
import * as Swiper from '@/components/Swiper'
import { ref } from 'vue'
import features from './features.ts'

const swiperRef = ref()
const current = ref(0)
</script>

<template>
  <div class="container">
    <Swiper.Container
      ref="swiperRef"
      :autoplay="false"
      :duration="1000"
      card
      @change="(index) => (current = index)"
    >
      <Swiper.Item v-for="(item, index) in features" :key="item.title">
        <video
          v-if="item.videoUrl && index === current"
          :src="item.videoUrl"
          autoplay
          muted
          loop
        />
        <img v-else :src="item.pictureUrl" alt="" />

        <div class="content-wrapper">
          <div class="title">{{ item.title }}</div>
          <div class="subtitle">{{ item.subtitle }}</div>
        </div>
      </Swiper.Item>
    </Swiper.Container>
    <Swiper.ButtonGroup
      :swiper-ref="swiperRef"
      offset="14%"
      :left-visible="current > 0"
      :right-visible="current < features.length - 1"
    />
  </div>
</template>

<style scoped>
.container {
  background-color: var(--color-background);
  padding: 12rem 0;

  :is(img),
  :is(video) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.content-wrapper {
  position: absolute;
  bottom: 4rem;
  left: 0;
  right: 0;
  text-align: center;
  color: #fff;

  .title {
    font-weight: 200;
    font-size: 1.8rem;
    line-height: 2.5rem;
    letter-spacing: 0.6rem;
  }

  .subtitle {
    margin-top: 0.8rem;
    font-weight: 200;
    font-size: 1.4rem;
    line-height: 2.6rem;
    color: #fff;
    left: 0.2rem;
  }
}
</style>