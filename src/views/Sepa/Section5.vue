<script setup lang="ts">
import CardSwiperWithTitleBar from './components/CardSwiperWithTitleBar.vue'

const titles = [
  {
    title:
      '充电<span class="en">5min</span>，最大续航<span class="en">200km+</span><sup>1</sup>',
    subtitle: '全域800V高压，标配3C电芯兼容4C电芯'
  },
  {
    title: '续航里程眼见为“实”',
    subtitle: '全新800V XPower电驱'
  },
  {
    title: '给用户更多静谧空间',
    subtitle: '全新800V XPower电驱'
  },
  {
    title: '无惧冷暖，全温域高效保障续航及充电能力',
    subtitle: 'X-HP智能热管理系统'
  }
]

const options = [
  {
    description: '相较400V平台充电功率最大可提升80%',
    pictureUrl: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/sepa/p5-1.jpg'
  },
  {
    description: '电驱系统综合效率92%；综合效率每提升1%，续航里程可提升2%',
    pictureUrl: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/sepa/p5-2.jpg'
  },
  {
    description: '高度集成，更多空间；高效静谧，更多安静',
    pictureUrl: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/sepa/p5-3.jpg'
  },
  {
    pictureUrl: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/sepa/p5-4.jpg',
    dataItems: [
      {
        name: '冬季续航提升',
        value: 15,
        unit: '%'
      },
      {
        name: '充电效率提升',
        value: 90,
        unit: '%'
      },
      {
        name: '电池散热能力提升',
        value: 100,
        unit: '%'
      }
    ]
  }
]
</script>

<template>
  <CardSwiperWithTitleBar :options="options" :titles="titles" />
</template>