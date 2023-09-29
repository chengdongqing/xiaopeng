interface CarProps {
  id: string
  name: string
  title: string
  pictureUrl?: string
  videoUrl?: string
}

const cars: CarProps[] = [
  {
    id: 'g92024',
    name: '2024款G9',
    title:
      '<span class="en">2024</span>款小鹏<span class="en">G9</span><br>超智驾豪华纯电<span class="en">SUV</span> 领航登场',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2023/09-18/pic_20230918175320_99658.jpg'
  },
  {
    id: 'p52024',
    name: '2024款P5',
    title:
      '<span class="en">2024</span>款小鹏<span class="en">P5</span><br>「真智享」越级轿车',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2023/09-25/pic_20230925172656_24673.jpg'
  },
  {
    id: 'g6',
    name: 'G6',
    title:
      '小鹏<span class="en">G6 </span>超智驾轿跑<span class="en">SUV</span><br />成熟登场',
    videoUrl:
      'https://xps02.xiaopeng.com/cms/material/video/2023/06-29/video_20230629100416_00416.mp4'
  },
  {
    id: 'p7i',
    name: 'P7i',
    title: '全新<span class="en">P7i</span><br />超智能轿跑',
    videoUrl:
      'https://xps02.xiaopeng.com/cms/material/video/2023/04-07/video_20230407174751_66984.mp4'
  },
  {
    id: 'g9',
    name: 'G9',
    title:
      '小鹏<span class="en">G9</span><br />超快充全智能<span class="en">SUV</span>',
    videoUrl:
      'https://xps02.xiaopeng.com/cms/material/video/2023/01-06/video_20230106135720_85074.mp4'
  },
  {
    id: 'p5',
    name: 'P5',
    title: '小鹏<span class="en">P5</span><br />百变舒适 智能家轿',
    videoUrl:
      'https://xps02.xiaopeng.com/cms/material/video/2023/04-07/video_20230407174808_16134.mp4'
  }
]

export default cars
