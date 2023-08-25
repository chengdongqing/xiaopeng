<script setup lang="ts">
import CarBanner from '@/components/CarBanner/CarBanner.vue'
import ColorfulShowcase from '@/components/ColorfulShowcase/ColorfulShowcase.vue'
import HeaderBar from '@/components/HeaderBar/HeaderBar.vue'
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
import Slider from '@/components/Slider/Slider.vue'
import { carColors, insideSlides } from './resources.ts'
import SectionDesignConsultant from './SectionDesignConsultant/SectionDesignConsultant.vue'
import SectionDesignDetails from './SectionDesignDetails/SectionDesignDetails.vue'
import SectionFamily from './SectionFamily/SectionFamily.vue'
import SectionFeatures from './SectionFeatures/SectionFeatures.vue'
import SectionSmart from './SectionSmart/SectionSmart.vue'
</script>

<template>
  <HeaderBar id="g6" name="小鹏G6" price="209900" />
  <CarBanner
    id="g6"
    :title="`小鹏<span class='en'>G6</span`"
    subtitle="超智驾轿跑SUV"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p1-2.12.0.jpg"
  />
  <ShrinkableBanner
    title="科技流动美学"
    subtitle="由科技带来的曲线流动、智能流动、情感流动，塑造广阔的想象空间"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p3-1.jpg"
  />
  <SectionDesignConsultant />
  <SectionFeatures />
  <ColorfulShowcase
    name="G6"
    title="点亮全新色彩，探索不同"
    subtitle="色彩灵感来源富有探索精神的宽广宇宙和自然景观"
    name-icon-url="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/g6-logo.svg"
    :options="carColors"
  />
  <SectionDesignDetails />
  <SectionFamily />
  <Slider :options="insideSlides" style="padding: 12rem 0" />
  <SectionSmart />
</template>