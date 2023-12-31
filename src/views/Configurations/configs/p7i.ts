import { ConfigurationProps } from '../index'

export const configs: ConfigurationProps[] = [
  {
    modelName: '702',
    children: [
      {
        subModelName: '702 Pro',
        price: 249900,
        children: [
          {
            title: '基础信息',
            children: [
              {
                children: [
                  {
                    name: '长/宽/高（mm）',
                    value: '4888/1896/1450'
                  },
                  {
                    name: '轴距（mm）',
                    value: '2998'
                  },
                  {
                    name: 'CLTC综合工况续航里程（km）<sup>1</sup>',
                    value: '702'
                  },
                  {
                    name: '电池类型',
                    value: '液冷恒温无热蔓延三元电池包（IP68级防尘防水）'
                  },
                  {
                    name: '10%至80%直流快充时间（min）<sup>2</sup>',
                    value: '29'
                  },
                  {
                    name: 'V2L对外放电功能（220V电源输出）<sup>3</sup>',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '性能及操控',
            children: [
              {
                children: [
                  {
                    name: '悬架形式',
                    value: '前虚拟主销双叉臂/后五连杆'
                  },
                  {
                    name: '驱动形式',
                    value: '后中置电机后驱'
                  },
                  {
                    name: '电机类型',
                    value: '永磁同步电机'
                  },
                  {
                    name: '电机最大功率/最大扭矩（kW/N∙m）',
                    value: '203/440'
                  },
                  {
                    name: '0-100km/h加速时间（s）',
                    value: '6.4'
                  },
                  {
                    name: '最高车速（km/h）',
                    value: '200'
                  },
                  {
                    name: '前四活塞Brembo固定卡钳',
                    value: true
                  },
                  {
                    name: '四轮Brembo通风刹车盘',
                    value: true
                  },
                  {
                    name: '第二代iBooster智能制动系统',
                    value: true
                  },
                  {
                    name: 'SACHS多阀系减震器',
                    value: true
                  },
                  {
                    name: '主动式连续可变阻尼减震器',
                    value: false
                  },
                  {
                    name: '随速可变电子助力转向系统',
                    value: true
                  },
                  {
                    name: '智能四驱扭矩分配系统',
                    value: false
                  },
                  {
                    name: 'AutoHold 功能',
                    value: true
                  },
                  {
                    name: '18英寸低风阻轮毂（配245/50R18 长续航轮胎）',
                    value: true
                  },
                  {
                    name: '19英寸运动轮毂（配245/45R19 米其林PS4静音高性能轮胎）',
                    value: false,
                    optional: 6000
                  },
                  {
                    name: '驾驶模式',
                    value: '标准/舒适/运动'
                  },
                  {
                    name: '制动能量回收模式',
                    value: '多档可选'
                  },
                  {
                    name: '转向助力模式',
                    value: '标准/舒适/运动'
                  }
                ]
              }
            ]
          },
          {
            title: '设计与装备',
            children: [
              {
                title: '外观设计与装备',
                children: [
                  {
                    name: 'LED远/近光灯 + LED日行灯',
                    value: true
                  },
                  {
                    name: '自动感应大灯',
                    value: true
                  },
                  {
                    name: '前大灯高度自动调节',
                    value: true
                  },
                  {
                    name: '鹏翼之光LED贯穿头灯',
                    value: true
                  },
                  {
                    name: '星河光剑LED贯穿尾灯',
                    value: true
                  },
                  {
                    name: '无框车门',
                    value: true
                  },
                  {
                    name: '电动开闭前鹏翼门（带防夹/避障功能）',
                    value: false
                  },
                  {
                    name: '全车静音电吸门',
                    value: true
                  },
                  {
                    name: '隐藏式电动门把手',
                    value: true
                  },
                  {
                    name: '后车窗隐私玻璃（含三角窗）',
                    value: true
                  },
                  {
                    name: '四门玻璃一键升降（带防夹功能）',
                    value: true
                  },
                  {
                    name: '自动感应电子雨刮',
                    value: true
                  },
                  {
                    name: '外后视镜（带电动折叠/加热/记忆/盲区监测）',
                    value: true
                  },
                  {
                    name: '隔音隔热全景天幕（带防紫外线涂层）',
                    value: true
                  },
                  {
                    name: '电动感应尾门（脚踢式）',
                    value: true
                  },
                  {
                    name: '电动充电口盖（带自动关闭和遥控开启功能）',
                    value: true
                  }
                ]
              },
              {
                title: '内饰设计与装备',
                children: [
                  {
                    name: 'Nappa头层真皮座椅',
                    value: true
                  },
                  {
                    name: '前后慢回弹自适应座椅',
                    value: true
                  },
                  {
                    name: '主驾座椅电动12向调节（含4向腰托调节）',
                    value: true
                  },
                  {
                    name: '副驾座椅电动6向调节',
                    value: true
                  },
                  {
                    name: '前排座椅加热/通风/记忆功能',
                    value: true
                  },
                  {
                    name: '后排座椅中央扶手（带扶手杯架）',
                    value: true
                  },
                  {
                    name: '后排座椅加热功能',
                    value: true
                  },
                  {
                    name: '真皮多功能方向盘（带手动4向调节）',
                    value: true
                  },
                  {
                    name: '方向盘加热',
                    value: true
                  },
                  {
                    name: 'LED多色氛围灯（带音乐律动）',
                    value: true
                  },
                  {
                    name: '自动防眩目无边框内后视镜',
                    value: true
                  },
                  {
                    name: '手机无线充电',
                    value: true
                  },
                  {
                    name: '取电及数据接口',
                    value: 'Type C*2 + USB*3 + 12V*1'
                  },
                  {
                    name: 'X-HP 2.0智能热管理系统（含集成热泵）',
                    value: true
                  },
                  {
                    name: '热泵空调',
                    value: true
                  },
                  {
                    name: '智能全车余热回收',
                    value: true
                  },
                  {
                    name: '自动双温区空调',
                    value: true
                  },
                  {
                    name: '智能香氛系统（大师定制香氛）',
                    value: true
                  },
                  {
                    name: '前排电动隐藏式空调出风口',
                    value: true
                  },
                  {
                    name: '后排独立出风口',
                    value: true
                  },
                  {
                    name: 'AQS车内空气质量自动控制',
                    value: true
                  },
                  {
                    name: '车外尾气检测自动切换内外循环',
                    value: true
                  },
                  {
                    name: '车内空气调节/空气净化（带花粉过滤/CN95过滤）',
                    value: true
                  },
                  {
                    name: 'PM2.5监控与显示',
                    value: true
                  },
                  {
                    name: '室外环境温度传感器',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '安全',
            children: [
              {
                title: '主动安全',
                children: [
                  {
                    name: 'AEB自动紧急制动',
                    value: true
                  },
                  {
                    name: 'FCW前向碰撞预警',
                    value: true
                  },
                  {
                    name: 'RCTA后方横向来车预警',
                    value: true
                  },
                  {
                    name: 'LDW车道偏离预警',
                    value: true
                  },
                  {
                    name: 'LKA车道保持辅助',
                    value: true
                  },
                  {
                    name: 'ELK车道紧急保持辅助',
                    value: true
                  },
                  {
                    name: 'RCW后向碰撞预警',
                    value: true
                  },
                  {
                    name: 'BSD盲区监测预警',
                    value: true
                  },
                  {
                    name: 'DOW车门开启预警',
                    value: true
                  },
                  {
                    name: 'TSR交通标志识别',
                    value: true
                  },
                  {
                    name: 'IHB智能远光灯（自动切换远近光）',
                    value: true
                  },
                  {
                    name: '主驾MSB电动马达安全带（安全提醒）',
                    value: true
                  },
                  {
                    name: '上坡/下坡辅助',
                    value: true
                  },
                  {
                    name: '倒车车侧预警',
                    value: true
                  },
                  {
                    name: '窄路辅助（低速靠近障碍物自动开启环视影像）',
                    value: true
                  },
                  {
                    name: '转向辅助（低速转向时自动开启环视影像）',
                    value: true
                  }
                ]
              },
              {
                title: '被动安全',
                children: [
                  {
                    name: '主驾/副驾安全带（预紧限力式）',
                    value: true
                  },
                  {
                    name: '后排左/右侧3点式安全带（预紧限力式）',
                    value: true
                  },
                  {
                    name: '后排中间3点式安全带（紧急锁止式）',
                    value: true
                  },
                  {
                    name: '主/副驾安全气囊',
                    value: true
                  },
                  {
                    name: '前排左右侧气囊',
                    value: true
                  },
                  {
                    name: '前/后排头部侧气帘',
                    value: true
                  },
                  {
                    name: 'ISOFIX儿童座椅接口',
                    value: true
                  },
                  {
                    name: '后排侧门电子儿童锁',
                    value: true
                  },
                  {
                    name: '座椅安全带未系提醒（全车）',
                    value: true
                  },
                  {
                    name: 'TPMS胎压监测及实时显示',
                    value: true
                  },
                  {
                    name: '补胎工具',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '智能辅助驾驶',
            children: [
              {
                title: '智能辅助驾驶硬件',
                children: [
                  {
                    name: '辅助驾驶芯片',
                    value: 'Orin-X'
                  },
                  {
                    name: '双激光雷达',
                    value: false
                  },
                  {
                    name: '毫米波雷达（颗）',
                    value: '5'
                  },
                  {
                    name: '超声波雷达（颗）',
                    value: '12'
                  },
                  {
                    name: '摄像头数量（含疲劳监测摄像头）（颗）',
                    value: '12'
                  },
                  {
                    name: '亚米级高精定位单元',
                    value: true
                  }
                ]
              },
              {
                title: 'XPILOT智能辅助驾驶系统',
                children: [
                  {
                    name: 'SR环境模拟显示',
                    value: true
                  },
                  {
                    name: '高速NGP智能导航辅助驾驶',
                    value: true
                  },
                  {
                    name: 'ACC自适应巡航',
                    value: true
                  },
                  {
                    name: 'LCC车道居中辅助',
                    value: true
                  },
                  {
                    name: 'ALC智能辅助变道',
                    value: true
                  },
                  {
                    name: 'SAS智能限速辅助',
                    value: true
                  },
                  {
                    name: '直线召唤',
                    value: true
                  },
                  {
                    name: 'VPA停车场记忆泊车',
                    value: true
                  },
                  {
                    name: 'ERPA增强版遥控泊车',
                    value: true
                  },
                  {
                    name: 'AEP智能泊出辅助',
                    value: true
                  },
                  {
                    name: 'EAP超级智能泊车辅助',
                    value: true
                  },
                  {
                    name: 'RPA遥控泊车',
                    value: true
                  },
                  {
                    name: '360°全景可视泊车辅助系统',
                    value: true
                  },
                  {
                    name: '透明底盘',
                    value: true
                  },
                  {
                    name: '行车录像功能<sup>4</sup>',
                    value: true
                  }
                ]
              },
              {
                title: 'XNGP智能辅助驾驶系统（已含XPILOT全功能）[5]',
                children: [
                  {
                    name: '全场景智能辅助驾驶',
                    value: false
                  },
                  {
                    name: '城市NGP智能导航辅助驾驶',
                    value: false
                  },
                  {
                    name: '高速NGP智能导航辅助驾驶增强版',
                    value: false
                  },
                  {
                    name: 'ACC-L自适应巡航增强版<sup>6</sup>',
                    value: false
                  },
                  {
                    name: 'LCC-L车道居中辅助增强版<sup>6</sup>',
                    value: false
                  },
                  {
                    name: 'VPA-L停车场记忆泊车增强版<sup>6</sup>',
                    value: false
                  }
                ]
              }
            ]
          },
          {
            title: '智能座舱系统',
            children: [
              {
                title: '智能座舱-硬件',
                children: [
                  {
                    name: '高通骁龙SA8155P车规级座舱芯片',
                    value: true
                  },
                  {
                    name: '14.96英寸悬浮触摸式中控屏',
                    value: true
                  },
                  {
                    name: '10.25英寸全液晶组合仪表',
                    value: true
                  },
                  {
                    name: '车载WiFi/4G网络',
                    value: true
                  },
                  {
                    name: '车载5G网络',
                    value: false
                  }
                ]
              },
              {
                title: '智能座舱-智能交互',
                children: [
                  {
                    name: 'Xmart OS 4.0车载智能系统',
                    value: true
                  },
                  {
                    name: '全场景语音2.0系统',
                    value: true
                  },
                  {
                    name: '极速对话',
                    value: true
                  },
                  {
                    name: '本地对话（离线可用）',
                    value: true
                  },
                  {
                    name: '四音区识别+声源定位',
                    value: true
                  },
                  {
                    name: '离线导航/无缝导航（车机手机互联互通）',
                    value: true
                  },
                  {
                    name: '车道级导航',
                    value: true
                  },
                  {
                    name: 'X_ID账号服务（座椅、驾驶相关、导航、音频等设置云同步）',
                    value: true
                  },
                  {
                    name: '迎宾模式（含座椅迎宾、迎宾音效等）',
                    value: true
                  },
                  {
                    name: '冥想模式',
                    value: true
                  },
                  {
                    name: '手机互联',
                    value: true
                  },
                  {
                    name: '整车OTA升级服务',
                    value: true
                  },
                  {
                    name: '远程诊断系统',
                    value: true
                  },
                  {
                    name: '小P智能推送服务',
                    value: true
                  },
                  {
                    name: '智能遥控钥匙',
                    value: true
                  },
                  {
                    name: '手机App蓝牙钥匙7',
                    value: true
                  },
                  {
                    name: '手机蓝牙无钥匙进入功能',
                    value: true
                  },
                  {
                    name: '智能寻车（查看车辆位置、鸣笛、闪灯）',
                    value: true
                  },
                  {
                    name: 'APP远程操控/监测',
                    value: true
                  },
                  {
                    name: 'APP发送地址到车（支持第三方APP）',
                    value: true
                  },
                  {
                    name: '预约充电功能',
                    value: true
                  }
                ]
              },
              {
                title: '智能座舱-沉浸式影音系统',
                children: [
                  {
                    name: 'Xopera音响',
                    value: true
                  },
                  {
                    name: '丹拿Confidence系列原装音响',
                    value: false,
                    optional: 6000
                  },
                  {
                    name: '7.1.4 杜比全景声',
                    value: true
                  },
                  {
                    name: '20扬声器+独立功放',
                    value: true
                  },
                  {
                    name: '前排自动升降扬声器',
                    value: true
                  },
                  {
                    name: '主驾私享声学单元（主驾专享扬声器）',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '主题选装',
            children: [
              {
                title: '外观颜色',
                children: [
                  {
                    name: '暗夜黑',
                    value: false,
                    optional: true
                  },
                  {
                    name: '新月银',
                    value: false,
                    optional: true
                  },
                  {
                    name: '星云白',
                    value: false,
                    optional: 5000
                  },
                  {
                    name: '天辰灰',
                    value: false,
                    optional: 5000
                  },
                  {
                    name: '星际绿',
                    value: false,
                    optional: 5000
                  },
                  {
                    name: '超闪绿',
                    value: false
                  }
                ]
              },
              {
                title: '外观套件',
                children: [
                  {
                    name: '黑色外观套件（侧窗饰条、前后LOGO和字标、外后视镜）',
                    value: false
                  }
                ]
              },
              {
                title: '座舱主题 [8]',
                children: [
                  {
                    name: '气宇灰',
                    value: false,
                    optional: true
                  },
                  {
                    name: '引力红',
                    value: false,
                    optional: true
                  },
                  {
                    name: '炫酷黑（红色缝线）',
                    value: false,
                    optional: true
                  },
                  {
                    name: '炫酷黑（绿色缝线）+绿色安全带',
                    value: false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        subModelName: '702 Max',
        price: 269900,
        children: [
          {
            title: '基础信息',
            children: [
              {
                children: [
                  {
                    name: '长/宽/高（mm）',
                    value: '4888/1896/1450'
                  },
                  {
                    name: '轴距（mm）',
                    value: '2998'
                  },
                  {
                    name: 'CLTC综合工况续航里程（km）<sup>1</sup>',
                    value: '702'
                  },
                  {
                    name: '电池类型',
                    value: '液冷恒温无热蔓延三元电池包（IP68级防尘防水）'
                  },
                  {
                    name: '10%至80%直流快充时间（min）<sup>2</sup>',
                    value: '29'
                  },
                  {
                    name: 'V2L对外放电功能（220V电源输出）<sup>3</sup>',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '性能及操控',
            children: [
              {
                children: [
                  {
                    name: '悬架形式',
                    value: '前虚拟主销双叉臂/后五连杆'
                  },
                  {
                    name: '驱动形式',
                    value: '后中置电机后驱'
                  },
                  {
                    name: '电机类型',
                    value: '永磁同步电机'
                  },
                  {
                    name: '电机最大功率/最大扭矩（kW/N∙m）',
                    value: '203/440'
                  },
                  {
                    name: '0-100km/h加速时间（s）',
                    value: '6.4'
                  },
                  {
                    name: '最高车速（km/h）',
                    value: '200'
                  },
                  {
                    name: '前四活塞Brembo固定卡钳',
                    value: true
                  },
                  {
                    name: '四轮Brembo通风刹车盘',
                    value: true
                  },
                  {
                    name: '第二代iBooster智能制动系统',
                    value: true
                  },
                  {
                    name: 'SACHS多阀系减震器',
                    value: true
                  },
                  {
                    name: '主动式连续可变阻尼减震器',
                    value: false
                  },
                  {
                    name: '随速可变电子助力转向系统',
                    value: true
                  },
                  {
                    name: '智能四驱扭矩分配系统',
                    value: false
                  },
                  {
                    name: 'AutoHold 功能',
                    value: true
                  },
                  {
                    name: '18英寸低风阻轮毂（配245/50R18 长续航轮胎）',
                    value: true
                  },
                  {
                    name: '19英寸运动轮毂（配245/45R19 米其林PS4静音高性能轮胎）',
                    value: false,
                    optional: 6000
                  },
                  {
                    name: '驾驶模式',
                    value: '标准/舒适/运动'
                  },
                  {
                    name: '制动能量回收模式',
                    value: '多档可选'
                  },
                  {
                    name: '转向助力模式',
                    value: '标准/舒适/运动'
                  }
                ]
              }
            ]
          },
          {
            title: '设计与装备',
            children: [
              {
                title: '外观设计与装备',
                children: [
                  {
                    name: 'LED远/近光灯 + LED日行灯',
                    value: true
                  },
                  {
                    name: '自动感应大灯',
                    value: true
                  },
                  {
                    name: '前大灯高度自动调节',
                    value: true
                  },
                  {
                    name: '鹏翼之光LED贯穿头灯',
                    value: true
                  },
                  {
                    name: '星河光剑LED贯穿尾灯',
                    value: true
                  },
                  {
                    name: '无框车门',
                    value: true
                  },
                  {
                    name: '电动开闭前鹏翼门（带防夹/避障功能）',
                    value: false
                  },
                  {
                    name: '全车静音电吸门',
                    value: true
                  },
                  {
                    name: '隐藏式电动门把手',
                    value: true
                  },
                  {
                    name: '后车窗隐私玻璃（含三角窗）',
                    value: true
                  },
                  {
                    name: '四门玻璃一键升降（带防夹功能）',
                    value: true
                  },
                  {
                    name: '自动感应电子雨刮',
                    value: true
                  },
                  {
                    name: '外后视镜（带电动折叠/加热/记忆/盲区监测）',
                    value: true
                  },
                  {
                    name: '隔音隔热全景天幕（带防紫外线涂层）',
                    value: true
                  },
                  {
                    name: '电动感应尾门（脚踢式）',
                    value: true
                  },
                  {
                    name: '电动充电口盖（带自动关闭和遥控开启功能）',
                    value: true
                  }
                ]
              },
              {
                title: '内饰设计与装备',
                children: [
                  {
                    name: 'Nappa头层真皮座椅',
                    value: true
                  },
                  {
                    name: '前后慢回弹自适应座椅',
                    value: true
                  },
                  {
                    name: '主驾座椅电动12向调节（含4向腰托调节）',
                    value: true
                  },
                  {
                    name: '副驾座椅电动6向调节',
                    value: true
                  },
                  {
                    name: '前排座椅加热/通风/记忆功能',
                    value: true
                  },
                  {
                    name: '后排座椅中央扶手（带扶手杯架）',
                    value: true
                  },
                  {
                    name: '后排座椅加热功能',
                    value: true
                  },
                  {
                    name: '真皮多功能方向盘（带手动4向调节）',
                    value: true
                  },
                  {
                    name: '方向盘加热',
                    value: true
                  },
                  {
                    name: 'LED多色氛围灯（带音乐律动）',
                    value: true
                  },
                  {
                    name: '自动防眩目无边框内后视镜',
                    value: true
                  },
                  {
                    name: '手机无线充电',
                    value: true
                  },
                  {
                    name: '取电及数据接口',
                    value: 'Type C*2 + USB*3 + 12V*1'
                  },
                  {
                    name: 'X-HP 2.0智能热管理系统（含集成热泵）',
                    value: true
                  },
                  {
                    name: '热泵空调',
                    value: true
                  },
                  {
                    name: '智能全车余热回收',
                    value: true
                  },
                  {
                    name: '自动双温区空调',
                    value: true
                  },
                  {
                    name: '智能香氛系统（大师定制香氛）',
                    value: true
                  },
                  {
                    name: '前排电动隐藏式空调出风口',
                    value: true
                  },
                  {
                    name: '后排独立出风口',
                    value: true
                  },
                  {
                    name: 'AQS车内空气质量自动控制',
                    value: true
                  },
                  {
                    name: '车外尾气检测自动切换内外循环',
                    value: true
                  },
                  {
                    name: '车内空气调节/空气净化（带花粉过滤/CN95过滤）',
                    value: true
                  },
                  {
                    name: 'PM2.5监控与显示',
                    value: true
                  },
                  {
                    name: '室外环境温度传感器',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '安全',
            children: [
              {
                title: '主动安全',
                children: [
                  {
                    name: 'AEB自动紧急制动',
                    value: true
                  },
                  {
                    name: 'FCW前向碰撞预警',
                    value: true
                  },
                  {
                    name: 'RCTA后方横向来车预警',
                    value: true
                  },
                  {
                    name: 'LDW车道偏离预警',
                    value: true
                  },
                  {
                    name: 'LKA车道保持辅助',
                    value: true
                  },
                  {
                    name: 'ELK车道紧急保持辅助',
                    value: true
                  },
                  {
                    name: 'RCW后向碰撞预警',
                    value: true
                  },
                  {
                    name: 'BSD盲区监测预警',
                    value: true
                  },
                  {
                    name: 'DOW车门开启预警',
                    value: true
                  },
                  {
                    name: 'TSR交通标志识别',
                    value: true
                  },
                  {
                    name: 'IHB智能远光灯（自动切换远近光）',
                    value: true
                  },
                  {
                    name: '主驾MSB电动马达安全带（安全提醒）',
                    value: true
                  },
                  {
                    name: '上坡/下坡辅助',
                    value: true
                  },
                  {
                    name: '倒车车侧预警',
                    value: true
                  },
                  {
                    name: '窄路辅助（低速靠近障碍物自动开启环视影像）',
                    value: true
                  },
                  {
                    name: '转向辅助（低速转向时自动开启环视影像）',
                    value: true
                  }
                ]
              },
              {
                title: '被动安全',
                children: [
                  {
                    name: '主驾/副驾安全带（预紧限力式）',
                    value: true
                  },
                  {
                    name: '后排左/右侧3点式安全带（预紧限力式）',
                    value: true
                  },
                  {
                    name: '后排中间3点式安全带（紧急锁止式）',
                    value: true
                  },
                  {
                    name: '主/副驾安全气囊',
                    value: true
                  },
                  {
                    name: '前排左右侧气囊',
                    value: true
                  },
                  {
                    name: '前/后排头部侧气帘',
                    value: true
                  },
                  {
                    name: 'ISOFIX儿童座椅接口',
                    value: true
                  },
                  {
                    name: '后排侧门电子儿童锁',
                    value: true
                  },
                  {
                    name: '座椅安全带未系提醒（全车）',
                    value: true
                  },
                  {
                    name: 'TPMS胎压监测及实时显示',
                    value: true
                  },
                  {
                    name: '补胎工具',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '智能辅助驾驶',
            children: [
              {
                title: '智能辅助驾驶硬件',
                children: [
                  {
                    name: '辅助驾驶芯片',
                    value: '双Orin-X'
                  },
                  {
                    name: '双激光雷达',
                    value: true
                  },
                  {
                    name: '毫米波雷达（颗）',
                    value: '5'
                  },
                  {
                    name: '超声波雷达（颗）',
                    value: '12'
                  },
                  {
                    name: '摄像头数量（含疲劳监测摄像头）（颗）',
                    value: '12'
                  },
                  {
                    name: '亚米级高精定位单元',
                    value: true
                  }
                ]
              },
              {
                title: 'XPILOT智能辅助驾驶系统',
                children: [
                  {
                    name: 'SR环境模拟显示',
                    value: true
                  },
                  {
                    name: '高速NGP智能导航辅助驾驶',
                    value: true
                  },
                  {
                    name: 'ACC自适应巡航',
                    value: true
                  },
                  {
                    name: 'LCC车道居中辅助',
                    value: true
                  },
                  {
                    name: 'ALC智能辅助变道',
                    value: true
                  },
                  {
                    name: 'SAS智能限速辅助',
                    value: true
                  },
                  {
                    name: '直线召唤',
                    value: true
                  },
                  {
                    name: 'VPA停车场记忆泊车',
                    value: true
                  },
                  {
                    name: 'ERPA增强版遥控泊车',
                    value: true
                  },
                  {
                    name: 'AEP智能泊出辅助',
                    value: true
                  },
                  {
                    name: 'EAP超级智能泊车辅助',
                    value: true
                  },
                  {
                    name: 'RPA遥控泊车',
                    value: true
                  },
                  {
                    name: '360°全景可视泊车辅助系统',
                    value: true
                  },
                  {
                    name: '透明底盘',
                    value: true
                  },
                  {
                    name: '行车录像功能<sup>4</sup>',
                    value: true
                  }
                ]
              },
              {
                title: 'XNGP智能辅助驾驶系统（已含XPILOT全功能）[5]',
                children: [
                  {
                    name: '全场景智能辅助驾驶',
                    value: true
                  },
                  {
                    name: '城市NGP智能导航辅助驾驶',
                    value: true
                  },
                  {
                    name: '高速NGP智能导航辅助驾驶增强版',
                    value: true
                  },
                  {
                    name: 'ACC-L自适应巡航增强版<sup>6</sup>',
                    value: true
                  },
                  {
                    name: 'LCC-L车道居中辅助增强版<sup>6</sup>',
                    value: true
                  },
                  {
                    name: 'VPA-L停车场记忆泊车增强版<sup>6</sup>',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '智能座舱系统',
            children: [
              {
                title: '智能座舱-硬件',
                children: [
                  {
                    name: '高通骁龙SA8155P车规级座舱芯片',
                    value: true
                  },
                  {
                    name: '14.96英寸悬浮触摸式中控屏',
                    value: true
                  },
                  {
                    name: '10.25英寸全液晶组合仪表',
                    value: true
                  },
                  {
                    name: '车载WiFi/4G网络',
                    value: true
                  },
                  {
                    name: '车载5G网络',
                    value: true
                  }
                ]
              },
              {
                title: '智能座舱-智能交互',
                children: [
                  {
                    name: 'Xmart OS 4.0车载智能系统',
                    value: true
                  },
                  {
                    name: '全场景语音2.0系统',
                    value: true
                  },
                  {
                    name: '极速对话',
                    value: true
                  },
                  {
                    name: '本地对话（离线可用）',
                    value: true
                  },
                  {
                    name: '四音区识别+声源定位',
                    value: true
                  },
                  {
                    name: '离线导航/无缝导航（车机手机互联互通）',
                    value: true
                  },
                  {
                    name: '车道级导航',
                    value: true
                  },
                  {
                    name: 'X_ID账号服务（座椅、驾驶相关、导航、音频等设置云同步）',
                    value: true
                  },
                  {
                    name: '迎宾模式（含座椅迎宾、迎宾音效等）',
                    value: true
                  },
                  {
                    name: '冥想模式',
                    value: true
                  },
                  {
                    name: '手机互联',
                    value: true
                  },
                  {
                    name: '整车OTA升级服务',
                    value: true
                  },
                  {
                    name: '远程诊断系统',
                    value: true
                  },
                  {
                    name: '小P智能推送服务',
                    value: true
                  },
                  {
                    name: '智能遥控钥匙',
                    value: true
                  },
                  {
                    name: '手机App蓝牙钥匙7',
                    value: true
                  },
                  {
                    name: '手机蓝牙无钥匙进入功能',
                    value: true
                  },
                  {
                    name: '智能寻车（查看车辆位置、鸣笛、闪灯）',
                    value: true
                  },
                  {
                    name: 'APP远程操控/监测',
                    value: true
                  },
                  {
                    name: 'APP发送地址到车（支持第三方APP）',
                    value: true
                  },
                  {
                    name: '预约充电功能',
                    value: true
                  }
                ]
              },
              {
                title: '智能座舱-沉浸式影音系统',
                children: [
                  {
                    name: 'Xopera音响',
                    value: true
                  },
                  {
                    name: '丹拿Confidence系列原装音响',
                    value: false,
                    optional: 6000
                  },
                  {
                    name: '7.1.4 杜比全景声',
                    value: true
                  },
                  {
                    name: '20扬声器+独立功放',
                    value: true
                  },
                  {
                    name: '前排自动升降扬声器',
                    value: true
                  },
                  {
                    name: '主驾私享声学单元（主驾专享扬声器）',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '主题选装',
            children: [
              {
                title: '外观颜色',
                children: [
                  {
                    name: '暗夜黑',
                    value: false,
                    optional: true
                  },
                  {
                    name: '新月银',
                    value: false,
                    optional: true
                  },
                  {
                    name: '星云白',
                    value: false,
                    optional: 5000
                  },
                  {
                    name: '天辰灰',
                    value: false,
                    optional: 5000
                  },
                  {
                    name: '星际绿',
                    value: false,
                    optional: 5000
                  },
                  {
                    name: '超闪绿',
                    value: false
                  }
                ]
              },
              {
                title: '外观套件',
                children: [
                  {
                    name: '黑色外观套件（侧窗饰条、前后LOGO和字标、外后视镜）',
                    value: false
                  }
                ]
              },
              {
                title: '座舱主题 [8]',
                children: [
                  {
                    name: '气宇灰',
                    value: false,
                    optional: true
                  },
                  {
                    name: '引力红',
                    value: false,
                    optional: true
                  },
                  {
                    name: '炫酷黑（红色缝线）',
                    value: false,
                    optional: true
                  },
                  {
                    name: '炫酷黑（绿色缝线）+绿色安全带',
                    value: false
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    modelName: '610',
    children: [
      {
        subModelName: '610 Max 性能版',
        price: 289900,
        children: [
          {
            title: '基础信息',
            children: [
              {
                children: [
                  {
                    name: '长/宽/高（mm）',
                    value: '4888/1896/1450'
                  },
                  {
                    name: '轴距（mm）',
                    value: '2998'
                  },
                  {
                    name: 'CLTC综合工况续航里程（km）<sup>1</sup>',
                    value: '610'
                  },
                  {
                    name: '电池类型',
                    value: '液冷恒温无热蔓延三元电池包（IP68级防尘防水）'
                  },
                  {
                    name: '10%至80%直流快充时间（min）<sup>2</sup>',
                    value: '29'
                  },
                  {
                    name: 'V2L对外放电功能（220V电源输出）<sup>3</sup>',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '性能及操控',
            children: [
              {
                children: [
                  {
                    name: '悬架形式',
                    value: '前虚拟主销双叉臂/后五连杆'
                  },
                  {
                    name: '驱动形式',
                    value: '全中置双电机四驱'
                  },
                  {
                    name: '电机类型',
                    value: '前感应异步/后永磁同步电机'
                  },
                  {
                    name: '电机最大功率/最大扭矩（kW/N∙m）',
                    value: '348/757'
                  },
                  {
                    name: '0-100km/h加速时间（s）',
                    value: '3.9'
                  },
                  {
                    name: '最高车速（km/h）',
                    value: '200'
                  },
                  {
                    name: '前四活塞Brembo固定卡钳',
                    value: true
                  },
                  {
                    name: '四轮Brembo通风刹车盘',
                    value: true
                  },
                  {
                    name: '第二代iBooster智能制动系统',
                    value: true
                  },
                  {
                    name: 'SACHS多阀系减震器',
                    value: true
                  },
                  {
                    name: '主动式连续可变阻尼减震器',
                    value: false
                  },
                  {
                    name: '随速可变电子助力转向系统',
                    value: true
                  },
                  {
                    name: '智能四驱扭矩分配系统',
                    value: true
                  },
                  {
                    name: 'AutoHold 功能',
                    value: true
                  },
                  {
                    name: '18英寸低风阻轮毂（配245/50R18 长续航轮胎）',
                    value: false
                  },
                  {
                    name: '19英寸运动轮毂（配245/45R19 米其林PS4静音高性能轮胎）',
                    value: true
                  },
                  {
                    name: '驾驶模式',
                    value: '标准/舒适/运动/车手'
                  },
                  {
                    name: '制动能量回收模式',
                    value: '多档可选'
                  },
                  {
                    name: '转向助力模式',
                    value: '标准/舒适/运动'
                  }
                ]
              }
            ]
          },
          {
            title: '设计与装备',
            children: [
              {
                title: '外观设计与装备',
                children: [
                  {
                    name: 'LED远/近光灯 + LED日行灯',
                    value: true
                  },
                  {
                    name: '自动感应大灯',
                    value: true
                  },
                  {
                    name: '前大灯高度自动调节',
                    value: true
                  },
                  {
                    name: '鹏翼之光LED贯穿头灯',
                    value: true
                  },
                  {
                    name: '星河光剑LED贯穿尾灯',
                    value: true
                  },
                  {
                    name: '无框车门',
                    value: true
                  },
                  {
                    name: '电动开闭前鹏翼门（带防夹/避障功能）',
                    value: false
                  },
                  {
                    name: '全车静音电吸门',
                    value: true
                  },
                  {
                    name: '隐藏式电动门把手',
                    value: true
                  },
                  {
                    name: '后车窗隐私玻璃（含三角窗）',
                    value: true
                  },
                  {
                    name: '四门玻璃一键升降（带防夹功能）',
                    value: true
                  },
                  {
                    name: '自动感应电子雨刮',
                    value: true
                  },
                  {
                    name: '外后视镜（带电动折叠/加热/记忆/盲区监测）',
                    value: true
                  },
                  {
                    name: '隔音隔热全景天幕（带防紫外线涂层）',
                    value: true
                  },
                  {
                    name: '电动感应尾门（脚踢式）',
                    value: true
                  },
                  {
                    name: '电动充电口盖（带自动关闭和遥控开启功能）',
                    value: true
                  }
                ]
              },
              {
                title: '内饰设计与装备',
                children: [
                  {
                    name: 'Nappa头层真皮座椅',
                    value: true
                  },
                  {
                    name: '前后慢回弹自适应座椅',
                    value: true
                  },
                  {
                    name: '主驾座椅电动12向调节（含4向腰托调节）',
                    value: true
                  },
                  {
                    name: '副驾座椅电动6向调节',
                    value: true
                  },
                  {
                    name: '前排座椅加热/通风/记忆功能',
                    value: true
                  },
                  {
                    name: '后排座椅中央扶手（带扶手杯架）',
                    value: true
                  },
                  {
                    name: '后排座椅加热功能',
                    value: true
                  },
                  {
                    name: '真皮多功能方向盘（带手动4向调节）',
                    value: true
                  },
                  {
                    name: '方向盘加热',
                    value: true
                  },
                  {
                    name: 'LED多色氛围灯（带音乐律动）',
                    value: true
                  },
                  {
                    name: '自动防眩目无边框内后视镜',
                    value: true
                  },
                  {
                    name: '手机无线充电',
                    value: true
                  },
                  {
                    name: '取电及数据接口',
                    value: 'Type C*2 + USB*3 + 12V*1'
                  },
                  {
                    name: 'X-HP 2.0智能热管理系统（含集成热泵）',
                    value: true
                  },
                  {
                    name: '热泵空调',
                    value: true
                  },
                  {
                    name: '智能全车余热回收',
                    value: true
                  },
                  {
                    name: '自动双温区空调',
                    value: true
                  },
                  {
                    name: '智能香氛系统（大师定制香氛）',
                    value: true
                  },
                  {
                    name: '前排电动隐藏式空调出风口',
                    value: true
                  },
                  {
                    name: '后排独立出风口',
                    value: true
                  },
                  {
                    name: 'AQS车内空气质量自动控制',
                    value: true
                  },
                  {
                    name: '车外尾气检测自动切换内外循环',
                    value: true
                  },
                  {
                    name: '车内空气调节/空气净化（带花粉过滤/CN95过滤）',
                    value: true
                  },
                  {
                    name: 'PM2.5监控与显示',
                    value: true
                  },
                  {
                    name: '室外环境温度传感器',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '安全',
            children: [
              {
                title: '主动安全',
                children: [
                  {
                    name: 'AEB自动紧急制动',
                    value: true
                  },
                  {
                    name: 'FCW前向碰撞预警',
                    value: true
                  },
                  {
                    name: 'RCTA后方横向来车预警',
                    value: true
                  },
                  {
                    name: 'LDW车道偏离预警',
                    value: true
                  },
                  {
                    name: 'LKA车道保持辅助',
                    value: true
                  },
                  {
                    name: 'ELK车道紧急保持辅助',
                    value: true
                  },
                  {
                    name: 'RCW后向碰撞预警',
                    value: true
                  },
                  {
                    name: 'BSD盲区监测预警',
                    value: true
                  },
                  {
                    name: 'DOW车门开启预警',
                    value: true
                  },
                  {
                    name: 'TSR交通标志识别',
                    value: true
                  },
                  {
                    name: 'IHB智能远光灯（自动切换远近光）',
                    value: true
                  },
                  {
                    name: '主驾MSB电动马达安全带（安全提醒）',
                    value: true
                  },
                  {
                    name: '上坡/下坡辅助',
                    value: true
                  },
                  {
                    name: '倒车车侧预警',
                    value: true
                  },
                  {
                    name: '窄路辅助（低速靠近障碍物自动开启环视影像）',
                    value: true
                  },
                  {
                    name: '转向辅助（低速转向时自动开启环视影像）',
                    value: true
                  }
                ]
              },
              {
                title: '被动安全',
                children: [
                  {
                    name: '主驾/副驾安全带（预紧限力式）',
                    value: true
                  },
                  {
                    name: '后排左/右侧3点式安全带（预紧限力式）',
                    value: true
                  },
                  {
                    name: '后排中间3点式安全带（紧急锁止式）',
                    value: true
                  },
                  {
                    name: '主/副驾安全气囊',
                    value: true
                  },
                  {
                    name: '前排左右侧气囊',
                    value: true
                  },
                  {
                    name: '前/后排头部侧气帘',
                    value: true
                  },
                  {
                    name: 'ISOFIX儿童座椅接口',
                    value: true
                  },
                  {
                    name: '后排侧门电子儿童锁',
                    value: true
                  },
                  {
                    name: '座椅安全带未系提醒（全车）',
                    value: true
                  },
                  {
                    name: 'TPMS胎压监测及实时显示',
                    value: true
                  },
                  {
                    name: '补胎工具',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '智能辅助驾驶',
            children: [
              {
                title: '智能辅助驾驶硬件',
                children: [
                  {
                    name: '辅助驾驶芯片',
                    value: '双Orin-X'
                  },
                  {
                    name: '双激光雷达',
                    value: true
                  },
                  {
                    name: '毫米波雷达（颗）',
                    value: '5'
                  },
                  {
                    name: '超声波雷达（颗）',
                    value: '12'
                  },
                  {
                    name: '摄像头数量（含疲劳监测摄像头）（颗）',
                    value: '12'
                  },
                  {
                    name: '亚米级高精定位单元',
                    value: true
                  }
                ]
              },
              {
                title: 'XPILOT智能辅助驾驶系统',
                children: [
                  {
                    name: 'SR环境模拟显示',
                    value: true
                  },
                  {
                    name: '高速NGP智能导航辅助驾驶',
                    value: true
                  },
                  {
                    name: 'ACC自适应巡航',
                    value: true
                  },
                  {
                    name: 'LCC车道居中辅助',
                    value: true
                  },
                  {
                    name: 'ALC智能辅助变道',
                    value: true
                  },
                  {
                    name: 'SAS智能限速辅助',
                    value: true
                  },
                  {
                    name: '直线召唤',
                    value: true
                  },
                  {
                    name: 'VPA停车场记忆泊车',
                    value: true
                  },
                  {
                    name: 'ERPA增强版遥控泊车',
                    value: true
                  },
                  {
                    name: 'AEP智能泊出辅助',
                    value: true
                  },
                  {
                    name: 'EAP超级智能泊车辅助',
                    value: true
                  },
                  {
                    name: 'RPA遥控泊车',
                    value: true
                  },
                  {
                    name: '360°全景可视泊车辅助系统',
                    value: true
                  },
                  {
                    name: '透明底盘',
                    value: true
                  },
                  {
                    name: '行车录像功能<sup>4</sup>',
                    value: true
                  }
                ]
              },
              {
                title: 'XNGP智能辅助驾驶系统（已含XPILOT全功能）[5]',
                children: [
                  {
                    name: '全场景智能辅助驾驶',
                    value: true
                  },
                  {
                    name: '城市NGP智能导航辅助驾驶',
                    value: true
                  },
                  {
                    name: '高速NGP智能导航辅助驾驶增强版',
                    value: true
                  },
                  {
                    name: 'ACC-L自适应巡航增强版<sup>6</sup>',
                    value: true
                  },
                  {
                    name: 'LCC-L车道居中辅助增强版<sup>6</sup>',
                    value: true
                  },
                  {
                    name: 'VPA-L停车场记忆泊车增强版<sup>6</sup>',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '智能座舱系统',
            children: [
              {
                title: '智能座舱-硬件',
                children: [
                  {
                    name: '高通骁龙SA8155P车规级座舱芯片',
                    value: true
                  },
                  {
                    name: '14.96英寸悬浮触摸式中控屏',
                    value: true
                  },
                  {
                    name: '10.25英寸全液晶组合仪表',
                    value: true
                  },
                  {
                    name: '车载WiFi/4G网络',
                    value: true
                  },
                  {
                    name: '车载5G网络',
                    value: true
                  }
                ]
              },
              {
                title: '智能座舱-智能交互',
                children: [
                  {
                    name: 'Xmart OS 4.0车载智能系统',
                    value: true
                  },
                  {
                    name: '全场景语音2.0系统',
                    value: true
                  },
                  {
                    name: '极速对话',
                    value: true
                  },
                  {
                    name: '本地对话（离线可用）',
                    value: true
                  },
                  {
                    name: '四音区识别+声源定位',
                    value: true
                  },
                  {
                    name: '离线导航/无缝导航（车机手机互联互通）',
                    value: true
                  },
                  {
                    name: '车道级导航',
                    value: true
                  },
                  {
                    name: 'X_ID账号服务（座椅、驾驶相关、导航、音频等设置云同步）',
                    value: true
                  },
                  {
                    name: '迎宾模式（含座椅迎宾、迎宾音效等）',
                    value: true
                  },
                  {
                    name: '冥想模式',
                    value: true
                  },
                  {
                    name: '手机互联',
                    value: true
                  },
                  {
                    name: '整车OTA升级服务',
                    value: true
                  },
                  {
                    name: '远程诊断系统',
                    value: true
                  },
                  {
                    name: '小P智能推送服务',
                    value: true
                  },
                  {
                    name: '智能遥控钥匙',
                    value: true
                  },
                  {
                    name: '手机App蓝牙钥匙7',
                    value: true
                  },
                  {
                    name: '手机蓝牙无钥匙进入功能',
                    value: true
                  },
                  {
                    name: '智能寻车（查看车辆位置、鸣笛、闪灯）',
                    value: true
                  },
                  {
                    name: 'APP远程操控/监测',
                    value: true
                  },
                  {
                    name: 'APP发送地址到车（支持第三方APP）',
                    value: true
                  },
                  {
                    name: '预约充电功能',
                    value: true
                  }
                ]
              },
              {
                title: '智能座舱-沉浸式影音系统',
                children: [
                  {
                    name: 'Xopera音响',
                    value: true
                  },
                  {
                    name: '丹拿Confidence系列原装音响',
                    value: false,
                    optional: 6000
                  },
                  {
                    name: '7.1.4 杜比全景声',
                    value: true
                  },
                  {
                    name: '20扬声器+独立功放',
                    value: true
                  },
                  {
                    name: '前排自动升降扬声器',
                    value: true
                  },
                  {
                    name: '主驾私享声学单元（主驾专享扬声器）',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '主题选装',
            children: [
              {
                title: '外观颜色',
                children: [
                  {
                    name: '暗夜黑',
                    value: false,
                    optional: true
                  },
                  {
                    name: '新月银',
                    value: false,
                    optional: true
                  },
                  {
                    name: '星云白',
                    value: false,
                    optional: 5000
                  },
                  {
                    name: '天辰灰',
                    value: false,
                    optional: 5000
                  },
                  {
                    name: '星际绿',
                    value: false,
                    optional: 5000
                  },
                  {
                    name: '超闪绿',
                    value: false
                  }
                ]
              },
              {
                title: '外观套件',
                children: [
                  {
                    name: '黑色外观套件（侧窗饰条、前后LOGO和字标、外后视镜）',
                    value: true
                  }
                ]
              },
              {
                title: '座舱主题 [8]',
                children: [
                  {
                    name: '气宇灰',
                    value: false,
                    optional: true
                  },
                  {
                    name: '引力红',
                    value: false,
                    optional: true
                  },
                  {
                    name: '炫酷黑（红色缝线）',
                    value: false,
                    optional: true
                  },
                  {
                    name: '炫酷黑（绿色缝线）+绿色安全带',
                    value: false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        subModelName: '610 鹏翼性能版',
        price: 339900,
        children: [
          {
            title: '基础信息',
            children: [
              {
                children: [
                  {
                    name: '长/宽/高（mm）',
                    value: '4888/1896/1450'
                  },
                  {
                    name: '轴距（mm）',
                    value: '2998'
                  },
                  {
                    name: 'CLTC综合工况续航里程（km）<sup>1</sup>',
                    value: '610'
                  },
                  {
                    name: '电池类型',
                    value: '液冷恒温无热蔓延三元电池包（IP68级防尘防水）'
                  },
                  {
                    name: '10%至80%直流快充时间（min）<sup>2</sup>',
                    value: '29'
                  },
                  {
                    name: 'V2L对外放电功能（220V电源输出）<sup>3</sup>',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '性能及操控',
            children: [
              {
                children: [
                  {
                    name: '悬架形式',
                    value: '前虚拟主销双叉臂/后五连杆'
                  },
                  {
                    name: '驱动形式',
                    value: '全中置双电机四驱'
                  },
                  {
                    name: '电机类型',
                    value: '前感应异步/后永磁同步电机'
                  },
                  {
                    name: '电机最大功率/最大扭矩（kW/N∙m）',
                    value: '348/757'
                  },
                  {
                    name: '0-100km/h加速时间（s）',
                    value: '3.9'
                  },
                  {
                    name: '最高车速（km/h）',
                    value: '200'
                  },
                  {
                    name: '前四活塞Brembo固定卡钳',
                    value: true
                  },
                  {
                    name: '四轮Brembo通风刹车盘',
                    value: true
                  },
                  {
                    name: '第二代iBooster智能制动系统',
                    value: true
                  },
                  {
                    name: 'SACHS多阀系减震器',
                    value: false
                  },
                  {
                    name: '主动式连续可变阻尼减震器',
                    value: true
                  },
                  {
                    name: '随速可变电子助力转向系统',
                    value: true
                  },
                  {
                    name: '智能四驱扭矩分配系统',
                    value: true
                  },
                  {
                    name: 'AutoHold 功能',
                    value: true
                  },
                  {
                    name: '18英寸低风阻轮毂（配245/50R18 长续航轮胎）',
                    value: false
                  },
                  {
                    name: '19英寸运动轮毂（配245/45R19 米其林PS4静音高性能轮胎）',
                    value: true
                  },
                  {
                    name: '驾驶模式',
                    value: '标准/舒适/运动/车手'
                  },
                  {
                    name: '制动能量回收模式',
                    value: '多档可选'
                  },
                  {
                    name: '转向助力模式',
                    value: '标准/舒适/运动'
                  }
                ]
              }
            ]
          },
          {
            title: '设计与装备',
            children: [
              {
                title: '外观设计与装备',
                children: [
                  {
                    name: 'LED远/近光灯 + LED日行灯',
                    value: true
                  },
                  {
                    name: '自动感应大灯',
                    value: true
                  },
                  {
                    name: '前大灯高度自动调节',
                    value: true
                  },
                  {
                    name: '鹏翼之光LED贯穿头灯',
                    value: true
                  },
                  {
                    name: '星河光剑LED贯穿尾灯',
                    value: true
                  },
                  {
                    name: '无框车门',
                    value: true
                  },
                  {
                    name: '电动开闭前鹏翼门（带防夹/避障功能）',
                    value: true
                  },
                  {
                    name: '全车静音电吸门',
                    value: true
                  },
                  {
                    name: '隐藏式电动门把手',
                    value: true
                  },
                  {
                    name: '后车窗隐私玻璃（含三角窗）',
                    value: true
                  },
                  {
                    name: '四门玻璃一键升降（带防夹功能）',
                    value: true
                  },
                  {
                    name: '自动感应电子雨刮',
                    value: true
                  },
                  {
                    name: '外后视镜（带电动折叠/加热/记忆/盲区监测）',
                    value: true
                  },
                  {
                    name: '隔音隔热全景天幕（带防紫外线涂层）',
                    value: true
                  },
                  {
                    name: '电动感应尾门（脚踢式）',
                    value: true
                  },
                  {
                    name: '电动充电口盖（带自动关闭和遥控开启功能）',
                    value: true
                  }
                ]
              },
              {
                title: '内饰设计与装备',
                children: [
                  {
                    name: 'Nappa头层真皮座椅',
                    value: true
                  },
                  {
                    name: '前后慢回弹自适应座椅',
                    value: true
                  },
                  {
                    name: '主驾座椅电动12向调节（含4向腰托调节）',
                    value: true
                  },
                  {
                    name: '副驾座椅电动6向调节',
                    value: true
                  },
                  {
                    name: '前排座椅加热/通风/记忆功能',
                    value: true
                  },
                  {
                    name: '后排座椅中央扶手（带扶手杯架）',
                    value: true
                  },
                  {
                    name: '后排座椅加热功能',
                    value: true
                  },
                  {
                    name: '真皮多功能方向盘（带手动4向调节）',
                    value: true
                  },
                  {
                    name: '方向盘加热',
                    value: true
                  },
                  {
                    name: 'LED多色氛围灯（带音乐律动）',
                    value: true
                  },
                  {
                    name: '自动防眩目无边框内后视镜',
                    value: true
                  },
                  {
                    name: '手机无线充电',
                    value: true
                  },
                  {
                    name: '取电及数据接口',
                    value: 'Type C*2 + USB*3 + 12V*1'
                  },
                  {
                    name: 'X-HP 2.0智能热管理系统（含集成热泵）',
                    value: true
                  },
                  {
                    name: '热泵空调',
                    value: true
                  },
                  {
                    name: '智能全车余热回收',
                    value: true
                  },
                  {
                    name: '自动双温区空调',
                    value: true
                  },
                  {
                    name: '智能香氛系统（大师定制香氛）',
                    value: true
                  },
                  {
                    name: '前排电动隐藏式空调出风口',
                    value: true
                  },
                  {
                    name: '后排独立出风口',
                    value: true
                  },
                  {
                    name: 'AQS车内空气质量自动控制',
                    value: true
                  },
                  {
                    name: '车外尾气检测自动切换内外循环',
                    value: true
                  },
                  {
                    name: '车内空气调节/空气净化（带花粉过滤/CN95过滤）',
                    value: true
                  },
                  {
                    name: 'PM2.5监控与显示',
                    value: true
                  },
                  {
                    name: '室外环境温度传感器',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '安全',
            children: [
              {
                title: '主动安全',
                children: [
                  {
                    name: 'AEB自动紧急制动',
                    value: true
                  },
                  {
                    name: 'FCW前向碰撞预警',
                    value: true
                  },
                  {
                    name: 'RCTA后方横向来车预警',
                    value: true
                  },
                  {
                    name: 'LDW车道偏离预警',
                    value: true
                  },
                  {
                    name: 'LKA车道保持辅助',
                    value: true
                  },
                  {
                    name: 'ELK车道紧急保持辅助',
                    value: true
                  },
                  {
                    name: 'RCW后向碰撞预警',
                    value: true
                  },
                  {
                    name: 'BSD盲区监测预警',
                    value: true
                  },
                  {
                    name: 'DOW车门开启预警',
                    value: true
                  },
                  {
                    name: 'TSR交通标志识别',
                    value: true
                  },
                  {
                    name: 'IHB智能远光灯（自动切换远近光）',
                    value: true
                  },
                  {
                    name: '主驾MSB电动马达安全带（安全提醒）',
                    value: true
                  },
                  {
                    name: '上坡/下坡辅助',
                    value: true
                  },
                  {
                    name: '倒车车侧预警',
                    value: true
                  },
                  {
                    name: '窄路辅助（低速靠近障碍物自动开启环视影像）',
                    value: true
                  },
                  {
                    name: '转向辅助（低速转向时自动开启环视影像）',
                    value: true
                  }
                ]
              },
              {
                title: '被动安全',
                children: [
                  {
                    name: '主驾/副驾安全带（预紧限力式）',
                    value: true
                  },
                  {
                    name: '后排左/右侧3点式安全带（预紧限力式）',
                    value: true
                  },
                  {
                    name: '后排中间3点式安全带（紧急锁止式）',
                    value: true
                  },
                  {
                    name: '主/副驾安全气囊',
                    value: true
                  },
                  {
                    name: '前排左右侧气囊',
                    value: true
                  },
                  {
                    name: '前/后排头部侧气帘',
                    value: true
                  },
                  {
                    name: 'ISOFIX儿童座椅接口',
                    value: true
                  },
                  {
                    name: '后排侧门电子儿童锁',
                    value: true
                  },
                  {
                    name: '座椅安全带未系提醒（全车）',
                    value: true
                  },
                  {
                    name: 'TPMS胎压监测及实时显示',
                    value: true
                  },
                  {
                    name: '补胎工具',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '智能辅助驾驶',
            children: [
              {
                title: '智能辅助驾驶硬件',
                children: [
                  {
                    name: '辅助驾驶芯片',
                    value: '双Orin-X'
                  },
                  {
                    name: '双激光雷达',
                    value: true
                  },
                  {
                    name: '毫米波雷达（颗）',
                    value: '5'
                  },
                  {
                    name: '超声波雷达（颗）',
                    value: '12'
                  },
                  {
                    name: '摄像头数量（含疲劳监测摄像头）（颗）',
                    value: '12'
                  },
                  {
                    name: '亚米级高精定位单元',
                    value: true
                  }
                ]
              },
              {
                title: 'XPILOT智能辅助驾驶系统',
                children: [
                  {
                    name: 'SR环境模拟显示',
                    value: true
                  },
                  {
                    name: '高速NGP智能导航辅助驾驶',
                    value: true
                  },
                  {
                    name: 'ACC自适应巡航',
                    value: true
                  },
                  {
                    name: 'LCC车道居中辅助',
                    value: true
                  },
                  {
                    name: 'ALC智能辅助变道',
                    value: true
                  },
                  {
                    name: 'SAS智能限速辅助',
                    value: true
                  },
                  {
                    name: '直线召唤',
                    value: true
                  },
                  {
                    name: 'VPA停车场记忆泊车',
                    value: true
                  },
                  {
                    name: 'ERPA增强版遥控泊车',
                    value: true
                  },
                  {
                    name: 'AEP智能泊出辅助',
                    value: true
                  },
                  {
                    name: 'EAP超级智能泊车辅助',
                    value: true
                  },
                  {
                    name: 'RPA遥控泊车',
                    value: true
                  },
                  {
                    name: '360°全景可视泊车辅助系统',
                    value: true
                  },
                  {
                    name: '透明底盘',
                    value: true
                  },
                  {
                    name: '行车录像功能<sup>4</sup>',
                    value: true
                  }
                ]
              },
              {
                title: 'XNGP智能辅助驾驶系统（已含XPILOT全功能）[5]',
                children: [
                  {
                    name: '全场景智能辅助驾驶',
                    value: true
                  },
                  {
                    name: '城市NGP智能导航辅助驾驶',
                    value: true
                  },
                  {
                    name: '高速NGP智能导航辅助驾驶增强版',
                    value: true
                  },
                  {
                    name: 'ACC-L自适应巡航增强版<sup>6</sup>',
                    value: true
                  },
                  {
                    name: 'LCC-L车道居中辅助增强版<sup>6</sup>',
                    value: true
                  },
                  {
                    name: 'VPA-L停车场记忆泊车增强版<sup>6</sup>',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '智能座舱系统',
            children: [
              {
                title: '智能座舱-硬件',
                children: [
                  {
                    name: '高通骁龙SA8155P车规级座舱芯片',
                    value: true
                  },
                  {
                    name: '14.96英寸悬浮触摸式中控屏',
                    value: true
                  },
                  {
                    name: '10.25英寸全液晶组合仪表',
                    value: true
                  },
                  {
                    name: '车载WiFi/4G网络',
                    value: true
                  },
                  {
                    name: '车载5G网络',
                    value: true
                  }
                ]
              },
              {
                title: '智能座舱-智能交互',
                children: [
                  {
                    name: 'Xmart OS 4.0车载智能系统',
                    value: true
                  },
                  {
                    name: '全场景语音2.0系统',
                    value: true
                  },
                  {
                    name: '极速对话',
                    value: true
                  },
                  {
                    name: '本地对话（离线可用）',
                    value: true
                  },
                  {
                    name: '四音区识别+声源定位',
                    value: true
                  },
                  {
                    name: '离线导航/无缝导航（车机手机互联互通）',
                    value: true
                  },
                  {
                    name: '车道级导航',
                    value: true
                  },
                  {
                    name: 'X_ID账号服务（座椅、驾驶相关、导航、音频等设置云同步）',
                    value: true
                  },
                  {
                    name: '迎宾模式（含座椅迎宾、迎宾音效等）',
                    value: true
                  },
                  {
                    name: '冥想模式',
                    value: true
                  },
                  {
                    name: '手机互联',
                    value: true
                  },
                  {
                    name: '整车OTA升级服务',
                    value: true
                  },
                  {
                    name: '远程诊断系统',
                    value: true
                  },
                  {
                    name: '小P智能推送服务',
                    value: true
                  },
                  {
                    name: '智能遥控钥匙',
                    value: true
                  },
                  {
                    name: '手机App蓝牙钥匙7',
                    value: true
                  },
                  {
                    name: '手机蓝牙无钥匙进入功能',
                    value: true
                  },
                  {
                    name: '智能寻车（查看车辆位置、鸣笛、闪灯）',
                    value: true
                  },
                  {
                    name: 'APP远程操控/监测',
                    value: true
                  },
                  {
                    name: 'APP发送地址到车（支持第三方APP）',
                    value: true
                  },
                  {
                    name: '预约充电功能',
                    value: true
                  }
                ]
              },
              {
                title: '智能座舱-沉浸式影音系统',
                children: [
                  {
                    name: 'Xopera音响',
                    value: false
                  },
                  {
                    name: '丹拿Confidence系列原装音响',
                    value: true
                  },
                  {
                    name: '7.1.4 杜比全景声',
                    value: true
                  },
                  {
                    name: '20扬声器+独立功放',
                    value: true
                  },
                  {
                    name: '前排自动升降扬声器',
                    value: true
                  },
                  {
                    name: '主驾私享声学单元（主驾专享扬声器）',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            title: '主题选装',
            children: [
              {
                title: '外观颜色',
                children: [
                  {
                    name: '暗夜黑',
                    value: false
                  },
                  {
                    name: '新月银',
                    value: false
                  },
                  {
                    name: '星云白',
                    value: false
                  },
                  {
                    name: '天辰灰',
                    value: false
                  },
                  {
                    name: '星际绿',
                    value: false,
                    optional: true
                  },
                  {
                    name: '超闪绿',
                    value: false,
                    optional: true
                  }
                ]
              },
              {
                title: '外观套件',
                children: [
                  {
                    name: '黑色外观套件（侧窗饰条、前后LOGO和字标、外后视镜）',
                    value: true
                  }
                ]
              },
              {
                title: '座舱主题 [8]',
                children: [
                  {
                    name: '气宇灰',
                    value: false,
                    optional: true
                  },
                  {
                    name: '引力红',
                    value: false
                  },
                  {
                    name: '炫酷黑（红色缝线）',
                    value: false,
                    optional: true
                  },
                  {
                    name: '炫酷黑（绿色缝线）+绿色安全带',
                    value: false,
                    optional: true
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
  '1 各版本CLTC续航值均在标准配置状态下测试得出。如果702版本选装19寸运动轮毂，CLTC综合工况续航里程将在670km左右；',
  '2 电池充电时间来源于小鹏实验室，系在常温条件下使用小鹏S4充电桩测得，实际充电时间受使用情况、车辆状态以及使用环境等因素影响会有所差异；',
  '3 “V2L功能”所需的反向充电器需要单独购买，请登陆官网、天猫旗舰店、直营销售店或第三方授权店购买；',
  '4 行车录像功能在车辆交付时暂时无法使用，需要通过后续OTA实现；',
  '5 XNGP辅助驾驶功能需要通过后续OTA不断实现，车辆交付时不具备全部功能；',
  '6 L是LiDAR的缩写，代表因激光雷达的应用，相应功能在性能和应用场景上的增强版；',
  '7 指产品功能，非物理实体附件；该功能需手机型号、系统版本和蓝牙版本支持，自动解闭锁功能可能会因手机识别、信号干扰等因素而产生灵敏度差异，属正常现象；',
  '8 星际绿和超闪绿外观色不可搭配引力红座舱主题；仅超闪绿外观色可选装炫酷黑（绿色缝线）+绿色安全带座舱主题。'
]
