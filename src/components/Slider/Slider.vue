<script setup lang="ts">
import useLast from '@/hooks/useLast.ts'
import { ref } from 'vue'
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
</script>

<template>
  <div class="slider">
    <div class="images-wrapper">
      <div
        class="img-outer"
        :class="{ active: index === current, next: isNext }"
        :style="{ zIndex: index === current ? 3 : index === last ? 2 : 1 }"
        v-for="(item, index) in options"
        :key="item.title"
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

      <img :src="ArrowLeft" alt="" class="btn left" @click="toPrev" />
      <img :src="ArrowRight" alt="" class="btn right" @click="toNext" />
    </div>

    <div class="title-wrapper">
      <div
        class="title"
        :class="{ active: index === current }"
        v-for="(item, index) in options"
        :key="item.title"
        @click="goTo(index)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="description">{{ options[current].description }}</div>
  </div>
</template>

<style scoped>
@keyframes visible {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes visible-reverse {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.slider {
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

      &.active {
        z-index: 1;
        animation: visible-reverse 0.6s forwards;

        &.next {
          animation: visible 0.6s forwards;
        }
      }
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
      z-index: 100;
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

  .title-wrapper {
    display: flex;
    text-align: center;

    .title {
      flex: 1;
      letter-spacing: 0.2rem;
      margin-bottom: 1.6rem;
      padding-top: 4rem;
      padding-bottom: 2rem;
      color: #999;
      font-size: 1.8rem;
      font-weight: 400;
      cursor: pointer;
      transition: 0.2s;

      &.active {
        color: #000;
        font-weight: 500;

        &::after {
          background-color: var(--color-primary);
        }
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 0.2rem;
        background-color: #e4e4e4;
      }
    }
  }

  .description {
    height: 6.8rem;
    margin-top: 2.4rem;
    text-align: center;
    color: #666;
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
  }
}
</style>