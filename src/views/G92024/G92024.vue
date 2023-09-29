<script setup lang="ts">
import CarBanner from '@/components/CarBanner/CarBanner.vue'
import CardSwiper from '@/components/CardSwiper/CardSwiper.vue'
import ColorfulShowcase from '@/components/ColorfulShowcase/ColorfulShowcase.vue'
import HeaderBar from '@/components/HeaderBar/HeaderBar.vue'
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
import SlideSwiper from '@/components/SlideSwiper/SlideSwiper.vue'
import TabsSwiper from '@/components/TabsSwiper/TabsSwiper.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import {
  options1,
  options2,
  options3,
  options4,
  options5
} from './resources.ts'
</script>

<template>
  <HeaderBar id="g92024" name="2024款G9" price="263900" />

  <CarBanner
    id="g92024"
    title="<span class='en'>2024</span>款小鹏<span class='en'>G9</span>"
    subtitle="超智驾豪华纯电SUV"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g92024/v2/Gu72d34fs245/p1-1.jpg"
  />

  <ShrinkableBanner
    title="从容气度自成大家风范"
    subtitle="生动力渐消曲面，智能与豪华的优雅相融，曲面之上光影流动，如风过留痕，顺畅而舒展"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g92024/v2/Gu72d34fs245/p2-1.jpg"
  />

  <TitleBar title="全新车色登场，广纳无限可能" />
  <CardSwiper
    title="全新车色登场，广纳无限可能"
    :options="options1"
    style="padding-top: 0"
  />

  <SlideSwiper :options="options2" />

  <ColorfulShowcase
    id="g92024"
    name="G9"
    title="至臻本色 格调不显自彰"
    name-icon-url="https://s.xiaopeng.com/xp-fe/mainsite/2023/g92024/v2/Gu72d34fs245/g9-logo.svg"
    :options="options3"
    style="background-color: var(--color-background)"
  />

  <ShrinkableBanner
    title="笃定的路，交给感知带路"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g92024/v2/Gu72d34fs245/p5-1.jpg"
  />

  <div>
    <TitleBar
      title="<span class='en'>XNGP</span> 智能辅助驾驶系统"
      color="#fff"
      style="
        z-index: 1;
        position: absolute;
        top: 12rem;
        left: 50%;
        transform: translateX(-50%);
        padding: 0;
      "
    />
    <TabsSwiper :options="options4" />
  </div>

  <SlideSwiper :options="options5" />
</template>

<style scoped></style>