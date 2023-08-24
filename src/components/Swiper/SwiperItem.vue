<script setup lang="ts">
import { inject } from 'vue'
import { SwiperInjectionKey } from './index.ts'

const { current, card, cardScale, register, goTo } = inject(SwiperInjectionKey)
const index = register()
</script>

<template>
  <div
    class="swiper-item"
    :style="{ width: `${card ? cardScale * 100 : 100}%` }"
    :class="{ card, active: index === current }"
    @click="card && index !== current && goTo(index)"
  >
    <slot />
  </div>
</template>

<style scoped>
.swiper-item {
  flex-shrink: 0;

  &.card {
    opacity: 0.4;
    transform: scale(0.8);
    border-radius: 0.4rem;
    overflow: hidden;
    cursor: pointer;
    transition: 0.3s;

    &.active {
      opacity: 1;
      transform: scale(1);
      cursor: default;
    }
  }
}
</style>