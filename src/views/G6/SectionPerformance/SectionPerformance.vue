<script setup lang="ts">
import NameValueGroup from '@/components/NameValueGroup/NameValueGroup.vue'
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
</script>

<template>
  <div>
    <ShrinkableBanner
      title="超跑级性能尽释驾趣"
      subtitle="百公里加速<span class='en'>3.9</span>秒，每一次出发酣畅淋漓<sup>1</sup>"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p12-1.jpg"
    />
    <NameValueGroup
      :options="[
        {
          name: '最大功率',
          value: 358,
          unit: 'kW'
        },
        {
          name: '峰值扭矩',
          value: 660,
          unit: 'N·m'
        }
      ]"
      class="content-wrapper"
    />
  </div>
</template>

<style scoped>
.content-wrapper {
  width: 50.4rem;
  position: absolute;
  left: 50%;
  bottom: 6.4rem;
  transform: translateX(-50%);
}
</style>