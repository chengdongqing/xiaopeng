<script setup lang="ts">
import ButtonVideoPlayer from '@/components/ButtonVideoPlayer/ButtonVideoPlayer.vue'
import useElementScale from '@/hooks/useElementScale.ts'
import { ref } from 'vue'

defineProps<{
  title: string
  subtitle: string
  src: string
  videoUrl?: string
}>()

const containerRef = ref()
const scale = useElementScale(containerRef)
</script>

<template>
  <div class="shrinkable-banner" ref="containerRef">
    <div
      class="background-wrapper"
      :style="{
        width: `${scale}%`,
        height: `${scale}%`
      }"
    >
      <video v-if="videoUrl" :src="src" autoplay muted loop />
      <img v-else :src="src" alt="" />

      <div class="content-wrapper">
        <div
          class="title"
          :style="{
            transform: `translate3d(0, ${100 - scale}px, 0)`,
            opacity: scale / 100
          }"
          v-html="title"
        />
        <div
          class="subtitle"
          :style="{
            transform: `translate3d(0, ${100 * 4 - scale * 4}px, 0)`,
            opacity: scale === 100 ? 1 : scale / 100 - 0.3
          }"
          v-html="subtitle"
        />
        <div
          class="more"
          :style="{
            transform: `translate3d(0, ${100 * 8 - scale * 8}px, 0)`,
            opacity: scale === 100 ? 1 : scale / 100 - 0.6
          }"
        >
          <slot name="more" />
        </div>
      </div>
    </div>

    <ButtonVideoPlayer v-if="videoUrl" :video-url="videoUrl" />
  </div>
</template>

<style scoped>
.shrinkable-banner {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background-wrapper {
  :is(video),
  :is(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.content-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 12rem;
  padding-bottom: 6.4rem;
  text-align: center;

  .title {
    margin-bottom: 1.6rem;
    font-family: HYYakuHei, serif;
    font-weight: 300;
    font-size: 3.2rem;
    letter-spacing: 0.4rem;
    color: #fff;
  }

  .subtitle {
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
    color: #fff;
    line-height: 1.75;
  }

  .more {
    margin-top: 3.2rem;
  }
}
</style>