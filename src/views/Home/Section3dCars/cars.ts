interface CarProps {
  id: string
  name: string
  label?: string
  description: string
  spriteUrl: string
}

const cars: CarProps[] = [
  {
    id: 'g92024',
    name: 'G9',
    label: '2024',
    description: '超智驾豪华纯电SUV',
    spriteUrl:
      'https://s.xiaopeng.com/xp-fe/mainsite/2023/home/rotate/G92024-360.png'
  },
  {
    id: 'p52024',
    name: 'P5',
    label: '2024',
    description: '「真智享」越级轿车',
    spriteUrl:
      'https://s.xiaopeng.com/xp-fe/mainsite/2023/home/rotate/p5-sprite_2024.png'
  },
  {
    id: 'g6',
    name: 'G6',
    description: '超智驾轿跑SUV',
    spriteUrl:
      'https://s.xiaopeng.com/xp-fe/mainsite/2023/home/rotate/g6-sprite.png'
  },
  {
    id: 'p7i',
    name: 'P7i',
    description: '超智能轿跑',
    spriteUrl:
      'https://s.xiaopeng.com/xp-fe/mainsite/2023/home/rotate/P7i-360.png'
  },
  {
    id: 'g9',
    name: 'G9',
    description: '超快充全智能SUV',
    spriteUrl:
      'https://s.xiaopeng.com/xp-fe/mainsite/2023/home/rotate/G9-360.png'
  },
  {
    id: 'p7',
    name: 'P7',
    description: '超长续航 智能轿跑',
    spriteUrl:
      'https://s.xiaopeng.com/xp-fe/mainsite/2023/home/rotate/P7-360.png'
  },
  {
    id: 'p5',
    name: 'P5',
    description: '百变舒适 智能家轿',
    spriteUrl:
      'https://s.xiaopeng.com/xp-fe/mainsite/2023/home/rotate/P5-360.png'
  },
  {
    id: 'g3i',
    name: 'G3i',
    description: '智·潮都市SUV',
    spriteUrl:
      'https://s.xiaopeng.com/xp-fe/mainsite/2023/home/rotate/G3i-360.png'
  }
]

export default cars
