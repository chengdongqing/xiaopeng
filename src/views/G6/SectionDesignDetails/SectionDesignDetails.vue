<script setup lang="ts">
import Grid from '@/components/Grid/Grid.vue'
import ScalableImage from '@/components/ScalableImage/ScalableImage.vue'
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
import details from './details.ts'
</script>

<template>
  <div class="container">
    <ShrinkableBanner
      title="矢量星环设计"
      subtitle="Circle of Life矢量星环，寓意科技进化、生生不息"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p7-1.jpg"
      style="height: 100%"
    />

    <Grid columns="2" item-width="62.8rem" gap="4rem" class="design-details">
      <div v-for="item in details" :key="item.title">
        <ScalableImage :src="item.src" />
        <div class="content">
          <div class="title">{{ item.title }}</div>
          <div class="subtitle">{{ item.subtitle }}</div>
        </div>
      </div>
    </Grid>
  </div>
</template>

<style scoped>
.container {
  height: 217rem;
  min-height: 150vh;
}

.design-details {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 22rem;

  .content {
    position: absolute;
    bottom: 3.2rem;
    left: 3.2rem;
    color: #fff;

    .title {
      font-size: 1.8rem;
      letter-spacing: 0.2rem;
    }

    .subtitle {
      opacity: 0.6;
      font-size: 1.4rem;
      margin-top: 0.8rem;
    }
  }
}
</style>