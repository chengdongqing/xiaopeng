<script setup lang="ts">
import { inject } from 'vue'
import { SwiperInjectionKey } from './index.ts'

const {
  current,
  animation,
  duration: _duration,
  register
} = inject(SwiperInjectionKey)

const duration = `${_duration}ms`
const index = register()
</script>

<template>
  <Transition :name="animation">
    <div v-show="current === index" class="swiper-item">
      <slot />
    </div>
  </Transition>
</template>

<style scoped>
.swiper-item {
  position: absolute;
  inset: 0;
}

[class*='-active'] {
  transition: v-bind(duration) linear;
}

/* 横向滚动 */
.slide-right-leave-to,
.slide-left-enter-from {
  transform: translate3d(-100%, 0, 0);
}

.slide-right-enter-from,
.slide-left-leave-to {
  transform: translate3d(100%, 0, 0);
}

/* 纵向滚动 */
.slide-up-enter-from,
.slide-down-leave-to {
  transform: translate3d(0, 100%, 0);
}

.slide-up-leave-to,
.slide-down-enter-from {
  transform: translate3d(0, -100%, 0);
}

/* 淡入浅出 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0.3;
}
</style>