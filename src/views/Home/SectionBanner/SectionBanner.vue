<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import Grid from '@/components/Grid/Grid.vue'
import XIcon from '@/components/Icons/X.vue'
import * as Swiper from '@/components/Swiper'
import { ref } from 'vue'
import cars from './cars.ts'

const current = ref(0)
const swiperRef = ref()
</script>

<template>
  <div>
    <Swiper.Container
      ref="swiperRef"
      :interval="8000"
      :pause-on-hover="false"
      style="height: 100vh"
      @change="(index) => (current = index)"
    >
      <Swiper.Item v-for="item in cars" :key="item.name">
        <video :src="item.videoUrl" class="video" autoplay muted loop />
        <div class="content-wrapper">
          <XIcon class="x" />
          <div class="title" v-html="item.title" />
          <div class="btn-group">
            <RouterLink :to="`/${item.name.toLowerCase()}`">
              <Button color="#fff" arrow arrow-color="#fff">
                了解{{ item.name }}
              </Button>
            </RouterLink>
            <Button class="btn-right" color="#fff" arrow>预约试驾</Button>
          </div>
        </div>
      </Swiper.Item>
    </Swiper.Container>

    <Grid columns="4" gap="0.4rem" class="dots">
      <div
        class="dot-item"
        :key="item.name"
        v-for="(item, index) in cars"
        @click="swiperRef.goTo(index)"
      >
        <div class="line" :class="{ active: index === current }" />
      </div>
    </Grid>
  </div>
</template>

<style scoped>
.dots {
  position: absolute;
  bottom: 2.8rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  .dot-item {
    width: 4.4rem;
    height: 4.4rem;
    cursor: pointer;
    display: flex;
    align-items: center;

    .line {
      width: 4rem;
      height: 0.3rem;
      background-color: hsla(0, 0%, 100%, 0.3);
      transform: skewX(-30deg);

      &.active {
        background-color: var(--color-primary);
      }
    }
  }
}

.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-wrapper {
  position: absolute;
  left: 15%;
  top: 30%;

  .x {
    position: absolute;
    width: 2rem;
    height: 2rem;
    display: inline-block;
    left: 0;
    top: 0;
    transform: translate(-100%, -30%);
  }

  .title {
    color: #fff;
    font-family: HYYakuHei, serif;
    font-size: 3.2rem;
    letter-spacing: 0.6rem;
    line-height: 1.5;
  }
}

.btn-group {
  margin-top: 3.2rem;

  .btn-right {
    margin-left: 2rem;
    background-color: #fff;
    color: #000;
  }
}
</style>