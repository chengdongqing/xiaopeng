<script setup lang="ts">
import NameDescriptionGroup from '@/components/NameDescriptionGroup/NameDescriptionGroup.vue'
import ShrinkableBanner from '@/components/ShrinkableBanner/ShrinkableBanner.vue'
import SlideSwiper from '@/components/SlideSwiper/SlideSwiper.vue'
import TabsSwiper from '@/components/TabsSwiper/TabsSwiper.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import { options2, options3, options4 } from './resources.ts'
</script>

<template>
  <div class="p1">
    <ShrinkableBanner
      title="给你最坚实的守护"
      subtitle="严苛安全设计标准，全面主被动安全，带来稳稳的安心感"
      src="https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p14-new-1.jpg"
    />
    <div class="content-wrapper">
      <NameDescriptionGroup
        :options="[
          {
            name: 'C-NCAP&E-NCAP',
            description: '中欧双五星评价体系标准<sup>9</sup>'
          }
        ]"
      />
      <NameDescriptionGroup
        :options="[
          {
            name: 'C-IASI',
            description: '中保研安全标准<sup>9</sup>'
          }
        ]"
        style="margin-left: 7.2rem"
      />
      <div class="divider" />
      <NameDescriptionGroup
        :options="[
          {
            name: '51%',
            description: '车身铝材占比'
          }
        ]"
      />
    </div>
  </div>

  <div class="p2">
    <TabsSwiper :options="options2" />
  </div>

  <div class="p3">
    <SlideSwiper :options="options3" />
  </div>

  <div class="p4">
    <TitleBar title="<span class='en'>13</span>项主动安全配置" />
    <div class="content-wrapper">
      <div v-for="item in options4" :key="item.title">
        <div class="title">{{ item.title }}</div>
        <div class="children">
          <div class="item" v-for="name in item.children" :key="name">
            {{ name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.p1 {
  .content-wrapper {
    position: absolute;
    bottom: 6.4rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;

    .divider {
      width: 0.1rem;
      height: 5.6rem;
      margin: 0 12rem;
      background-color: hsla(0, 0%, 100%, 0.35);
    }
  }
}

.p3 {
  padding: 12rem 0;
}

.p4 {
  padding-bottom: 12rem;

  .content-wrapper {
    width: 132rem;
    margin: auto;
    border-radius: 0.4rem;
    padding: 8rem 16rem 6.4rem;
    background-color: var(--color-background);
    display: flex;
    justify-content: space-between;

    .title {
      font-size: 2.4rem;
      letter-spacing: 0.4rem;
      color: rgba(0, 0, 0, 0.9);
      margin-bottom: 3.4rem;
    }

    .item {
      font-size: 1.4rem;
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 1.6rem;
    }
  }
}
</style>