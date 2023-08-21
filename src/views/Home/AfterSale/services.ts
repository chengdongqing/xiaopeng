interface ServiceProps {
  name: string
  description: string
  remark?: string
  pictureUrl: string
}

const services: ServiceProps[] = [
  {
    name: '超长无忧质保',
    description:
      '最高5年/12万公里整车质保，8年/16万公里三电质保，可选超值终身质保产品',
    remark: '不同车型存在差异',
    pictureUrl: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/home/shouhou1.jpg'
  },
  {
    name: '终身无忧救援',
    description: '7*24H全天守候，无忧救援随时待命，让您安心出行',
    pictureUrl: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/home/shouhou2.jpg'
  },
  {
    name: '智能服务守护',
    description: '7*24H智能在线诊断、智能故障预警，守护车辆健康',
    pictureUrl: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/home/shouhou3.jpg'
  }
]

export default services
