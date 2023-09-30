import { ConfigurationProps } from '../index'

export const name = '2024款P5'

export const configs: ConfigurationProps[] = [
  {
    modelName: '500',
    children: [
      {
        subModelName: '500 Plus',
        price: 156900,
        children: [
          {
            title: '基础信息',
            children: [
              {
                children: [
                  {
                    name: '长*宽*高（mm）',
                    value: '4860mm/1840mm/1520mm'
                  },
                  { name: '轴距', value: '2768mm' },
                  { name: '座位数', value: '5座' },
                  { name: '后备箱容积', value: '450L' },
                  { name: '最小转弯直径', value: '11.2m' }
                ]
              }
            ]
          },
          {
            title: '综合性能',
            children: [
              {
                children: [
                  { name: '驱动形式', value: '前置前驱' },
                  { name: '电机类型', value: '永磁同步电机' },
                  { name: '电机最大功率/最大扭矩', value: '155kW/310N·m' },
                  { name: '最高车速', value: '170km/h' },
                  { name: '极低温电池加热装置', value: true },
                  { name: '0-100km/h加速时间', value: '7.5s' },
                  {
                    name: '悬架形式',
                    value: '前麦弗逊式独立悬架/后扭力梁式半独立悬架'
                  },
                  { name: '制动系统', value: '前通风盘式刹车/后实心盘式刹车' },
                  { name: '制动能量回收模式', value: '高' },
                  { name: '风阻系数', value: '≥0.218' }
                ]
              },
              {
                title: '续航里程',
                children: [
                  {
                    name: 'CLTC综合工况续航里程<sup>1</sup>',
                    value: '500km'
                  }
                ]
              },
              {
                title: '充放电',
                children: [
                  {
                    name: '直流快充时间（30%充至80%）<sup>2</sup>',
                    value: '≥ 30min（最快30min）'
                  },
                  { name: '预约充电', value: true },
                  { name: '目标SOC设置功能', value: true },
                  {
                    name: 'V2L功能（220V电源输出 3.3kW）<sup>3</sup>',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '超享智能',
            children: [
              {
                title: '智能辅助驾驶硬件',
                children: [
                  { name: '高精毫米波雷达', value: false },
                  { name: '超声波传感器', value: '4个' },
                  { name: '环视摄像头', value: '1个' },
                  { name: '高感知摄像头', value: false },
                  { name: '高级驾驶辅助地图', value: false },
                  {
                    name: '智能辅助驾驶系统处理器',
                    value: false
                  },
                  { name: '亚米级高精定位单元', value: false }
                ]
              },
              {
                title: '智能辅助驾驶系统',
                children: [
                  { name: 'SR环境模拟显示', value: false },
                  { name: '高速NGP智能导航辅助驾驶', value: false },
                  { name: 'ACC自适应巡航', value: false },
                  { name: 'LCC车道居中辅助', value: false },
                  { name: 'ALC智能辅助变道', value: false },
                  { name: '直线召唤', value: false },
                  { name: 'VPA停车场记忆泊车', value: false },
                  { name: 'ERPA增强版遥控泊车', value: false },
                  { name: 'AEP智能泊出辅助', value: false },
                  { name: 'EAP超级智能泊车辅助', value: false },
                  { name: 'RPA遥控泊车', value: false },
                  { name: '360°全景可视泊车辅助系统', value: false },
                  { name: '透明底盘', value: false },
                  { name: 'CCS定速巡航', value: true },
                  { name: '后倒车影像带泊车辅助线', value: true }
                ]
              },
              {
                title: '智能座舱硬件',
                children: [
                  {
                    name: '第三代高通骁龙旗舰级数字座舱平台（SA8155P芯片）',
                    value: true
                  },
                  { name: '15.6英寸悬浮全触控屏', value: true },
                  { name: '12.3英寸高清全液晶智能仪表', value: true },
                  { name: '手机App虚拟钥匙（带分享功能）', value: true },
                  {
                    name: '蓝牙数字钥匙无感进入（解锁/启动/闭锁）',
                    value: true
                  },
                  { name: '普通遥控钥匙', value: true },
                  { name: '智能泊车钥匙', value: false }
                ]
              },
              {
                title: 'Xmart OS车载智能系统',
                children: [
                  { name: '全场景语音', value: true },
                  { name: '手机投屏', value: true },
                  { name: '私人定制', value: true },
                  { name: '迎宾模式', value: true },
                  {
                    name: '智能控制模式（冥想模式、等人模式、极速降温等）',
                    value: true
                  },
                  { name: '智能寻车（鸣笛、闪灯、查看车辆位置）', value: true },
                  { name: '智能导航', value: true },
                  { name: '车道级导航', value: false },
                  { name: '手机App远程操控', value: true },
                  { name: '哨兵模式', value: false },
                  { name: 'Wi-Fi / 4G网络连接', value: true },
                  {
                    name: '后排门护板扶手按键（支持语音唤醒/静音/切换音源等功能自定义）',
                    value: true
                  },
                  { name: '大屏亮度智能调节', value: false },
                  { name: '车载游戏', value: true },
                  { name: '车载应用商城', value: true },
                  { name: '小P智能推送服务', value: true },
                  { name: '整车OTA升级服务', value: true },
                  { name: '远程诊断系统', value: true }
                ]
              }
            ]
          },
          {
            title: '智享空间',
            children: [
              {
                title: '舒享装备',
                children: [
                  {
                    name: '双温区独立自动空调系统（带PM2.5净化）',
                    value: true
                  },
                  { name: '热泵空调', value: true },
                  { name: '方向盘四向调节', value: true },
                  { name: 'Nappa真皮多功能方向盘', value: true },
                  { name: '高级皮革座椅', value: true },
                  {
                    name: '主驾驶席座椅6向电动调节（带记忆、支持大屏控制）',
                    value: true
                  },
                  { name: '副驾驶席座椅4向电动调节', value: true },
                  { name: '主/副驾驶席独立式航空睡眠头枕', value: true },
                  { name: '主/副驾驶席座椅加热功能', value: false },
                  { name: '主/副驾驶席座椅通风功能', value: false },
                  { name: '全景天幕电动遮阳帘', value: true },
                  { name: '电动外后视镜带折叠加热记忆', value: true },
                  { name: '手机无线充电', value: true },
                  { name: '四门电动车窗带一键升降和防夹', value: true },
                  { name: '后排中央扶手带杯架', value: true },
                  { name: 'Xpeng高级环绕音响系统（扬声器*6）', value: true },
                  {
                    name: '取电及数据接口',
                    value: '充电USB*2+数据USB*1+12V电源*2'
                  }
                ]
              }
            ]
          },
          {
            title: '设计与主题选装',
            children: [
              {
                title: '外观与内饰设计',
                children: [
                  { name: '光剑3.0 LED前贯穿灯', value: false },
                  { name: '光剑3.0 LED日间行车灯', value: true },
                  { name: '自动感应全LED前大灯', value: true },
                  { name: 'LED后贯穿灯', value: true },
                  { name: 'LED高位刹车灯和后雾灯', value: true },
                  { name: '全景天幕车顶', value: true },
                  { name: '隐藏式电动门把手', value: true },
                  { name: '17英寸五幅星轨轮毂（低风阻）', value: true },
                  { name: '17英寸轮胎（215/55R17 普利司通）', value: true },
                  {
                    name: '18英寸多幅镭射轮毂（配215/50R18 米其林18英寸轮胎）',
                    value: false,
                    optional: 3000
                  },
                  { name: '鲨鱼鳍天线', value: true },
                  { name: '车内顶棚材质', value: '灰色高级织物' },
                  { name: '自动防眩目内后视镜（带USB口）', value: false }
                ]
              },
              {
                title: '外观颜色选装',
                children: [
                  { name: '星湖灰', value: false, optional: true },
                  { name: '暗夜黑', value: false, optional: true },
                  { name: '新月银+酷黑', value: false, optional: 3000 },
                  { name: '星云白+酷黑', value: false, optional: 3000 },
                  { name: '星际绿+酷黑', value: false, optional: 3000 }
                ]
              },
              {
                title: '内饰主题选装',
                children: [
                  { name: '酷夜黑', value: false, optional: true },
                  { name: '轻奢棕', value: false, optional: true },
                  { name: '气宇灰', value: false, optional: true }
                ]
              }
            ]
          },
          {
            title: '安全',
            children: [
              {
                title: '主动安全系统',
                children: [
                  { name: '四向雷达预警', value: false },
                  { name: 'FCW前向碰撞预警', value: false },
                  { name: 'AEB自动紧急制动', value: false },
                  { name: 'TSR交通标志识别', value: false },
                  { name: 'BSD盲区监测预警', value: false },
                  { name: 'DOW车门开启预警', value: false },
                  { name: 'LDW车道偏离预警', value: false },
                  { name: 'LKA车道保持辅助', value: false },
                  { name: 'ELK车道紧急保持辅助', value: false },
                  { name: 'RCW后向碰撞预警', value: false },
                  { name: 'RCTA后方横向来车预警', value: false },
                  { name: 'IHB智能远光灯（自动切换远近光）', value: false },
                  {
                    name: '窄路辅助（低速靠近障碍物自动开启环视影像）',
                    value: false
                  },
                  { name: '后驻车雷达', value: true }
                ]
              },
              {
                title: '被动安全系统',
                children: []
              },
              {
                title: '主驾/副驾安全带（预紧限力式）',
                children: [
                  { name: '后排左/右侧3点式安全带（预紧限力式）', value: true },
                  { name: '后排中间3点式安全带（紧急锁止式）', value: true },
                  { name: '主/副驾驶座安全气囊', value: true },
                  { name: '前排侧气囊', value: true },
                  { name: '前/后排头部气囊（气帘）', value: true },
                  { name: '前排安全带未系提醒', value: true },
                  { name: '后排安全带未系提醒（仅仪表显示）', value: true },
                  { name: 'ESP9.3车身稳定系统', value: true },
                  { name: 'EPB电子驻车制动', value: true },
                  { name: 'AVH自动驻车', value: true },
                  { name: 'HDC陡坡缓降', value: true },
                  { name: 'SCM二次碰撞减缓', value: true },
                  { name: 'TPMS胎压监测及实时显示', value: true },
                  { name: '随车工具包', value: true }
                ]
              }
            ]
          },
          {
            title: '选装包汇总',
            children: [
              {
                title: '选装包①：18英寸多幅镭射轮毂',
                children: [
                  {
                    name: '18英寸多幅镭射轮毂（配215/50R18 米其林静音轮胎）',
                    value: false,
                    optional: 3000
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        subModelName: '500 Pro',
        price: 174900,
        children: [
          {
            title: '基础信息',
            children: [
              {
                children: [
                  {
                    name: '长*宽*高（mm）',
                    value: '4860mm/1840mm/1520mm'
                  },
                  { name: '轴距', value: '2768mm' },
                  { name: '座位数', value: '5座' },
                  { name: '后备箱容积', value: '450L' },
                  { name: '最小转弯直径', value: '11.2m' }
                ]
              }
            ]
          },
          {
            title: '综合性能',
            children: [
              {
                children: [
                  { name: '驱动形式', value: '前置前驱' },
                  { name: '电机类型', value: '永磁同步电机' },
                  { name: '电机最大功率/最大扭矩', value: '155kW/310N·m' },
                  { name: '最高车速', value: '170km/h' },
                  { name: '极低温电池加热装置', value: true },
                  { name: '0-100km/h加速时间', value: '7.5s' },
                  {
                    name: '悬架形式',
                    value: '前麦弗逊式独立悬架/后扭力梁式半独立悬架'
                  },
                  { name: '制动系统', value: '前通风盘式刹车/后实心盘式刹车' },
                  { name: '制动能量回收模式', value: '高' },
                  { name: '风阻系数', value: '≥0.218' }
                ]
              },
              {
                title: '续航里程',
                children: [
                  {
                    name: 'CLTC综合工况续航里程<sup>1</sup>',
                    value: '500km'
                  }
                ]
              },
              {
                title: '充放电',
                children: [
                  {
                    name: '直流快充时间（30%充至80%）<sup>2</sup>',
                    value: '≥ 30min（最快30min）'
                  },
                  { name: '预约充电', value: true },
                  { name: '目标SOC设置功能', value: true },
                  {
                    name: 'V2L功能（220V电源输出 3.3kW）<sup>3</sup>',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '超享智能',
            children: [
              {
                title: '智能辅助驾驶硬件',
                children: [
                  { name: '高精毫米波雷达', value: '5个' },
                  { name: '超声波传感器', value: '12个' },
                  { name: '环视摄像头', value: '4个' },
                  { name: '高感知摄像头', value: '9个' },
                  { name: '高级驾驶辅助地图', value: true },
                  {
                    name: '智能辅助驾驶系统处理器',
                    value: 'Xavier超级计算平台'
                  },
                  { name: '亚米级高精定位单元', value: true }
                ]
              },
              {
                title: '智能辅助驾驶系统',
                children: [
                  { name: 'SR环境模拟显示', value: true },
                  { name: '高速NGP智能导航辅助驾驶', value: true },
                  { name: 'ACC自适应巡航', value: true },
                  { name: 'LCC车道居中辅助', value: true },
                  { name: 'ALC智能辅助变道', value: true },
                  { name: '直线召唤', value: true },
                  { name: 'VPA停车场记忆泊车', value: true },
                  { name: 'ERPA增强版遥控泊车', value: true },
                  { name: 'AEP智能泊出辅助', value: true },
                  { name: 'EAP超级智能泊车辅助', value: true },
                  { name: 'RPA遥控泊车', value: true },
                  { name: '360°全景可视泊车辅助系统', value: true },
                  { name: '透明底盘', value: true },
                  { name: 'CCS定速巡航', value: false },
                  { name: '后倒车影像带泊车辅助线', value: false }
                ]
              },
              {
                title: '智能座舱硬件',
                children: [
                  {
                    name: '第三代高通骁龙旗舰级数字座舱平台（SA8155P芯片）',
                    value: true
                  },
                  { name: '15.6英寸悬浮全触控屏', value: true },
                  { name: '12.3英寸高清全液晶智能仪表', value: true },
                  { name: '手机App虚拟钥匙（带分享功能）', value: true },
                  {
                    name: '蓝牙数字钥匙无感进入（解锁/启动/闭锁）',
                    value: true
                  },
                  { name: '普通遥控钥匙', value: false },
                  { name: '智能泊车钥匙', value: true }
                ]
              },
              {
                title: 'Xmart OS车载智能系统',
                children: [
                  { name: '全场景语音', value: true },
                  { name: '手机投屏', value: true },
                  { name: '私人定制', value: true },
                  { name: '迎宾模式', value: true },
                  {
                    name: '智能控制模式（冥想模式、等人模式、极速降温等）',
                    value: true
                  },
                  { name: '智能寻车（鸣笛、闪灯、查看车辆位置）', value: true },
                  { name: '智能导航', value: true },
                  { name: '车道级导航', value: true },
                  { name: '手机App远程操控', value: true },
                  { name: '哨兵模式', value: true },
                  { name: 'Wi-Fi / 4G网络连接', value: true },
                  {
                    name: '后排门护板扶手按键（支持语音唤醒/静音/切换音源等功能自定义）',
                    value: true
                  },
                  { name: '大屏亮度智能调节', value: true },
                  { name: '车载游戏', value: true },
                  { name: '车载应用商城', value: true },
                  { name: '小P智能推送服务', value: true },
                  { name: '整车OTA升级服务', value: true },
                  { name: '远程诊断系统', value: true }
                ]
              }
            ]
          },
          {
            title: '智享空间',
            children: [
              {
                title: '舒享装备',
                children: [
                  {
                    name: '双温区独立自动空调系统（带PM2.5净化）',
                    value: true
                  },
                  { name: '热泵空调', value: true },
                  { name: '方向盘四向调节', value: true },
                  { name: 'Nappa真皮多功能方向盘', value: true },
                  { name: '高级皮革座椅', value: true },
                  {
                    name: '主驾驶席座椅6向电动调节（带记忆、支持大屏控制）',
                    value: true
                  },
                  { name: '副驾驶席座椅4向电动调节', value: true },
                  { name: '主/副驾驶席独立式航空睡眠头枕', value: true },
                  { name: '主/副驾驶席座椅加热功能', value: true },
                  { name: '主/副驾驶席座椅通风功能', value: true },
                  { name: '全景天幕电动遮阳帘', value: true },
                  { name: '电动外后视镜带折叠加热记忆', value: true },
                  { name: '手机无线充电', value: true },
                  { name: '四门电动车窗带一键升降和防夹', value: true },
                  { name: '后排中央扶手带杯架', value: true },
                  { name: 'Xpeng高级环绕音响系统（扬声器*6）', value: true },
                  {
                    name: '取电及数据接口',
                    value: '充电USB*2+数据USB*1+12V电源*2'
                  }
                ]
              }
            ]
          },
          {
            title: '设计与主题选装',
            children: [
              {
                title: '外观与内饰设计',
                children: [
                  { name: '光剑3.0 LED前贯穿灯', value: true },
                  { name: '光剑3.0 LED日间行车灯', value: true },
                  { name: '自动感应全LED前大灯', value: true },
                  { name: 'LED后贯穿灯', value: true },
                  { name: 'LED高位刹车灯和后雾灯', value: true },
                  { name: '全景天幕车顶', value: true },
                  { name: '隐藏式电动门把手', value: true },
                  { name: '17英寸五幅星轨轮毂（低风阻）', value: true },
                  { name: '17英寸轮胎（215/55R17 普利司通）', value: true },
                  {
                    name: '18英寸多幅镭射轮毂（配215/50R18 米其林18英寸轮胎）',
                    value: false,
                    optional: 3000
                  },
                  { name: '鲨鱼鳍天线', value: true },
                  { name: '车内顶棚材质', value: '灰色高级织物' },
                  { name: '自动防眩目内后视镜（带USB口）', value: true }
                ]
              },
              {
                title: '外观颜色选装',
                children: [
                  { name: '星湖灰', value: false, optional: true },
                  { name: '暗夜黑', value: false, optional: true },
                  { name: '新月银+酷黑', value: false, optional: 3000 },
                  { name: '星云白+酷黑', value: false, optional: 3000 },
                  { name: '星际绿+酷黑', value: false, optional: 3000 }
                ]
              },
              {
                title: '内饰主题选装',
                children: [
                  { name: '酷夜黑', value: false, optional: true },
                  { name: '轻奢棕', value: false, optional: true },
                  { name: '气宇灰', value: false, optional: true }
                ]
              }
            ]
          },
          {
            title: '安全',
            children: [
              {
                title: '主动安全系统',
                children: [
                  { name: '四向雷达预警', value: true },
                  { name: 'FCW前向碰撞预警', value: true },
                  { name: 'AEB自动紧急制动', value: true },
                  { name: 'TSR交通标志识别', value: true },
                  { name: 'BSD盲区监测预警', value: true },
                  { name: 'DOW车门开启预警', value: true },
                  { name: 'LDW车道偏离预警', value: true },
                  { name: 'LKA车道保持辅助', value: true },
                  { name: 'ELK车道紧急保持辅助', value: true },
                  { name: 'RCW后向碰撞预警', value: true },
                  { name: 'RCTA后方横向来车预警', value: true },
                  { name: 'IHB智能远光灯（自动切换远近光）', value: true },
                  {
                    name: '窄路辅助（低速靠近障碍物自动开启环视影像）',
                    value: true
                  },
                  { name: '后驻车雷达', value: true }
                ]
              },
              {
                title: '被动安全系统',
                children: []
              },
              {
                title: '主驾/副驾安全带（预紧限力式）',
                children: [
                  { name: '后排左/右侧3点式安全带（预紧限力式）', value: true },
                  { name: '后排中间3点式安全带（紧急锁止式）', value: true },
                  { name: '主/副驾驶座安全气囊', value: true },
                  { name: '前排侧气囊', value: true },
                  { name: '前/后排头部气囊（气帘）', value: true },
                  { name: '前排安全带未系提醒', value: true },
                  { name: '后排安全带未系提醒（仅仪表显示）', value: true },
                  { name: 'ESP9.3车身稳定系统', value: true },
                  { name: 'EPB电子驻车制动', value: true },
                  { name: 'AVH自动驻车', value: true },
                  { name: 'HDC陡坡缓降', value: true },
                  { name: 'SCM二次碰撞减缓', value: true },
                  { name: 'TPMS胎压监测及实时显示', value: true },
                  { name: '随车工具包', value: true }
                ]
              }
            ]
          },
          {
            title: '选装包汇总',
            children: [
              {
                title: '选装包①：18英寸多幅镭射轮毂',
                children: [
                  {
                    name: '18英寸多幅镭射轮毂（配215/50R18 米其林静音轮胎）',
                    value: false,
                    optional: 3000
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

export const remarks = [
  '1.CLTC续航值均在搭载17寸轮毂下测试得出；选装18寸轮毂，续航影响约3%；',
  '2.电池充电时间来源于小鹏实验室，系在特定条件下，利用小鹏超充桩通过试验得出，实际充电时间受实际使用情况，车辆状态以及使用环境等因素有差异；',
  '3.“V2L功能”的反向充电器需要单独购买，请登录小鹏汽车官网，天猫旗舰店，直营销售店或第三方授权店购买；',
  '4.2024款P5交付时车辆将搭载XPILOT软件及升级服务，高速NGP智能导航辅助驾驶功能仅支持高级驾驶辅助地图覆盖的部分高速公路和城市快速路；',
  '5.指产品功能，非物理实体附件；该功能需手机型号、系统版本和蓝牙版本支持，自动解闭锁功能可能会因手机识别、信号干扰等因素而产生灵敏度差异，属正常现象；'
]
