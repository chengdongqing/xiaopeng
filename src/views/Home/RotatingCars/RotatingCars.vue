<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import * as Swiper from '@/components/Swiper'
import { computed, ref } from 'vue'
import CarItem from './CarItem.vue'
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
          <CarItem
            :name="item.name"
            :sprite-url="item.spriteUrl"
            :current="current"
          />
        </Swiper.Item>
      </Swiper.Container>

      <div class="swiper-btn left" @click="swiperRef.toPrev" />
      <div class="swiper-btn right" @click="swiperRef.toNext" />
    </div>

    <div class="content-wrapper">
      <div class="description">{{ car.description }}</div>
      <div>
        <Button class="btn" arrow>了解{{ car.name }}</Button>
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
    cursor: pointer;
    opacity: 0.2;

    &.active,
    &:hover {
      opacity: 1;
    }
  }
}

.swiper-btn {
  position: absolute;
  top: 50%;
  width: 8rem;
  height: 8rem;
  z-index: 2;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: 0.3s;

  &.left {
    left: 5%;
    transform: translateY(-50%);
  }

  &.right {
    right: 5%;
    transform: translateY(-50%) rotate(180deg);
  }

  &::after {
    content: '';
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMiAwTDQuNCAxOCAyMiAzNmgtNC40TDAgMTggMTcuNiAwSDIyeiIgZmlsbD0iIzY2NiIvPjwvc3ZnPg==);
    background-size: contain;
    width: 2rem;
    height: 3.2rem;
  }

  &:hover {
    opacity: 1;
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