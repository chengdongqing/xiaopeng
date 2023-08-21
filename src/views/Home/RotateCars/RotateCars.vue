<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import ArrowRight from '@/components/Icons/ArrowRight.vue'
import { computed, ref } from 'vue'
import cars from './cars.ts'

const current = ref(0)
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
        @click="current = index"
      >
        {{ item.name }}
      </div>
    </div>

    <div class="main">
      <img
        :src="`https://s.xiaopeng.com/xp-fe/mainsite/2023/home/rotate/${car.name}.svg`"
        class="car-icon"
        alt=""
      />
      <div
        class="car-picture"
        :style="{
          background: `url(${car.spriteUrl}) -400% 0% / 3600% 100%`
        }"
      />
    </div>

    <div class="content-wrapper">
      <div class="description">{{ car.description }}</div>
      <div>
        <Button color="#000" class="btn">
          了解{{ car.name }}
          <ArrowRight class="icon" />
        </Button>
        <Button color="#000" class="btn right">
          立即订购
          <ArrowRight class="icon" />
        </Button>
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
    cursor: pointer;
    opacity: 0.2;

    &.active,
    &:hover {
      opacity: 1;
    }
  }
}

.main {
  width: 120rem;
  margin: auto;

  .car-icon {
    height: 28rem;
    position: absolute;
    left: 8rem;
    top: 2rem;
    z-index: -1;
  }

  .car-picture {
    width: 120rem;
    height: 56rem;
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

  .btn {
    &.right {
      margin-left: 2rem;
      background-color: #000;
      color: #fff;
    }

    .icon {
      color: var(--primary-color);
    }
  }
}
</style>