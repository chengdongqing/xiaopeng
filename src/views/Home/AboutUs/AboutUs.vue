<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import PlayIcon from '@/components/Icons/Play.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import { ref } from 'vue'

const videoRef = ref<HTMLVideoElement>()

function onFullscreenChange() {
  if (!document.fullscreenElement) {
    videoRef.value?.pause()
    document.removeEventListener('fullscreenchange', onFullscreenChange)
  }
}

function handleVideoPlay() {
  const video = videoRef.value as HTMLVideoElement
  video.currentTime = 0
  video.play()
  video.requestFullscreen()
  document.addEventListener('fullscreenchange', onFullscreenChange)
}
</script>

<template>
  <div class="container">
    <video
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/home/explore.mp4"
      class="video"
      autoplay
      muted
      loop
    />

    <TitleBar
      title="未来出行探索者"
      subtitle="用科技为人类创造更便捷愉悦的出行生活"
      color="#fff"
      class="content"
    >
      <RouterLink to="/about">
        <Button color="#fff" arrow arrow-color="#fff" class="about">
          关于小鹏
        </Button>
      </RouterLink>
    </TitleBar>

    <PlayIcon class="icon-play" @click="handleVideoPlay" />
    <video
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/home/explore-full.mp4"
      style="width: 0; height: 0"
      ref="videoRef"
    />
  </div>
</template>

<style scoped>
.video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

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
  cursor: pointer;
}
</style>