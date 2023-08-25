<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
</script>

<template>
  <ShrinkableBanner
    title="未来出行探索者"
    subtitle="用科技为人类创造更便捷愉悦的出行生活"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/home/explore.mp4"
    video-url="https://s.xiaopeng.com/xp-fe/mainsite/2023/home/explore-full.mp4"
  >
    <template v-slot:more>
      <Button color="#fff" arrow arrow-color="#fff" class="about">
        关于小鹏
      </Button>
    </template>
  </ShrinkableBanner>
</template>