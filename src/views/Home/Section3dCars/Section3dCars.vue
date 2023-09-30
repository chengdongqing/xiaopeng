<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import * as Swiper from '@/components/Swiper'
import { computed, ref } from 'vue'
import Car from './Car.vue'
import cars from './cars.ts'

const current = ref(0)
const swiperRef = ref()
const car = computed(() => cars[current.value])
</script>

<template>
  <div class="container">
    <div class="car-bullets">
      <div
        class="item"
        v-for="(item, index) in cars"
        :class="{ active: current === index }"
        :key="item.name"
        @click="swiperRef.goTo(index)"
      >
        {{ item.name }}
        <div class="label" v-if="item.label">{{ item.label }}</div>
      </div>
    </div>

    <div>
      <Swiper.Container
        ref="swiperRef"
        style="height: 56rem"
        :autoplay="false"
        :duration="200"
        @change="(index) => (current = index)"
      >
        <Swiper.Item v-for="item in cars" :key="item.name">
          <Car
            :name="item.name"
            :sprite-url="item.spriteUrl"
            :current="current"
          />
        </Swiper.Item>
      </Swiper.Container>
      <Swiper.ButtonGroup :swiper-ref="swiperRef" />
    </div>

    <div class="content-wrapper">
      <div class="description">{{ car.description }}</div>
      <div>
        <RouterLink :to="`/${car.id}`">
          <Button class="btn" arrow>了解{{ car.name }}</Button>
        </RouterLink>
        <Button class="btn right" arrow>立即订购</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 12rem;
  padding-bottom: 12.4rem;
}

.car-bullets {
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;

  .item {
    font-size: 2.4rem;
    padding-left: 4.5rem;
    padding-right: 4.5rem;
    transition: 0.3s;
    text-align: center;
    cursor: pointer;
    opacity: 0.2;

    &.active,
    &:hover {
      opacity: 1;
    }

    .label {
      font-size: 1.2rem;
      line-height: 1.2;
    }
  }
}

.content-wrapper {
  text-align: center;

  .description {
    font-size: 2rem;
    font-weight: 400;
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;
    letter-spacing: 0.2rem;
  }

  .btn.right {
    margin-left: 2rem;
    background-color: #000;
    color: #fff;
  }
}
</style>