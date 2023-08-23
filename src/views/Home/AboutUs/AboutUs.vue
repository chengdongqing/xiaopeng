<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import PlayIcon from '@/components/Icons/Play.vue'
import useElementScale from '@/hooks/useElementScale.ts'
import { ref } from 'vue'
import useVideoPlay from './useVideoPlay.ts'

const containerRef = ref()
const scale = useElementScale(containerRef)

const videoRef = ref()
const playVideo = useVideoPlay(videoRef)
</script>

<template>
  <div class="container" ref="containerRef">
    <video
      :style="{
        width: `${scale}%`,
        height: `${scale}%`,
        'object-fit': 'cover'
      }"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/home/explore.mp4"
      autoplay
      muted
      loop
    />

    <div class="content">
      <div
        class="title"
        :style="{
          transform: `translate3d(0, ${100 - scale}px, 0)`,
          opacity: scale / 100
        }"
      >
        未来出行探索者
      </div>
      <div
        class="subtitle"
        :style="{
          transform: `translate3d(0, ${100 * 4 - scale * 4}px, 0)`,
          opacity: scale === 100 ? 1 : scale / 100 - 0.3
        }"
      >
        用科技为人类创造更便捷愉悦的出行生活
      </div>
      <RouterLink to="/about">
        <Button
          color="#fff"
          arrow
          arrow-color="#fff"
          class="about"
          :style="{
            transform: `translate3d(0, ${100 * 8 - scale * 8}px, 0)`,
            opacity: scale === 100 ? 1 : scale / 100 - 0.6
          }"
        >
          关于小鹏
        </Button>
      </RouterLink>
    </div>

    <PlayIcon class="icon-play" @click="playVideo" />
    <video
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/home/explore-full.mp4"
      style="width: 0; height: 0"
      ref="videoRef"
    />
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  text-align: center;
}

.content {
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

  .about {
    margin-top: 3.2rem;
  }
}

.icon-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6.4rem;
  height: 6.4rem;
  cursor: pointer;
}
</style>