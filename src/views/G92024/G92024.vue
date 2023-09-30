<script setup lang="ts">
import CarBanner from '@/components/CarBanner/CarBanner.vue'
import CardSwiper from '@/components/CardSwiper/CardSwiper.vue'
import ColorfulShowcase from '@/components/ColorfulShowcase/ColorfulShowcase.vue'
import FullSceneVoiceV2 from '@/components/FullSceneVoiceV2/FullSceneVoiceV2.vue'
import HeaderBar from '@/components/HeaderBar/HeaderBar.vue'
import NameDescriptionGroup from '@/components/NameDescriptionGroup/NameDescriptionGroup.vue'
import NameValueGroup from '@/components/NameValueGroup/NameValueGroup.vue'
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
import SlideSwiper from '@/components/SlideSwiper/SlideSwiper.vue'
import TabsSwiper from '@/components/TabsSwiper/TabsSwiper.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import WaterfallFlow from '@/components/WaterfallFlow/WaterfallFlow.vue'
import SectionCharging from '@/views/G92024/SectionCharging/SectionCharging.vue'
import SectionDrivingModes from '@/views/G92024/SectionDrivingModes/SectionDrivingModes.vue'
import SectionFooter from '@/views/G92024/SectionFooter/SectionFooter.vue'
import SectionSecurityConfigurations from '@/views/G92024/SectionSecurityConfigurations/SectionSecurityConfigurations.vue'
import {
  options1,
  options10,
  options11,
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

  <p>
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
  </p>

  <SlideSwiper :options="options5" />

  <p>
    <ShrinkableBanner
      static
      title="言语之间，前后安排妥当"
      src="https://vd.xiaopeng.com/xp-fe/mainsite/2023/g92024/v2/Gu72d34fs245/p8-1.mp4"
      style="height: 132.6rem; min-height: 69vw"
    />
    <FullSceneVoiceV2 :options="options6" />
  </p>

  <SectionCharging />

  <WaterfallFlow
    :options="[
      {
        title: '不止充电快\n电耗低，续航实\n长途行驶不再焦虑',
        description:
          '采用第三代半导体SiC，相对上一代硅半导体IGBT，各高压部件、电驱部件的能耗大幅降低，长途行驶无压力',
        src: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/g92024/v2/Gu72d34fs245/p10-1.jpg'
      }
    ]"
    default-reverse
    style="padding: 2rem 0 4.4rem 0"
  />

  <p>
    <ShrinkableBanner
      title="任世界喧嚣，此处安放自我"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g92024/v2/Gu72d34fs245/p11-1.jpg"
    />
    <NameDescriptionGroup
      :options="[
        {
          name: '2998mm超长轴距大空间',
          description: '广阔空间随心徜徉'
        },
        {
          name: '270°环抱式柔软皮质包覆',
          description: '亲肤触感温润柔软'
        }
      ]"
      style="
        width: 69rem;
        position: absolute;
        left: 50%;
        bottom: 6.4rem;
        transform: translateX(-50%);
      "
    />
  </p>

  <CardSwiper
    :options="options7"
    style="background-color: var(--color-background)"
  />

  <SlideSwiper :options="options8" />

  <p>
    <TitleBar
      title="大开想象，尽释生活灵感"
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
    <TabsSwiper :options="options9" />
  </p>

  <p>
    <ShrinkableBanner
      title="驰骋纵横，天地尽在于心"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g92024/v2/Gu72d34fs245/p15-1.jpg"
    />
    <NameValueGroup
      :options="[
        {
          name: '百公里加速<sup>8</sup>',
          value: 3.9,
          unit: 'S'
        },
        {
          name: '整车最大功率',
          value: 405,
          unit: 'kW'
        },
        {
          name: '峰值扭矩',
          value: 717,
          unit: 'N·m'
        }
      ]"
      style="
        width: 61.6rem;
        position: absolute;
        left: 50%;
        bottom: 6.4rem;
        transform: translateX(-50%);
      "
    />
  </p>

  <p style="text-align: center">
    <TitleBar
      title="智能双腔空气悬架"
      subtitle="德国进口智能双腔空气弹簧搭配智能可变阻尼减震器，德系顶尖工程团队精细底盘调校，小鹏全栈自研智能域控软硬件<br>山路弯道，自信姿态稳定，起伏不平，始终平稳从容"
    />
    <video
      src="https://vd.xiaopeng.com/xp-fe/mainsite/2023/g92024/v2/Gu72d34fs245/p16-1.mp4"
      style="width: 132rem; height: 74.2rem"
      autoplay
      muted
      loop
    />
  </p>

  <WaterfallFlow :options="options10" />

  <SectionDrivingModes />

  <p>
    <TitleBar
      title="坐拥安稳，全方位应对自如"
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
    <TabsSwiper :options="options11" />
  </p>

  <SectionSecurityConfigurations />

  <SectionFooter />
</template>

<style scoped></style>