<script setup lang="ts">
import EnduranceBottomBar from '@/components/EnduranceBottomBar/EnduranceBottomBar.vue'
import Grid from '@/components/Grid/Grid.vue'
import ScalableImage from '@/components/ScalableImage/ScalableImage.vue'
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
import { options } from './resources.ts'
</script>

<template>
  <div>
    <ShrinkableBanner
      title="快点出发，留时间慢慢感受"
      subtitle="全域800V高压SiC碳化硅超充平台，媲美加油的补能体验"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g92024/v2/Gu72d34fs245/p9-1.jpg"
      style="height: 167.5rem"
    />
    <EnduranceBottomBar
      id="g92024"
      name="2024款G9"
      :options="[
        {
          name: '最大充电功率',
          value: 755,
          unit: 'km'
        }
      ]"
      style="bottom: 85rem"
    />
    <Grid :columns="options.length" gap="3.2rem" class="card-list">
      <div class="card-item" v-for="item in options" :key="item.title">
        <ScalableImage :src="item.src" />
        <div class="title" v-html="item.title" />
        <div class="subtitle" v-html="item.subtitle" />
      </div>
    </Grid>
  </div>
</template>

<style scoped>
.card-list {
  position: absolute;
  bottom: 12rem;
  left: 50%;
  transform: translateX(-50%);

  .card-item {
    width: 41.8rem;

    .title {
      font-size: 1.8rem;
      margin-top: 2.4rem;
      margin-bottom: 1.6rem;
      letter-spacing: 0.2rem;
      line-height: 2rem;
    }

    .subtitle {
      font-size: 1.4rem;
      color: #666;
      letter-spacing: 0.2rem;
    }
  }
}
</style>