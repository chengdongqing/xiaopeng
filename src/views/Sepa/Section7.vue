<script setup lang="ts">
import WaterfallFlow from '@/components/WaterfallFlow/WaterfallFlow.vue'

const options = [
  {
    note: 'X-EEA电子电气架构',
    title: '智能体验全速提升',
    src: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/sepa/p7-1.jpg',
    descriptions: [
      {
        title: '高性能',
        description: '中央超算+域控制，通信速度达1,000Mbps'
      },
      {
        title: '高安全',
        description: '智能平台与整车控制平台分区，金融级别信息安全'
      },
      {
        title: '端云一体',
        description: '数据接口标准化，数据信息链接产研售后全链条'
      }
    ]
  },
  {
    note: 'XNet国内唯一量产BEV感知',
    title: '重感知 轻地图，\n让你瞬间GET“上帝视角”',
    src: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/sepa/p7-2.jpg',
    descriptions: [
      {
        description:
          '多相机多帧数\n超强环境感知能力实时生成“高精地图”\n庞大的数据采集、标注、训练部署'
      }
    ]
  },
  {
    note: 'XNGP智能辅助驾驶系统',
    title: '无人驾驶前智能辅助驾驶的终极形态',
    src: 'https://vd.xiaopeng.com/xp-fe/mainsite/2023/sepa/p7-3.mp4',
    descriptions: [
      {
        description:
          '2023年年内，实现高速场景每千公里接管次数小于1次\n2025年年内，实现城市场景每百公里接管次数小于1次'
      }
    ]
  },
  {
    note: 'Xmart OS车载智能系统',
    title: '以“GPT”般的大脑，\n打造更“类人”的超感知座舱体验',
    src: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/sepa/p7-4.jpg',
    descriptions: [
      {
        title: '智能语音',
        description: '更便利的语音交互'
      },
      {
        title: '智能场景',
        description: '更自由的场景控制'
      },
      {
        title: '人机共驾',
        description: '更贴心的驾驶辅助'
      }
    ]
  }
]
</script>

<template>
  <WaterfallFlow :options="options" />
</template>