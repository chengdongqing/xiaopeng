<script setup lang="ts">
import TitleBar from '@/components/TitleBar/TitleBar.vue'
</script>

<template>
  <div class="container">
    <TitleBar
      color="#fff"
      title="<span class='en'>X-EEA3.5</span>电子电气架构"
      subtitle="利用多核芯片，集中控制六大功能域，OTA升级速度提升300%<sup>6</sup>"
      class="title"
    />

    <video
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p12-new-2.mp4"
      autoplay
      muted
      loop
    />
  </div>
</template>

<style scoped>
.container {
  height: 100vh;

  .title {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  :is(video) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>