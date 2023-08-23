<script setup lang="ts">
import { reactive, ref, watch } from 'vue'

const props = defineProps<{
  name: string
  spriteUrl: string
  current: number
}>()

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

watch(
  () => props.current,
  () => {
    rotate.offset = 0
    mouse.visible = false
  }
)

const threshold = 30

function handleMouseMove(e: MouseEvent) {
  const rect = containerRef.value!!.getBoundingClientRect()
  const [x, y] = [e.clientX - rect.left, e.clientY - rect.top]

  if (
    x > threshold &&
    y > threshold &&
    x < rect.width - threshold &&
    y < rect.height - threshold
  ) {
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
  mouse.visible = false
  window.removeEventListener('mousemove', handleMouseMove)
}
</script>

<template>
  <div
    class="main"
    ref="containerRef"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousedown="rotate.prevX = $event.pageX"
    @mouseup="rotate.prevX = 0"
  >
    <img
      :src="`https://s.xiaopeng.com/xp-fe/mainsite/2023/home/rotate/${name}.svg`"
      class="car-icon"
      draggable="false"
      alt=""
    />
    <div
      class="car-picture"
      :style="{
        background: `url(${spriteUrl}) ${rotate.offset}% 0% / 3600% 100%`
        // 参数说明：url offsetX offsetY / scaleX scaleY
      }"
    />
    <img
      alt=""
      draggable="false"
      src="https://xps01.xiaopeng.com/www/public/img/mouse.73b63bed.svg"
      class="mouse-icon"
      :class="{ active: mouse.visible }"
      :style="{
        transform: `translate3d(calc(-50% + ${mouse.position[0]}px), calc(-50% + ${mouse.position[1]}px), 0)`
      }"
    />
  </div>
</template>

<style scoped>
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
</style>