<script setup lang="ts">
import useElementSize from '@/hooks/useElementSize.ts'
import { computed, provide, ref, watch } from 'vue'
import { useIndexSwitch, useSwiperPlay } from './helpers.ts'
import { SwiperInjectionKey, SwiperProps } from './index.ts'

const props = withDefaults(defineProps<SwiperProps>(), {
  autoplay: true,
  interval: 3000,
  duration: 300,
  cardScale: 0.6,
  pauseOnHover: true
})
const duration = `${props.duration}ms`

const count = ref(0)
const current = ref(0)
const isNext = ref(true)
const containerRef = ref()

const size = useElementSize(containerRef)

const offsetX = computed(() => {
  if (!containerRef.value) return 0

  const width = size.width * count.value * (props.card ? props.cardScale : 1)
  const perWidth = width / count.value
  const offset = -(perWidth * current.value)

  return props.card ? offset + perWidth * 0.333 : offset
})

const emit = defineEmits<{
  change: [index: number]
}>()

watch(current, (value) => {
  emit('change', value)
})

const { toNext, toPrev, goTo } = useIndexSwitch(
  {
    current,
    count,
    isNext
  },
  () => resetPlay()
)
const { startPlay, pausePlay, resetPlay } = useSwiperPlay(props, toNext)

provide(SwiperInjectionKey, {
  current,
  card: props.card,
  cardScale: props.cardScale,
  register() {
    count.value += 1
    return count.value - 1
  },
  goTo,
  toPrev,
  toNext
})

defineExpose({
  toNext,
  toPrev,
  goTo
})
</script>

<template>
  <div
    class="swiper"
    @mouseenter="pauseOnHover && pausePlay()"
    @mouseleave="pauseOnHover && startPlay()"
  >
    <div
      ref="containerRef"
      class="swiper-container"
      :style="{ transform: `translate3d(${offsetX}px, 0, 0)` }"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.swiper {
  overflow: hidden;

  .swiper-container {
    height: 100%;
    display: flex;
    transition: v-bind(duration);
  }
}
</style>