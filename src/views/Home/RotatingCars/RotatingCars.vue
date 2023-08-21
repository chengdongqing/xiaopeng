<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import { computed, reactive, ref } from 'vue'
import cars from './cars.ts'

const current = ref(0)
const car = computed(() => cars[current.value])

function handleCarChange(index: number) {
  current.value = index
  rotate.offset = 0
}

const containerRef = ref<HTMLDivElement>()
const { mouse, rotate } = reactive({
  mouse: {
    visible: false,
    position: [0, 0]
  },
  rotate: {
    prevX: 0,
    offset: 0
  }
})

function handleMouseMove(e: MouseEvent) {
  const rect = containerRef.value!!.getBoundingClientRect()
  const [x, y] = [e.clientX - rect.left, e.clientY - rect.top]

  if (x > 0 && y > 0 && x < rect.width && y < rect.height) {
    if (rotate.prevX > 0 && Math.abs(e.pageX - rotate.prevX) >= 5) {
      rotate.offset += e.pageX > rotate.prevX ? 100 : -100
      rotate.prevX = e.pageX
    }
    mouse.position = [x, y]
    if (!mouse.visible) {
      mouse.visible = true
    }
  } else {
    mouse.visible = false
  }
}

function handleMouseEnter() {
  window.addEventListener('mousemove', handleMouseMove)
}

function handleMouseLeave() {
  window.removeEventListener('mousemove', handleMouseMove)
}
</script>

<template>
  <div class="container">
    <div class="car-bullets">
      <div
        class="item"
        v-for="(item, index) in cars"
        :class="{ active: current === index }"
        :key="item.name"
        @click="handleCarChange(index)"
      >
        {{ item.name }}
      </div>
    </div>

    <div
      class="main"
      ref="containerRef"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @mousedown="rotate.prevX = $event.pageX"
      @mouseup="rotate.prevX = 0"
    >
      <img
        :src="`https://s.xiaopeng.com/xp-fe/mainsite/2023/home/rotate/${car.name}.svg`"
        class="car-icon"
        draggable="false"
        alt=""
      />
      <div
        class="car-picture"
        :style="{
          background: `url(${car.spriteUrl}) ${rotate.offset}% 0% / 3600% 100%`
          // 参数说明：url offsetX offsetY / scaleX scaleY
        }"
      />
      <img
        alt=""
        draggable="false"
        src="https://xps01.xiaopeng.com/www/public/img/mouse.73b63bed.svg"
        :class="['mouse-icon', { active: mouse.visible }]"
        :style="{
          transform: `translate3d(calc(-50% + ${mouse.position[0]}px), calc(-50% + ${mouse.position[1]}px), 0)`
        }"
      />
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

  .mouse-icon {
    width: 0;
    height: 7.2rem;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    transition:
      width 0.3s,
      opacity 0.3s;

    &.active {
      width: 7.2rem;
      opacity: 0.8;
    }

    &:hover {
      cursor: none;
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