<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import ButtonVideoPlayer from '@/components/ButtonVideoPlayer/ButtonVideoPlayer.vue'
import XIcon from '@/components/Icons/X.vue'

const props = defineProps<{
  id: string
  title: string
  subtitle: string
  src: string
  videoUrl?: string
}>()

const src = `url('${props.src}')`
</script>

<template>
  <div class="car-banner">
    <div class="content-wrapper">
      <div class="title-wrapper">
        <XIcon class="x" />
        <div class="title" v-html="title" />
      </div>
      <div class="subtitle">{{ subtitle }}</div>
    </div>

    <ButtonVideoPlayer v-if="videoUrl" :video-url="videoUrl" />

    <div class="btn-group">
      <Button color="#fff" arrow arrow-color="#fff">预约试驾</Button>
      <Button color="#fff" arrow class="btn-right">立即订购</Button>
    </div>
  </div>
</template>

<style scoped>
.car-banner {
  height: 100vh;
  background: v-bind(src) no-repeat 50%;
  background-size: cover;
}

.content-wrapper {
  position: absolute;
  left: 50%;
  top: 15.8rem;
  transform: translateX(-50%);
  text-align: center;

  .x {
    position: absolute;
    width: 2rem;
    height: 2rem;
    display: inline-block;
    left: 0;
    top: 0;
    transform: translate(-100%, -70%);
  }

  .title-wrapper {
    display: inline-block;
  }

  .title {
    color: #fff;
    font-family: HYYakuHei, serif;
    font-size: 4rem;
    line-height: 4rem;
    letter-spacing: 0.6rem;
    margin-bottom: 1.6rem;
  }

  .subtitle {
    color: #fff;
    font-weight: 200;
    font-size: 1.8rem;
    line-height: 2.5rem;
    letter-spacing: 0.6rem;
  }
}

.btn-group {
  position: absolute;
  bottom: 8rem;
  left: 50%;
  transform: translateX(-50%);

  .btn-right {
    margin-left: 2.4rem;
    background-color: #fff;
    color: #000;
  }
}
</style>