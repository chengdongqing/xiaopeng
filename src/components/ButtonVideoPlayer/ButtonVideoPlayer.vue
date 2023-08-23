<script setup lang="ts">
import PlayIcon from '@/components/Icons/Play.vue'
import { ref } from 'vue'
import useVideoPlay from './useVideoPlay.ts'

defineProps<{
  videoUrl: string
}>()

const videoRef = ref()
const playVideo = useVideoPlay(videoRef)
</script>

<template>
  <div class="btn-player">
    <PlayIcon @click="playVideo" />
    <video :src="videoUrl" style="width: 0; height: 0" ref="videoRef" />
  </div>
</template>

<style scoped>
.btn-player {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6.4rem;
  height: 6.4rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
}
</style>