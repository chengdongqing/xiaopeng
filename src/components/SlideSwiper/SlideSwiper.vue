<script setup lang="ts">
import TabsBar from '@/components/TabsBar/TabsBar.vue'
import useLast from '@/hooks/useLast.ts'
import { ref, watch } from 'vue'
import ArrowLeft from './arrow-left.svg'
import ArrowRight from './arrow-right.svg'
import useIndexSwitch from './useIndexSwitch.ts'

const props = defineProps<{
  options: {
    title: string
    description: string
    src: string
  }[]
}>()

const current = ref(0)
const isNext = ref(true)
const last = useLast(current)

const { toPrev, toNext, goTo } = useIndexSwitch({
  count: props.options.length,
  current,
  isNext
})

const offsetX = ref(0)
watch(
  () => current.value,
  () => {
    function render() {
      if (offsetX.value === 0) return
      offsetX.value += (isNext.value ? -1 : 1) * 4
      requestAnimationFrame(render)
    }

    offsetX.value = (isNext.value ? 1 : -1) * 100
    render()
  }
)
</script>

<template>
  <div class="slide-swiper">
    <div class="images-wrapper">
      <div
        class="img-outer"
        :style="{
          zIndex: index === current ? 3 : index === last ? 2 : 1,
          transform: index === current ? `translate3d(${offsetX}%,0,0)` : 'none'
        }"
        v-for="(item, index) in options"
        :key="item.title"
      >
        <div
          style="width: 100%; height: 100%"
          :style="{
            transform:
              index === current ? `translate3d(${-offsetX}%,0,0)` : 'none'
          }"
        >
          <video
            v-if="item.src.endsWith('.mp4')"
            :src="item.src"
            autoplay
            muted
            loop
          />
          <img v-else :src="item.src" alt="" />
        </div>
      </div>
      <img :src="ArrowLeft" alt="" class="btn left" @click="toPrev" />
      <img :src="ArrowRight" alt="" class="btn right" @click="toNext" />
    </div>

    <TabsBar :options="options" :current="current" @change="goTo" />
  </div>
</template>

<style scoped>
.slide-swiper {
  width: 96rem;
  margin: auto;

  .images-wrapper {
    width: 100%;
    height: 54rem;
    overflow: hidden;

    .img-outer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
    }

    :is(video),
    :is(img) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.4rem;
    }

    .btn {
      width: 4.8rem;
      height: 4.8rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 10;
      opacity: 0.6;
      transition: 0.3s;

      &.left {
        left: 2.6rem;
      }

      &.right {
        right: 2.6rem;
      }

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>