<script setup lang="ts">
import EnduranceBottomBar from '@/components/EnduranceBottomBar/EnduranceBottomBar.vue'
import NameDescriptionGroup from '@/components/NameDescriptionGroup/NameDescriptionGroup.vue'
import NameValueGroup from '@/components/NameValueGroup/NameValueGroup.vue'
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
</script>

<template>
  <div class="p1">
    <ShrinkableBanner
      title="彻底告别里程焦虑"
      subtitle="超低能耗，续航更真实，远行无忧"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p15-1.jpg"
    />
    <EnduranceBottomBar
      id="g6"
      name="G6"
      :options="[
        {
          name: 'CLTC综合续航最高',
          value: 755,
          unit: 'km'
        },
        {
          name: '百公里综合工况电耗',
          value: 13.2,
          unit: 'kWh/100km'
        }
      ]"
    />
  </div>

  <div class="p2">
    <TitleBar
      title="全域800V高压SiC碳化硅平台"
      subtitle="国内首个量产，全系标配3C电芯"
    />
    <div class="main">
      <video
        src="https://vd.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p16-1.mp4"
        autoplay
        muted
        loop
      />
      <NameValueGroup
        :options="[
          {
            name: '充电10min续航增加<sup>8</sup>',
            value: 300,
            unit: 'km'
          },
          {
            name: '快充峰值功率<sup>1</sup>',
            value: 280,
            unit: 'kW'
          },
          {
            name: '对比400V平台国标桩充电速度提升<sup>1</sup>',
            value: 1,
            unit: '倍'
          }
        ]"
        class="content-wrapper"
      />
    </div>
    <TitleBar title="X-HP3.0热管理系统" subtitle="智能分配，高效节能" />
    <div class="main">
      <img
        src="https://vd.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p14-new.jpg"
        alt=""
      />
      <NameDescriptionGroup
        :options="[
          {
            name: '全系标配热泵空调',
            description: '冬季续航提升15%<sup>1</sup>'
          },
          {
            name: '智能安全热管控',
            description: '实现-30°C~55°C超宽使用温度范围'
          }
        ]"
        class="content-wrapper"
      />
    </div>
  </div>
</template>

<style scoped>
.p2 {
  padding-bottom: 12rem;

  .main {
    width: 94rem;
    margin: auto;

    :is(video),
    :is(img) {
      width: 100%;
      border-radius: 0.4rem;
      object-fit: cover;
    }

    .content-wrapper {
      width: 73.6rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 6.4rem;
    }
  }
}
</style>