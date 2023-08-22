<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'
import { useIndexSwitch, useSwiperPlay } from './helpers.ts'
import { animationMap, SwiperInjectionKey, SwiperProps } from './index.ts'

const props = withDefaults(defineProps<SwiperProps>(), {
  autoplay: true,
  interval: 3000,
  animation: 'slideX',
  duration: 300,
  pauseOnHover: true
})

const count = ref(0)
const current = ref(0)
const isNext = ref(true)

const animation = computed(() => {
  return animationMap[props.animation][isNext.value ? 0 : 1]
})

provide(SwiperInjectionKey, {
  current: current,
  animation,
  duration: props.duration,
  register() {
    count.value += 1
    return count.value - 1
  }
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
    <slot />
  </div>
</template>

<style scoped>
.swiper {
  display: flex;
  overflow: hidden;
}
</style>