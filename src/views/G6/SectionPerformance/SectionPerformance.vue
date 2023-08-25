<script setup lang="ts">
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
</script>

<template>
  <div>
    <ShrinkableBanner
      title="超跑级性能尽释驾趣"
      :subtitle="`百公里加速<span class='en'>3.9</span>秒，每一次出发酣畅淋漓<sup>1</sup>`"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p12-1.jpg"
    />
    <div class="content-wrapper">
      <div>
        <div class="name">最大功率</div>
        <div class="value">358<span class="unit">kW</span></div>
      </div>
      <div>
        <div class="name">峰值扭矩</div>
        <div class="value">660<span class="unit">N·m</span></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-wrapper {
  width: 50.4rem;
  position: absolute;
  left: 50%;
  bottom: 6.4rem;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  color: #fff;

  .name {
    opacity: 0.8;
    font-size: 1.6rem;
    font-weight: 200;
    line-height: 2.4rem;
  }

  .value {
    font-size: 4rem;
    line-height: 5.6rem;

    .unit {
      font-size: 1.6rem;
      font-weight: 200;
      margin-left: 0.4rem;
    }
  }
}
</style>