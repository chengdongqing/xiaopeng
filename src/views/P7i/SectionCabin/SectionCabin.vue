<script setup lang="ts">
import ScalableImage from '@/components/ScalableImage/ScalableImage.vue'
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
import { options } from './resources.ts'
</script>

<template>
  <div>
    <ShrinkableBanner
      title="舒适座舱，体验进阶"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p7i/p8-1.jpg"
      style="height: 136rem"
      static
    />

    <div class="content">
      <div class="title">全系标配</div>
      <div class="card-list">
        <div class="card-item" v-for="item in options" :key="item.title">
          <ScalableImage :src="item.src" />
          <div class="title" v-html="item.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 132rem;
  height: 45.1rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;

  .title {
    font-size: 2.4rem;
    font-weight: 200;
    line-height: 3.4rem;
    letter-spacing: 0.4rem;
  }

  .card-list {
    margin-top: 2.4rem;
    display: flex;
    justify-content: space-between;

    .card-item {
      text-align: center;
      width: 30.6rem;

      .title {
        font-size: 1.4rem;
        margin-top: 2.4rem;
        letter-spacing: 0.2rem;
        line-height: 2rem;
      }
    }
  }
}
</style>