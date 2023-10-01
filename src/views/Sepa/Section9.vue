<script setup lang="ts">
import CardSwiperWithTitleBar from './components/CardSwiperWithTitleBar.vue'

const titles = [
  {
    title: '前后一体式铝压铸技术',
    subtitle: '国内首个且唯一量产技术，车身集成度更高、更稳定，大幅提升操控体验'
  },
  {
    title: 'CIB电池车身一体化，安全舒适兼具',
    subtitle:
      '重心更低，提升车辆综合驾控性能；按照中国、北美、欧洲三大主流市场最高安全标准设计'
  },
  {
    title: '领先的机械素质，优秀的驾控性能',
    subtitle: '兼容多种悬架系统'
  }
]

const options = [
  {
    pictureUrl: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/sepa/p9-1.jpg',
    dataItems: [
      {
        name: '扭转刚度',
        value: 42000,
        unit: 'N·m/deg'
      },
      {
        name: '扭转刚度提升',
        value: 83,
        unit: '%'
      },
      {
        name: '集成零件数',
        value: 161
      },
      {
        name: '车身减重',
        value: 17,
        unit: '%'
      }
    ]
  },
  {
    pictureUrl: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/sepa/p9-2.jpg',
    descriptions: [
      '电池包IP68防水防尘设计\n48小时浸泡无进水',
      '垂直空间节约5%\n让乘坐更舒适',
      '80吨侧碰抗压能力\n电池安全再升级'
    ]
  },
  {
    pictureUrl: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/sepa/p9-3.jpg'
  }
]
</script>

<template>
  <CardSwiperWithTitleBar :options="options" :titles="titles" />
</template>