interface FeatureProps {
  title: string
  subtitle: string
  pictureUrl?: string
  videoUrl?: string
}

const features: FeatureProps[] = [
  {
    title: 'Robot Face情感化',
    subtitle:
      '灯光亮起，如同温暖双眸，感应到你的靠近；微笑的眼神流转，更似人脸映射情绪',
    pictureUrl: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p5-2-1.jpg'
  },
  {
    title: '无边框车门',
    subtitle: '车身流线更紧致，无门框视野更开阔，缩小A柱附近的盲区',
    pictureUrl: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p5-3-1.jpg'
  },
  {
    title: '星河光剑LED尾灯',
    subtitle: '后尾灯采用了厚壁式组合尾灯设计，夜间行车极具辨识度',
    pictureUrl: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p5-4-1.jpg'
  },
  {
    title: '自适应升降电尾翼',
    subtitle:
      '自动感应，随速升降，个性彰显；空气动力学的极致较真，优化整车风阻系数',
    pictureUrl: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p5-6.jpg',
    videoUrl: 'https://vd.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p5-6-1.mp4'
  },
  {
    title: '超低风阻脉冲曲率',
    subtitle: '流畅车身曲线，一气呵成；17处低风阻设计，0.248Cd超低风阻',
    pictureUrl: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p5-1.jpg',
    videoUrl: 'https://vd.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p5-1-1.mp4'
  },
  {
    title: '幻视悬浮车顶',
    subtitle:
      '悬浮车顶制造的视错觉，宛如空间魔术师，实现轿跑身姿与后排头部空间兼得',
    pictureUrl: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/g6/v1_5/p5-5-1.jpg'
  }
]

export default features
