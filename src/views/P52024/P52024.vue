<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import CarBanner from '@/components/CarBanner/CarBanner.vue'
import CardSwiper from '@/components/CardSwiper/CardSwiper.vue'
import ColorfulShowcase from '@/components/ColorfulShowcase/ColorfulShowcase.vue'
import EnduranceBottomBar from '@/components/EnduranceBottomBar/EnduranceBottomBar.vue'
import HeaderBar from '@/components/HeaderBar/HeaderBar.vue'
import ImageCardsRow from '@/components/ImageCardsRow/ImageCardsRow.vue'
import NameDescriptionGroup from '@/components/NameDescriptionGroup/NameDescriptionGroup.vue'
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
import SlideSwiper from '@/components/SlideSwiper/SlideSwiper.vue'
import TabsSwiper from '@/components/TabsSwiper/TabsSwiper.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import WaterfallFlow from '@/components/WaterfallFlow/WaterfallFlow.vue'
import SectionFooter from '@/views/P52024/SectionFooter/SectionFooter.vue'
import SectionSecurityConfigurations from '@/views/P52024/SectionSecurityConfigurations/SectionSecurityConfigurations.vue'
import {
  options1,
  options2,
  options3,
  options4,
  options5,
  options6
} from './resources.ts'
</script>

<template>
  <HeaderBar id="p52024" name="2024款P5" price="156900" />

  <CarBanner
    id="p52024"
    title="<span class='en'>2024</span>款小鹏<span class='en'>P5</span>"
    subtitle="「真智享」越级轿车"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p1.jpg"
  />

  <ShrinkableBanner
    title="全新造型"
    subtitle="这一刻，活力尽现"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p2.jpg"
  />

  <ImageCardsRow
    :options="[
      {
        title: 'AERO FACE流线悦动前脸造型',
        subtitle: '标志性“X元素”融入一体化大灯设计',
        src: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p3-1.jpg'
      },
      {
        title: '0.218Cd超低风阻<sup>1</sup>',
        subtitle: '动感姿态蓄势待发',
        src: 'https://vd.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p3-2.mp4'
      }
    ]"
  />

  <ColorfulShowcase
    id="p52024"
    title="焕新配色，为生活注入灵动色彩"
    subtitle="新月银/星际绿搭配黑双色车身，灵感来自宇宙星系，充满好奇与向往"
    name-icon-url="https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/color/p5-logo.svg"
    name="P5"
    :options="options1"
    style="background-color: var(--color-background)"
  />

  <ShrinkableBanner
    title="星轨环抱式座舱"
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p5.jpg"
    static
  />

  <CardSwiper :options="options2" />

  <div>
    <ShrinkableBanner
      title="越级空间"
      subtitle="这一刻，舒享宽阔"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p7.jpg"
    />
    <NameDescriptionGroup
      :options="[
        {
          name: '4860mm',
          description: '超长车身'
        },
        {
          name: '2768mm',
          description: '长轴距'
        }
      ]"
      style="
        width: 35rem;
        position: absolute;
        left: 50%;
        bottom: 6.4rem;
        transform: translateX(-50%);
      "
    />
  </div>

  <SlideSwiper :options="options3" />

  <TabsSwiper :options="options4" />

  <div>
    <ShrinkableBanner
      title="超强智能"
      subtitle="这一刻，自在随心"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p10.jpg"
    />
    <div
      style="
        position: absolute;
        bottom: 8rem;
        left: 50%;
        transform: translateX(-50%);
      "
    >
      <Button color="#fff" arrow arrow-color="#fff">预约试驾</Button>
    </div>
  </div>

  <div style="text-align: center; margin-bottom: 11.5rem">
    <TitleBar
      title="360°视界，环境精准感知<sup>2</sup>"
      subtitle="毫米波雷达×5｜感知摄像头×12｜超声波雷达×12｜车内摄像头×1｜Xavier芯片 算力30TOPS"
    />
    <img
      alt=""
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p11.jpg"
      style="width: 99rem; height: 56.4rem; border-radius: 0.4rem"
    />
  </div>

  <div>
    <TitleBar
      title="多场景智能辅助驾驶"
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
    <TabsSwiper :options="options5" />
  </div>

  <ImageCardsRow
    :options="[
      {
        title: 'SR环境模拟显示',
        subtitle: '12.3英寸高清全液晶智能仪表 | 15.6英寸悬浮全触控屏',
        src: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p13-1.jpg'
      },
      {
        title: '车道级导航',
        subtitle: '模拟三维现实道路，实现车辆实时车道级定位',
        src: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p13-2.jpg'
      }
    ]"
  />

  <div style="background-color: var(--color-background)">
    <TitleBar title="智能泊车，让泊车更轻松" />
    <CardSwiper :options="options6" style="padding-top: 0" />
  </div>

  <div>
    <TitleBar
      title="Xmart OS 3.6.0"
      subtitle="智能化带来越级用车体验"
      style="padding-bottom: 0"
    />
    <ImageCardsRow
      :options="[
        {
          title: '高通骁龙SA8155P旗舰级数字座舱平台',
          subtitle: '更便捷、更愉悦的座舱体验',
          src: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p15-1.jpg'
        },
        {
          title: '全场景语音',
          subtitle: '可见即可说｜语义打断｜多轮对话｜双音区识别',
          src: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p15-2.jpg'
        }
      ]"
      style="padding-top: 6.4rem; padding-bottom: 14.4rem"
    />
  </div>

  <ShrinkableBanner
    src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p16-1.jpg"
    video-url="https://vd.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p16-1.mp4"
    static
  />

  <div>
    <ShrinkableBanner
      title="全程护航"
      subtitle="这一刻 安心出发"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p17-1.jpg"
    />
    <div
      style="
        position: absolute;
        bottom: 8rem;
        left: 50%;
        transform: translateX(-50%);
      "
    >
      <Button color="#fff" arrow arrow-color="#fff">预约试驾</Button>
    </div>
  </div>

  <WaterfallFlow
    :options="[
      {
        title: '智能热管理系统（含集成热泵）<sup>1</sup>',
        description:
          '采用第三代半导体SiC，相对上一代硅半导体IGBT，各高压部件、电驱部件的能耗大幅降低，长途行驶无压力',
        src: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p18-2.jpg'
      }
    ]"
    style="padding: 6rem 0"
  />

  <div>
    <ShrinkableBanner
      title="超充能力<sup>3</sup>"
      subtitle="30%-80%充电时间最快30分钟，5%-80%充电时间最快43分钟"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p19.jpg"
      static
    />
    <EnduranceBottomBar id="p52024" name="2024款P5" />
  </div>

  <div style="padding-bottom: 12rem; text-align: center">
    <TitleBar
      title="整车OTA升级"
      subtitle="支持全生命周期整车OTA，带来持续焕新的进化体验"
    />
    <img
      alt=""
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p20-1.jpg"
      style="width: 99rem; height: 55.6rem; border-radius: 0.4rem"
    />
  </div>

  <div style="background-color: var(--color-background)">
    <TitleBar title="为你的安全，全力以赴" />
    <SlideSwiper
      :options="[
        {
          title: '主被动安全',
          description: '14项主动安全功能、15项被动安全功能',
          src: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p21-1.jpg'
        },
        {
          title: '电池安全',
          description:
            '电池包IP68级超强防水｜电池包内部干湿分离｜智能安全热管控',
          src: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p21-2.jpg'
        }
      ]"
      style="padding-top: 0"
    />
  </div>

  <ImageCardsRow
    :options="[
      {
        title: 'JD POWER 2023',
        subtitle: '中国新能源汽车新车质量研究，中型纯电动轿车榜首<sup>4</sup>',
        src: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p22-1.jpg'
      },
      {
        title: 'C-AHI',
        subtitle: '中国汽车健康指数，四项测试全五星评价<sup>4</sup>',
        src: 'https://vd.xiaopeng.com/xp-fe/mainsite/2023/p52024/v2/k7zhyd353nB2/p22-2.jpg'
      }
    ]"
  />

  <SectionSecurityConfigurations />

  <SectionFooter />
</template>