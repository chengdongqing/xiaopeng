<script setup lang="ts">
import EnduranceBottomBar from '@/components/EnduranceBottomBar/EnduranceBottomBar.vue'
import ImageCardsRow from '@/components/ImageCardsRow/ImageCardsRow.vue'
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
    <ImageCardsRow
      :options="options"
      item-width="41.8rem"
      style="
        position: absolute;
        bottom: 12rem;
        left: 50%;
        transform: translateX(-50%);
        padding: 0;
      "
    />
  </div>
</template>