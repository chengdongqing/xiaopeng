<script setup lang="ts">
import CarBanner from '@/components/CarBanner/CarBanner.vue'
import HeaderBar from '@/components/HeaderBar/HeaderBar.vue'
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
import SectionColorful from './SectionColorful/SectionColorful.vue'
import SectionDesignConsultant from './SectionDesignConsultant/SectionDesignConsultant.vue'
import SectionFeatures from './SectionFeatures/SectionFeatures.vue'
</script>

<template>
  <HeaderBar id="g6" name="小鹏G6" price="209900" />
  <CarBanner
    id="g6"
    :title="`小鹏<span class='en'>G6</span`"
    subtitle="超智驾轿跑SUV"
    background-url="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p1-2.12.0.jpg"
  />
  <ShrinkableBanner
    title="科技流动美学"
    subtitle="由科技带来的曲线流动、智能流动、情感流动，塑造广阔的想象空间"
    background-url="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p3-1.jpg"
  />
  <SectionDesignConsultant />
  <SectionFeatures />
  <SectionColorful />
</template>