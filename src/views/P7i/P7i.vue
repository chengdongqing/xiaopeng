<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import CarBanner from '@/components/CarBanner/CarBanner.vue'
import CardSwiper from '@/components/CardSwiper/CardSwiper.vue'
import ColorfulShowcase from '@/components/ColorfulShowcase/ColorfulShowcase.vue'
import EnduranceBottomBar from '@/components/EnduranceBottomBar/EnduranceBottomBar.vue'
import HeaderBar from '@/components/HeaderBar/HeaderBar.vue'
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
import SlideSwiper from '@/components/SlideSwiper/SlideSwiper.vue'
import TabsSwiper from '@/components/TabsSwiper/TabsSwiper.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import WaterfallFlow from '@/components/WaterfallFlow/WaterfallFlow.vue'
import SectionCabin from '@/views/P7i/SectionCabin/SectionCabin.vue'
import SectionChassis from '@/views/P7i/SectionChassis/SectionChassis.vue'
import SectionDrivingModes from '@/views/P7i/SectionDrivingModes/SectionDrivingModes.vue'
import SectionFooter from '@/views/P7i/SectionFooter/SectionFooter.vue'
import SectionSecurityConfigurations from '@/views/P7i/SectionSecurityConfigurations/SectionSecurityConfigurations.vue'
import SectionSmartTravel from '@/views/P7i/SectionSmartTravel/SectionSmartTravel.vue'
import SectionVoice from '@/views/P7i/SectionVoice/SectionVoice.vue'
import SectionXHP from '@/views/P7i/SectionXHP/SectionXHP.vue'
import SectionXmart from '@/views/P7i/SectionXmart/SectionXmart.vue'
import {
  options1,
  options10,
  options2,
  options3,
  options4,
  options5,
  options6,
  options7,
  options8,
  options9
} from './resources.ts'
</script>

<template>
  <HeaderBar id="p7i" name="小鹏P7i" price="249900" />

  <CarBanner
    id="p7i"
    title="小鹏全新P7i"
    subtitle="超智能轿跑"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p7i/p1.jpg"
  />

  <ShrinkableBanner
    title="经典美学，再进阶"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p7i/p2.jpg"
  />

  <div style="background-color: var(--color-background); padding-top: 4.8rem">
    <CardSwiper :options="options1" />
  </div>

  <ColorfulShowcase
    id="p7i"
    name="P7i"
    title="星际绿/新月银外观新色"
    subtitle="灵感来自浩瀚宇宙，凸显先锋探索品质"
    name-icon-url="https://s.xiaopeng.com/xp-fe/mainsite/2023/p7i/p7i-logo.svg"
    :options="options2"
  />

  <SectionChassis />

  <ShrinkableBanner
    title="全新内饰，尽释艺术与科技"
    subtitle="气宇灰内饰，简约科技，包容一切想象空间"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p7i/p6.jpg"
  />

  <SlideSwiper :options="options3" />

  <SectionCabin />

  <SlideSwiper :options="options4" />

  <ShrinkableBanner
    title="超级智能，跨代引领"
    subtitle="领先，让智能辅助驾驶成为日常"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p7i/p10.jpg"
  >
    <template v-slot:more>
      <Button color="#fff" arrow arrow-color="#fff">预约试驾</Button>
    </template>
  </ShrinkableBanner>

  <div>
    <TitleBar title="<span class='en'>XNGP</span>智能辅助驾驶系统" />
    <SlideSwiper :options="options5" style="padding-top: 0" />
  </div>

  <div style="background-color: var(--color-background)">
    <TitleBar title="端到端全场景智能辅助驾驶" />
    <CardSwiper :options="options6" style="padding-top: 0" />
  </div>

  <SectionXmart />

  <SectionVoice />

  <TabsSwiper :options="options7">
    <template v-slot:title>
      <TitleBar
        color="#fff"
        title="<span class='en'>“Live”</span>搬上车，享受更沉浸"
      />
    </template>
  </TabsSwiper>

  <SectionSmartTravel />

  <ShrinkableBanner
    title="顶级驾控，智能驾趣"
    subtitle="百公里加速<sup>3</sup>快至3.9s，峰值扭矩757N∙m，百公里刹停<sup>3</sup>距离33.3m"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p7i/p17.jpg"
  />

  <TabsSwiper :options="options8" />

  <WaterfallFlow :options="options9" />

  <ShrinkableBanner
    title="智能四驱扭矩分配系统"
    subtitle="日常通勤，全时后驱；复杂路况，智能四驱"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p7i/p20.jpg"
    static
  />

  <SectionDrivingModes />

  <SectionXHP />

  <div>
    <ShrinkableBanner
      title="极速补能，全面升级"
      subtitle="最高CLTC 702KM续航，无忧远行<sup>6</sup>"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p7i/p23.jpg"
    />
    <EnduranceBottomBar
      id="p7i"
      name="P7i"
      :options="[
        {
          name: '充电10-80%<sup>7</sup>',
          value: 29,
          unit: '分钟'
        },
        {
          name: '最快10分钟充电<sup>8</sup>',
          value: 240,
          unit: 'km'
        }
      ]"
    />
  </div>

  <TabsSwiper :options="options10">
    <template v-slot:title>
      <TitleBar color="#fff" title="领先安全，自由驾趣" />
    </template>
  </TabsSwiper>

  <SectionSecurityConfigurations />

  <SectionFooter />
</template>