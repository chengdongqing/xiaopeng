<script setup lang="ts">
import CarBanner from '@/components/CarBanner/CarBanner.vue'
import CardSwiper from '@/components/CardSwiper/CardSwiper.vue'
import ColorfulShowcase from '@/components/ColorfulShowcase/ColorfulShowcase.vue'
import HeaderBar from '@/components/HeaderBar/HeaderBar.vue'
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
import SlideSwiper from '@/components/SlideSwiper/SlideSwiper.vue'
import {
  architectureDetails,
  carColors,
  carFeatures,
  spaceSlides
} from './resources.ts'
import SectionDesignConsultant from './SectionDesignConsultant/SectionDesignConsultant.vue'
import SectionDesignDetails from './SectionDesignDetails/SectionDesignDetails.vue'
import SectionDrivingModes from './SectionDrivingModes/SectionDrivingModes.vue'
import SectionElectricalArchitecture from './SectionElectricalArchitecture/SectionElectricalArchitecture.vue'
import SectionFooter from './SectionFooter/SectionFooter.vue'
import SectionPerformance from './SectionPerformance/SectionPerformance.vue'
import SectionPowerSupply from './SectionPowerSupply/SectionPowerSupply.vue'
import SectionSecurity from './SectionSecurity/SectionSecurity.vue'
import SectionSmart from './SectionSmart/SectionSmart.vue'
</script>

<template>
  <HeaderBar id="g6" name="小鹏G6" price="209900" />

  <CarBanner
    id="g6"
    title="小鹏<span class='en'>G6</span"
    subtitle="超智驾轿跑SUV"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p1-2.12.0.jpg"
  />

  <ShrinkableBanner
    title="科技流动美学"
    subtitle="由科技带来的曲线流动、智能流动、情感流动，塑造广阔的想象空间"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p3-1.jpg"
  />

  <SectionDesignConsultant />

  <CardSwiper
    :options="carFeatures"
    style="background-color: var(--color-background)"
  />

  <ColorfulShowcase
    name="G6"
    title="点亮全新色彩，探索不同"
    subtitle="色彩灵感来源富有探索精神的宽广宇宙和自然景观"
    name-icon-url="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/g6-logo.svg"
    :options="carColors"
  />

  <SectionDesignDetails />

  <ShrinkableBanner
    title="装下一家人的快乐"
    subtitle="2890mm长轴距，带上爱的一切满载出发"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p8-new.jpg"
    static
  />
  <SlideSwiper :options="spaceSlides" />

  <SectionSmart />

  <SectionElectricalArchitecture />

  <SectionPerformance />

  <CardSwiper :options="architectureDetails" />

  <SectionDrivingModes />

  <SectionPowerSupply />

  <SectionSecurity />

  <ShrinkableBanner
    title="SEPA2.0扶摇技术架构 首款战略车型"
    subtitle="中型智能纯电SUV新标杆"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p2.jpg"
    static
  />

  <SectionFooter />
</template>