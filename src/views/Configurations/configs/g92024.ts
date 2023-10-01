import { ConfigurationProps } from '../index'

export const name = '2024款G9'

export const configs: ConfigurationProps[] = [
  {
    modelName: '570',
    children: [
      {
        subModelName: '570 Pro',
        price: 263900,
        children: [
          {
            title: '基础参数',
            children: [
              {
                children: [
                  {
                    name: '长*宽*高（mm）',
                    value:
                      '4891*1937*1680（非空气悬架）/ 4891*1937*1670（空气悬架）'
                  },
                  {
                    name: '轴距（mm）',
                    value: '2998'
                  },
                  {
                    name: '后备箱容积（L）',
                    value: '660 / 1576（后排座椅放倒）'
                  },
                  {
                    name: '前舱储物盒容积（L）',
                    value: '71'
                  }
                ]
              }
            ]
          },
          {
            title: '全域800V高压SiC平台',
            children: [
              {
                children: [
                  { name: '3C超快充电池包', value: true },
                  { name: '电池能量（kWh）', value: '78.4' },
                  { name: '最大充电功率（kW）', value: '315' },
                  { name: '直流快充时间*（min）', value: '≥20（10%-80%）' },
                  { name: '单相交流充电模式', value: true },
                  { name: '驱动形式', value: '单电机后驱' },
                  { name: '驱动电机类型', value: '永磁同步电机' },
                  { name: '电机最大功率/扭矩', value: '230kW/430N·m' },
                  { name: '0-100km/h 加速时间*（s）', value: '6.4' },
                  { name: '最高车速（km/h）', value: '200' },
                  { name: '超低能耗*（kWh/100km）', value: '15.2' },
                  { name: '可调制动能量回收系统', value: true },
                  { name: 'V2L对外放电功率*（kW）', value: '3.3' },
                  { name: '预约充电功能', value: true },
                  { name: '目标SOC设置功能', value: true },
                  { name: '智能电动充电口盖', value: true },
                  { name: '热泵空调', value: true }
                ]
              }
            ]
          },
          {
            title: '高阶智能驾驶',
            children: [
              {
                title: '硬件能力',
                children: [
                  { name: 'NVIDIA DRIVE Orin超级计算平台', value: '1个' },
                  { name: '平台算力', value: '254TOPS' },
                  { name: '激光雷达', value: false },
                  { name: '毫米波雷达', value: '5个' },
                  { name: '超声波传感器', value: '12个' },
                  { name: 'ADAS前视摄像头', value: '2个' },
                  { name: '侧视+后视摄像头', value: '5个' },
                  { name: '环视摄像头', value: '4个' },
                  { name: '车内DMS摄像头', value: '1个' },
                  { name: '亚米级高精定位单元', value: true }
                ]
              },
              {
                title: 'XPILOT智能辅助驾驶系统',
                children: [
                  { name: 'SR环境模拟显示', value: true },
                  { name: '高速NGP智能导航辅助驾驶', value: true },
                  { name: 'ACC自适应巡航', value: true },
                  { name: 'LCC车道居中辅助', value: true },
                  { name: 'ALC智能辅助变道', value: true },
                  { name: 'SAS智能限速辅助', value: true },
                  { name: '直线召唤', value: true },
                  { name: 'VPA停车场记忆泊车', value: true },
                  { name: 'ERPA增强版遥控泊车', value: true },
                  { name: 'AEP智能泊出辅助', value: true },
                  { name: 'EAP超级智能泊车辅助', value: true },
                  { name: 'RPA遥控泊车', value: true },
                  { name: '360°全景可视泊车辅助系统', value: true },
                  { name: '透明底盘', value: true }
                ]
              },
              {
                title: 'XNGP智能辅助驾驶系统（包含XPILOT全部功能）',
                children: [
                  { name: '高速NGP智能导航辅助驾驶增强版', value: false },
                  { name: '城市NGP智能导航辅助驾驶*', value: false },
                  { name: '全场景智能辅助驾驶', value: false },
                  { name: 'ACC-L自适应巡航增强版', value: false },
                  { name: 'LCC-L车道居中辅助增强版', value: false },
                  { name: 'VPA-L停车场记忆泊车增强版', value: false }
                ]
              }
            ]
          },
          {
            title: '全智能座舱',
            children: [
              {
                title: '智能硬件',
                children: [
                  { name: '高通骁龙SA8155P车规级7nm座舱芯片', value: true },
                  { name: '双14.96英寸2.4K超高清智能屏', value: true },
                  { name: '10.25英寸全液晶组合仪表', value: true }
                ]
              },
              {
                title: '全场景语音2.0',
                children: [
                  { name: '全车全时对话', value: true },
                  { name: '前后排四音区交互', value: true },
                  { name: '极速对话', value: true },
                  { name: '无网络对话', value: true },
                  { name: '连续对话、并行指令、可见即可说', value: true }
                ]
              },
              {
                title: '智慧座舱',
                children: [
                  { name: '智慧多场景座舱', value: true },
                  { name: '3D UI人机交互系统', value: true },
                  {
                    name: '车道级导航辅助/离线导航/无缝导航（车机手机互联互通）',
                    value: true
                  },
                  { name: '车载WiFi/4G网络', value: true },
                  { name: '智能寻车（查看车辆位置、鸣笛、闪灯）', value: true },
                  {
                    name: 'X_ID账号服务（座椅/方向盘/外后视镜位置、导航、音频等设置云同步）',
                    value: true
                  },
                  { name: '整车OTA升级服务', value: true },
                  { name: '远程诊断系统', value: true },
                  { name: '手机APP远程控车', value: true },
                  { name: '手机APP蓝牙钥匙+1把智能遥控钥匙', value: true },
                  { name: '迎宾模式（含座椅迎宾、迎宾音效等）', value: true },
                  { name: '主驾专享扬声器驾享/私享模式', value: true },
                  { name: '副驾独立蓝牙连接', value: true },
                  {
                    name: '取电及数据接口',
                    value: 'Type-C*2 (支持60W快充) + Type-A*3 + 12V*2'
                  },
                  { name: '双50W手机风冷无线快充*', value: true },
                  { name: '行车录像（5路影像）', value: true }
                ]
              },
              {
                title: '智能场景模式',
                children: [
                  { name: '冥想空间', value: true },
                  { name: '美妆空间', value: '○①' },
                  { name: '睡眠空间（旅居模式/营地模式）', value: true }
                ]
              }
            ]
          },
          {
            title: '卓越驾控',
            children: [
              {
                children: [
                  {
                    name: '智能双腔空气悬架\n-包含智能双腔空气弹簧、智能可变阻尼减震器',
                    value: '○② ￥25,000'
                  },
                  {
                    name: '悬架形式',
                    value: '前双叉臂式独立悬架 / 后多连杆式独立悬架'
                  },
                  { name: '悬架材质', value: '高强度铝合金' },
                  {
                    name: '制动系统',
                    value: '前/后通风盘式制动（前四活塞固定卡钳）'
                  },
                  { name: '怀挡式换挡', value: true },
                  { name: '个性化驾驶模式', value: '标准/运动/舒适' },
                  { name: '极客模式', value: true },
                  { name: '弹射模式', value: true },
                  { name: '脱困模式', value: false },
                  { name: '智能四驱扭矩分配系统', value: false },
                  { name: '车身动态控制系统', value: true },
                  { name: '牵引力控制', value: true },
                  { name: '坡道保持辅助', value: true },
                  { name: '自动驻车Auto Hold', value: true },
                  {
                    name: '19英寸五辐轮毂\n-配255/55 R19 玛吉斯VS5 轮胎',
                    value: true
                  },
                  {
                    name: '21英寸多幅轮毂\n-配255/45 R21 米其林Pilot Sport EV轮胎',
                    value: false,
                    optional: 6000
                  },
                  {
                    name: '21英寸五辐轮毂\n-配255/45 R21 米其林Pilot Sport EV轮胎',
                    value: false,
                    optional: 6000
                  }
                ]
              }
            ]
          },
          {
            title: '全方位豪华舒适',
            children: [
              {
                title: '舒适座椅',
                children: [
                  { name: '无铬鞣Nappa真皮座椅材质', value: true },
                  {
                    name: '主驾座椅12向电动调节（含4向腰部支撑调节）',
                    value: true
                  },
                  { name: '副驾座椅6向电动调节', value: true },
                  { name: '副驾座椅4向电动腰部支撑', value: '○①' },
                  { name: '副驾座椅2向电动小腿腿托', value: '○①' },
                  { name: '主/副驾座椅位置记忆', value: true },
                  { name: '主/副驾座椅坐垫及靠背加热', value: true },
                  { name: '主/副驾座椅坐垫及靠背通风', value: true },
                  { name: '主/副驾座椅靠背专业级十点按摩', value: '○①' },
                  {
                    name: '6种座椅按摩模式\n-波浪、蛇形、脉冲、猫步、双排、腰部',
                    value: '○①'
                  },
                  { name: '后排座椅靠背大角度电动调节', value: true },
                  { name: '后排两侧座椅坐垫及靠背加热', value: '○①' },
                  { name: '后排座椅中央扶手（带扶手杯架）', value: true },
                  { name: '后排座椅4:6比例放倒', value: true }
                ]
              },
              {
                title: '奢适座舱',
                children: [
                  { name: '真皮方向盘', value: true },
                  { name: '方向盘4向电动调节', value: '○①' },
                  { name: '方向盘加热', value: '○①' },
                  { name: '270°环抱式皮质包覆', value: true },
                  {
                    name: '智能香氛系统（含3种大师定制香）\n-琥珀光橘\n-香杉影木\n-白色清幽',
                    value: '○①'
                  },
                  { name: '隐藏式情境律动氛围灯', value: true },
                  { name: '自动防眩目内后视镜', value: true },
                  { name: '副驾美颜化妆镜+环形LED化妆灯', value: '○①' }
                ]
              },
              {
                title: '智能新风空调',
                children: [
                  { name: '智能双温区恒温空调', value: true },
                  { name: '前排空调电动出风口', value: true },
                  { name: '前排出风口多模式扫风', value: true },
                  { name: '后排空调出风口', value: true },
                  { name: 'CN95空调滤芯', value: true },
                  { name: 'PM2.5监控与显示', value: true },
                  { name: '车内空气调节/空气智能净化', value: true },
                  { name: 'AQS空气质量控制系统', value: true },
                  { name: '智能除味', value: true },
                  { name: '空调自干燥', value: true }
                ]
              },
              {
                title: 'Xopera音乐厅',
                children: [
                  {
                    name: '全车21个扬声器\n-2个主驾私享头枕扬声器\n-2个前排升降式高音扬声器，2个后排高音扬声器\n-5个中音扬声器，4个顶棚扬声器\n-4个低音扬声器，1个低音炮\n-1个车外扬声器',
                    value: true
                  },
                  { name: '7.1.4声道', value: true },
                  { name: '杜比全景声', value: true },
                  { name: 'Xopera个性化系统音主题包', value: true }
                ]
              }
            ]
          },
          {
            title: '外部配置',
            children: [
              {
                title: '灯光',
                children: [
                  {
                    name: 'X-BOT FACE 3.0\n-鹏翼之光LED贯穿式头灯\n-星河光剑LED贯穿式尾灯',
                    value: true
                  },
                  { name: '智能感应前大灯', value: true },
                  { name: 'IHB智能远光灯（自动切换远近光）', value: true }
                ]
              },
              {
                title: '外饰及功能',
                children: [
                  { name: '前挡风隔音玻璃', value: true },
                  { name: '优雅无框车门', value: true },
                  { name: '四门电吸锁', value: '○①' },
                  { name: '全车车窗一键升降+防夹+锁车自动闭窗', value: true },
                  { name: '后车窗隐私玻璃', value: true },
                  {
                    name: '全景天幕（Low-E+双层镀银隔热防紫外线）',
                    value: true
                  },
                  { name: '车顶行李架', value: true },
                  {
                    name: '外后视镜电动调节+记忆+除雾+锁车自动折叠',
                    value: true
                  },
                  { name: '智能隐藏式门把手', value: true },
                  { name: '雨量感应式自动雨刷', value: true },
                  { name: '电动尾门', value: true }
                ]
              }
            ]
          },
          {
            title: '全域安全',
            children: [
              {
                title: '360°主动安全',
                children: [
                  { name: '前向碰撞预警（FCW）', value: true },
                  { name: '自动紧急制动（AEB）', value: true },
                  { name: '车道偏离预警（LDW）', value: true },
                  { name: '盲区监测预警（BSD）', value: true },
                  { name: '车道变换预警（LCA）', value: true },
                  { name: '车道保持辅助（LKA）', value: true },
                  { name: '紧急车道偏离辅助（ELK）', value: true },
                  { name: '交通标志识别（TSR）', value: true },
                  { name: '后方横向来车预警（RCTA）', value: true },
                  { name: '开门预警（DOW）', value: true },
                  { name: '后向碰撞预警（RCW）', value: true },
                  { name: '驾驶员状态监测（DMS）', value: true },
                  { name: '胎压监测（TPMS）', value: true }
                ]
              },
              {
                title: '被动安全',
                children: [
                  { name: '高强度钢铝混合笼式车身', value: true },
                  { name: '主/副驾驶位安全气囊', value: true },
                  { name: '前排侧安全气囊', value: true },
                  { name: '前后排侧安全气帘', value: true },
                  { name: '主驾MSB电动安全带', value: true },
                  { name: '主驾/副驾安全带（预紧限力式）', value: true },
                  { name: '后排左/右侧3点式安全带（预紧限力式）', value: true },
                  { name: '后排中间3点式安全带（紧急锁止式）', value: true },
                  { name: '座椅安全带未系提醒', value: true },
                  { name: 'ISO FIX儿童安全座椅固定装置', value: true },
                  { name: '行车自动落锁+碰撞自动解锁', value: true },
                  { name: 'SCM防二次碰撞自动制动系统', value: true },
                  { name: '随车工具包 -含充气泵、三角警示牌等', value: true }
                ]
              }
            ]
          },
          {
            title: '个性化',
            children: [
              {
                title: '外观颜色',
                children: [
                  { name: '星云白', value: false, optional: true },
                  { name: '暗夜黑', value: false, optional: true },
                  { name: '新月银', value: false, optional: true },
                  { name: '星阙灰', value: false, optional: 6000 },
                  { name: '星际绿', value: false, optional: 6000 }
                ]
              },
              {
                title: '内饰颜色',
                children: [
                  { name: '气宇灰', value: false, optional: true },
                  { name: '晨辉棕', value: false, optional: true },
                  { name: '星夜黑', value: false, optional: true }
                ]
              }
            ]
          }
        ]
      },
      {
        subModelName: '570 Max',
        price: 289900,
        children: [
          {
            title: '基础参数',
            children: [
              {
                children: [
                  {
                    name: '长*宽*高（mm）',
                    value:
                      '4891*1937*1680（非空气悬架）/ 4891*1937*1670（空气悬架）'
                  },
                  {
                    name: '轴距（mm）',
                    value: '2998'
                  },
                  {
                    name: '后备箱容积（L）',
                    value: '660 / 1576（后排座椅放倒）'
                  },
                  {
                    name: '前舱储物盒容积（L）',
                    value: '71'
                  }
                ]
              }
            ]
          },
          {
            title: '全域800V高压SiC平台',
            children: [
              {
                children: [
                  { name: '3C超快充电池包', value: true },
                  { name: '电池能量（kWh）', value: '78.4' },
                  { name: '最大充电功率（kW）', value: '315' },
                  { name: '直流快充时间*（min）', value: '≥20（10%-80%）' },
                  { name: '单相交流充电模式', value: true },
                  { name: '驱动形式', value: '单电机后驱' },
                  { name: '驱动电机类型', value: '永磁同步电机' },
                  { name: '电机最大功率/扭矩', value: '230kW/430N·m' },
                  { name: '0-100km/h 加速时间*（s）', value: '6.4' },
                  { name: '最高车速（km/h）', value: '200' },
                  { name: '超低能耗*（kWh/100km）', value: '15.2' },
                  { name: '可调制动能量回收系统', value: true },
                  { name: 'V2L对外放电功率*（kW）', value: '3.3' },
                  { name: '预约充电功能', value: true },
                  { name: '目标SOC设置功能', value: true },
                  { name: '智能电动充电口盖', value: true },
                  { name: '热泵空调', value: true }
                ]
              }
            ]
          },
          {
            title: '高阶智能驾驶',
            children: [
              {
                title: '硬件能力',
                children: [
                  { name: 'NVIDIA DRIVE Orin超级计算平台', value: '2个' },
                  { name: '平台算力', value: '508TOPS' },
                  { name: '激光雷达', value: '2个' },
                  { name: '毫米波雷达', value: '5个' },
                  { name: '超声波传感器', value: '12个' },
                  { name: 'ADAS前视摄像头', value: '2个' },
                  { name: '侧视+后视摄像头', value: '5个' },
                  { name: '环视摄像头', value: '4个' },
                  { name: '车内DMS摄像头', value: '1个' },
                  { name: '亚米级高精定位单元', value: true }
                ]
              },
              {
                title: 'XPILOT智能辅助驾驶系统',
                children: [
                  { name: 'SR环境模拟显示', value: true },
                  { name: '高速NGP智能导航辅助驾驶', value: true },
                  { name: 'ACC自适应巡航', value: true },
                  { name: 'LCC车道居中辅助', value: true },
                  { name: 'ALC智能辅助变道', value: true },
                  { name: 'SAS智能限速辅助', value: true },
                  { name: '直线召唤', value: true },
                  { name: 'VPA停车场记忆泊车', value: true },
                  { name: 'ERPA增强版遥控泊车', value: true },
                  { name: 'AEP智能泊出辅助', value: true },
                  { name: 'EAP超级智能泊车辅助', value: true },
                  { name: 'RPA遥控泊车', value: true },
                  { name: '360°全景可视泊车辅助系统', value: true },
                  { name: '透明底盘', value: true }
                ]
              },
              {
                title: 'XNGP智能辅助驾驶系统（包含XPILOT全部功能）',
                children: [
                  { name: '高速NGP智能导航辅助驾驶增强版', value: true },
                  { name: '城市NGP智能导航辅助驾驶*', value: true },
                  { name: '全场景智能辅助驾驶', value: true },
                  { name: 'ACC-L自适应巡航增强版', value: true },
                  { name: 'LCC-L车道居中辅助增强版', value: true },
                  { name: 'VPA-L停车场记忆泊车增强版', value: true }
                ]
              }
            ]
          },
          {
            title: '全智能座舱',
            children: [
              {
                title: '智能硬件',
                children: [
                  { name: '高通骁龙SA8155P车规级7nm座舱芯片', value: true },
                  { name: '双14.96英寸2.4K超高清智能屏', value: true },
                  { name: '10.25英寸全液晶组合仪表', value: true }
                ]
              },
              {
                title: '全场景语音2.0',
                children: [
                  { name: '全车全时对话', value: true },
                  { name: '前后排四音区交互', value: true },
                  { name: '极速对话', value: true },
                  { name: '无网络对话', value: true },
                  { name: '连续对话、并行指令、可见即可说', value: true }
                ]
              },
              {
                title: '智慧座舱',
                children: [
                  { name: '智慧多场景座舱', value: true },
                  { name: '3D UI人机交互系统', value: true },
                  {
                    name: '车道级导航辅助/离线导航/无缝导航（车机手机互联互通）',
                    value: true
                  },
                  { name: '车载WiFi/4G网络', value: true },
                  { name: '智能寻车（查看车辆位置、鸣笛、闪灯）', value: true },
                  {
                    name: 'X_ID账号服务（座椅/方向盘/外后视镜位置、导航、音频等设置云同步）',
                    value: true
                  },
                  { name: '整车OTA升级服务', value: true },
                  { name: '远程诊断系统', value: true },
                  { name: '手机APP远程控车', value: true },
                  { name: '手机APP蓝牙钥匙+1把智能遥控钥匙', value: true },
                  { name: '迎宾模式（含座椅迎宾、迎宾音效等）', value: true },
                  { name: '主驾专享扬声器驾享/私享模式', value: true },
                  { name: '副驾独立蓝牙连接', value: true },
                  {
                    name: '取电及数据接口',
                    value: 'Type-C*2 (支持60W快充) + Type-A*3 + 12V*2'
                  },
                  { name: '双50W手机风冷无线快充*', value: true },
                  { name: '行车录像（5路影像）', value: true }
                ]
              },
              {
                title: '智能场景模式',
                children: [
                  { name: '冥想空间', value: true },
                  { name: '美妆空间', value: true },
                  { name: '睡眠空间（旅居模式/营地模式）', value: true }
                ]
              }
            ]
          },
          {
            title: '卓越驾控',
            children: [
              {
                children: [
                  {
                    name: '智能双腔空气悬架\n-包含智能双腔空气弹簧、智能可变阻尼减震器',
                    value: '○② ￥25,000'
                  },
                  {
                    name: '悬架形式',
                    value: '前双叉臂式独立悬架 / 后多连杆式独立悬架'
                  },
                  { name: '悬架材质', value: '高强度铝合金' },
                  {
                    name: '制动系统',
                    value: '前/后通风盘式制动（前四活塞固定卡钳）'
                  },
                  { name: '怀挡式换挡', value: true },
                  { name: '个性化驾驶模式', value: '标准/运动/舒适' },
                  { name: '极客模式', value: true },
                  { name: '弹射模式', value: true },
                  { name: '脱困模式', value: false },
                  { name: '智能四驱扭矩分配系统', value: false },
                  { name: '车身动态控制系统', value: true },
                  { name: '牵引力控制', value: true },
                  { name: '坡道保持辅助', value: true },
                  { name: '自动驻车Auto Hold', value: true },
                  {
                    name: '19英寸五辐轮毂\n-配255/55 R19 玛吉斯VS5 轮胎',
                    value: false
                  },
                  {
                    name: '21英寸多幅轮毂\n-配255/45 R21 米其林Pilot Sport EV轮胎',
                    value: true
                  },
                  {
                    name: '21英寸五辐轮毂\n-配255/45 R21 米其林Pilot Sport EV轮胎',
                    value: false,
                    optional: true
                  }
                ]
              }
            ]
          },
          {
            title: '全方位豪华舒适',
            children: [
              {
                title: '舒适座椅',
                children: [
                  { name: '无铬鞣Nappa真皮座椅材质', value: true },
                  {
                    name: '主驾座椅12向电动调节（含4向腰部支撑调节）',
                    value: true
                  },
                  { name: '副驾座椅6向电动调节', value: true },
                  { name: '副驾座椅4向电动腰部支撑', value: true },
                  { name: '副驾座椅2向电动小腿腿托', value: true },
                  { name: '主/副驾座椅位置记忆', value: true },
                  { name: '主/副驾座椅坐垫及靠背加热', value: true },
                  { name: '主/副驾座椅坐垫及靠背通风', value: true },
                  { name: '主/副驾座椅靠背专业级十点按摩', value: true },
                  {
                    name: '6种座椅按摩模式\n-波浪、蛇形、脉冲、猫步、双排、腰部',
                    value: true
                  },
                  { name: '后排座椅靠背大角度电动调节', value: true },
                  { name: '后排两侧座椅坐垫及靠背加热', value: true },
                  { name: '后排座椅中央扶手（带扶手杯架）', value: true },
                  { name: '后排座椅4:6比例放倒', value: true }
                ]
              },
              {
                title: '奢适座舱',
                children: [
                  { name: '真皮方向盘', value: true },
                  { name: '方向盘4向电动调节', value: true },
                  { name: '方向盘加热', value: true },
                  { name: '270°环抱式皮质包覆', value: true },
                  {
                    name: '智能香氛系统（含3种大师定制香）\n-琥珀光橘\n-香杉影木\n-白色清幽',
                    value: true
                  },
                  { name: '隐藏式情境律动氛围灯', value: true },
                  { name: '自动防眩目内后视镜', value: true },
                  { name: '副驾美颜化妆镜+环形LED化妆灯', value: true }
                ]
              },
              {
                title: '智能新风空调',
                children: [
                  { name: '智能双温区恒温空调', value: true },
                  { name: '前排空调电动出风口', value: true },
                  { name: '前排出风口多模式扫风', value: true },
                  { name: '后排空调出风口', value: true },
                  { name: 'CN95空调滤芯', value: true },
                  { name: 'PM2.5监控与显示', value: true },
                  { name: '车内空气调节/空气智能净化', value: true },
                  { name: 'AQS空气质量控制系统', value: true },
                  { name: '智能除味', value: true },
                  { name: '空调自干燥', value: true }
                ]
              },
              {
                title: 'Xopera音乐厅',
                children: [
                  {
                    name: '全车21个扬声器\n-2个主驾私享头枕扬声器\n-2个前排升降式高音扬声器，2个后排高音扬声器\n-5个中音扬声器，4个顶棚扬声器\n-4个低音扬声器，1个低音炮\n-1个车外扬声器',
                    value: true
                  },
                  { name: '7.1.4声道', value: true },
                  { name: '杜比全景声', value: true },
                  { name: 'Xopera个性化系统音主题包', value: true }
                ]
              }
            ]
          },
          {
            title: '外部配置',
            children: [
              {
                title: '灯光',
                children: [
                  {
                    name: 'X-BOT FACE 3.0\n-鹏翼之光LED贯穿式头灯\n-星河光剑LED贯穿式尾灯',
                    value: true
                  },
                  { name: '智能感应前大灯', value: true },
                  { name: 'IHB智能远光灯（自动切换远近光）', value: true }
                ]
              },
              {
                title: '外饰及功能',
                children: [
                  { name: '前挡风隔音玻璃', value: true },
                  { name: '优雅无框车门', value: true },
                  { name: '四门电吸锁', value: true },
                  { name: '全车车窗一键升降+防夹+锁车自动闭窗', value: true },
                  { name: '后车窗隐私玻璃', value: true },
                  {
                    name: '全景天幕（Low-E+双层镀银隔热防紫外线）',
                    value: true
                  },
                  { name: '车顶行李架', value: true },
                  {
                    name: '外后视镜电动调节+记忆+除雾+锁车自动折叠',
                    value: true
                  },
                  { name: '智能隐藏式门把手', value: true },
                  { name: '雨量感应式自动雨刷', value: true },
                  { name: '电动尾门', value: true }
                ]
              }
            ]
          },
          {
            title: '全域安全',
            children: [
              {
                title: '360°主动安全',
                children: [
                  { name: '前向碰撞预警（FCW）', value: true },
                  { name: '自动紧急制动（AEB）', value: true },
                  { name: '车道偏离预警（LDW）', value: true },
                  { name: '盲区监测预警（BSD）', value: true },
                  { name: '车道变换预警（LCA）', value: true },
                  { name: '车道保持辅助（LKA）', value: true },
                  { name: '紧急车道偏离辅助（ELK）', value: true },
                  { name: '交通标志识别（TSR）', value: true },
                  { name: '后方横向来车预警（RCTA）', value: true },
                  { name: '开门预警（DOW）', value: true },
                  { name: '后向碰撞预警（RCW）', value: true },
                  { name: '驾驶员状态监测（DMS）', value: true },
                  { name: '胎压监测（TPMS）', value: true }
                ]
              },
              {
                title: '被动安全',
                children: [
                  { name: '高强度钢铝混合笼式车身', value: true },
                  { name: '主/副驾驶位安全气囊', value: true },
                  { name: '前排侧安全气囊', value: true },
                  { name: '前后排侧安全气帘', value: true },
                  { name: '主驾MSB电动安全带', value: true },
                  { name: '主驾/副驾安全带（预紧限力式）', value: true },
                  { name: '后排左/右侧3点式安全带（预紧限力式）', value: true },
                  { name: '后排中间3点式安全带（紧急锁止式）', value: true },
                  { name: '座椅安全带未系提醒', value: true },
                  { name: 'ISO FIX儿童安全座椅固定装置', value: true },
                  { name: '行车自动落锁+碰撞自动解锁', value: true },
                  { name: 'SCM防二次碰撞自动制动系统', value: true },
                  { name: '随车工具包 -含充气泵、三角警示牌等', value: true }
                ]
              }
            ]
          },
          {
            title: '个性化',
            children: [
              {
                title: '外观颜色',
                children: [
                  { name: '星云白', value: false, optional: true },
                  { name: '暗夜黑', value: false, optional: true },
                  { name: '新月银', value: false, optional: true },
                  { name: '星阙灰', value: false, optional: 6000 },
                  { name: '星际绿', value: false, optional: 6000 }
                ]
              },
              {
                title: '内饰颜色',
                children: [
                  { name: '气宇灰', value: false, optional: true },
                  { name: '晨辉棕', value: false, optional: true },
                  { name: '星夜黑', value: false, optional: true }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    modelName: '702',
    children: [
      {
        subModelName: '702 Pro',
        price: 283900,
        children: [
          {
            title: '基础参数',
            children: [
              {
                children: [
                  {
                    name: '长*宽*高（mm）',
                    value:
                      '4891*1937*1680（非空气悬架）/ 4891*1937*1670（空气悬架）'
                  },
                  {
                    name: '轴距（mm）',
                    value: '2998'
                  },
                  {
                    name: '后备箱容积（L）',
                    value: '660 / 1576（后排座椅放倒）'
                  },
                  {
                    name: '前舱储物盒容积（L）',
                    value: '71'
                  }
                ]
              }
            ]
          },
          {
            title: '全域800V高压SiC平台',
            children: [
              {
                children: [
                  { name: '3C超快充电池包', value: true },
                  { name: '电池能量（kWh）', value: '98' },
                  { name: '最大充电功率（kW）', value: '315' },
                  { name: '直流快充时间*（min）', value: '≥20（10%-80%）' },
                  { name: '单相交流充电模式', value: true },
                  { name: '驱动形式', value: '单电机后驱' },
                  { name: '驱动电机类型', value: '永磁同步电机' },
                  { name: '电机最大功率/扭矩', value: '230kW/430N·m' },
                  { name: '0-100km/h 加速时间*（s）', value: '6.4' },
                  { name: '最高车速（km/h）', value: '200' },
                  { name: '超低能耗*（kWh/100km）', value: '15.2' },
                  { name: '可调制动能量回收系统', value: true },
                  { name: 'V2L对外放电功率*（kW）', value: '3.3' },
                  { name: '预约充电功能', value: true },
                  { name: '目标SOC设置功能', value: true },
                  { name: '智能电动充电口盖', value: true },
                  { name: '热泵空调', value: true }
                ]
              }
            ]
          },
          {
            title: '高阶智能驾驶',
            children: [
              {
                title: '硬件能力',
                children: [
                  { name: 'NVIDIA DRIVE Orin超级计算平台', value: '1个' },
                  { name: '平台算力', value: '254TOPS' },
                  { name: '激光雷达', value: false },
                  { name: '毫米波雷达', value: '5个' },
                  { name: '超声波传感器', value: '12个' },
                  { name: 'ADAS前视摄像头', value: '2个' },
                  { name: '侧视+后视摄像头', value: '5个' },
                  { name: '环视摄像头', value: '4个' },
                  { name: '车内DMS摄像头', value: '1个' },
                  { name: '亚米级高精定位单元', value: true }
                ]
              },
              {
                title: 'XPILOT智能辅助驾驶系统',
                children: [
                  { name: 'SR环境模拟显示', value: true },
                  { name: '高速NGP智能导航辅助驾驶', value: true },
                  { name: 'ACC自适应巡航', value: true },
                  { name: 'LCC车道居中辅助', value: true },
                  { name: 'ALC智能辅助变道', value: true },
                  { name: 'SAS智能限速辅助', value: true },
                  { name: '直线召唤', value: true },
                  { name: 'VPA停车场记忆泊车', value: true },
                  { name: 'ERPA增强版遥控泊车', value: true },
                  { name: 'AEP智能泊出辅助', value: true },
                  { name: 'EAP超级智能泊车辅助', value: true },
                  { name: 'RPA遥控泊车', value: true },
                  { name: '360°全景可视泊车辅助系统', value: true },
                  { name: '透明底盘', value: true }
                ]
              },
              {
                title: 'XNGP智能辅助驾驶系统（包含XPILOT全部功能）',
                children: [
                  { name: '高速NGP智能导航辅助驾驶增强版', value: false },
                  { name: '城市NGP智能导航辅助驾驶*', value: false },
                  { name: '全场景智能辅助驾驶', value: false },
                  { name: 'ACC-L自适应巡航增强版', value: false },
                  { name: 'LCC-L车道居中辅助增强版', value: false },
                  { name: 'VPA-L停车场记忆泊车增强版', value: false }
                ]
              }
            ]
          },
          {
            title: '全智能座舱',
            children: [
              {
                title: '智能硬件',
                children: [
                  { name: '高通骁龙SA8155P车规级7nm座舱芯片', value: true },
                  { name: '双14.96英寸2.4K超高清智能屏', value: true },
                  { name: '10.25英寸全液晶组合仪表', value: true }
                ]
              },
              {
                title: '全场景语音2.0',
                children: [
                  { name: '全车全时对话', value: true },
                  { name: '前后排四音区交互', value: true },
                  { name: '极速对话', value: true },
                  { name: '无网络对话', value: true },
                  { name: '连续对话、并行指令、可见即可说', value: true }
                ]
              },
              {
                title: '智慧座舱',
                children: [
                  { name: '智慧多场景座舱', value: true },
                  { name: '3D UI人机交互系统', value: true },
                  {
                    name: '车道级导航辅助/离线导航/无缝导航（车机手机互联互通）',
                    value: true
                  },
                  { name: '车载WiFi/4G网络', value: true },
                  { name: '智能寻车（查看车辆位置、鸣笛、闪灯）', value: true },
                  {
                    name: 'X_ID账号服务（座椅/方向盘/外后视镜位置、导航、音频等设置云同步）',
                    value: true
                  },
                  { name: '整车OTA升级服务', value: true },
                  { name: '远程诊断系统', value: true },
                  { name: '手机APP远程控车', value: true },
                  { name: '手机APP蓝牙钥匙+1把智能遥控钥匙', value: true },
                  { name: '迎宾模式（含座椅迎宾、迎宾音效等）', value: true },
                  { name: '主驾专享扬声器驾享/私享模式', value: true },
                  { name: '副驾独立蓝牙连接', value: true },
                  {
                    name: '取电及数据接口',
                    value: 'Type-C*2 (支持60W快充) + Type-A*3 + 12V*2'
                  },
                  { name: '双50W手机风冷无线快充*', value: true },
                  { name: '行车录像（5路影像）', value: true }
                ]
              },
              {
                title: '智能场景模式',
                children: [
                  { name: '冥想空间', value: true },
                  { name: '美妆空间', value: '○①' },
                  { name: '睡眠空间（旅居模式/营地模式）', value: true }
                ]
              }
            ]
          },
          {
            title: '卓越驾控',
            children: [
              {
                children: [
                  {
                    name: '智能双腔空气悬架\n-包含智能双腔空气弹簧、智能可变阻尼减震器',
                    value: '○② ￥25,000'
                  },
                  {
                    name: '悬架形式',
                    value: '前双叉臂式独立悬架 / 后多连杆式独立悬架'
                  },
                  { name: '悬架材质', value: '高强度铝合金' },
                  {
                    name: '制动系统',
                    value: '前/后通风盘式制动（前四活塞固定卡钳）'
                  },
                  { name: '怀挡式换挡', value: true },
                  { name: '个性化驾驶模式', value: '标准/运动/舒适' },
                  { name: '极客模式', value: true },
                  { name: '弹射模式', value: true },
                  { name: '脱困模式', value: false },
                  { name: '智能四驱扭矩分配系统', value: false },
                  { name: '车身动态控制系统', value: true },
                  { name: '牵引力控制', value: true },
                  { name: '坡道保持辅助', value: true },
                  { name: '自动驻车Auto Hold', value: true },
                  {
                    name: '19英寸五辐轮毂\n-配255/55 R19 玛吉斯VS5 轮胎',
                    value: true
                  },
                  {
                    name: '21英寸多幅轮毂\n-配255/45 R21 米其林Pilot Sport EV轮胎',
                    value: false,
                    optional: 6000
                  },
                  {
                    name: '21英寸五辐轮毂\n-配255/45 R21 米其林Pilot Sport EV轮胎',
                    value: false,
                    optional: 6000
                  }
                ]
              }
            ]
          },
          {
            title: '全方位豪华舒适',
            children: [
              {
                title: '舒适座椅',
                children: [
                  { name: '无铬鞣Nappa真皮座椅材质', value: true },
                  {
                    name: '主驾座椅12向电动调节（含4向腰部支撑调节）',
                    value: true
                  },
                  { name: '副驾座椅6向电动调节', value: true },
                  { name: '副驾座椅4向电动腰部支撑', value: '○①' },
                  { name: '副驾座椅2向电动小腿腿托', value: '○①' },
                  { name: '主/副驾座椅位置记忆', value: true },
                  { name: '主/副驾座椅坐垫及靠背加热', value: true },
                  { name: '主/副驾座椅坐垫及靠背通风', value: true },
                  { name: '主/副驾座椅靠背专业级十点按摩', value: '○①' },
                  {
                    name: '6种座椅按摩模式\n-波浪、蛇形、脉冲、猫步、双排、腰部',
                    value: '○①'
                  },
                  { name: '后排座椅靠背大角度电动调节', value: true },
                  { name: '后排两侧座椅坐垫及靠背加热', value: '○①' },
                  { name: '后排座椅中央扶手（带扶手杯架）', value: true },
                  { name: '后排座椅4:6比例放倒', value: true }
                ]
              },
              {
                title: '奢适座舱',
                children: [
                  { name: '真皮方向盘', value: true },
                  { name: '方向盘4向电动调节', value: '○①' },
                  { name: '方向盘加热', value: '○①' },
                  { name: '270°环抱式皮质包覆', value: true },
                  {
                    name: '智能香氛系统（含3种大师定制香）\n-琥珀光橘\n-香杉影木\n-白色清幽',
                    value: '○①'
                  },
                  { name: '隐藏式情境律动氛围灯', value: true },
                  { name: '自动防眩目内后视镜', value: true },
                  { name: '副驾美颜化妆镜+环形LED化妆灯', value: '○①' }
                ]
              },
              {
                title: '智能新风空调',
                children: [
                  { name: '智能双温区恒温空调', value: true },
                  { name: '前排空调电动出风口', value: true },
                  { name: '前排出风口多模式扫风', value: true },
                  { name: '后排空调出风口', value: true },
                  { name: 'CN95空调滤芯', value: true },
                  { name: 'PM2.5监控与显示', value: true },
                  { name: '车内空气调节/空气智能净化', value: true },
                  { name: 'AQS空气质量控制系统', value: true },
                  { name: '智能除味', value: true },
                  { name: '空调自干燥', value: true }
                ]
              },
              {
                title: 'Xopera音乐厅',
                children: [
                  {
                    name: '全车21个扬声器\n-2个主驾私享头枕扬声器\n-2个前排升降式高音扬声器，2个后排高音扬声器\n-5个中音扬声器，4个顶棚扬声器\n-4个低音扬声器，1个低音炮\n-1个车外扬声器',
                    value: true
                  },
                  { name: '7.1.4声道', value: true },
                  { name: '杜比全景声', value: true },
                  { name: 'Xopera个性化系统音主题包', value: true }
                ]
              }
            ]
          },
          {
            title: '外部配置',
            children: [
              {
                title: '灯光',
                children: [
                  {
                    name: 'X-BOT FACE 3.0\n-鹏翼之光LED贯穿式头灯\n-星河光剑LED贯穿式尾灯',
                    value: true
                  },
                  { name: '智能感应前大灯', value: true },
                  { name: 'IHB智能远光灯（自动切换远近光）', value: true }
                ]
              },
              {
                title: '外饰及功能',
                children: [
                  { name: '前挡风隔音玻璃', value: true },
                  { name: '优雅无框车门', value: true },
                  { name: '四门电吸锁', value: '○①' },
                  { name: '全车车窗一键升降+防夹+锁车自动闭窗', value: true },
                  { name: '后车窗隐私玻璃', value: true },
                  {
                    name: '全景天幕（Low-E+双层镀银隔热防紫外线）',
                    value: true
                  },
                  { name: '车顶行李架', value: true },
                  {
                    name: '外后视镜电动调节+记忆+除雾+锁车自动折叠',
                    value: true
                  },
                  { name: '智能隐藏式门把手', value: true },
                  { name: '雨量感应式自动雨刷', value: true },
                  { name: '电动尾门', value: true }
                ]
              }
            ]
          },
          {
            title: '全域安全',
            children: [
              {
                title: '360°主动安全',
                children: [
                  { name: '前向碰撞预警（FCW）', value: true },
                  { name: '自动紧急制动（AEB）', value: true },
                  { name: '车道偏离预警（LDW）', value: true },
                  { name: '盲区监测预警（BSD）', value: true },
                  { name: '车道变换预警（LCA）', value: true },
                  { name: '车道保持辅助（LKA）', value: true },
                  { name: '紧急车道偏离辅助（ELK）', value: true },
                  { name: '交通标志识别（TSR）', value: true },
                  { name: '后方横向来车预警（RCTA）', value: true },
                  { name: '开门预警（DOW）', value: true },
                  { name: '后向碰撞预警（RCW）', value: true },
                  { name: '驾驶员状态监测（DMS）', value: true },
                  { name: '胎压监测（TPMS）', value: true }
                ]
              },
              {
                title: '被动安全',
                children: [
                  { name: '高强度钢铝混合笼式车身', value: true },
                  { name: '主/副驾驶位安全气囊', value: true },
                  { name: '前排侧安全气囊', value: true },
                  { name: '前后排侧安全气帘', value: true },
                  { name: '主驾MSB电动安全带', value: true },
                  { name: '主驾/副驾安全带（预紧限力式）', value: true },
                  { name: '后排左/右侧3点式安全带（预紧限力式）', value: true },
                  { name: '后排中间3点式安全带（紧急锁止式）', value: true },
                  { name: '座椅安全带未系提醒', value: true },
                  { name: 'ISO FIX儿童安全座椅固定装置', value: true },
                  { name: '行车自动落锁+碰撞自动解锁', value: true },
                  { name: 'SCM防二次碰撞自动制动系统', value: true },
                  { name: '随车工具包 -含充气泵、三角警示牌等', value: true }
                ]
              }
            ]
          },
          {
            title: '个性化',
            children: [
              {
                title: '外观颜色',
                children: [
                  { name: '星云白', value: false, optional: true },
                  { name: '暗夜黑', value: false, optional: true },
                  { name: '新月银', value: false, optional: true },
                  { name: '星阙灰', value: false, optional: 6000 },
                  { name: '星际绿', value: false, optional: 6000 }
                ]
              },
              {
                title: '内饰颜色',
                children: [
                  { name: '气宇灰', value: false, optional: true },
                  { name: '晨辉棕', value: false, optional: true },
                  { name: '星夜黑', value: false, optional: true }
                ]
              }
            ]
          }
        ]
      },
      {
        subModelName: '702 Max',
        price: 309900,
        children: [
          {
            title: '基础参数',
            children: [
              {
                children: [
                  {
                    name: '长*宽*高（mm）',
                    value:
                      '4891*1937*1680（非空气悬架）/ 4891*1937*1670（空气悬架）'
                  },
                  {
                    name: '轴距（mm）',
                    value: '2998'
                  },
                  {
                    name: '后备箱容积（L）',
                    value: '660 / 1576（后排座椅放倒）'
                  },
                  {
                    name: '前舱储物盒容积（L）',
                    value: '71'
                  }
                ]
              }
            ]
          },
          {
            title: '全域800V高压SiC平台',
            children: [
              {
                children: [
                  { name: '3C超快充电池包', value: true },
                  { name: '电池能量（kWh）', value: '98' },
                  { name: '最大充电功率（kW）', value: '315' },
                  { name: '直流快充时间*（min）', value: '≥20（10%-80%）' },
                  { name: '单相交流充电模式', value: true },
                  { name: '驱动形式', value: '单电机后驱' },
                  { name: '驱动电机类型', value: '永磁同步电机' },
                  { name: '电机最大功率/扭矩', value: '230kW/430N·m' },
                  { name: '0-100km/h 加速时间*（s）', value: '6.4' },
                  { name: '最高车速（km/h）', value: '200' },
                  { name: '超低能耗*（kWh/100km）', value: '15.2' },
                  { name: '可调制动能量回收系统', value: true },
                  { name: 'V2L对外放电功率*（kW）', value: '3.3' },
                  { name: '预约充电功能', value: true },
                  { name: '目标SOC设置功能', value: true },
                  { name: '智能电动充电口盖', value: true },
                  { name: '热泵空调', value: true }
                ]
              }
            ]
          },
          {
            title: '高阶智能驾驶',
            children: [
              {
                title: '硬件能力',
                children: [
                  { name: 'NVIDIA DRIVE Orin超级计算平台', value: '2个' },
                  { name: '平台算力', value: '508TOPS' },
                  { name: '激光雷达', value: '2个' },
                  { name: '毫米波雷达', value: '5个' },
                  { name: '超声波传感器', value: '12个' },
                  { name: 'ADAS前视摄像头', value: '2个' },
                  { name: '侧视+后视摄像头', value: '5个' },
                  { name: '环视摄像头', value: '4个' },
                  { name: '车内DMS摄像头', value: '1个' },
                  { name: '亚米级高精定位单元', value: true }
                ]
              },
              {
                title: 'XPILOT智能辅助驾驶系统',
                children: [
                  { name: 'SR环境模拟显示', value: true },
                  { name: '高速NGP智能导航辅助驾驶', value: true },
                  { name: 'ACC自适应巡航', value: true },
                  { name: 'LCC车道居中辅助', value: true },
                  { name: 'ALC智能辅助变道', value: true },
                  { name: 'SAS智能限速辅助', value: true },
                  { name: '直线召唤', value: true },
                  { name: 'VPA停车场记忆泊车', value: true },
                  { name: 'ERPA增强版遥控泊车', value: true },
                  { name: 'AEP智能泊出辅助', value: true },
                  { name: 'EAP超级智能泊车辅助', value: true },
                  { name: 'RPA遥控泊车', value: true },
                  { name: '360°全景可视泊车辅助系统', value: true },
                  { name: '透明底盘', value: true }
                ]
              },
              {
                title: 'XNGP智能辅助驾驶系统（包含XPILOT全部功能）',
                children: [
                  { name: '高速NGP智能导航辅助驾驶增强版', value: true },
                  { name: '城市NGP智能导航辅助驾驶*', value: true },
                  { name: '全场景智能辅助驾驶', value: true },
                  { name: 'ACC-L自适应巡航增强版', value: true },
                  { name: 'LCC-L车道居中辅助增强版', value: true },
                  { name: 'VPA-L停车场记忆泊车增强版', value: true }
                ]
              }
            ]
          },
          {
            title: '全智能座舱',
            children: [
              {
                title: '智能硬件',
                children: [
                  { name: '高通骁龙SA8155P车规级7nm座舱芯片', value: true },
                  { name: '双14.96英寸2.4K超高清智能屏', value: true },
                  { name: '10.25英寸全液晶组合仪表', value: true }
                ]
              },
              {
                title: '全场景语音2.0',
                children: [
                  { name: '全车全时对话', value: true },
                  { name: '前后排四音区交互', value: true },
                  { name: '极速对话', value: true },
                  { name: '无网络对话', value: true },
                  { name: '连续对话、并行指令、可见即可说', value: true }
                ]
              },
              {
                title: '智慧座舱',
                children: [
                  { name: '智慧多场景座舱', value: true },
                  { name: '3D UI人机交互系统', value: true },
                  {
                    name: '车道级导航辅助/离线导航/无缝导航（车机手机互联互通）',
                    value: true
                  },
                  { name: '车载WiFi/4G网络', value: true },
                  { name: '智能寻车（查看车辆位置、鸣笛、闪灯）', value: true },
                  {
                    name: 'X_ID账号服务（座椅/方向盘/外后视镜位置、导航、音频等设置云同步）',
                    value: true
                  },
                  { name: '整车OTA升级服务', value: true },
                  { name: '远程诊断系统', value: true },
                  { name: '手机APP远程控车', value: true },
                  { name: '手机APP蓝牙钥匙+1把智能遥控钥匙', value: true },
                  { name: '迎宾模式（含座椅迎宾、迎宾音效等）', value: true },
                  { name: '主驾专享扬声器驾享/私享模式', value: true },
                  { name: '副驾独立蓝牙连接', value: true },
                  {
                    name: '取电及数据接口',
                    value: 'Type-C*2 (支持60W快充) + Type-A*3 + 12V*2'
                  },
                  { name: '双50W手机风冷无线快充*', value: true },
                  { name: '行车录像（5路影像）', value: true }
                ]
              },
              {
                title: '智能场景模式',
                children: [
                  { name: '冥想空间', value: true },
                  { name: '美妆空间', value: true },
                  { name: '睡眠空间（旅居模式/营地模式）', value: true }
                ]
              }
            ]
          },
          {
            title: '卓越驾控',
            children: [
              {
                children: [
                  {
                    name: '智能双腔空气悬架\n-包含智能双腔空气弹簧、智能可变阻尼减震器',
                    value: '○② ￥25,000'
                  },
                  {
                    name: '悬架形式',
                    value: '前双叉臂式独立悬架 / 后多连杆式独立悬架'
                  },
                  { name: '悬架材质', value: '高强度铝合金' },
                  {
                    name: '制动系统',
                    value: '前/后通风盘式制动（前四活塞固定卡钳）'
                  },
                  { name: '怀挡式换挡', value: true },
                  { name: '个性化驾驶模式', value: '标准/运动/舒适' },
                  { name: '极客模式', value: true },
                  { name: '弹射模式', value: true },
                  { name: '脱困模式', value: false },
                  { name: '智能四驱扭矩分配系统', value: false },
                  { name: '车身动态控制系统', value: true },
                  { name: '牵引力控制', value: true },
                  { name: '坡道保持辅助', value: true },
                  { name: '自动驻车Auto Hold', value: true },
                  {
                    name: '19英寸五辐轮毂\n-配255/55 R19 玛吉斯VS5 轮胎',
                    value: false
                  },
                  {
                    name: '21英寸多幅轮毂\n-配255/45 R21 米其林Pilot Sport EV轮胎',
                    value: true
                  },
                  {
                    name: '21英寸五辐轮毂\n-配255/45 R21 米其林Pilot Sport EV轮胎',
                    value: false,
                    optional: true
                  }
                ]
              }
            ]
          },
          {
            title: '全方位豪华舒适',
            children: [
              {
                title: '舒适座椅',
                children: [
                  { name: '无铬鞣Nappa真皮座椅材质', value: true },
                  {
                    name: '主驾座椅12向电动调节（含4向腰部支撑调节）',
                    value: true
                  },
                  { name: '副驾座椅6向电动调节', value: true },
                  { name: '副驾座椅4向电动腰部支撑', value: true },
                  { name: '副驾座椅2向电动小腿腿托', value: true },
                  { name: '主/副驾座椅位置记忆', value: true },
                  { name: '主/副驾座椅坐垫及靠背加热', value: true },
                  { name: '主/副驾座椅坐垫及靠背通风', value: true },
                  { name: '主/副驾座椅靠背专业级十点按摩', value: true },
                  {
                    name: '6种座椅按摩模式\n-波浪、蛇形、脉冲、猫步、双排、腰部',
                    value: true
                  },
                  { name: '后排座椅靠背大角度电动调节', value: true },
                  { name: '后排两侧座椅坐垫及靠背加热', value: true },
                  { name: '后排座椅中央扶手（带扶手杯架）', value: true },
                  { name: '后排座椅4:6比例放倒', value: true }
                ]
              },
              {
                title: '奢适座舱',
                children: [
                  { name: '真皮方向盘', value: true },
                  { name: '方向盘4向电动调节', value: true },
                  { name: '方向盘加热', value: true },
                  { name: '270°环抱式皮质包覆', value: true },
                  {
                    name: '智能香氛系统（含3种大师定制香）\n-琥珀光橘\n-香杉影木\n-白色清幽',
                    value: true
                  },
                  { name: '隐藏式情境律动氛围灯', value: true },
                  { name: '自动防眩目内后视镜', value: true },
                  { name: '副驾美颜化妆镜+环形LED化妆灯', value: true }
                ]
              },
              {
                title: '智能新风空调',
                children: [
                  { name: '智能双温区恒温空调', value: true },
                  { name: '前排空调电动出风口', value: true },
                  { name: '前排出风口多模式扫风', value: true },
                  { name: '后排空调出风口', value: true },
                  { name: 'CN95空调滤芯', value: true },
                  { name: 'PM2.5监控与显示', value: true },
                  { name: '车内空气调节/空气智能净化', value: true },
                  { name: 'AQS空气质量控制系统', value: true },
                  { name: '智能除味', value: true },
                  { name: '空调自干燥', value: true }
                ]
              },
              {
                title: 'Xopera音乐厅',
                children: [
                  {
                    name: '全车21个扬声器\n-2个主驾私享头枕扬声器\n-2个前排升降式高音扬声器，2个后排高音扬声器\n-5个中音扬声器，4个顶棚扬声器\n-4个低音扬声器，1个低音炮\n-1个车外扬声器',
                    value: true
                  },
                  { name: '7.1.4声道', value: true },
                  { name: '杜比全景声', value: true },
                  { name: 'Xopera个性化系统音主题包', value: true }
                ]
              }
            ]
          },
          {
            title: '外部配置',
            children: [
              {
                title: '灯光',
                children: [
                  {
                    name: 'X-BOT FACE 3.0\n-鹏翼之光LED贯穿式头灯\n-星河光剑LED贯穿式尾灯',
                    value: true
                  },
                  { name: '智能感应前大灯', value: true },
                  { name: 'IHB智能远光灯（自动切换远近光）', value: true }
                ]
              },
              {
                title: '外饰及功能',
                children: [
                  { name: '前挡风隔音玻璃', value: true },
                  { name: '优雅无框车门', value: true },
                  { name: '四门电吸锁', value: true },
                  { name: '全车车窗一键升降+防夹+锁车自动闭窗', value: true },
                  { name: '后车窗隐私玻璃', value: true },
                  {
                    name: '全景天幕（Low-E+双层镀银隔热防紫外线）',
                    value: true
                  },
                  { name: '车顶行李架', value: true },
                  {
                    name: '外后视镜电动调节+记忆+除雾+锁车自动折叠',
                    value: true
                  },
                  { name: '智能隐藏式门把手', value: true },
                  { name: '雨量感应式自动雨刷', value: true },
                  { name: '电动尾门', value: true }
                ]
              }
            ]
          },
          {
            title: '全域安全',
            children: [
              {
                title: '360°主动安全',
                children: [
                  { name: '前向碰撞预警（FCW）', value: true },
                  { name: '自动紧急制动（AEB）', value: true },
                  { name: '车道偏离预警（LDW）', value: true },
                  { name: '盲区监测预警（BSD）', value: true },
                  { name: '车道变换预警（LCA）', value: true },
                  { name: '车道保持辅助（LKA）', value: true },
                  { name: '紧急车道偏离辅助（ELK）', value: true },
                  { name: '交通标志识别（TSR）', value: true },
                  { name: '后方横向来车预警（RCTA）', value: true },
                  { name: '开门预警（DOW）', value: true },
                  { name: '后向碰撞预警（RCW）', value: true },
                  { name: '驾驶员状态监测（DMS）', value: true },
                  { name: '胎压监测（TPMS）', value: true }
                ]
              },
              {
                title: '被动安全',
                children: [
                  { name: '高强度钢铝混合笼式车身', value: true },
                  { name: '主/副驾驶位安全气囊', value: true },
                  { name: '前排侧安全气囊', value: true },
                  { name: '前后排侧安全气帘', value: true },
                  { name: '主驾MSB电动安全带', value: true },
                  { name: '主驾/副驾安全带（预紧限力式）', value: true },
                  { name: '后排左/右侧3点式安全带（预紧限力式）', value: true },
                  { name: '后排中间3点式安全带（紧急锁止式）', value: true },
                  { name: '座椅安全带未系提醒', value: true },
                  { name: 'ISO FIX儿童安全座椅固定装置', value: true },
                  { name: '行车自动落锁+碰撞自动解锁', value: true },
                  { name: 'SCM防二次碰撞自动制动系统', value: true },
                  { name: '随车工具包 -含充气泵、三角警示牌等', value: true }
                ]
              }
            ]
          },
          {
            title: '个性化',
            children: [
              {
                title: '外观颜色',
                children: [
                  { name: '星云白', value: false, optional: true },
                  { name: '暗夜黑', value: false, optional: true },
                  { name: '新月银', value: false, optional: true },
                  { name: '星阙灰', value: false, optional: 6000 },
                  { name: '星际绿', value: false, optional: 6000 }
                ]
              },
              {
                title: '内饰颜色',
                children: [
                  { name: '气宇灰', value: false, optional: true },
                  { name: '晨辉棕', value: false, optional: true },
                  { name: '星夜黑', value: false, optional: true }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    modelName: '650',
    children: [
      {
        subModelName: '650 Max',
        price: 359900,
        children: [
          {
            title: '基础参数',
            children: [
              {
                children: [
                  {
                    name: '长*宽*高（mm）',
                    value: '4891*1937*1670'
                  },
                  {
                    name: '轴距（mm）',
                    value: '2998'
                  },
                  {
                    name: '后备箱容积（L）',
                    value: '660 / 1576（后排座椅放倒）'
                  },
                  {
                    name: '前舱储物盒容积（L）',
                    value: '71'
                  }
                ]
              }
            ]
          },
          {
            title: '全域800V高压SiC平台',
            children: [
              {
                children: [
                  { name: '3C超快充电池包', value: true },
                  { name: '电池能量（kWh）', value: '98' },
                  { name: '最大充电功率（kW）', value: '315' },
                  { name: '直流快充时间*（min）', value: '≥20（10%-80%）' },
                  { name: '单相交流充电模式', value: true },
                  { name: '驱动形式', value: '双电机智能四驱' },
                  { name: '驱动电机类型', value: '交流异步电机/永磁同步电机' },
                  { name: '电机最大功率/扭矩', value: '405kW/717N·m' },
                  { name: '0-100km/h 加速时间*（s）', value: '3.9' },
                  { name: '最高车速（km/h）', value: '200' },
                  { name: '超低能耗*（kWh/100km）', value: '16' },
                  { name: '可调制动能量回收系统', value: true },
                  { name: 'V2L对外放电功率*（kW）', value: '3.3' },
                  { name: '预约充电功能', value: true },
                  { name: '目标SOC设置功能', value: true },
                  { name: '智能电动充电口盖', value: true },
                  { name: '热泵空调', value: true }
                ]
              }
            ]
          },
          {
            title: '高阶智能驾驶',
            children: [
              {
                title: '硬件能力',
                children: [
                  { name: 'NVIDIA DRIVE Orin超级计算平台', value: '2个' },
                  { name: '平台算力', value: '508TOPS' },
                  { name: '激光雷达', value: '2个' },
                  { name: '毫米波雷达', value: '5个' },
                  { name: '超声波传感器', value: '12个' },
                  { name: 'ADAS前视摄像头', value: '2个' },
                  { name: '侧视+后视摄像头', value: '5个' },
                  { name: '环视摄像头', value: '4个' },
                  { name: '车内DMS摄像头', value: '1个' },
                  { name: '亚米级高精定位单元', value: true }
                ]
              },
              {
                title: 'XPILOT智能辅助驾驶系统',
                children: [
                  { name: 'SR环境模拟显示', value: true },
                  { name: '高速NGP智能导航辅助驾驶', value: true },
                  { name: 'ACC自适应巡航', value: true },
                  { name: 'LCC车道居中辅助', value: true },
                  { name: 'ALC智能辅助变道', value: true },
                  { name: 'SAS智能限速辅助', value: true },
                  { name: '直线召唤', value: true },
                  { name: 'VPA停车场记忆泊车', value: true },
                  { name: 'ERPA增强版遥控泊车', value: true },
                  { name: 'AEP智能泊出辅助', value: true },
                  { name: 'EAP超级智能泊车辅助', value: true },
                  { name: 'RPA遥控泊车', value: true },
                  { name: '360°全景可视泊车辅助系统', value: true },
                  { name: '透明底盘', value: true }
                ]
              },
              {
                title: 'XNGP智能辅助驾驶系统（包含XPILOT全部功能）',
                children: [
                  { name: '高速NGP智能导航辅助驾驶增强版', value: true },
                  { name: '城市NGP智能导航辅助驾驶*', value: true },
                  { name: '全场景智能辅助驾驶', value: true },
                  { name: 'ACC-L自适应巡航增强版', value: true },
                  { name: 'LCC-L车道居中辅助增强版', value: true },
                  { name: 'VPA-L停车场记忆泊车增强版', value: true }
                ]
              }
            ]
          },
          {
            title: '全智能座舱',
            children: [
              {
                title: '智能硬件',
                children: [
                  { name: '高通骁龙SA8155P车规级7nm座舱芯片', value: true },
                  { name: '双14.96英寸2.4K超高清智能屏', value: true },
                  { name: '10.25英寸全液晶组合仪表', value: true }
                ]
              },
              {
                title: '全场景语音2.0',
                children: [
                  { name: '全车全时对话', value: true },
                  { name: '前后排四音区交互', value: true },
                  { name: '极速对话', value: true },
                  { name: '无网络对话', value: true },
                  { name: '连续对话、并行指令、可见即可说', value: true }
                ]
              },
              {
                title: '智慧座舱',
                children: [
                  { name: '智慧多场景座舱', value: true },
                  { name: '3D UI人机交互系统', value: true },
                  {
                    name: '车道级导航辅助/离线导航/无缝导航（车机手机互联互通）',
                    value: true
                  },
                  { name: '车载WiFi/4G网络', value: true },
                  { name: '智能寻车（查看车辆位置、鸣笛、闪灯）', value: true },
                  {
                    name: 'X_ID账号服务（座椅/方向盘/外后视镜位置、导航、音频等设置云同步）',
                    value: true
                  },
                  { name: '整车OTA升级服务', value: true },
                  { name: '远程诊断系统', value: true },
                  { name: '手机APP远程控车', value: true },
                  { name: '手机APP蓝牙钥匙+1把智能遥控钥匙', value: true },
                  { name: '迎宾模式（含座椅迎宾、迎宾音效等）', value: true },
                  { name: '主驾专享扬声器驾享/私享模式', value: true },
                  { name: '副驾独立蓝牙连接', value: true },
                  {
                    name: '取电及数据接口',
                    value: 'Type-C*2 (支持60W快充) + Type-A*3 + 12V*2'
                  },
                  { name: '双50W手机风冷无线快充*', value: true },
                  { name: '行车录像（5路影像）', value: true }
                ]
              },
              {
                title: '智能场景模式',
                children: [
                  { name: '冥想空间', value: true },
                  { name: '美妆空间', value: true },
                  { name: '睡眠空间（旅居模式/营地模式）', value: true }
                ]
              }
            ]
          },
          {
            title: '卓越驾控',
            children: [
              {
                children: [
                  {
                    name: '智能双腔空气悬架\n-包含智能双腔空气弹簧、智能可变阻尼减震器',
                    value: true
                  },
                  {
                    name: '悬架形式',
                    value: '前双叉臂式独立悬架 / 后多连杆式独立悬架'
                  },
                  { name: '悬架材质', value: '高强度铝合金' },
                  {
                    name: '制动系统',
                    value: '前/后通风盘式制动（前四活塞固定卡钳）'
                  },
                  { name: '怀挡式换挡', value: true },
                  { name: '个性化驾驶模式', value: '标准/运动/舒适' },
                  { name: '极客模式', value: true },
                  { name: '弹射模式', value: true },
                  { name: '脱困模式', value: true },
                  { name: '智能四驱扭矩分配系统', value: true },
                  { name: '车身动态控制系统', value: true },
                  { name: '牵引力控制', value: true },
                  { name: '坡道保持辅助', value: true },
                  { name: '自动驻车Auto Hold', value: true },
                  {
                    name: '19英寸五辐轮毂\n-配255/55 R19 玛吉斯VS5 轮胎',
                    value: false
                  },
                  {
                    name: '21英寸多幅轮毂\n-配255/45 R21 米其林Pilot Sport EV轮胎',
                    value: true
                  },
                  {
                    name: '21英寸五辐轮毂\n-配255/45 R21 米其林Pilot Sport EV轮胎',
                    value: false,
                    optional: true
                  }
                ]
              }
            ]
          },
          {
            title: '全方位豪华舒适',
            children: [
              {
                title: '舒适座椅',
                children: [
                  { name: '无铬鞣Nappa真皮座椅材质', value: true },
                  {
                    name: '主驾座椅12向电动调节（含4向腰部支撑调节）',
                    value: true
                  },
                  { name: '副驾座椅6向电动调节', value: true },
                  { name: '副驾座椅4向电动腰部支撑', value: true },
                  { name: '副驾座椅2向电动小腿腿托', value: true },
                  { name: '主/副驾座椅位置记忆', value: true },
                  { name: '主/副驾座椅坐垫及靠背加热', value: true },
                  { name: '主/副驾座椅坐垫及靠背通风', value: true },
                  { name: '主/副驾座椅靠背专业级十点按摩', value: true },
                  {
                    name: '6种座椅按摩模式\n-波浪、蛇形、脉冲、猫步、双排、腰部',
                    value: true
                  },
                  { name: '后排座椅靠背大角度电动调节', value: true },
                  { name: '后排两侧座椅坐垫及靠背加热', value: true },
                  { name: '后排座椅中央扶手（带扶手杯架）', value: true },
                  { name: '后排座椅4:6比例放倒', value: true }
                ]
              },
              {
                title: '奢适座舱',
                children: [
                  { name: '真皮方向盘', value: true },
                  { name: '方向盘4向电动调节', value: true },
                  { name: '方向盘加热', value: true },
                  { name: '270°环抱式皮质包覆', value: true },
                  {
                    name: '智能香氛系统（含3种大师定制香）\n-琥珀光橘\n-香杉影木\n-白色清幽',
                    value: true
                  },
                  { name: '隐藏式情境律动氛围灯', value: true },
                  { name: '自动防眩目内后视镜', value: true },
                  { name: '副驾美颜化妆镜+环形LED化妆灯', value: true }
                ]
              },
              {
                title: '智能新风空调',
                children: [
                  { name: '智能双温区恒温空调', value: true },
                  { name: '前排空调电动出风口', value: true },
                  { name: '前排出风口多模式扫风', value: true },
                  { name: '后排空调出风口', value: true },
                  { name: 'CN95空调滤芯', value: true },
                  { name: 'PM2.5监控与显示', value: true },
                  { name: '车内空气调节/空气智能净化', value: true },
                  { name: 'AQS空气质量控制系统', value: true },
                  { name: '智能除味', value: true },
                  { name: '空调自干燥', value: true }
                ]
              },
              {
                title: 'Xopera音乐厅',
                children: [
                  {
                    name: '全车21个扬声器\n-2个主驾私享头枕扬声器\n-2个前排升降式高音扬声器，2个后排高音扬声器\n-5个中音扬声器，4个顶棚扬声器\n-4个低音扬声器，1个低音炮\n-1个车外扬声器',
                    value: true
                  },
                  { name: '7.1.4声道', value: true },
                  { name: '杜比全景声', value: true },
                  { name: 'Xopera个性化系统音主题包', value: true }
                ]
              }
            ]
          },
          {
            title: '外部配置',
            children: [
              {
                title: '灯光',
                children: [
                  {
                    name: 'X-BOT FACE 3.0\n-鹏翼之光LED贯穿式头灯\n-星河光剑LED贯穿式尾灯',
                    value: true
                  },
                  { name: '智能感应前大灯', value: true },
                  { name: 'IHB智能远光灯（自动切换远近光）', value: true }
                ]
              },
              {
                title: '外饰及功能',
                children: [
                  { name: '前挡风隔音玻璃', value: true },
                  { name: '优雅无框车门', value: true },
                  { name: '四门电吸锁', value: true },
                  { name: '全车车窗一键升降+防夹+锁车自动闭窗', value: true },
                  { name: '后车窗隐私玻璃', value: true },
                  {
                    name: '全景天幕（Low-E+双层镀银隔热防紫外线）',
                    value: true
                  },
                  { name: '车顶行李架', value: true },
                  {
                    name: '外后视镜电动调节+记忆+除雾+锁车自动折叠',
                    value: true
                  },
                  { name: '智能隐藏式门把手', value: true },
                  { name: '雨量感应式自动雨刷', value: true },
                  { name: '电动尾门', value: true }
                ]
              }
            ]
          },
          {
            title: '全域安全',
            children: [
              {
                title: '360°主动安全',
                children: [
                  { name: '前向碰撞预警（FCW）', value: true },
                  { name: '自动紧急制动（AEB）', value: true },
                  { name: '车道偏离预警（LDW）', value: true },
                  { name: '盲区监测预警（BSD）', value: true },
                  { name: '车道变换预警（LCA）', value: true },
                  { name: '车道保持辅助（LKA）', value: true },
                  { name: '紧急车道偏离辅助（ELK）', value: true },
                  { name: '交通标志识别（TSR）', value: true },
                  { name: '后方横向来车预警（RCTA）', value: true },
                  { name: '开门预警（DOW）', value: true },
                  { name: '后向碰撞预警（RCW）', value: true },
                  { name: '驾驶员状态监测（DMS）', value: true },
                  { name: '胎压监测（TPMS）', value: true }
                ]
              },
              {
                title: '被动安全',
                children: [
                  { name: '高强度钢铝混合笼式车身', value: true },
                  { name: '主/副驾驶位安全气囊', value: true },
                  { name: '前排侧安全气囊', value: true },
                  { name: '前后排侧安全气帘', value: true },
                  { name: '主驾MSB电动安全带', value: true },
                  { name: '主驾/副驾安全带（预紧限力式）', value: true },
                  { name: '后排左/右侧3点式安全带（预紧限力式）', value: true },
                  { name: '后排中间3点式安全带（紧急锁止式）', value: true },
                  { name: '座椅安全带未系提醒', value: true },
                  { name: 'ISO FIX儿童安全座椅固定装置', value: true },
                  { name: '行车自动落锁+碰撞自动解锁', value: true },
                  { name: 'SCM防二次碰撞自动制动系统', value: true },
                  { name: '随车工具包 -含充气泵、三角警示牌等', value: true }
                ]
              }
            ]
          },
          {
            title: '个性化',
            children: [
              {
                title: '外观颜色',
                children: [
                  { name: '星云白', value: false, optional: true },
                  { name: '暗夜黑', value: false, optional: true },
                  { name: '新月银', value: false, optional: true },
                  { name: '星阙灰', value: false, optional: 6000 },
                  { name: '星际绿', value: false, optional: 6000 }
                ]
              },
              {
                title: '内饰颜色',
                children: [
                  { name: '气宇灰', value: false, optional: true },
                  { name: '晨辉棕', value: false, optional: true },
                  { name: '星夜黑', value: false, optional: true }
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
  '1 .“○①”代表“舒享套装”选装包，选装价格为10,000元。包含美妆空间、副驾座椅4向电动腰部支撑、副驾座椅2向电动小腿腿托、主/副驾座椅靠背专业级十点按摩、6种座椅按摩模式、后排两侧座椅坐垫及靠背加热、智能香氛系统、方向盘4向电动调节、方向盘加热、副驾美颜化妆镜+环形LED化妆灯、四门电吸锁；',
  '2 .“○②”代表“智能双腔空气悬架”选装包，选装价格为25,000元；',
  '3 .CLTC续航里程*和超低能耗*，是在试验室特定环境下，按CLTC标准工况测试得出。在实际使用场景中，受不同的环境温度、路况、车辆状态、驾驶习惯等因素影响，会导致实际续航里程和能耗有所差异；',
  '4 .直流快速充电时间*是在试验室特定环境下测试得出。在实际使用场景中，受不同的环境温度、车辆状态、充电桩状态等因素影响，会导致充电时间有所差异；',
  '5 .0-100km/h加速时间*是在试验场地特定环境下测试得出。在实际使用场景中，受不同的路面条件、环境温度湿度、车辆状态等因素影响，会导致有所差异；',
  '6 .V2L对外放电功率*为V2L对外放电功能的输出功率，对外放电装置（放电插排/放电枪等）非标配，请登录小鹏汽车官网，天猫旗舰店，直营销售店或第三方授权店购买；',
  '7 .城市NGP导航辅助驾驶*目前支持北京、上海、广州、深圳、佛山，至2023年底将开放更多城市；',
  '8 .双50W手机风冷无线快充*需要手机支持无线充电功能，充电功率及充电速度，受不同的手机型号、手机状态等因素影响，会导致有所差异；',
  '9 .除特别标注外，表中性能参数值均在标准配置状态下测试得出；',
  '10 .智能辅助驾驶系统无法应对所有交通、天气与路况。驾驶员必须始终注意观察当前交通状况，如果智能辅助驾驶系统未能提供适当的转向辅助或者保持适当的车距与车速，则需要驾驶员主动干预。请阅读车主手册中有关此功能的所有章节，了解该功能的限制情况。驾驶员在使用功能前应意识到这些限制情况。在交通状况复杂多变、冰雪雨路面湿滑天气、道路积水'
]
