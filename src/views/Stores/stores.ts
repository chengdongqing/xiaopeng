const stores = [
  {
    id: 87,
    storeName: '小鹏汽车成都金牛万达体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/mmexport1664356289625.jpg',
    address: '成都市金牛区一环路北三段1号1栋【1F】层【综合楼C-1F-D-B】号',
    lng: 104.08,
    lat: 30.69,
    telephone: '028-86736707',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 47,
    storeName: '小鹏汽车成都天府艺术公园体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/20230525-133418.jpg',
    address: '四川省成都市金牛区被三环路一段111号14栋1层101/102/103',
    lng: 104.022692,
    lat: 30.711411,
    telephone: '028-87500673',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 673,
    storeName: '小鹏汽车德阳洋洋百货体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/09-24/11-55-210674-2064868722.jpg',
    address: '四川省德阳市旌阳区长江西路二段1号',
    lng: 104.388,
    lat: 31.127399,
    telephone: '17608882828',
    serviceTelephone: '',
    businessHours: '09:30:00-22:00:00',
    weekendBusinessHours: '09:30:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1306,
    storeName: '小鹏汽车厦门海上世界体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/厦门.jpg',
    address:
      '福建省厦门市湖里区东港北路海上世界购物中心L1层L147号铺（2号门入口处）',
    lng: 118.076024,
    lat: 24.489641,
    telephone: '0592-5666135',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1535,
    storeName: '小鹏汽车北京乐多港万达卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/乐多港.jpeg',
    address: '北京市昌平区城南街道南口路29号1F-1009.1010号',
    lng: 116.19,
    lat: 40.23,
    telephone: '01052172285',
    serviceTelephone: '',
    businessHours: '10:00:00-21:30:00',
    weekendBusinessHours: '10:00:00-21:30:00',
    types: [1],
    status: 1
  },
  {
    id: 12,
    storeName: '小鹏汽车广州琶洲销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/广州琶洲.jpg',
    address: '广东省广州市海珠区科韵南路133号自编1号',
    lng: 113.374001,
    lat: 23.0902,
    telephone: '020-22281196',
    serviceTelephone: '020-31959569',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 701,
    storeName: '小鹏汽车青岛万象城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/10-26/16-49-440085-1448219580.jpg',
    address: '山东省青岛市市南区山东路6号万象城二期CL107号',
    lng: 120.377998,
    lat: 36.0672,
    telephone: '053280903232',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1653,
    storeName: '小鹏汽车北京世纪金源卫星店',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '北京市海淀区远大路一号世纪金源购物中心东区一层A03通道',
    lng: 116.28904,
    lat: 39.958407,
    telephone: '18810307765',
    serviceTelephone: '',
    businessHours: '10:00:00-21:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1791,
    storeName: '小鹏汽车江门蓬江销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/门头1.jpg',
    address: '江门市蓬江区建设三路215号3栋首层',
    lng: 113.061437,
    lat: 22.646192,
    telephone: '0750-3222272',
    serviceTelephone: '0750-3222288',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 427,
    storeName: '小鹏汽车杭州远洋乐堤港体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/09-22/17-27-540704-841911084.jpg',
    address: '小河街道丽水路58号乐堤港 B04 1F 层 A196',
    lng: 120.141998,
    lat: 30.305599,
    telephone: '057181955657',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 77,
    storeName: '小鹏汽车宁波绿地缤纷城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2019/10-12/14-07-340609-961123053.jpg',
    address: '宁波市江北区绿地缤纷城1-104',
    lng: 121.558998,
    lat: 29.881901,
    telephone: '057427869393',
    serviceTelephone: '',
    businessHours: '09:30:00-22:00:00',
    weekendBusinessHours: '09:30:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 146,
    storeName: '小鹏汽车佛山顺德悦然广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-19/11-17-470526-1650936770.jpg',
    address:
      '广东省佛山市顺德区北滘镇君兰社区诚德路1号美的悦然广场1F层1008-1009商铺',
    lng: 113.216003,
    lat: 22.931299,
    telephone: '075726609310',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 847,
    storeName: '小鹏汽车北京丰科万达广场卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/953871870976/丰科门店照片.jpg',
    address: '北京市丰台区丰科路6号北京丰科万达广场一层',
    lng: 116.298932,
    lat: 39.824233,
    telephone: '15010991080',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 731,
    storeName: '小鹏汽车滨州万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/11-10/14-59-260535-472881121.jpg',
    address: '山东省滨州市滨城区渤海十一路滨州万达广场1楼1032铺',
    lng: 117.994003,
    lat: 37.402699,
    telephone: '05438600068',
    serviceTelephone: '',
    businessHours: '09:30:00-22:00:00',
    weekendBusinessHours: '09:30:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1233,
    storeName: '小鹏汽车荆州万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/04-20/14-08-450706-1175945806.jpg',
    address: '湖北省荆州市荆州区北京西路508号荆州万达广场1层1008号商铺',
    lng: 112.223999,
    lat: 30.3395,
    telephone: '07168211766',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1141,
    storeName: '小鹏汽车太原晋祠路销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/20251601451808/飞书20221205-144721.jpg',
    address: '山西省太原市万柏林区新晋祠路36号汇豪新能源汽车城B04号',
    lng: 112.526001,
    lat: 37.825802,
    telephone: '03517982666',
    serviceTelephone: '0351-7983666',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1369,
    storeName: '小鹏汽车杭州龙湖丁桥天街体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/杭州.jpg',
    address: '浙江省杭州市上城区丁兰街道丁城路515号A-1f-46a',
    lng: 120.230089,
    lat: 30.353101,
    telephone: '0571-86998756',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 639,
    storeName: '小鹏汽车眉山万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/10-11/17-06-380116490499182.png',
    address: '文忠街333号万达广场1层1009号',
    lng: 103.838997,
    lat: 30.0728,
    telephone: '02837605252',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 461,
    storeName: '小鹏汽车上海康桥360广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968636436000/新田360广场.jpg',
    address: '上海市浦东新区秀浦路668号新田360广场 L105+L106号商铺',
    lng: 121.565002,
    lat: 31.125299,
    telephone: '021-38256353',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1135,
    storeName: '小鹏汽车呼和浩特海西路销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/17722108321760/20230202-100254.jpg',
    address: '呼和浩特市回民区海拉尔西街恒茂汽车中心1号',
    lng: 111.620003,
    lat: 40.824299,
    telephone: '04713312980',
    serviceTelephone: '0471-3312981',
    businessHours: '09:00:00-18:30:00',
    weekendBusinessHours: '09:00:00-18:30:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 403,
    storeName: '小鹏汽车石家庄国际汽车园销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/11528870263488/石家庄国际汽车园门头照片新.jpg',
    address: '石家庄市长安区建华大街北二环国际汽车园区西门内30米路北',
    lng: 114.546795,
    lat: 38.071626,
    telephone: '031189298889',
    serviceTelephone: '0311-89298880',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 959,
    storeName: '小鹏汽车武汉汉阳摩尔城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/11-30/16-08-140560327478252.jpg',
    address: '武汉市汉阳区龙阳大道特6号武汉摩尔城一期B座栋1层L1B-038-1',
    lng: 114.208,
    lat: 30.558701,
    telephone: '02784588828',
    serviceTelephone: '',
    businessHours: '09:30:00-22:00:00',
    weekendBusinessHours: '09:30:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 603,
    storeName: '小鹏汽车中山利和购物广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-27/17-52-130313-1337695747.png',
    address: '广东省中山市中山三路16号利和购物广场L1-110',
    lng: 113.384003,
    lat: 22.512501,
    telephone: '076089881399',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 739,
    storeName: '小鹏汽车南充王府井体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968637644320/南充王府井门头照.jpeg',
    address: '四川省南充市高坪区江东大道中路五段(白塔公园旁)王府井购物中心1F-1',
    lng: 106.103996,
    lat: 30.787001,
    telephone: '08173570588',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 389,
    storeName: '小鹏汽车深圳KKONE体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969170048544/深圳KKONE小.jpg',
    address: '深圳市福田区滨河大道9289号KK ONE 一楼 L162/163 小鹏汽车',
    lng: 114.027,
    lat: 22.528,
    telephone: '075582777072',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 399,
    storeName: '小鹏汽车杭州城西银泰城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2020/12-15/15-12-490399-2106986083.jpg',
    address: '萍水街城西银泰城3号门一楼1F020商铺  小鹏汽车',
    lng: 120.108002,
    lat: 30.3001,
    telephone: '057186980163',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 453,
    storeName: '小鹏汽车上海浦东长泰广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968636436000/长泰广场.jpg',
    address: '上海市浦东新区祖冲之路1181号长泰广场1F175室',
    lng: 121.601997,
    lat: 31.2059,
    telephone: '021-50409929',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 95,
    storeName: '小鹏汽车常州天宁吾悦广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/07-31/11-29-090605-36492582.jpg',
    address: '江苏省常州市天宁区天宁吾悦广场1楼1042号',
    lng: 120.010002,
    lat: 31.7647,
    telephone: '051988117188',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1045,
    storeName: '小鹏汽车北京宜家荟聚体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/17722108321760/宜家荟聚.jpg',
    address: '北京市大兴区欣宁街15号宜家荟聚一层01E150号',
    lng: 116.325996,
    lat: 39.7869,
    telephone: '010-60204117',
    serviceTelephone: '',
    businessHours: '09:00:00-22:00:00',
    weekendBusinessHours: '09:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 913,
    storeName: '小鹏汽车聊城万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-03/10-01-580269281635103.jpg',
    address: '山东省聊城市东昌府区柳园北路39号聊城万达广场1楼',
    lng: 115.985001,
    lat: 36.478699,
    telephone: '06355090999',
    serviceTelephone: '',
    businessHours: '09:30:00-22:00:00',
    weekendBusinessHours: '09:30:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1047,
    storeName: '小鹏汽车长治关村汽贸城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/20230704-163840.jpg',
    address: '山西省长治市长治高新技术开发区北外环路关村汽贸城东第一排（2号）',
    lng: 113.149182,
    lat: 36.224437,
    telephone: '0355-3334555',
    serviceTelephone: '',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [1],
    status: 1
  },
  {
    id: 627,
    storeName: '小鹏汽车福州南站阳光天地体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/43647355811232/阳光天地2(1).jpg',
    address: '福州市仓山区胪安路与胪中路交叉路口阳光天地L1007',
    lng: 119.385002,
    lat: 25.986799,
    telephone: '059187803316',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1379,
    storeName: '小鹏汽车惠州惠南销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/20230217-182529(1).jpg',
    address: '惠州市惠城区三栋镇惠南汽车城小鹏汽车新车交付中心',
    lng: 114.458597,
    lat: 22.98102,
    telephone: '0752-2828789',
    serviceTelephone: '0752-2311123',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 581,
    storeName: '小鹏汽车广州花都雅乐城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/06-02/14-36-330473-1473139240.jpg',
    address: '广东省广州市花都区永发路14号雅乐城1025',
    lng: 113.189003,
    lat: 23.4223,
    telephone: '02086972142',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 617,
    storeName: '小鹏汽车广州番禺奥园广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-15/16-18-330154241163222.jpeg',
    address: '广州市番禺区福德路281号奥园广场1F层129、130号',
    lng: 113.358002,
    lat: 22.9244,
    telephone: '02084504655',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 693,
    storeName: '小鹏汽车贵阳云岩万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/门头.jpeg',
    address: '贵州省贵阳市云岩区新添大道南段302号万达广场1F1031',
    lng: 106.742935,
    lat: 26.619125,
    telephone: '0851-86305056',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 975,
    storeName: '小鹏汽车乐山万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/01-06/16-18-120886-813250368.jpg',
    address: '四川省乐山市市中区万达广场662号1层1033A号',
    lng: 103.737999,
    lat: 29.619801,
    telephone: '08332097785',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1619,
    storeName: '小鹏汽车郑州锦艺城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/官网.jpg',
    address: '河南省郑州市中原区桐柏路与棉纺路交叉口锦艺城C区1号楼1-25号',
    lng: 113.606889,
    lat: 34.762995,
    telephone: '0371-65015088',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 943,
    storeName: '小鹏汽车恩施和润城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/04-07/14-02-510085-1102837025.jpg',
    address: '湖北省恩施市施州大道168号和润城一楼小鹏汽车体验中心',
    lng: 109.484001,
    lat: 30.2969,
    telephone: '07188208881',
    serviceTelephone: '',
    businessHours: '09:30:00-21:30:00',
    weekendBusinessHours: '09:30:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 307,
    storeName: '小鹏汽车无锡新吴万达体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421227799072/新吴万达照片.jpg',
    address: '无锡市新吴区新吴万达广场a座一层1008小鹏汽车体验中心',
    lng: 120.365997,
    lat: 31.485001,
    telephone: '051083133193',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1225,
    storeName: '小鹏汽车厦门海沧销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/厦门海沧.jpg',
    address: '厦门市海沧区马青路1283号',
    lng: 118.015999,
    lat: 24.489,
    telephone: '0592-5280671',
    serviceTelephone: '0592-2106197',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 75,
    storeName: '小鹏汽车成都大慈寺旗舰体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/成都大慈寺旗舰店照片.jpg',
    address: '成都市锦江区蜀都大道大慈寺路与东顺城中街交叉路口西侧量子光',
    lng: 104.085999,
    lat: 30.654301,
    telephone: '028-85910176',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 73,
    storeName: '小鹏汽车重庆龙湖时代天街体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/970016119328/小鹏汽车重庆大坪龙湖体验中心.jpg',
    address: '重庆市渝中区长江二路174号C馆-G层-17铺',
    lng: 106.513,
    lat: 29.5361,
    telephone: '02363263353',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1385,
    storeName: '小鹏汽车珠海上冲销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/珠海上冲.jpg',
    address: '广东省珠海市香洲区华威路115号',
    lng: 113.494174,
    lat: 22.287625,
    telephone: '0756-8619789',
    serviceTelephone: '0756-8622823',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 865,
    storeName: '小鹏汽车中山小榄汇丰城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/10-28/16-37-060717-1096481349.jpeg',
    address: '广东省中山市小榄镇怡丰东路3号汇丰城L1-A1-5',
    lng: 113.264999,
    lat: 22.620701,
    telephone: '076089882899',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 531,
    storeName: '小鹏汽车郑州正弘城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/06-16/11-46-470286-1000589019.png',
    address: '郑州市金水区东风路与花园路交汇处正弘城独栋D4-101',
    lng: 113.681999,
    lat: 34.797001,
    telephone: '037189996557',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 811,
    storeName: '小鹏汽车濮阳恒丰中央广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-15/16-17-260460-1354589687.jpeg',
    address: '河南省濮阳市中原路与丽都路交叉口恒丰购物公园一层145号商铺',
    lng: 115.061996,
    lat: 35.776402,
    telephone: '03936102888',
    serviceTelephone: '',
    businessHours: '09:00:00-22:00:00',
    weekendBusinessHours: '09:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 661,
    storeName: '小鹏汽车苏州大悦春风里体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/09-26/17-49-080406-1384861231.jpg',
    address: '苏州市相城区御窑路1699号大悦春风里1F L1-62号商铺',
    lng: 120.608002,
    lat: 31.400499,
    telephone: '051265106690',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 15,
    storeName: '小鹏汽车北京合生汇体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969392043552/合生汇.jpg',
    address: '北京市朝阳区西大望路甲22号院1号楼合生汇购物中心5层',
    lng: 116.478996,
    lat: 39.894001,
    telephone: '01067722426',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 933,
    storeName: '小鹏汽车深圳观澜汽车城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/623B654A-82C9-45EE-ACDD-3CE696609A27.jpeg',
    address: '深圳市龙华区观澜街道新澜社区观光路1319-4号201',
    lng: 114.034598,
    lat: 22.723179,
    telephone: '0755-29037888',
    serviceTelephone: '0755-29536888',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1199,
    storeName: '小鹏汽车青岛万科未来城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/青岛万科.jpeg',
    address: '青岛市市北区四流南路66号丙L1层L118、L119号',
    lng: 120.3736,
    lat: 36.1425,
    telephone: '0532-80919896',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1363,
    storeName: '小鹏汽车成都智电世界体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/成都智电.jpg',
    address: '四川省成都市天府新区华府大道一段5号L501',
    lng: 104.07,
    lat: 30.53,
    telephone: '028-87346272',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 891,
    storeName: '小鹏汽车洛阳万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-15/16-18-4909411969753581.jpeg',
    address: '河南省洛阳市涧西区万达广场一层1号中庭',
    lng: 112.406998,
    lat: 34.655102,
    telephone: '037963188666',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1587,
    storeName: '小鹏汽车北京王府井银泰in88体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/北京in88.jpg',
    address: '北京市东城区王府井大街88号1幢一层L1007-2、L1008号',
    lng: 116.41,
    lat: 39.92,
    telephone: '010-53658793',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 213,
    storeName: '小鹏汽车北京清河销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-19/09-39-2702871054466495.jpeg',
    address: '北京市海淀区西三旗桥南880米路西',
    lng: 116.333,
    lat: 40.0476,
    telephone: '01068876660',
    serviceTelephone: '010-68876660',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 84,
    storeName: '小鹏汽车广州东方宝泰体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/07-23/17-00-490390603436386.jpeg',
    address: '广州市天河区林和中路63号东方宝泰B1层1145号',
    lng: 113.324997,
    lat: 23.1469,
    telephone: '02038803513',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 809,
    storeName: '小鹏汽车马鞍山印象汇体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-03/16-10-500356212089086.jpg',
    address: '安徽省马鞍山市花山区雨山东路863号商场一层01-60/61号',
    lng: 118.516998,
    lat: 31.672199,
    telephone: '05558366767',
    serviceTelephone: '',
    businessHours: '09:30:00-21:30:00',
    weekendBusinessHours: '09:30:00-21:30:00',
    types: [1],
    status: 1
  },
  {
    id: 853,
    storeName: '小鹏汽车淮安新城吾悦广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/10-26/16-31-3209421881051313.jpg',
    address: '江苏省淮安市淮安区凤里路吾悦广场1层1042/1043号',
    lng: 119.123001,
    lat: 33.553101,
    telephone: '051789682888',
    serviceTelephone: '',
    businessHours: '10:00:00-21:30:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 53,
    storeName: '小鹏汽车石家庄长安万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/11528870263488/石家庄长安万达门头照片新.jpg',
    address:
      '河北省石家庄市长安区中山东路583号 石家庄长安万达广场室内步行街1F层1032号',
    lng: 114.563004,
    lat: 38.0443,
    telephone: '031189298882',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 381,
    storeName: '小鹏汽车泉州中骏世界城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/20251602960160/中骏门头.jpg',
    address: '泉州市丰泽区安吉南路69号中骏世界城1层M130/129B',
    lng: 118.658997,
    lat: 24.920401,
    telephone: '0595-27559815',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 239,
    storeName: '小鹏汽车嘉兴经开万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-19/10-54-510045-674168287.jpg',
    address:
      '浙江省嘉兴市经济技术开发区龙凤路与新盛西路的交汇处万达广场一楼1061号商铺',
    lng: 120.718002,
    lat: 30.7526,
    telephone: '057382192209',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1067,
    storeName: '小鹏汽车银川德胜销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/32143488601056/门头照片（最终版）.jpg',
    address: '宁夏银川市贺兰县德胜工业园区恒安南街163号小鹏汽车',
    lng: 106.321999,
    lat: 38.542,
    telephone: '0951-8639086',
    serviceTelephone: '0951-8639089',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1273,
    storeName: '小鹏汽车杭州城北销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/门店左侧照片.jpg',
    address: '浙江省杭州市余杭区莫干山路1803号',
    lng: 120.08006,
    lat: 30.358376,
    telephone: '0571-26303689',
    serviceTelephone: '13067888159',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1005,
    storeName: '小鹏汽车贵阳万象汇旗舰体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/贵阳万象汇.jpg',
    address: '贵州省贵阳市观山湖区华润万象汇L136号',
    lng: 106.622002,
    lat: 26.619499,
    telephone: '0851-84808014',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1283,
    storeName: '小鹏汽车上海龙湖金汇天街体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968636436000/金汇龙湖天街.jpg',
    address: '上海市奉贤区金汇镇南行港路388号-1F-38铺',
    lng: 121.511153,
    lat: 30.968886,
    telephone: '021-37519390',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1,
    storeName: '小鹏汽车广州总部体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '广州市天河区长兴街岑村松岗大街8号108房',
    lng: 113.385002,
    lat: 23.1593,
    telephone: '020-66805289',
    serviceTelephone: '',
    businessHours: '09:00:00-20:30:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1759,
    storeName: '小鹏汽车保定东二环销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/1.jpg',
    address: '河北省保定市莲池区东二环422号贺阳中学北行500米路西',
    lng: 115.535462,
    lat: 38.827761,
    telephone: '0312-6663737',
    serviceTelephone: '0312-2168303',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 215,
    storeName: '小鹏汽车北京亚市销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/北京亚市.jpg',
    address: '中国北京市昌平区北辰亚运村汽车交易市场3-10',
    lng: 116.425212,
    lat: 40.100513,
    telephone: '010-53656635',
    serviceTelephone: '18515126277',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 8,
    storeName: '小鹏汽车杭州来福士体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421178851872/杭州来福士.jpg',
    address: '杭州市江干区新业路228号',
    lng: 120.212997,
    lat: 30.248699,
    telephone: '057186688733',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 825,
    storeName: '小鹏汽车龙岩万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/10-29/14-57-0409851151475179.png',
    address: '福建省龙岩市新罗区曹溪街道双龙路1号万达广场1F-10及JY-CD-11',
    lng: 117.022003,
    lat: 25.056,
    telephone: '05972797999',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 285,
    storeName: '小鹏汽车佛山南海环宇城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-06/18-49-3807901973263879.jpg',
    address: '佛山市南海区石龙南路与佛平四路交叉口南海环宇城一层L134B',
    lng: 113.188004,
    lat: 23.0329,
    telephone: '0757-86259257',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1383,
    storeName: '小鹏汽车广州白云销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/HEN_5028(1).jpg',
    address: '广州市白云区白云大道北1399号109房',
    lng: 113.305387,
    lat: 23.233093,
    telephone: '020-35620230',
    serviceTelephone: '020-35620142',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1227,
    storeName: '小鹏汽车杭州龙湖西溪天街体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/05-17/15-38-000082619179643.jpeg',
    address: '杭州市西湖区余杭塘路蒋墩路交汇口A-1F-06b,A-1F-07a号',
    lng: 120.068001,
    lat: 30.294399,
    telephone: '057186687968',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 459,
    storeName: '小鹏汽车南昌青山湖销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/01-05/11-35-080184-1563826439.jpeg',
    address: '南昌市青山湖区京东南大道天香佳苑商铺111-115号',
    lng: 115.966003,
    lat: 28.6495,
    telephone: '079188829669',
    serviceTelephone: '0791-88258893',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 142,
    storeName: '小鹏汽车杭州青山湖宝龙广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/C3584A97-BE1D-4287-B3AA-0DBED9EEEF7C.jpeg',
    address: '杭州市临安区科技大道2588号青山湖宝龙广场一楼',
    lng: 119.828553,
    lat: 30.258106,
    telephone: '0571-85062298',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 911,
    storeName: '小鹏汽车南通万象城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/11-25/09-45-010353-1625152642.jpg',
    address: '江苏省南通市崇川区北大街111号万象城购物中心1层-L146号商铺',
    lng: 120.859001,
    lat: 32.051601,
    telephone: '051385505188',
    serviceTelephone: '',
    businessHours: '10:00:00-21:30:00',
    weekendBusinessHours: '10:00:00-21:30:00',
    types: [1],
    status: 1
  },
  {
    id: 211,
    storeName: '小鹏汽车北京来广营销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/北京来广营.jpg',
    address: '北京市朝阳区来广营西路18号',
    lng: 116.448997,
    lat: 40.021599,
    telephone: '01084919991',
    serviceTelephone: '010-84918885',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 469,
    storeName: '小鹏汽车济宁太白路万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-19/10-18-450264551457826.jpg',
    address: '山东省济宁市任城区太白东路55号',
    lng: 116.603996,
    lat: 35.408298,
    telephone: '05372366066',
    serviceTelephone: '',
    businessHours: '09:00:00-22:00:00',
    weekendBusinessHours: '09:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1279,
    storeName: '小鹏汽车济宁爱琴海体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/微信图片_20230412114734.jpg',
    address: '山东省济宁市高新区爱琴海购物公园一楼1033A1033B号商铺',
    lng: 116.695033,
    lat: 35.423925,
    telephone: '0537-2377787',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 919,
    storeName: '小鹏汽车永康万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/微信图片_20230119141458.jpg',
    address: '浙江省永康市经济开发区长城西大道399号永康万达广场2号门1061商铺',
    lng: 120.06,
    lat: 28.9,
    telephone: '15372990775',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1073,
    storeName: '小鹏汽车深圳万象前海旗舰体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-30/09-48-110265-1938159646.jpg',
    address: '深圳市南山区桂湾四路169号万象前海 L127',
    lng: 113.899002,
    lat: 22.530899,
    telephone: '075586528452',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1211,
    storeName: '小鹏汽车南昌红谷滩万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/43647355811232/南昌红谷滩万达门店.jpg',
    address: '江西省南昌市红谷滩区沙井街道会展路999号万达广场1031B',
    lng: 115.848999,
    lat: 28.6924,
    telephone: '0791-82090805',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 201,
    storeName: '小鹏汽车苏州凯马广场销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/凯马广场.jpg',
    address: '江苏省苏州市吴中区中山东路166号',
    lng: 120.545799,
    lat: 31.258635,
    telephone: '0512-67991799',
    serviceTelephone: '0512-62991888',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1291,
    storeName: '小鹏汽车合肥万象汇体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/合肥万象汇.jpg',
    address: '合肥市庐阳区临泉路7388号华润万象汇商场1FL166号铺位',
    lng: 117.257781,
    lat: 31.887356,
    telephone: '0551-62191858',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 629,
    storeName: '小鹏汽车重庆龙湖金沙天街体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/970016119328/金沙.jpg',
    address: '重庆市沙坪坝区北站东路188号附3号重庆金沙天街B馆-1F-46C',
    lng: 106.459,
    lat: 29.5546,
    telephone: '18996306325',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 113,
    storeName: '小鹏汽车南宁青秀万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2019/10-12/11-59-1209621539825532.jpg',
    address: '南宁市青秀区东葛路118号万达广场（南宁青秀店）1F-1019',
    lng: 108.37,
    lat: 22.83,
    telephone: '0771-5648188',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 765,
    storeName: '小鹏汽车杭州西湖旗舰体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421178851872/杭州西湖.jpg',
    address: '浙江省杭州市上城区东坡路2号',
    lng: 120.163002,
    lat: 30.2519,
    telephone: '057186800931',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1217,
    storeName: '小鹏汽车福州高新万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/43647355811232/高新万达1(1).jpg',
    address: '福州市闽侯县高新万达广场一楼1050-1051商铺小鹏汽车展厅',
    lng: 119.226997,
    lat: 25.996401,
    telephone: '0591-83205670',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 535,
    storeName: '小鹏汽车深圳坪山益田假日体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-06/18-41-3102051636060554.jpg',
    address: '深圳市坪山区坪山街道六联社区深汕路168号益田假日广场L1-12-1',
    lng: 114.338997,
    lat: 22.692801,
    telephone: '075589660149',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 241,
    storeName: '小鹏汽车金华汽车城销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/02-23/18-21-350411-1879349195.png',
    address: '浙江省金华市金东区汽车城西九路',
    lng: 119.686985,
    lat: 29.142849,
    telephone: '057982080801',
    serviceTelephone: '0579-82412877',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1269,
    storeName: '小鹏汽车舟山凯虹广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/舟山.jpg',
    address: '浙江省舟山市临城海宇道111号凯虹广场L1-21\\22铺位',
    lng: 122.213156,
    lat: 29.984431,
    telephone: '0580-2620550',
    serviceTelephone: '',
    businessHours: '09:30:00-21:30:00',
    weekendBusinessHours: '09:30:00-21:30:00',
    types: [1],
    status: 1
  },
  {
    id: 429,
    storeName: '小鹏汽车杭州奥体印象城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421178851872/杭州奥体.jpg',
    address: '飞虹路与金鸡路交叉口街（路）奥体印象城L1 层第 L1-46/47 号',
    lng: 120.251999,
    lat: 30.2239,
    telephone: '13372503193',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 74,
    storeName: '小鹏汽车西安高新万达体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/970039839264/高新万达.jpg',
    address: '西安市雁塔区木塔寨西路719号高新万达广场1F1033',
    lng: 108.891998,
    lat: 34.208302,
    telephone: '029-84500300',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 889,
    storeName: '小鹏汽车南昌朝阳天虹商场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/01-10/16-10-0603091220462867.jpg',
    address: '江西省南昌市西湖区朝阳天虹商场1楼1024铺',
    lng: 115.863998,
    lat: 28.6353,
    telephone: '079188860882',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 719,
    storeName: '小鹏汽车河源坚基购物中心体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/11-09/15-15-400684-1790574257.jpg',
    address: '广东省河源市源城区越王大道139号L14-115',
    lng: 114.720001,
    lat: 23.7708,
    telephone: '07623669809',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1747,
    storeName: '小鹏汽车深圳竹子林体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/官网点亮图1.jpg',
    address:
      '广东省深圳市福田区沙头街道金城社区红树林路3号联合华鹏竹子林汽车城市展厅二层B3-1',
    lng: 114.001218,
    lat: 22.530815,
    telephone: '0755-23727251',
    serviceTelephone: '',
    businessHours: '09:30:00-18:30:00',
    weekendBusinessHours: '09:30:00-18:30:00',
    types: [1],
    status: 1
  },
  {
    id: 82,
    storeName: '小鹏汽车长沙新城吾悦体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2019/09-19/11-47-2607951310086610.jpg',
    address:
      '湖南省长沙市长沙县东四路与特立路489号长沙松雅湖新城吾悦广场1023铺',
    lng: 113.100998,
    lat: 28.253099,
    telephone: '4008315656',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 539,
    storeName: '小鹏汽车成都龙泉世茂广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968637644320/成都龙泉世茂门头照.jpeg',
    address: '驿都大道与天鹅西湖南路交接处',
    lng: 104.189003,
    lat: 30.582199,
    telephone: '02886517365',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1101,
    storeName: '小鹏汽车衡水爱琴海体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/飞书20230301-150231.jpg',
    address: '河北省衡水市桃城区育才南大街1033号爱琴海购物公园L1-03',
    lng: 115.667904,
    lat: 37.717131,
    telephone: '0318-699 9992',
    serviceTelephone: '',
    businessHours: '09:30:00-21:30:00',
    weekendBusinessHours: '09:30:00-21:30:00',
    types: [1],
    status: 1
  },
  {
    id: 369,
    storeName: '小鹏汽车珠海金湾体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/小鹏汽车珠海金湾体验中心3.jpeg',
    address: '广东省珠海市金湾区华发商都A区1012铺位',
    lng: 113.362503,
    lat: 22.113517,
    telephone: '0756-7236869',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 343,
    storeName: '小鹏汽车上海南京西路旗舰体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968636436000/南京西路.jpg',
    address: '上海市静安区南京西路762号汇银大厦1楼C单元',
    lng: 121.462997,
    lat: 31.231199,
    telephone: '021-37787517',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1595,
    storeName: '小鹏汽车九江万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/九江.jpg',
    address: '江西省九江市濂溪区德化路666号万达广场1A18B',
    lng: 116.014986,
    lat: 29.693474,
    telephone: '0792-8990008',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 785,
    storeName: '小鹏汽车衢州万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/09-02/18-55-4400811612294033.jpg',
    address: '浙江省衢州市柯城区花园街道荷花中路555号万达广场1F1036商铺',
    lng: 118.878998,
    lat: 28.9265,
    telephone: '05703355286',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 955,
    storeName: '小鹏汽车西宁南川销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/32143488601056/西宁南川官网照片.jpg',
    address: '青海西宁城中区同安路182号7号楼',
    lng: 101.653457,
    lat: 36.522516,
    telephone: '0971-2295500',
    serviceTelephone: '0971-2210324',
    businessHours: '09:00:00-18:30:00',
    weekendBusinessHours: '09:00:00-18:30:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1589,
    storeName: '小鹏汽车上海中环百联体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/上海.jpg',
    address: '上海市普陀区真光路1288号G08-02F01-01-0067小鹏汽车',
    lng: 121.383605,
    lat: 31.245619,
    telephone: '021-62372088',
    serviceTelephone: '',
    businessHours: '10:00:00-21:30:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 349,
    storeName: '小鹏汽车郑州绿地新都会360体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/10-11/18-58-340203-1685487001.jpg',
    address: '郑州市金水区金水东路80号新田360广场一楼西厅A125',
    lng: 113.767998,
    lat: 34.7701,
    telephone: '037186170656',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 479,
    storeName: '小鹏汽车重庆金菱车世界销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/970016119328/小鹏汽车重庆金菱车世界销售服务中心.jpg',
    address: '重庆市南岸区双龙路白鹤工业园区1号（金陵车世界小鹏汽车）',
    lng: 106.561,
    lat: 29.5092,
    telephone: '02362308022',
    serviceTelephone: '023-62600869',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1322,
    storeName: '小鹏汽车南昌恒望销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/43647355811232/微信图片_20230215171342.jpg',
    address: '江西省南昌市新建区望城新区武功山大道4138号',
    lng: 115.724411,
    lat: 28.622386,
    telephone: '0791-83962069',
    serviceTelephone: '0791-83962092',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1661,
    storeName: '小鹏汽车南宁江南万达体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150014_75108.jpg',
    address: '广西省南宁市江南区亭洪路48-1号江南万达广场1F-1025',
    lng: 108.31403,
    lat: 22.790247,
    telephone: '07715770788',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 3
  },
  {
    id: 971,
    storeName: '小鹏汽车兰州安宁销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/04-14/12-04-300548-1005887272.jpg',
    address: '甘肃省兰州市安宁区北滨河西路（沙井驿汽车物流园）',
    lng: 103.625,
    lat: 36.140999,
    telephone: '09317681680',
    serviceTelephone: '0931-7614680',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 551,
    storeName: '小鹏汽车温州龙湾销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-08/11-07-590036-562381394.jpg',
    address: '浙江省温州市龙湾区高一路178号小鹏汽车展厅',
    lng: 120.723291,
    lat: 27.968194,
    telephone: '057785620699',
    serviceTelephone: '0577-85805866',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1305,
    storeName: '小鹏汽车深圳天河城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/IMG_0127.jpeg',
    address: '广东省深圳市罗湖区东晓街道太白路3008号天河城L1-119&120&121',
    lng: 114.13488,
    lat: 22.578988,
    telephone: '0755-25366676',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1775,
    storeName: '小鹏汽车天津卫津南路销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/46124646022944/门头照片.jpg',
    address: '天津市西青区卫津南路与绥江桥东南100米',
    lng: 117.194785,
    lat: 39.055901,
    telephone: '022-23958787',
    serviceTelephone: '022-23959191',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1781,
    storeName: '小鹏汽车桂林高新万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/WechatIMG1926.jpg',
    address: '桂林市七星区穿山东路43号桂林高新万达广场室内步行街1F层1038号商铺',
    lng: 110.320125,
    lat: 25.242181,
    telephone: '0771-5712806',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 895,
    storeName: '小鹏汽车徐州两山口体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/地图点亮图片1.jpg',
    address: '江苏省徐州市云龙区欣欣路两山口新能源汽车产业园内',
    lng: 117.241754,
    lat: 34.209227,
    telephone: '0516-83619789',
    serviceTelephone: '',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1],
    status: 1
  },
  {
    id: 699,
    storeName: '小鹏汽车哈尔滨机场路销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/哈尔滨机场路.png',
    address: '黑龙江省哈尔滨市道里区崂山路3号',
    lng: 126.532997,
    lat: 45.698002,
    telephone: '0451-58860999',
    serviceTelephone: '0451-87322325',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1235,
    storeName: '小鹏汽车佛山岭南天地体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/null/STE_5556.jpg',
    address: '广东省佛山市禅城区祖庙大街2号岭南天地ZM201',
    lng: 113.116275,
    lat: 23.029927,
    telephone: '0757-86259860',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1643,
    storeName: '小鹏汽车上海青浦销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/46124646022944/img_v2_9ac0c693-419e-428a-8ede-10e69f6d1aag.jpg',
    address: '上海市青浦区香花桥街道北青公路9399号5幢一层',
    lng: 121.12893,
    lat: 31.18579,
    telephone: '021-59116660',
    serviceTelephone: '021-59116651',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 5,
    storeName: '小鹏汽车北京成寿寺销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969392043552/图片.jpg',
    address: '北京市朝阳区成寿寺路66号院小鹏汽车',
    lng: 116.446577,
    lat: 39.843077,
    telephone: '01087669963',
    serviceTelephone: '010-87610266',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 965,
    storeName: '小鹏汽车长沙星城天地体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421262829088/长沙星城天地门头照.jpg',
    address: '湖南省长沙市雨花区湘府路和韶山路交汇处步步高星城天地G045A&L1044',
    lng: 113.016998,
    lat: 28.1119,
    telephone: '073182836588',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1741,
    storeName: '小鹏汽车杭州东教路销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/杭州东教路.jpg',
    address: '浙江省杭州市拱墅区东教路611号',
    lng: 120.152524,
    lat: 30.32886,
    telephone: '0571-28001888',
    serviceTelephone: '0571-28006999',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 341,
    storeName: '小鹏汽车上海静安大融城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968636436000/大融城.jpg',
    address: '上海市静安区沪太路111弄静安大融城1楼小鹏汽车',
    lng: 121.427002,
    lat: 31.2799,
    telephone: '021-36036178',
    serviceTelephone: '',
    businessHours: '09:00:00-22:00:00',
    weekendBusinessHours: '09:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 102,
    storeName: '小鹏汽车深圳宝安京基百纳体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-19/11-26-580863-16208415.jpg',
    address: '深圳市宝安区沙井京基百纳购物广场L1层103号店面',
    lng: 113.806,
    lat: 22.727301,
    telephone: '075527905052',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1298,
    storeName: '小鹏汽车嘉兴桐乡吾悦广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421178851872/嘉兴桐乡吾悦.jpg',
    address: '浙江省嘉兴市桐乡市梧桐街道振兴东路（东）439号吾悦广场1036铺',
    lng: 120.58889,
    lat: 30.62826,
    telephone: '13819191739',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1143,
    storeName: '小鹏汽车安庆弘阳广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/安庆门店照片.jpg',
    address: '安徽省安庆市宜秀区迎宾东路90号弘阳广场1F-1036号',
    lng: 117.100673,
    lat: 30.545159,
    telephone: '0556-5906789',
    serviceTelephone: '',
    businessHours: '09:00:00-22:00:00',
    weekendBusinessHours: '09:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 9,
    storeName: '小鹏汽车武汉光谷K11体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/36834809418208/K11.jpg',
    address: '武汉市洪山区关山大道355号光谷K11艺术购物中心一楼',
    lng: 114.413002,
    lat: 30.493299,
    telephone: '02787677976',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 715,
    storeName: '小鹏汽车海口友谊南海城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421547696672/youyi.png',
    address: '海口市龙华区南海大道115号友谊南海城1F-002',
    lng: 110.29558,
    lat: 19.996549,
    telephone: '089866960090',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-23:00:00',
    types: [1],
    status: 1
  },
  {
    id: 124,
    storeName: '小鹏汽车江门万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/江门.jpg',
    address: '广东省江门市蓬江区广场西路蓬江万达广场15幢1层-1F-03号铺',
    lng: 113.084999,
    lat: 22.6182,
    telephone: '07503088912',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 717,
    storeName: '小鹏汽车郴州万华汽车城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/外墙.jpg',
    address: '湖南省郴州市北湖区万华汽车城A18栋一楼',
    lng: 112.952107,
    lat: 25.741963,
    telephone: '0735-2886111',
    serviceTelephone: '0735-2702277',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1733,
    storeName: '小鹏汽车岳阳临港汽车城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/岳阳临港汽车城.jpg',
    address: '岳阳市城陵矶新港区联港路以西汽车城内',
    lng: 113.172997,
    lat: 29.4217,
    telephone: '07308695666',
    serviceTelephone: '0730-8795666',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 995,
    storeName: '小鹏汽车衡阳杨柳汽贸城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/DSC_8028.JPG',
    address: '湖南省衡阳市蒸湘区蔡伦大道杨柳汽贸城小鹏园区',
    lng: 112.575147,
    lat: 26.872555,
    telephone: '07348256766',
    serviceTelephone: '0734-8157666',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 711,
    storeName: '小鹏汽车日照万象汇体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/03-10/15-47-140211-271783450.jpg',
    address: '山东省日照市东港区万象汇L-112铺位',
    lng: 119.532997,
    lat: 35.420601,
    telephone: '06337071888',
    serviceTelephone: '',
    businessHours: '10:00:00-21:30:00',
    weekendBusinessHours: '10:00:00-21:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1247,
    storeName: '小鹏汽车常州薛家销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/null/官网照片原图.jpg',
    address: '江苏省常州市新北区薛家镇顺园路88-3号',
    lng: 119.933626,
    lat: 31.854186,
    telephone: '0519-85776691',
    serviceTelephone: '051985506691',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 851,
    storeName: '小鹏汽车枣庄万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/null/debc2b982efc52198eccde959791e4a.jpg',
    address: '山东省枣庄市薛城区临城街道永兴路126号万达广场一楼1083A,1083B',
    lng: 117.266998,
    lat: 34.792999,
    telephone: '06325199667',
    serviceTelephone: '',
    businessHours: '09:30:00-22:00:00',
    weekendBusinessHours: '09:30:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 705,
    storeName: '小鹏汽车青岛银川西路销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/10-26/16-59-130022890167528.jpg',
    address: '山东省青岛市南区银川西路21号',
    lng: 120.412003,
    lat: 36.084599,
    telephone: '053280907388',
    serviceTelephone: '0532-80907366',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1373,
    storeName: '小鹏汽车北京西三旗万象汇体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/北京.jpg',
    address: '北京市海淀区建材城东33号西三旗万象汇1层L119小鹏汽车体验店',
    lng: 116.366359,
    lat: 40.061023,
    telephone: '010-68351210',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 987,
    storeName: '小鹏汽车包头九原万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-24/10-46-020729951941617.jpg',
    address: '包头市九原区沙河街九原万达广场1层1050号',
    lng: 109.953003,
    lat: 40.606098,
    telephone: '04725102777',
    serviceTelephone: '',
    businessHours: '10:00:00-21:30:00',
    weekendBusinessHours: '10:00:00-21:30:00',
    types: [1],
    status: 1
  },
  {
    id: 941,
    storeName: '小鹏汽车郑州前程大道销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/null/官网照片最终版本.jpg',
    address: '河南省郑州经济技术开发区前程大道339号9号厂房B区',
    lng: 113.877988,
    lat: 34.715051,
    telephone: '0371-60163986',
    serviceTelephone: '0371-60156708',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1221,
    storeName: '小鹏汽车西安长安销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/970039839264/西安长安.jpg',
    address: '陕西省西安市国家民用航天产业基地东长安街958号鹏飞商业楼',
    lng: 108.997994,
    lat: 34.152987,
    telephone: '029-85831993',
    serviceTelephone: '029-85831996',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 483,
    storeName: '小鹏汽车广州白云万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/02-07/10-10-280119-1296557928.jpg',
    address: '广州市白云区云城东路501号万达广场1L-1107B/1108A/1108B/1109号',
    lng: 113.266998,
    lat: 23.1731,
    telephone: '02037412342',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1167,
    storeName: '小鹏汽车武汉光谷销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/武汉光谷销售.jpg',
    address: '武汉市江夏区藏龙岛九凤街1号金鑫龙腾汽车园',
    lng: 114.414001,
    lat: 30.431499,
    telephone: '02759105803',
    serviceTelephone: '18971250383',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 319,
    storeName: '小鹏汽车广州悦汇城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '广东省广州市荔湾区西湾路150-3号小鹏汽车',
    lng: 113.243088,
    lat: 23.150037,
    telephone: '020-33974021',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1033,
    storeName: '小鹏汽车亳州杜仲路万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/杜仲路.jpg',
    address: '亳州市经济开发区希夷大道 1008 号（万达广场3号门）',
    lng: 115.779999,
    lat: 33.828999,
    telephone: '0558-5818000',
    serviceTelephone: '',
    businessHours: '09:00:00-21:30:00',
    weekendBusinessHours: '09:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 14,
    storeName: '小鹏汽车深圳坂田销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969170048544/深圳坂田.jpg',
    address: '深圳市龙岗区坂田街道吉华路466号新天下华赛区',
    lng: 114.074991,
    lat: 22.643499,
    telephone: '075584502985',
    serviceTelephone: '0755-84502981',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1127,
    storeName: '小鹏汽车天津天河城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969854962208/天河城.jpg',
    address: '天津市和平区和平路263号天津天河城购物中心1-01/02/03',
    lng: 117.204002,
    lat: 39.127102,
    telephone: '022-27316480',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 511,
    storeName: '小鹏汽车驻马店玖隆茂体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/04-26/14-16-2502571943644424.png',
    address: '驻马店市置地大道与乐山路交叉口玖隆茂商场一层',
    lng: 114.028,
    lat: 33.003502,
    telephone: '03962999006',
    serviceTelephone: '',
    businessHours: '09:30:00-21:30:00',
    weekendBusinessHours: '09:30:00-21:30:00',
    types: [1],
    status: 1
  },
  {
    id: 487,
    storeName: '小鹏汽车济南龙湖天街体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-15/16-19-350123478833869.jpeg',
    address: '济南市历区奥体龙湖天街A座3号门18-19',
    lng: 117.110001,
    lat: 36.667702,
    telephone: '19819753311',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 455,
    storeName: '小鹏汽车北京姚家园销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/17722108321760/姚家园.jpg',
    address: '北京市朝阳区姚家园路72号',
    lng: 116.528,
    lat: 39.940701,
    telephone: '01085824384',
    serviceTelephone: '13269698283',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 323,
    storeName: '小鹏汽车上海印象城MeGa体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968636436000/南翔印象城.jpg',
    address: '上海市嘉定区南翔镇陈翔公路2299号印象城MEGA 01-21店铺',
    lng: 121.306317,
    lat: 31.304468,
    telephone: '021-59555712',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1009,
    storeName: '小鹏汽车深圳光明蓝鲸世界体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-31/18-11-580253-340743557.jpg',
    address: '深圳市光明区凤凰街道东坑社区龙光玖龙台栋C座L1-23',
    lng: 113.933998,
    lat: 22.745199,
    telephone: '075528886636',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1773,
    storeName: '小鹏汽车青岛永旺梦乐城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/展厅1.jpg',
    address: '山东省青岛市漓江西路1669号永旺梦乐城西馆1L小鹏汽车',
    lng: 120.164855,
    lat: 35.931848,
    telephone: '0532-86881766',
    serviceTelephone: '',
    businessHours: '09:00:00-22:00:00',
    weekendBusinessHours: '09:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1599,
    storeName: '小鹏汽车南宁兴宁区三塘销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/南宁2.png',
    address: '广西南宁市兴宁区兴工北路汽车市场11-20号',
    lng: 108.413271,
    lat: 22.876405,
    telephone: '0771-5770788',
    serviceTelephone: '0771-3172321',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 353,
    storeName: '小鹏汽车佛山顺德销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/03-12/17-18-0800051802862854.jpg',
    address: '佛山市顺德区大良街道新松社区105国道新松路段6号',
    lng: 113.233002,
    lat: 22.8557,
    telephone: '075726609336',
    serviceTelephone: '0757-26609335',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 271,
    storeName: '小鹏汽车汕头万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-19/11-24-15059649510710.jpg',
    address: '广东省汕头市金平区万达广场首层',
    lng: 116.682999,
    lat: 23.381399,
    telephone: '075489922469',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1299,
    storeName: '小鹏汽车中山港口销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/JPEG_20220922_182214.jpg',
    address: '广东省中山市港口镇港口大道11号SOHO车城2号/5号展厅',
    lng: 113.38992,
    lat: 22.569314,
    telephone: '0760-88889877',
    serviceTelephone: '0760-86188678',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1801,
    storeName: '小鹏汽车上海吴中路销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/吴中路门头照片.jpg',
    address: '上海市徐汇区吴中路100号10幢一楼B区',
    lng: 121.414227,
    lat: 31.187286,
    telephone: '021-54652063',
    serviceTelephone: '021-54652592',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 953,
    storeName: '小鹏汽车肇庆万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-27/16-07-440384-844936120.jpg',
    address: '广东省肇庆市鼎湖区桃园路东16号肇庆鼎湖万达广场1F1035号商铺',
    lng: 112.563004,
    lat: 23.141199,
    telephone: '07582620666',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 649,
    storeName: '小鹏汽车上海LCM置汇旭辉广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421574343200/20230221-144254.jpg',
    address: '上海市浦东新区张杨路2389弄1-2号置汇旭辉广场S5-1F-33B号商铺',
    lng: 121.556,
    lat: 31.241699,
    telephone: '02150339720',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 689,
    storeName: '小鹏汽车长春欧亚新生活体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/11-11/17-33-050596727120342.jpg',
    address: '吉林省长春市朝阳区延安大街99号欧亚新生活购物广场',
    lng: 125.306,
    lat: 43.864101,
    telephone: '043182887000',
    serviceTelephone: '',
    businessHours: '09:30:00-22:00:00',
    weekendBusinessHours: '09:30:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 817,
    storeName: '小鹏汽车蚌埠吾悦广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-01/10-39-4307961000684897.jpg',
    address: '安徽省蚌埠市蚌山区解放路与涂山路交汇处吾悦广场1028商铺',
    lng: 117.389999,
    lat: 32.9328,
    telephone: '05523738800',
    serviceTelephone: '',
    businessHours: '09:30:00-21:30:00',
    weekendBusinessHours: '09:30:00-21:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1330,
    storeName: '小鹏汽车茂名大道销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/37454131089856/20230424-172103.jpg',
    address: '广东省茂名市电白区坡心镇高水路278号之二',
    lng: 110.961203,
    lat: 21.613503,
    telephone: '0668-2660988',
    serviceTelephone: '0668-2190300',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 387,
    storeName: '小鹏汽车赣州万象城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/43647355811232/赣州万象城门店.jpg',
    address: '江西省赣州市章贡区水南镇登峰大道8号万象城1楼L183号',
    lng: 114.926003,
    lat: 25.815599,
    telephone: '07975169160',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 887,
    storeName: '小鹏汽车长沙凯德壹中心体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-09/14-10-320256559666429.jpg',
    address: '湖南省长沙市岳麓区茶子山东路112号凯德壹中心LG-16B/17',
    lng: 112.958,
    lat: 28.242201,
    telephone: '17373151515',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1049,
    storeName: '小鹏汽车张家口白云街销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/门头中.jpg',
    address: '河北省张家口市经济技术开发区白云街1号万国汽配城后',
    lng: 114.94,
    lat: 40.78,
    telephone: '0313-2018992',
    serviceTelephone: '',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [1],
    status: 1
  },
  {
    id: 297,
    storeName: '小鹏汽车湛江粤西国际车城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/74501690895500_.pic_hd.jpg',
    address: '湛江市麻章区瑞云北路101号 小鹏汽车粤西国际车城店',
    lng: 110.316398,
    lat: 21.291844,
    telephone: '0759-3338787',
    serviceTelephone: '',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1],
    status: 1
  },
  {
    id: 257,
    storeName: '小鹏汽车长沙洋湖销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/01-25/17-08-4901851941529865.jpg',
    address: '湖南省长沙市岳麓区学士街道云栖路599号艾邦科技产业园1栋101号',
    lng: 112.900037,
    lat: 28.141046,
    telephone: '0731-89780000',
    serviceTelephone: '0731-89780000',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1795,
    storeName: '小鹏汽车温岭东南汽车城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/20230827-082711.jpg',
    address:
      '浙江省台州市温岭市温峤镇华祥路7号（华祥路9号东南汽车城1幢010121室）北面间',
    lng: 121.309605,
    lat: 28.397404,
    telephone: '0576-82726767',
    serviceTelephone: '',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1195,
    storeName: '小鹏汽车上海松江销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/16660432412960/松江销服.jpg',
    address: '上海市松江工业区美能达路316号',
    lng: 121.251999,
    lat: 31.0243,
    telephone: '02157630612',
    serviceTelephone: '021-57630612',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 925,
    storeName: '小鹏汽车西安熙地港体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/970039839264/西安熙地港.jpg',
    address: '陕西省西安市未央区未央路170号CITYON熙地港L1-024&025',
    lng: 108.945,
    lat: 34.338299,
    telephone: '02989299251',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1703,
    storeName: '小鹏汽车邯郸渚河路销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150014_75108.jpg',
    address: '河北省邯郸市邯山区渚河路2号',
    lng: 114.47241,
    lat: 36.588099,
    telephone: '0310-5512688',
    serviceTelephone: '',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [1],
    status: 1
  },
  {
    id: 463,
    storeName: '小鹏汽车北京张仪村销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/01-28/11-01-440754-1092783862.jpg',
    address: '北京市丰台区张仪村路23号院内甲12号',
    lng: 116.230705,
    lat: 39.882246,
    telephone: '01068635518',
    serviceTelephone: '010-68635515',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 529,
    storeName: '小鹏汽车重庆光环购物公园体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/970016119328/小鹏汽车重庆光环购物公园体验中心.jpg',
    address: '重庆市两江新区湖彩路118号的光环购物公园LG层A-LG-55号',
    lng: 106.52812,
    lat: 29.649705,
    telephone: '02363368185',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 249,
    storeName: '小鹏汽车肇庆端州销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/肇庆端州.jpg',
    address: '广东省肇庆市端州区黄岗街道东岗西路123号小鹏汽车',
    lng: 112.500999,
    lat: 23.098801,
    telephone: '0758-2838983',
    serviceTelephone: '0758- 2839369',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 929,
    storeName: '小鹏汽车嘉兴城南大厦销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421178851872/嘉兴城南大厦.jpg',
    address: '浙江省嘉兴经济技术开发区骏力路523号',
    lng: 120.717906,
    lat: 30.720269,
    telephone: '057382088207',
    serviceTelephone: '0573-82087080',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 997,
    storeName: '小鹏汽车南宁五象汽车广场销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421551819296/IMG_7435.jpg',
    address:
      '广西壮族自治区南宁市良庆区东风路50号五象汽车生活广场二期30/31/32号铺位及二层铺位',
    lng: 108.349169,
    lat: 22.720295,
    telephone: '07713361299',
    serviceTelephone: '0771-3300766',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 13,
    storeName: '小鹏汽车上海杨浦销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968636436000/杨浦军工路.jpg',
    address: '上海市杨浦区军工路1599号',
    lng: 121.54492,
    lat: 31.314213,
    telephone: '02155271511',
    serviceTelephone: '02155396293',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 441,
    storeName: '小鹏汽车南京龙湖河西天街体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/09-07/12-04-270486205436036.jpg',
    address: '云龙山路与楠溪江东街交汇处河西天街-1F-21a',
    lng: 118.737999,
    lat: 31.9883,
    telephone: '02586665836',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 395,
    storeName: '小鹏汽车成都万象城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968637644320/成都万象城门头照.jpeg',
    address: '双庆路8号万象城二期L1层C-141号',
    lng: 104.115997,
    lat: 30.6497,
    telephone: '028-60801161',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1797,
    storeName: '小鹏汽车义乌北苑销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/37454131089856/20230825-230218.jpg',
    address: '浙江省金华市义乌市北苑路300号',
    lng: 120.04,
    lat: 29.32,
    telephone: '13958408700',
    serviceTelephone: '13958408700',
    businessHours: '08:00:00-17:30:00',
    weekendBusinessHours: '08:00:00-17:30:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 841,
    storeName: '小鹏汽车宜春万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/11-22/09-58-200960-242924359.jpg',
    address: '宜春市袁州区万达广场一楼1031号店铺',
    lng: 114.425003,
    lat: 27.8057,
    telephone: '07953658886',
    serviceTelephone: '',
    businessHours: '09:00:00-22:00:00',
    weekendBusinessHours: '09:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 60,
    storeName: '小鹏汽车成都空港销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968637644320/成都空港官网照片.jpg',
    address: '四川省成都市双流区成双大道南段566号',
    lng: 103.957001,
    lat: 30.5977,
    telephone: '028-62406846',
    serviceTelephone: '028-86667753',
    businessHours: '09:00:00-19:00:00',
    weekendBusinessHours: '09:00:00-19:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 585,
    storeName: '小鹏汽车郑州中原西路销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-08/20-24-290351680358622.jpg',
    address: '河南省郑州市中原区中原西路大中原汽车城C区16号',
    lng: 113.487999,
    lat: 34.754002,
    telephone: '037158650001',
    serviceTelephone: '0371-58650002',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1267,
    storeName: '小鹏汽车深圳坂田星河COCO PARK体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/null/外立面（右）.jpg',
    address:
      '深圳市龙岗区坂田街道南坑社区雅宝路1号(10号线雅宝C出口)星河WORLD. COCO PARK  L1S-002/L1S-003/L1S-003A号铺',
    lng: 114.061504,
    lat: 22.604035,
    telephone: '0755-86910666',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 681,
    storeName: '小鹏汽车珠海南屏销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/null/珠海南屏.png',
    address: '广东省珠海市香洲区南屏科技工业园屏西三路1号2#汽车展厅一层B区展厅',
    lng: 113.457497,
    lat: 22.208252,
    telephone: '0756-8336866',
    serviceTelephone: '0756-6969266',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 733,
    storeName: '小鹏汽车常熟永旺梦乐城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/08-24/10-38-3301761252023220.jpg',
    address: '江苏省苏州市常熟区东南开发区永旺梦乐城一楼119-120铺位',
    lng: 120.778999,
    lat: 31.6014,
    telephone: '051252318980',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 85,
    storeName: '小鹏汽车许昌万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/许昌万达.jpg',
    address: '河南省许昌市魏都区许都路777号万达广场1F1035号铺位',
    lng: 113.859001,
    lat: 34.031101,
    telephone: '0374-7099888',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 275,
    storeName: '小鹏汽车天津空港销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969854962208/空港.jpg',
    address: '天津市滨海新区空港经济区环河北路62号',
    lng: 117.377998,
    lat: 39.161098,
    telephone: '02284916261',
    serviceTelephone: '022-24925560',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1799,
    storeName: '小鹏汽车合肥包公大道销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/5042.jpg',
    address: '安徽省合肥市肥东县包公大道与护城路交叉口西南角合肥渝皖汽车园内',
    lng: 117.412563,
    lat: 31.88984,
    telephone: '0551-65221650',
    serviceTelephone: '0551-65215666',
    businessHours: '08:03:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 641,
    storeName: '小鹏汽车深圳龙华天虹体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969170048544/深圳龙华天虹小.jpg',
    address: '民治街道大岭社区人民路2020号',
    lng: 114.021004,
    lat: 22.6271,
    telephone: '075521033420',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 655,
    storeName: '小鹏汽车上海仲盛世界商城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968636436000/仲盛世界商城.jpg',
    address: '上海市闵行区都市路5001号仲盛世界商城GF14E号商铺',
    lng: 121.387001,
    lat: 31.1071,
    telephone: '02134306907',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1527,
    storeName: '小鹏汽车武汉东西湖销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/46124646022944/20230414-093354.jpg',
    address: '武汉市东西湖区金银湖街环湖中路东、田园东路北A-3栋1层1室',
    lng: 114.172438,
    lat: 30.673235,
    telephone: '027-83217103',
    serviceTelephone: '18164020383',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 61,
    storeName: '小鹏汽车宁波印象城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421178851872/宁波印象城.jpg',
    address: '浙江省宁波市鄞州区钱湖北街（路）288号 印象城F1层01-15商铺',
    lng: 121.566002,
    lat: 29.833,
    telephone: '0574-88258852',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1031,
    storeName: '小鹏汽车上海长宁龙之梦体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/16660432412960/龙之梦.jpg',
    address: '上海市长宁路1018号龙之梦购物公园B2层B203-A',
    lng: 121.417,
    lat: 31.219101,
    telephone: '02162141395',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 101,
    storeName: '小鹏汽车太原龙城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2020/12-05/15-04-390824-177379732.jpg',
    address: '山西省太原市小店区马练营路59号新汇众汽车家园内小鹏汽车4S店',
    lng: 112.608266,
    lat: 37.7624,
    telephone: '03512193266',
    serviceTelephone: '',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1],
    status: 1
  },
  {
    id: 473,
    storeName: '小鹏汽车东莞寮步销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969832415776/寮步综合店.jpeg',
    address: '东莞市寮步镇塘唇村香市路段32号',
    lng: 113.872002,
    lat: 22.996201,
    telephone: '076985999686',
    serviceTelephone: '0769-85933686',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1079,
    storeName: '小鹏汽车晋城万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/晋城万达广场.jpg',
    address:
      '山西省晋城市城区文峰路与白水东街交叉路口晋城万达广场一楼1009B、1010铺',
    lng: 112.882037,
    lat: 35.472755,
    telephone: '0356-2222255',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 667,
    storeName: '小鹏汽车昆明南亚风情第壹城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968637644320/昆明南亚.jpg',
    address: '云南省昆明市西山区福海街道办事处南亚风情第壹城A1地块F1-A06',
    lng: 102.683998,
    lat: 25.008699,
    telephone: '0871-63584600',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1320,
    storeName: '小鹏汽车东莞厚街销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/东莞.jpg',
    address: '广东省东莞市厚街镇莞太路厚街段58号',
    lng: 113.69397,
    lat: 22.9629,
    telephone: '0769-28822880',
    serviceTelephone: '0769-28822762',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 557,
    storeName: '小鹏汽车芜湖华强吾悦广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/null/716129541900366230.jpg',
    address: '长江中路77号华强吾悦广场1020-1、1020-2铺位',
    lng: 118.364541,
    lat: 31.34042,
    telephone: '0553-5222218',
    serviceTelephone: '',
    businessHours: '10:00:00-21:30:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 301,
    storeName: '小鹏汽车武汉菱角湖万达体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/36834809418208/菱角湖万达.jpg',
    address: '湖北省武汉市江汉区唐家墩路5号武汉菱角湖万达广场1F1-5，1-6A',
    lng: 114.269997,
    lat: 30.610399,
    telephone: '02785535515',
    serviceTelephone: '',
    businessHours: '09:30:00-22:00:00',
    weekendBusinessHours: '09:30:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 27,
    storeName: '小鹏汽车郑州郑东销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/14625492093984/郑东店官网照片.jpg',
    address: '郑州市管城回族区经开第二大街158号',
    lng: 113.742,
    lat: 34.7307,
    telephone: '037153377022',
    serviceTelephone: '0371-55653511',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1807,
    storeName: '小鹏汽车秦皇岛松花江西道销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '河北省秦皇岛市经济技术开发区松花江西道2号',
    lng: 119.52736,
    lat: 39.940611,
    telephone: '03353999961',
    serviceTelephone: '0335-3999911',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 507,
    storeName: '小鹏汽车厦门集美世茂广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/20251602960160/集美世茂门头.jpg',
    address: '厦门市集美区集美大道集美世茂广场1F1024号',
    lng: 118.075996,
    lat: 24.6024,
    telephone: '05922060680',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 979,
    storeName: '小鹏汽车杭州桐庐银泰城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/01-17/18-55-040586508330627.jpeg',
    address: '浙江省杭州市桐庐县城南街道环城南路555号银泰城1F 103号商铺',
    lng: 119.711998,
    lat: 29.796,
    telephone: '057186987336',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 89,
    storeName: '小鹏汽车海口宜欣城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/20230727-132944.jpg',
    address: '海南省海口市龙华区明珠路8号宜欣城购物中心1F-A-40',
    lng: 110.311463,
    lat: 20.024528,
    telephone: '089868550260',
    serviceTelephone: '',
    businessHours: '09:30:00-22:30:00',
    weekendBusinessHours: '09:30:00-23:00:00',
    types: [1],
    status: 1
  },
  {
    id: 227,
    storeName: '小鹏汽车深圳益田假日广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969170048544/深圳益田小.jpg',
    address: '深圳市南山区沙河街道益田假日广场1-301，铺位号：B2-49',
    lng: 113.974998,
    lat: 22.5378,
    telephone: '075526911154',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 567,
    storeName: '小鹏汽车惠州金山汽车城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/惠州.jpg',
    address: '惠州市惠城区江北金山汽车城二街',
    lng: 114.396004,
    lat: 23.132,
    telephone: '07523231111',
    serviceTelephone: '0752-2891059',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 120,
    storeName: '小鹏汽车苏州奥体商业广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2019/09-29/14-56-1107671871804410.jpg',
    address:
      '苏州市工业园区中新大道东999号苏州奥林匹克体育中心奥体商业广场 L1-31/32',
    lng: 120.749001,
    lat: 31.305201,
    telephone: '051283577099',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 477,
    storeName: '小鹏汽车临沂北京东路销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/临沂北京东路.png',
    address: '山东省临沂市河东区温泉路与北京东路交汇处远通汽车超市小鹏汽车',
    lng: 118.429001,
    lat: 35.098301,
    telephone: '05397675071',
    serviceTelephone: '0539-8389899',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1749,
    storeName: '小鹏汽车宜昌发展大道销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/门头2.jpg',
    address: '湖北省宜昌市开发区发展大道63号',
    lng: 111.3358,
    lat: 30.7241,
    telephone: '18671713877',
    serviceTelephone: '18671716377',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 903,
    storeName: '小鹏汽车上海宝杨宝龙广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/16660432412960/宝杨宝龙.jpg',
    address: '上海市宝山区同济路699弄1-10号宝杨宝龙广场M1-L1-072/073',
    lng: 121.482002,
    lat: 31.3951,
    telephone: '02136382926',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 97,
    storeName: '小鹏汽车天津西青销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969854962208/西青.jpg',
    address: '天津市西青区大寺镇津荣道15号101汽车文化广场内的A区01、06号',
    lng: 117.254997,
    lat: 39.025299,
    telephone: '022-23882785',
    serviceTelephone: '022-23882717',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 563,
    storeName: '小鹏汽车沈阳铁西销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/33116252666144/沈阳铁西销售服务中心门头展示照片.jpg',
    address: '辽宁省沈阳市铁西区北二西路20-1号小鹏汽车',
    lng: 123.346001,
    lat: 41.8176,
    telephone: '02425866810',
    serviceTelephone: '024-25863310',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 16,
    storeName: '小鹏汽车苏州龙湖狮山天街体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '江苏省苏州市高新区塔园路181号龙湖狮山天街SZSSTJ-A-1F-20号',
    lng: 120.556725,
    lat: 31.294869,
    telephone: '0512-65162206',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1099,
    storeName: '小鹏汽车开封博奥汽车城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/20230720-144939.jpg',
    address: '河南省开封市金明大道与魏都路交叉口向北200米博奥新能源汽车广场',
    lng: 114.314594,
    lat: 34.802892,
    telephone: '0371-23313000',
    serviceTelephone: '',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1173,
    storeName: '小鹏汽车潮州南风里体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/03-30/18-52-4000171922221880.jpg',
    address:
      '广东省潮州市枫溪区新风路与潮汕路交汇处财富中心B区一层B122-123号商铺、B136-137号商铺、B140-142号商铺',
    lng: 116.612,
    lat: 23.6506,
    telephone: '07682924666',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 457,
    storeName: '小鹏汽车武汉金银潭永旺体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/36834809418208/金银潭.jpg',
    address: '将军路街办事处金银潭大道1号136a',
    lng: 114.236714,
    lat: 30.65025,
    telephone: '02785773500',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 599,
    storeName: '小鹏汽车鄂尔多斯天骄路销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/鄂尔多斯.jpg',
    address: '鄂尔多斯市康巴什区碳中和研究院内小鹏汽车',
    lng: 109.824886,
    lat: 39.59984,
    telephone: '0477-8392299',
    serviceTelephone: '0477-8162002',
    businessHours: '09:00:00-17:30:00',
    weekendBusinessHours: '09:00:00-17:30:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1779,
    storeName: '小鹏汽车阜阳朝阳大道销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/20230726-153544.jpg',
    address: '安徽省阜阳市开发区朝阳大道与汽贸路交叉口南侧2＃4S店',
    lng: 115.857939,
    lat: 32.843041,
    telephone: '0558- 6688018',
    serviceTelephone: '0558-7158808',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 663,
    storeName: '小鹏汽车南京建邺吾悦广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/09-07/11-59-300298-1408711555.jpg',
    address: '南京市建邺区江东中路南京建邺吾悦广场1层1022号商铺小鹏汽车',
    lng: 118.736,
    lat: 32.037201,
    telephone: '02583111909',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 569,
    storeName: '小鹏汽车深圳前海销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-30/10-07-450550-428847114.jpg',
    address:
      '深圳市南山区南头街道宝安大道以北、双界河以东嘉进隆前海汽车城二层A05-2',
    lng: 113.906956,
    lat: 22.548269,
    telephone: '075526919610',
    serviceTelephone: '0755-26911130',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1314,
    storeName: '小鹏汽车苏州张家港销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/张家港.jpg',
    address: '江苏省苏州市张家港杨舍镇经济开发区东南大道汽车生活广场9号1',
    lng: 120.57089,
    lat: 31.837789,
    telephone: '13382282405',
    serviceTelephone: '0512-58116376',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1245,
    storeName: '小鹏汽车绵阳涪城王府井体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968637644320/绵阳涪城王府井门头照.jpeg',
    address: '南河路16号王府井购物中心G-1F-P017A号商铺',
    lng: 104.756027,
    lat: 31.450949,
    telephone: '0816-2111322',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 117,
    storeName: '小鹏汽车西安大明宫万达体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2019/10-12/11-59-3901701656764367.jpg',
    address: '西安市未央区太华北路大明宫万达广场1F-1050号',
    lng: 108.972602,
    lat: 34.314358,
    telephone: '02981715758',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1265,
    storeName: '小鹏汽车东莞大朗里悦里体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/外立面-中.jpg',
    address: '东莞市大朗镇富民中路与长顺大街交汇处碧桂园里悦里L1127-129',
    lng: 113.926817,
    lat: 22.93394,
    telephone: '0769-83198222',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1207,
    storeName: '小鹏汽车合肥包河万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/04-26/10-58-430678482714269.jpg',
    address: '安徽省合肥市包河区包河万达广场苏宁易购百货1F-WBF10号铺位',
    lng: 117.302002,
    lat: 31.8571,
    telephone: '055162621823',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 114,
    storeName: '小鹏汽车新乡宝龙广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/内立面-右2.jpg',
    address: '河南省新乡市红旗区金穗大道宝龙广场一层014-015号',
    lng: 113.921535,
    lat: 35.295127,
    telephone: '0373-3722288',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1153,
    storeName: '小鹏汽车东莞高埗销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/null/官网照片.jpeg',
    address: '广东省东莞市高埗镇高昌路5号',
    lng: 113.72321,
    lat: 23.09715,
    telephone: '0769-85989989',
    serviceTelephone: '0769-38813618',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 339,
    storeName: '小鹏汽车宁波东部银泰城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421178851872/宁波东部银泰城.jpg',
    address: '浙江省宁波市鄞州区中山东路2266号',
    lng: 121.622002,
    lat: 29.853701,
    telephone: '057428802882',
    serviceTelephone: '',
    businessHours: '09:30:00-22:00:00',
    weekendBusinessHours: '09:30:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1197,
    storeName: '小鹏汽车连云港瀛洲路销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/连云港瀛洲路.jpg',
    address: '江苏省连云港市海州区宁海华人华侨工业园迎宾大道3号',
    lng: 119.227884,
    lat: 34.549187,
    telephone: '0518-85910299',
    serviceTelephone: '0518-85910166',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1737,
    storeName: '小鹏汽车北京京西大悦城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/店铺图2.jpg',
    address: '北京市石景山区阜石路173号院1号楼京西大悦城1F-09',
    lng: 116.182584,
    lat: 39.925783,
    telephone: '010-59248333',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 331,
    storeName: '小鹏汽车中山西区销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/027a388cd6ff99a90a8348c252d0eae.jpg',
    address: '广东省中山市小榄镇坦背西二马路177号',
    lng: 113.337997,
    lat: 22.560301,
    telephone: '076088160163',
    serviceTelephone: '0760-23231523',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1351,
    storeName: '小鹏汽车重庆汽博体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/970016119328/小鹏汽车重庆汽博销售服务中心.jpg',
    address: '重庆市渝北区金渝大道99号汽博中心新名车广场1楼1-12铺位',
    lng: 106.574997,
    lat: 29.641199,
    telephone: '02360391128',
    serviceTelephone: '',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1769,
    storeName: '小鹏汽车德州澳德乐体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/门头正面广角.jpg',
    address:
      '山东省德州市德城区经济技术开发区宋官屯街道办事处东风东路1899号一层1131号铺',
    lng: 116.36755,
    lat: 37.428366,
    telephone: '0534-2727810',
    serviceTelephone: '',
    businessHours: '09:00:00-22:00:00',
    weekendBusinessHours: '09:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 93,
    storeName: '小鹏汽车厦门宝龙一城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-19/11-14-490089-976449671.jpeg',
    address: '厦门市思明区金山路7号宝龙一城二期2-3号楼第L1层M1-L1-008-2',
    lng: 118.173725,
    lat: 24.486789,
    telephone: '05925535053',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1753,
    storeName: '小鹏汽车北京远洋乐堤港体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/官网点亮照.jpeg',
    address: '北京市通州区黄船埠街2号楼2号院1层101-B118',
    lng: 116.664512,
    lat: 39.92962,
    telephone: '010-57794773',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 445,
    storeName: '小鹏汽车苏州龙湖东吴天街体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/10-26/17-08-270508-1985957607.jpg',
    address: '东吴南路179号1层A-1F28号店铺',
    lng: 120.628998,
    lat: 31.257799,
    telephone: '051265165257',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1745,
    storeName: '小鹏汽车三亚吉阳体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/门头照片.jpeg',
    address: '海南省三亚市迎宾路吉阳镇清平乐东城18号楼01号商铺',
    lng: 109.575996,
    lat: 18.281601,
    telephone: '0898-88710822',
    serviceTelephone: '',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1],
    status: 1
  },
  {
    id: 243,
    storeName: '小鹏汽车惠州港惠新天地体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/03-28/11-29-180994-1054834554.jpg',
    address: '广东省惠州市演达大道7号港惠购物中心一期1139、1140a号商铺',
    lng: 114.417497,
    lat: 23.068953,
    telephone: '07528906588',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1316,
    storeName: '小鹏汽车大理恒邦时代天街体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/大理恒邦时代天街体验中心照片.jpg',
    address:
      '云南省大理白族自治州大理市建设路与泰安路交叉口东南50米恒邦时代天街1-30-33 72-73',
    lng: 100.226937,
    lat: 25.585614,
    telephone: '0872-2134530',
    serviceTelephone: '',
    businessHours: '09:00:00-22:00:00',
    weekendBusinessHours: '09:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 109,
    storeName: '小鹏汽车西安经开销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/970039839264/西安经开.jpg',
    address: '陕西省西安市未央区草滩十路1155号智巢创新空间7幢1层',
    lng: 108.853996,
    lat: 34.369099,
    telephone: '029-81312700',
    serviceTelephone: '18109287503',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 112,
    storeName: '小鹏汽车深圳龙城万科里体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/img_v2_2234ba59-dc78-4d21-9919-329d833873dg.jpg',
    address: '深圳市龙岗区万科里龙城广场体验中心B1-64',
    lng: 114.250999,
    lat: 22.717199,
    telephone: '13380069151',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1253,
    storeName: '小鹏汽车重庆西南国际汽贸城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/970016119328/西南.png',
    address: '重庆市渝北区两港大道圣聪路8号',
    lng: 106.617068,
    lat: 29.647992,
    telephone: '023-86023123',
    serviceTelephone: '19123100439',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 409,
    storeName: '小鹏汽车广州新塘万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/01-07/16-40-010763-179269827.jpg',
    address: '广州市增城区新塘镇顺欣社区新福路9号万达广场1L-1060号',
    lng: 113.617996,
    lat: 23.152901,
    telephone: '02083322914',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1281,
    storeName: '小鹏汽车昆明世博园销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/世博店照片.jpg',
    address: '云南省昆明市盘龙区白龙路508号',
    lng: 102.751599,
    lat: 25.065252,
    telephone: '0871-65623555',
    serviceTelephone: '0871-63355303',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 397,
    storeName: '小鹏汽车成都招商大魔方体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968637644320/招商大魔方门头照.jpg',
    address:
      '四川省成都市高新区天府大道北段1777号招商•大魔方第 LG 层的第 G1050、G1051',
    lng: 104.069945,
    lat: 30.574381,
    telephone: '028-60798390',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 88,
    storeName: '小鹏汽车南昌王府井体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-15/16-18-010968-261209566.jpeg',
    address: '江西省南昌市青云谱区洪城路158号1F-021',
    lng: 115.904999,
    lat: 28.653299,
    telephone: '079186268606',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 94,
    storeName: '小鹏汽车沧州荣盛国际体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-19/10-02-590076-363661484.jpg',
    address: '沧州市运河区黄河西路与开元南大道交叉口荣盛国际购物广场E1010商铺',
    lng: 116.818001,
    lat: 38.2906,
    telephone: '03173068899',
    serviceTelephone: '',
    businessHours: '09:30:00-21:30:00',
    weekendBusinessHours: '09:30:00-21:30:00',
    types: [1],
    status: 1
  },
  {
    id: 611,
    storeName: '小鹏汽车广州美林天地体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-15/16-18-170235278101808.jpeg',
    address: '广州市天河区黄埔大道东661号1F014、1F015铺',
    lng: 113.416,
    lat: 23.105101,
    telephone: '02032382563',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1015,
    storeName: '小鹏汽车曲靖万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-31/16-26-060120473565598.jpg',
    address: '云南省曲靖市麒麟区学府路361号（万达一楼1A022-1A023)',
    lng: 103.755997,
    lat: 25.5194,
    telephone: '08743922995',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 383,
    storeName: '小鹏汽车扬州京华城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/3-门头正.jpg',
    address: '江苏省扬州市邗江区京华城路168号京华城广场1F14012号铺位',
    lng: 119.37,
    lat: 32.38,
    telephone: '0514-83265995',
    serviceTelephone: '',
    businessHours: '09:30:00-22:00:00',
    weekendBusinessHours: '09:30:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 129,
    storeName: '小鹏汽车菏泽万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2019/12-16/17-31-080802-195060944.jpg',
    address: '山东省菏泽市开发区长江路菏泽万达广场一层1073铺',
    lng: 115.474998,
    lat: 35.2244,
    telephone: '05305700789',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 347,
    storeName: '小鹏汽车绍兴柯桥销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-19/14-25-150984-477834606.jpg',
    address: '浙江省绍兴市柯桥区金柯桥大道2827号',
    lng: 120.518763,
    lat: 30.122337,
    telephone: '057581100060',
    serviceTelephone: '0575-81108715',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1657,
    storeName: '小鹏汽车长沙龙湖芙蓉天街体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/长沙龙湖芙蓉天街体验中心门头照.jpg',
    address: '人民东路与望龙路交叉口东南角龙湖芙蓉天街1F37号商铺',
    lng: 113.074072,
    lat: 28.190043,
    telephone: '073182851535',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 999,
    storeName: '小鹏汽车南京弘阳广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/screenshot-20230517-190437.png',
    address: '江苏省南京市浦口区大桥北路48号弘阳广场B1区1F-40C铺位',
    lng: 118.724649,
    lat: 32.137722,
    telephone: '025-58881787',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 439,
    storeName: '小鹏汽车济南融创茂体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/11528876435136/融创茂.jpg',
    address:
      '山东省济南市历城区经十东路199号济南融创文旅城融创茂L1层1001、1002铺位',
    lng: 117.185997,
    lat: 36.647499,
    telephone: '053180983136',
    serviceTelephone: '',
    businessHours: '09:00:00-22:00:00',
    weekendBusinessHours: '09:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1093,
    storeName: '小鹏汽车武汉凯德1818体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/36834809418208/凯德1818.jpg',
    address: '湖北省武汉市武昌区中北路与公正路交汇处凯德1818一楼01-01号',
    lng: 114.339996,
    lat: 30.5532,
    telephone: '02787833099',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 519,
    storeName: '小鹏汽车苏州高新区销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/苏州高新区.jpg',
    address: '苏州市虎丘区枫桥街道汇通路9号小鹏汽车',
    lng: 120.554196,
    lat: 31.319787,
    telephone: '051265166775',
    serviceTelephone: '19951236750',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 521,
    storeName: '小鹏汽车武汉天地体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/36834809418208/武汉天地.jpg',
    address: '中山大道1515号壹方购物中心1层商19A单元（1-19A）',
    lng: 114.309998,
    lat: 30.609501,
    telephone: '02782966859',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 769,
    storeName: '小鹏汽车丽水万地广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/09-15/10-47-0209481157107916.jpg',
    address:
      '浙江省丽水市莲都区岩泉街道花园路16号万地广场【1】层【007A】号商铺',
    lng: 119.925003,
    lat: 28.4622,
    telephone: '05782616880',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1011,
    storeName: '小鹏汽车宁波天一广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421178851872/宁波天一.jpg',
    address: '浙江省宁波市海曙区日新街88号',
    lng: 121.556,
    lat: 29.868,
    telephone: '057487236020',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 56,
    storeName: '小鹏汽车南京景枫广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/03-04/14-23-3309432100695973.jpg',
    address: '江苏省南京市江宁区双龙大道1698号景枫广场F125/9',
    lng: 118.819,
    lat: 31.930401,
    telephone: '02586199392',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 245,
    storeName: '小鹏汽车成都机场路销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/成都机场路.jpg',
    address: '四川省成都市武侯区火车南站西路1719号',
    lng: 104.029999,
    lat: 30.588499,
    telephone: '02883330522',
    serviceTelephone: '028-85528828',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 291,
    storeName: '小鹏汽车上海浦东御桥体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2020/08-20/16-08-240785421307223.jpg',
    address: '上海市浦东新区御桥路1441号',
    lng: 121.561996,
    lat: 31.1567,
    telephone: '02168930027',
    serviceTelephone: '',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1087,
    storeName: '小鹏汽车临沂沂河路体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/20230530-194114.jpg',
    address: '山东省临沂市罗庄区沂河路与琅琊王路交汇处西南（远通汽车超市院内）',
    lng: 118.300623,
    lat: 35.0156,
    telephone: '0539-8178090',
    serviceTelephone: '',
    businessHours: '08:20:00-18:00:00',
    weekendBusinessHours: '08:20:00-18:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1387,
    storeName: '小鹏汽车北京龙湖大兴天街体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/20230320-171837.jpg',
    address: '北京市大兴区永兴路7号院1号楼北京龙湖大兴天街1F-01A小鹏汽车',
    lng: 116.320202,
    lat: 39.686812,
    telephone: '010-89289454',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 367,
    storeName: '小鹏汽车温州瓯海国际汽车城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/温州瓯海汽车城.jpg',
    address: '温州市瓯海区娄桥街道瓯融汽车产业园1号',
    lng: 120.629863,
    lat: 27.965861,
    telephone: '057788815999',
    serviceTelephone: '13353361551',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 523,
    storeName: '小鹏汽车武汉宜家荟聚体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/36834809418208/宜家荟聚.jpg',
    address: '长宜路1号武汉荟聚中心L1一层02D22',
    lng: 114.167999,
    lat: 30.617701,
    telephone: '02783389007',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 515,
    storeName: '小鹏汽车上海金桥啦啦宝都体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968636436000/20221123-114535.jpg',
    address: '上海市浦东新区金桥路738号啦啦宝都118室',
    lng: 121.602997,
    lat: 31.2512,
    telephone: '021-58462656',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 475,
    storeName: '小鹏汽车青岛重庆路销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-19/10-25-420295-1598853384.jpg',
    address: '山东省青岛市市北区长沙路49-6号',
    lng: 120.392858,
    lat: 36.129351,
    telephone: '0532-85627877',
    serviceTelephone: '0532-85626277',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 781,
    storeName: '小鹏汽车杭州七堡花园城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/10-11/16-43-240082-1177281202.jpg',
    address: '浙江省杭州市江干区彭埠街道新塘路1093号七堡花园城L1层128-129商铺',
    lng: 120.242996,
    lat: 30.300301,
    telephone: '13372539102',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 737,
    storeName: '小鹏汽车昆山明诚汽车城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/37454131089856/20230821-103333.jpg',
    address: '江苏省苏州市昆山市周市镇黄浦江北路211号004号楼1楼',
    lng: 121.010436,
    lat: 31.413954,
    telephone: '0512-67666289',
    serviceTelephone: '0512-67666280',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 721,
    storeName: '小鹏汽车天津滨海万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/11-08/14-48-290978-747031287.jpg',
    address: '天津市滨海新区洞庭路4572号万达广场一层1052号',
    lng: 117.68,
    lat: 39.015598,
    telephone: '02227110777',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 813,
    storeName: '小鹏汽车佛山顺德万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-30/17-39-580763-956985138.jpg',
    address: '广东省佛山市顺德区区南霞大街与京珠线交叉路口往西万达广场L1-1010',
    lng: 113.281998,
    lat: 22.7941,
    telephone: '075781260187',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 675,
    storeName: '小鹏汽车济南领秀城贵和体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/11528876435136/领秀城照片.jpg',
    address: '济南市市中区二环南路2688号领秀城贵和购物中心B102铺位',
    lng: 117.002998,
    lat: 36.593201,
    telephone: '18753191063',
    serviceTelephone: '',
    businessHours: '09:00:00-22:00:00',
    weekendBusinessHours: '09:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 471,
    storeName: '小鹏汽车海口琼山大道销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/04-25/16-20-4400491952332299.png',
    address: '海口市美兰区琼山大道260号',
    lng: 110.417999,
    lat: 19.9835,
    telephone: '0898-65727297',
    serviceTelephone: '0898--65717591',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 20,
    storeName: '小鹏汽车长沙开福万达体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421262829088/长沙开福万达门头照.jpg',
    address:
      '湖南省长沙市开福区湘江中路589号万达广场室内步行街1F-07、08A号商铺',
    lng: 112.970001,
    lat: 28.198299,
    telephone: '073182275508',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1304,
    storeName: '小鹏汽车潍坊潍州路销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/潍坊.jpg',
    address: '山东省潍坊市奎文区潍州路2800号',
    lng: 119.131999,
    lat: 36.643193,
    telephone: '0536-2108078',
    serviceTelephone: '0536-2100856',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1809,
    storeName: '小鹏汽车宿迁双庄汽车城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/微信图片_20230210113202.jpg',
    address: '江苏省宿迁市宿城区双庄国际汽车城(风驰路西向南100米)',
    lng: 118.232817,
    lat: 33.929847,
    telephone: '0527-82886555',
    serviceTelephone: '0527-82886555',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 299,
    storeName: '小鹏汽车长沙步步高梅溪新天地体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-19/11-57-340942-683057453.jpg',
    address: '长沙市岳麓区枫林三路1099号步步高梅溪新天地G42',
    lng: 112.861,
    lat: 28.198999,
    telephone: '18874925367',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1175,
    storeName: '小鹏汽车广州花都融创茂销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/广州花都融创茂.jpg',
    address: '广州市花都区花城街道凤凰北路63号1F-A,W1001-W1003',
    lng: 113.2344,
    lat: 23.426437,
    telephone: '020-39479613',
    serviceTelephone: '020-86972394',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 713,
    storeName: '小鹏汽车郑州熙地港体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/官网照片.jpg',
    address: '河南省郑州市郑东新区农业东路15号熙地港（郑州）购物中心1层012店铺',
    lng: 113.717003,
    lat: 34.784801,
    telephone: '0371-63382171',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 993,
    storeName: '小鹏汽车湖州蜀山路销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/02-28/13-57-270054248016241.png',
    address: '湖州市吴兴区蜀山路2999号',
    lng: 120.154999,
    lat: 30.8867,
    telephone: '0572-2260252',
    serviceTelephone: '18072606766',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1751,
    storeName: '小鹏汽车泰安泰山国际汽车城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/门头3.jpg',
    address: '山东省泰安市岱岳区天平街道泰山国际汽车城211号',
    lng: 117.038061,
    lat: 36.162012,
    telephone: '0538-8576616',
    serviceTelephone: '0538-8576616',
    businessHours: '08:00:00-18:00:00',
    weekendBusinessHours: '08:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1336,
    storeName: '小鹏汽车杭州临平万宝城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/杭州.jpg',
    address: '浙江省杭州市临平区荷禹路105号万宝城商场1楼A130铺位',
    lng: 120.284624,
    lat: 30.432479,
    telephone: '0571-2826 0301',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1189,
    storeName: '小鹏汽车深圳光明汽车城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969170048544/深圳光明小.jpg',
    address: '广东省广州市光明区马田街道石围社区石围油麻岗工业区23号A栋101',
    lng: 113.893668,
    lat: 22.742252,
    telephone: '0755-88656976',
    serviceTelephone: '0755-88656975',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 709,
    storeName: '小鹏汽车遵义亨特唯一国际体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/970016119328/小鹏汽车遵义亨特唯一国际体验中心.JPG',
    address: '贵州省遵义市汇川区杭州路唯一国际一楼131号',
    lng: 106.942001,
    lat: 27.7101,
    telephone: '085128237868',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 635,
    storeName: '小鹏汽车株洲万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/03-10/15-50-490491-1401301071.png',
    address: '云龙大道与藏龙路交汇处西北侧一楼',
    lng: 113.158997,
    lat: 27.881701,
    telephone: '073122280808',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 30,
    storeName: '小鹏汽车天津东丽万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-07/14-01-3302381896197896.jpg',
    address: '天津市东丽区先锋路万达广场一层1029-1030',
    lng: 117.324997,
    lat: 39.0811,
    telephone: '02259388777',
    serviceTelephone: '',
    businessHours: '10:00:00-21:30:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1365,
    storeName: '小鹏汽车宁波龙湖鄞州天街体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/宁波.jpg',
    address: '宁波市鄞州区中兴路77号龙湖鄞州天街A-1F-24室',
    lng: 121.591677,
    lat: 29.881143,
    telephone: '0574-88138303',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1297,
    storeName: '小鹏汽车徐州高新汽车城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/null/徐州高新汽车城销售服务中心.jpg',
    address: '江苏省徐州市铜山区珠江路汽车产业园华夏路28-7号小鹏汽车',
    lng: 117.188621,
    lat: 34.1617,
    telephone: '051683619789',
    serviceTelephone: '0516-83878289',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1301,
    storeName: '小鹏汽车重庆龙湖高新天街体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/970016119328/重庆高新龙湖店.jpg',
    address: '重庆市沙坪坝区西双大道与永祥路交叉口西龙湖高新天街A馆-1F-43',
    lng: 106.363423,
    lat: 29.610418,
    telephone: '023-65059630',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 767,
    storeName: '小鹏汽车清远顺盈时代广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address:
      '广东省清远市清城区人民一路28号顺盈时代广场商业中心1-3号首层1250、1252号',
    lng: 113.066002,
    lat: 23.6758,
    telephone: '07633896960',
    serviceTelephone: '',
    businessHours: '09:30:00-22:00:00',
    weekendBusinessHours: '09:30:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1323,
    storeName: '小鹏汽车赣州赣南汽车城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/image.jpg',
    address: '江西省赣州市南康区龙岭镇赣南汽车城B-10地块',
    lng: 114.825274,
    lat: 25.734739,
    telephone: '0797-2068368',
    serviceTelephone: '0797-2068369',
    businessHours: '09:00:00-18:30:00',
    weekendBusinessHours: '09:00:00-18:30:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 907,
    storeName: '小鹏汽车扬州金鹰国际体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/10-26/16-14-230203495134997.jpg',
    address: '江苏省扬州市江都区文昌东路1177号金鹰新城市中心',
    lng: 119.580002,
    lat: 32.4039,
    telephone: '051486276655',
    serviceTelephone: '',
    businessHours: '09:30:00-22:00:00',
    weekendBusinessHours: '09:30:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1343,
    storeName: '小鹏汽车成都龙湖蜀新天街体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/官网露出照片.jpg',
    address:
      '成都市郫都区创智北环路与创智东一路交口东140米一层龙湖蜀新天街1F-38',
    lng: 103.901495,
    lat: 30.79068,
    telephone: '028-60801690',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1787,
    storeName: '小鹏汽车运城河东汽贸空港销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/点亮照片.jpg',
    address: '山西省运城市经济技术开发区康杰北路34号河东汽贸空港车城内',
    lng: 111.049011,
    lat: 35.091049,
    telephone: '0359-2885518',
    serviceTelephone: '0359-2885550',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1559,
    storeName: '小鹏汽车北京翠微印象城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/北京翠微印象城.jpg',
    address: '北京市海淀区翠微路12号',
    lng: 116.303026,
    lat: 39.912138,
    telephone: '13701331002',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 449,
    storeName: '小鹏汽车杭州滨江宝龙城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421178851872/滨江宝龙1.jpg',
    address: '滨盛路3867号滨江宝龙广场一区一号楼一楼M-F1-070/071商铺',
    lng: 120.167999,
    lat: 30.1884,
    telephone: '057186908156',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1615,
    storeName: '小鹏汽车成都天府和悦体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/官网照片-1.jpg',
    address: '成都市天府新区麓山大道二段199号天府和悦广场A馆-1F-31号',
    lng: 104.085199,
    lat: 30.486458,
    telephone: '02860802016',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1513,
    storeName: '小鹏汽车海口秀英销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/37454131089856/海南.jpg',
    address: '海南省海口市秀英区秀英街道海盛路49-3号',
    lng: 110.247644,
    lat: 20.008954,
    telephone: '0898-68625630',
    serviceTelephone: '0898-68624670',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1237,
    storeName: '小鹏汽车广州白云百信广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/null/门店照片2.jpg',
    address: '广州市机场路1399号百信广场三期DL1-135号',
    lng: 113.260866,
    lat: 23.195049,
    telephone: '020-31522396',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1389,
    storeName: '小鹏汽车北京后沙峪销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/门头2.jpg',
    address: '北京市顺义区京密路后沙峪段3号2幢',
    lng: 116.562079,
    lat: 40.114408,
    telephone: '010-68210117',
    serviceTelephone: '010-68303350',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1371,
    storeName: '小鹏汽车东莞长安万科广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/20230302-183414.jpg',
    address: '广东省东莞市长安镇长盛社区长青南路1号 L1009',
    lng: 113.8,
    lat: 22.8,
    telephone: '0769-83334686',
    serviceTelephone: '',
    businessHours: '10:00:00-21:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 843,
    storeName: '小鹏汽车阳江百利广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/10-26/16-36-2708201007128054.png',
    address: '广东省阳江市江城区东风一路3号百利广场一楼北环广场1043铺位',
    lng: 111.964996,
    lat: 21.8535,
    telephone: '06623636866',
    serviceTelephone: '',
    businessHours: '10:30:00-22:30:00',
    weekendBusinessHours: '10:30:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1357,
    storeName: '小鹏汽车贵阳观山湖贵遵路销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/20221104-161343.jpg',
    address: '贵州省贵阳市观山湖区贵遵高速公路新寨村八组130号',
    lng: 106.664,
    lat: 26.6106,
    telephone: '0851-82215997',
    serviceTelephone: '0851-82215737',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 311,
    storeName: '小鹏汽车烟台金沙滩销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-19/10-29-5408522059316555.jpg',
    address: '山东省烟台市开发区北京南路2-6号',
    lng: 121.211998,
    lat: 37.548599,
    telephone: '05356963223',
    serviceTelephone: '0535-6963126',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 411,
    storeName: '小鹏汽车台州方林汽车城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/03-06/15-51-520096-1268602764.jpg',
    address: '浙江省台州市路桥区方林汽车城B828号',
    lng: 121.387001,
    lat: 28.554501,
    telephone: '057682680777',
    serviceTelephone: '',
    businessHours: '08:00:00-17:00:00',
    weekendBusinessHours: '08:00:00-17:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1739,
    storeName: '小鹏汽车东莞南城汽车城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/24b18ec84cc2c446183c261b1a40f7e.jpg',
    address: '广东省东莞市南城街道莞太路南城段233号',
    lng: 113.730006,
    lat: 22.999766,
    telephone: '0769-23304588',
    serviceTelephone: '',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [1],
    status: 1
  },
  {
    id: 555,
    storeName: '小鹏汽车北京华联力宝体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969392043552/华联.jpg',
    address: '北京市大兴区荣华中路8号',
    lng: 116.501999,
    lat: 39.806198,
    telephone: '01067863831',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 901,
    storeName: '小鹏汽车绍兴上虞万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/01-11/18-05-270152917230363.jpg',
    address: '浙江省绍兴市上虞区百官街道称山北路399号万达广场1003铺位',
    lng: 120.844002,
    lat: 30.053499,
    telephone: '057582368183',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 751,
    storeName: '小鹏汽车南京江宁销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/38869943704000/南京江宁综合店.jpg',
    address: '江苏省南京市江宁区东山街道润麒路2号（东山汽车园区内）',
    lng: 118.877289,
    lat: 31.979979,
    telephone: '02552708086',
    serviceTelephone: '025-86131909',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 425,
    storeName: '小鹏汽车肇庆敏捷广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '信安大道3号敏捷广场1层1014铺',
    lng: 112.50443,
    lat: 23.07431,
    telephone: '07582788669',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1777,
    storeName: '小鹏汽车福州仓山销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/福州宇翔.jpg',
    address: '福建省福州市仓山区科技园六区116号（叶下片）',
    lng: 119.342426,
    lat: 26.011352,
    telephone: '0591-86251527',
    serviceTelephone: '0591-28051771',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 92,
    storeName: '小鹏汽车南通崇川大有境体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-03/10-09-030892536638511.jpg',
    address:
      '江苏省南通市崇川区星城路与青年中路交叉口，崇川大有境商场一楼L1-025号',
    lng: 120.915001,
    lat: 32.002899,
    telephone: '051385577520',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1293,
    storeName: '小鹏汽车泉州清濛开发区销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/20251602960160/清濛门头.jpg',
    address: '福建省泉州市经济技术开发区清濛园区西片区F-06地块',
    lng: 118.542999,
    lat: 24.8696,
    telephone: '0595-27559829',
    serviceTelephone: '0595-22012526',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1529,
    storeName: '小鹏汽车珠海华发商都体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969664033312/20230313-085051.jpg',
    address: '广东省珠海市香洲区珠海大道8号华发商都3#楼1层C1007号商铺',
    lng: 113.51,
    lat: 22.23,
    telephone: '0756-8336229',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 115,
    storeName: '小鹏汽车重庆新光天地体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/970016119328/新光.jpg',
    address: '龙溪街道嘉州路92号新光里B-104',
    lng: 106.519997,
    lat: 29.5951,
    telephone: '02367215602',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 685,
    storeName: '小鹏汽车济南经十西路销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/济南经十西路.jpg',
    address: '济南市槐荫区经十西路1718号',
    lng: 116.864998,
    lat: 36.645599,
    telephone: '053158276633',
    serviceTelephone: '0531-58276635',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1019,
    storeName: '小鹏汽车杭州富阳万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/01-07/17-44-0800871288846290.jpg',
    address: '浙江省杭州市富阳区金桥北路990号万达广场一楼1072B&1073',
    lng: 119.932999,
    lat: 30.089701,
    telephone: '057186985801',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1003,
    storeName: '小鹏汽车上海晶耀前滩体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/02-07/09-46-040369-546345639.jpg',
    address: '上海市浦东新区耀体路212号1层114B店铺',
    lng: 121.476997,
    lat: 31.153,
    telephone: '02150891007',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 583,
    storeName: '小鹏汽车长沙雨花销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/长沙雨花.jpg',
    address: '长沙市雨花区同升街道黄谷路262-12号',
    lng: 113.041,
    lat: 28.082899,
    telephone: '0731-84721289',
    serviceTelephone: '073188233257',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 505,
    storeName: '小鹏汽车福州宜家荟聚体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-07/21-59-5404441605574344.jpg',
    address: '福建省福州市晋安区福马路788号宜家家居商业广场L1层01A24号',
    lng: 119.366997,
    lat: 26.0651,
    telephone: '059183706157',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 267,
    storeName: '小鹏汽车柳州城中万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2020/10-13/16-54-1802481253903460.jpg',
    address: '柳州市城中区东环大道256号城中万达广场1F-1063号',
    lng: 109.442001,
    lat: 24.329599,
    telephone: '07722880322',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 3,
    storeName: '小鹏汽车广州高德置地体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '广州珠江新城花城大道85-87号一层之自编108B',
    lng: 113.322998,
    lat: 23.1199,
    telephone: '020-22050132',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 743,
    storeName: '小鹏汽车北京蓝色港湾体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/17722108321760/蓝色港湾.jpg',
    address: '北京市朝阳区朝阳公园6号蓝色港湾L-BS-193c、L-BS-193d铺位',
    lng: 116.475998,
    lat: 39.949299,
    telephone: '15712838499',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 96,
    storeName: '小鹏汽车佛山新DNA体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2020/07-03/13-53-09025821202778.jpg',
    address: '广东省佛山市禅城区魁奇一路9号新DNA购物中心首层126号商铺',
    lng: 113.108002,
    lat: 22.9939,
    telephone: '13318398979',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 144,
    storeName: '小鹏汽车上海凯德龙之梦体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2019/11-06/15-54-210562-1084801227.jpg',
    address: '上海市虹口区西江湾路388号虹口凯德龙之梦购物中心B01-02/03/04',
    lng: 121.477997,
    lat: 31.2707,
    telephone: '02156982957',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 127,
    storeName: '小鹏汽车东莞虎门万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/20230210-093928.jpg',
    address: '东莞市虎门镇博涌社区连升北路388号虎门万达广场1F-1037B',
    lng: 113.683998,
    lat: 22.834101,
    telephone: '076928685688',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1805,
    storeName: '小鹏汽车台州浙星广场销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/9c4606c4352f60d7915143f4da4a91f1_.jpg',
    address: '浙江省台州市东环大道1000号浙星广场一幢三号',
    lng: 121.424129,
    lat: 28.630206,
    telephone: '0576-89533333',
    serviceTelephone: '0576-88058000',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 577,
    storeName: '小鹏汽车合肥天鹅湖万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-12/15-01-470266-1979767581.jpg',
    address:
      '安徽省合肥市蜀山区南二环路3818号合肥天鹅湖万达广场室内步行街1F层1028，1029，1051号商铺',
    lng: 117.222,
    lat: 31.819,
    telephone: '055165520980',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1097,
    storeName: '小鹏汽车武汉黄金口体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/36834809418208/黄金口.jpg',
    address: '武汉市汉阳区黄金口汽车市场南门小鹏汽车',
    lng: 114.175003,
    lat: 30.5658,
    telephone: '02784616689',
    serviceTelephone: '',
    businessHours: '09:30:00-18:30:00',
    weekendBusinessHours: '09:30:00-18:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1111,
    storeName: '小鹏汽车上海莘庄维璟印象城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-24/10-57-130059-894199407.jpg',
    address: '上海市闵行区七莘路1507号莘庄维璟印象城 01-015&016号',
    lng: 121.363998,
    lat: 31.130899,
    telephone: '02154153251',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 967,
    storeName: '小鹏汽车合肥包河汽车城销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/03-29/18-07-380818-922225579.jpg',
    address: '合肥市包河经济开发区繁华大道29华天大厦向东20米3号整栋标准厂房',
    lng: 117.352456,
    lat: 31.795131,
    telephone: '055165860669',
    serviceTelephone: '0551-65867669',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 963,
    storeName: '小鹏汽车周口万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/11-29/15-06-1909241325236634.jpg',
    address: '周口市川汇区开元大道与五一路交汇处万达广场一层1022号',
    lng: 114.649535,
    lat: 33.582097,
    telephone: '03948928992',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 537,
    storeName: '小鹏汽车张家港曼巴特购物广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-15/16-17-100709-1879670326.jpeg',
    address: '杨舍镇河西路88号',
    lng: 120.544998,
    lat: 31.8608,
    telephone: '051256329599',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1139,
    storeName: '小鹏汽车南阳泰祥国际汽车城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/照片.jpg',
    address: '河南省南阳市宛城区长江路泰祥国际汽车城2425号小鹏汽车',
    lng: 112.599652,
    lat: 32.957766,
    telephone: '0377-60925999',
    serviceTelephone: '0377-60918666',
    businessHours: '08:30:00-18:30:00',
    weekendBusinessHours: '08:30:00-18:30:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 447,
    storeName: '小鹏汽车重庆礼嘉天街体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/970016119328/礼嘉.jpg',
    address: '重庆市渝北区礼慈路14号龙湖重庆礼嘉天街商场A馆-1F-40号',
    lng: 106.491997,
    lat: 29.669701,
    telephone: '02367030216',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1319,
    storeName: '小鹏汽车南京江南虹悦城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/南京.jpg',
    address: '南京市雨花台区应天大街619号南京虹悦城1F-W01',
    lng: 118.764209,
    lat: 32.009547,
    telephone: '025-85339606',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1091,
    storeName: '小鹏汽车泰州国际车城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/E3415139-5BFF-49D4-A7DD-902FBFC99E14.jpeg',
    address: '江苏省泰州市海陵区海军西路117号',
    lng: 119.899002,
    lat: 32.421299,
    telephone: '052389611580',
    serviceTelephone: '0523-86887388',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1037,
    storeName: '小鹏汽车上海松江印象城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968636436000/松江印象城.jpg',
    address: '上海市松江区广富林路与人民北路交叉口松江印象城1F L150号商铺',
    lng: 121.223,
    lat: 31.060101,
    telephone: '02137783832',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 983,
    storeName: '小鹏汽车乐清南虹广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-13/10-08-5604721609942319.jpg',
    address: '浙江省温州市乐清市城东街道伯乐东路666号南虹广场1027商铺',
    lng: 120.982002,
    lat: 28.1096,
    telephone: '057762577277',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 107,
    storeName: '小鹏汽车深圳ONE AVENUE卓悦体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969170048544/深圳卓悦小.jpg',
    address: '深圳市福田区 ONE AVENUE L1-L2层N133、N222号商铺',
    lng: 114.066002,
    lat: 22.538,
    telephone: '075526907961',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 735,
    storeName: '小鹏汽车重庆南坪协信星光体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/970016119328/小鹏汽车重庆南坪协信星光体验中心.jpg',
    address: '重庆市南岸区江南大道28号南坪协信星光4F-018/019',
    lng: 106.57,
    lat: 29.523001,
    telephone: '02362320078',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 261,
    storeName: '小鹏汽车大连柏威年体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/大连柏威年-官网照片.jpeg',
    address: '大连市中山区中山路129-3号（大连柏威年）4层L4021',
    lng: 121.628998,
    lat: 38.918301,
    telephone: '18525610212',
    serviceTelephone: '',
    businessHours: '09:30:00-21:30:00',
    weekendBusinessHours: '09:30:00-21:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1333,
    storeName: '小鹏汽车昆明经开区汽车城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968637644320/昆明经开.jpg',
    address: '云南省昆明市经济技术开发区国际汽车城玉缘路F02地块小鹏汽车',
    lng: 102.805985,
    lat: 24.965484,
    telephone: '0871-65526610',
    serviceTelephone: '0871-65526611',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1310,
    storeName: '小鹏汽车佛山南庄销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/佛山南庄.jpg',
    address: '佛山市禅城区南庄镇醒群社村工业区5号',
    lng: 113.018514,
    lat: 22.953093,
    telephone: '0757-82305260',
    serviceTelephone: '0757-82305260',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1027,
    storeName: '小鹏汽车焦作王府井体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/01-06/14-49-160431370022887.jpg',
    address: '河南省焦作市解放区人民路与民主路交叉口西北角王府井一层A04',
    lng: 113.237,
    lat: 35.213402,
    telephone: '0391-2999001',
    serviceTelephone: '',
    businessHours: '09:30:00-22:00:00',
    weekendBusinessHours: '09:30:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 401,
    storeName: '小鹏汽车广州番禺天河城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/02-25/19-44-130782-627170224.jpg',
    address:
      '广东省广州市番禺区汉溪大道东366号番禺天河城L1层143号、L2层236号、B2层149号铺位',
    lng: 113.348,
    lat: 23.0037,
    telephone: '02036989826',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 489,
    storeName: '小鹏汽车佛山海八路销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/20230626-163231.jpg',
    address:
      '佛山市南海区桂城街道海八西路15号华南世纪车城2栋首层2-101/106 小鹏汽车',
    lng: 113.122258,
    lat: 23.068902,
    telephone: '0757-86259815',
    serviceTelephone: '0757-86259818',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1300,
    storeName: '小鹏汽车宜宾安鸿销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/宜宾.jpg',
    address: '四川省宜宾市翠屏区临港宜宾大道中段安鸿汽车城1栋',
    lng: 104.662576,
    lat: 28.795693,
    telephone: '0831-6161632',
    serviceTelephone: '0831-6161630',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1017,
    storeName: '小鹏汽车梅州万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-27/18-15-380994-486320560.jpg',
    address: '广东省梅州市三角镇金燕大道109号万达广场1022号铺',
    lng: 116.137001,
    lat: 24.2714,
    telephone: '07532299505',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1107,
    storeName: '小鹏汽车遵义汇川销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/970016119328/汇川.jpg',
    address: '贵州省遵义市汇川区董公寺街道和平村汽车博览中心',
    lng: 106.923908,
    lat: 27.780583,
    telephone: '',
    serviceTelephone: '0851-28629376',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 423,
    storeName: '小鹏汽车广州增城万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/05-19/11-21-590220679161356.jpg',
    address: '广东省广州市增城区荔城街道雁塔社区增城大道69号万达广场1楼1031',
    lng: 113.815002,
    lat: 23.2761,
    telephone: '02083320384',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1334,
    storeName: '小鹏汽车泉州浦西万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/IMG_20221123_105819.jpg',
    address: '福建省泉州市丰泽区宝洲街679号泉州浦西万达广场1F-1070铺',
    lng: 118.598557,
    lat: 24.882984,
    telephone: '0595-68286888',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1329,
    storeName: '小鹏汽车海口吾悦广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421547696672/wuyue.png',
    address: '海南省海口市龙华区迎宾大道18号新城吾悦广场1F，1025-1、1026-1铺位',
    lng: 110.337646,
    lat: 19.977317,
    telephone: '0898-66802045',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1251,
    storeName: '小鹏汽车襄阳襄州销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/null/门店形象照.jpg',
    address: '湖北省襄阳市襄州区深圳工业园富康大道南国际名车城小鹏汽车',
    lng: 112.251768,
    lat: 32.117662,
    telephone: '',
    serviceTelephone: '18186303151',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1085,
    storeName: '小鹏汽车东莞君乐汇体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/01-17/17-36-220852-387509955.jpg',
    address: '广东省东莞市虎门镇太沙路130号君乐汇购物中心A-131号铺',
    lng: 113.684998,
    lat: 22.805799,
    telephone: '076989609998',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1289,
    storeName: '小鹏汽车苏州吴江吾悦广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/null/吴江吾悦官网照片2.jpg',
    address:
      '江苏省苏州市吴江区松陵街道开平路2188号吾悦商业广场1号门旁1F-021-1商铺',
    lng: 120.61632,
    lat: 31.13748,
    telephone: '0512-65162956',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 143,
    storeName: '小鹏汽车泉州SM国际广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2020/03-11/14-28-1902672062472313.png',
    address:
      '福建省泉州市晋江罗山街道福埔开发区SM国际广场1F-1064号（5号门肯德基旁）',
    lng: 118.567001,
    lat: 24.778299,
    telephone: '0595-85023997',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1287,
    storeName: '小鹏汽车镇江八佰伴体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/38869943704000/镇江.jpg',
    address: '江苏省镇江市中山东路288号镇江八佰伴6010F1032铺位',
    lng: 119.448609,
    lat: 32.204907,
    telephone: '0511-88856886',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 371,
    storeName: '小鹏汽车湖州吾悦广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421178851872/湖州吾悦广场.jpg',
    address: '浙江省湖州市吴兴区吾悦广场1F-1032/10商铺小鹏汽车',
    lng: 120.100998,
    lat: 30.910299,
    telephone: '05722037506',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1649,
    storeName: '小鹏汽车深圳龙岗联创销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/46124646022944/联创门头照.jpg',
    address:
      '深圳市龙岗区南湾街道下李朗社区布澜路21号联创科技1栋厂房A、B区A101A201',
    lng: 114.130596,
    lat: 22.632381,
    telephone: '0755-28870866',
    serviceTelephone: '0755-28870966',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 927,
    storeName: '小鹏汽车咸阳吾悦广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/02-16/09-22-580698974245145.jpeg',
    address: '陕西省西咸新区沣东新城吾悦广场1039/1052',
    lng: 108.822998,
    lat: 34.2537,
    telephone: '02986382188',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 4,
    storeName: '小鹏汽车北京龙湖长楹天街体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/17722108321760/龙湖长楹天街.jpg',
    address: '朝阳区朝阳北路龙湖长楹天街西区一层',
    lng: 116.598,
    lat: 39.924,
    telephone: '01085398408',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 46,
    storeName: '小鹏汽车上海百联南方体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/null/上海百联南方.jpg',
    address: '上海市沪闵路7388号上海友谊南方商城1层1-003室',
    lng: 121.401001,
    lat: 31.1315,
    telephone: '18301977489',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1249,
    storeName: '小鹏汽车武汉龙阳大道销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/武汉龙阳大道.jpg',
    address: '湖北省武汉市汉阳区龙阳大道18号欧亚达一层A1-(01-14)、B1-(14-20)',
    lng: 114.203323,
    lat: 30.54616,
    telephone: '027-84873007',
    serviceTelephone: '027-84873009',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 79,
    storeName: '小鹏汽车绍兴银泰城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2019/08-12/13-38-010858-385723479.jpg',
    address: '浙江省绍兴市解放南路777号金帝银泰城1幢1F93号',
    lng: 120.580002,
    lat: 29.985201,
    telephone: '057589106660',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1359,
    storeName: '小鹏汽车韶关保利广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/门店的门头照片.jpg',
    address: '韶关武江区保利广场1009-1010',
    lng: 113.533008,
    lat: 24.755822,
    telephone: '0751-8799902',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1302,
    storeName: '小鹏汽车三亚诚越销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/三亚(1).jpg',
    address: '海南省三亚市吉阳区海润路海南诚越新能源汽车产业园6号馆',
    lng: 109.5,
    lat: 18.3,
    telephone: '0898-88715900',
    serviceTelephone: '0898-88713199',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 729,
    storeName: '小鹏汽车十堰万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/11-22/10-05-4705411779343733.jpg',
    address: '湖北省十堰市张湾区北京北路99号万达广场1B35',
    lng: 110.806999,
    lat: 32.663101,
    telephone: '07198011801',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 517,
    storeName: '小鹏汽车宁波江北销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/08-19/22-08-550225333775935.jpg',
    address: '浙江宁波江北区中官新路555号5号-1 宁波小鹏交付中心',
    lng: 121.59843,
    lat: 29.912355,
    telephone: '057487282080',
    serviceTelephone: '0574-87282081',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 801,
    storeName: '小鹏汽车厦门高崎销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/01-21/16-47-330688-672517856.jpg',
    address:
      '福建省厦门市高崎北路 428 号航空自贸广场1号楼110、111、112、113单元',
    lng: 118.125999,
    lat: 24.5508,
    telephone: '18650006206',
    serviceTelephone: '0592-2069890',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 609,
    storeName: '小鹏汽车盐城永宁销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/11-24/16-16-150546-389583819.jpg',
    address: '江苏省盐城市盐都区新都路88号',
    lng: 120.137456,
    lat: 33.326236,
    telephone: '051588231189',
    serviceTelephone: '18036321765',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1241,
    storeName: '小鹏汽车佛山广佛汽车城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/null/广物汽车城.jpeg',
    address: '广东省佛山市南海区里水镇佛山一环水口路出口广物汽贸·广佛汽车城',
    lng: 113.171295,
    lat: 23.167892,
    telephone: '0757-86259892',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 679,
    storeName: '小鹏汽车佛山顺德爱琴海体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/佛山顺德爱琴海门头照.jpeg',
    address: '广东省佛山市顺德区东平裕和路110号爱琴海F1007&F1008',
    lng: 113.130311,
    lat: 22.964436,
    telephone: '0757-28831321',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 58,
    storeName: '小鹏汽车无锡宜家荟聚体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421227799072/宜家荟聚照片.jpg',
    address: '江苏省无锡市锡山经济开发区团结中路3号无锡荟聚中心L11层02D17号',
    lng: 120.394997,
    lat: 31.582899,
    telephone: '051088710089',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 827,
    storeName: '小鹏汽车无锡宜兴八佰伴体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421227799072/宜兴照片.jpg',
    address: '江苏省无锡市宜兴市解放东路288号八佰伴L-1030',
    lng: 119.843002,
    lat: 31.3582,
    telephone: '051087111021',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1077,
    storeName: '小鹏汽车福州鼓楼销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/04-25/18-35-040224-1914967933.png',
    address: '福建省福州市鼓楼区杨桥中路277号',
    lng: 119.278,
    lat: 26.0793,
    telephone: '059183705107',
    serviceTelephone: '18120908185',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 134,
    storeName: '小鹏汽车常州钟楼汽车城销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/null/门店照片（中）.jpg',
    address: '江苏省常州市钟楼区棕榈路37号',
    lng: 119.886002,
    lat: 31.7873,
    telephone: '0519-8561 8327',
    serviceTelephone: '0519-86668327',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 91,
    storeName: '小鹏汽车深圳梅林卓悦汇体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2019/10-12/11-49-5304481737145333.jpg',
    address: '深圳市福田区中康路卓悦汇商场L1楼16+17a',
    lng: 114.059998,
    lat: 22.5697,
    telephone: '0755-28879816',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 707,
    storeName: '小鹏汽车揭阳万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/11-02/18-35-180491-1922813602.jpg',
    address: '揭阳市榕城区榕东街道南厝社区临江南路888号L1-1021',
    lng: 116.397003,
    lat: 23.561701,
    telephone: '06638661288',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 467,
    storeName: '小鹏汽车黄石大冶伍桥销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/36834809418208/黄石大冶伍桥.jpg',
    address: '湖北省大冶市东岳路街道伍桥路1号小鹏汽车',
    lng: 114.991997,
    lat: 30.135599,
    telephone: '07143056618',
    serviceTelephone: '0714-8986459',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 10,
    storeName: '小鹏汽车东莞民盈国贸体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969170048544/东莞民盈国贸小.jpg',
    address: '广东省东莞市东城区鸿福东路1号民盈国贸城1号5栋1029号',
    lng: 113.762001,
    lat: 23.0121,
    telephone: '076985876686',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1355,
    storeName: '小鹏汽车广州南沙万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/门店照片1.jpg',
    address: '广州市南沙区双山大道3号188房自编1058,1059号',
    lng: 113.533093,
    lat: 22.794518,
    telephone: '020-32356494',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1325,
    storeName: '小鹏汽车杭州萧山销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/386093B0-B172-480B-A86D-63CCFD2F792E.jpeg',
    address: '浙江省杭州市萧山区鸿达路191号',
    lng: 120.33256,
    lat: 30.22513,
    telephone: '0571-85121315',
    serviceTelephone: '0571-86950211',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1053,
    storeName: '小鹏汽车郑州省汽贸销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/20230530-194717.jpg',
    address: '河南省郑州市惠济区开元路省汽贸中心1号附6号楼1-2层',
    lng: 113.67749,
    lat: 34.86408,
    telephone: '0371-86001777',
    serviceTelephone: '0371-86003777',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 923,
    storeName: '小鹏汽车榆林万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/f8a14457fe64680b9ffc2493eed3412.jpg',
    address: '陕西省榆林市榆阳区明珠大道与长兴路交叉口西160米',
    lng: 109.754244,
    lat: 38.247107,
    telephone: '0912-3267687',
    serviceTelephone: '',
    businessHours: '10:00:00-21:30:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1296,
    storeName: '小鹏汽车汉中吾悦广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/商场内门头正面.jpg',
    address: '陕西省汉中市汉台区西新街吾悦广场1F1043.1057-1.1057-2号铺',
    lng: 106.99604,
    lat: 33.071888,
    telephone: '0916-2593777',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 653,
    storeName: '小鹏汽车盐城中南城体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/10-13/11-04-100982-1270352436.jpg',
    address: '解放南路278号中南城购物中心1F 1013号商铺',
    lng: 120.181,
    lat: 33.322498,
    telephone: '051588213151',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 749,
    storeName: '小鹏汽车温州印象城MEGA体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/10421178851872/温州印象城MEGA.jpg',
    address: '浙江省温州市鹿城区府东路333号印象城1F D29-L1-07b号商铺',
    lng: 120.700996,
    lat: 27.9856,
    telephone: '0577-86779779',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1763,
    storeName: '小鹏汽车西安高新锦业销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/门头.jpg',
    address: '陕西省西安市雁塔区锦业一路70号小鹏汽车西安高新销售服务中心',
    lng: 108.860451,
    lat: 34.191011,
    telephone: '029-81111306',
    serviceTelephone: '029-81111909',
    businessHours: '09:00:00-20:00:00',
    weekendBusinessHours: '09:00:00-20:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 1201,
    storeName: '小鹏汽车贵阳亨特广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/970016119328/小鹏汽车贵阳亨特广场体验中心.jpg',
    address: '贵阳市南明区文昌南路33号亨特广场一层186号',
    lng: 106.723,
    lat: 26.5711,
    telephone: '0851-85612736',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 741,
    storeName: '小鹏汽车成都高新西区销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968637644320/成都高新西.jpg',
    address: '四川省成都市高新西区新航路1号',
    lng: 103.96331,
    lat: 30.738661,
    telephone: '02886671901',
    serviceTelephone: '028-60197636',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 849,
    storeName: '小鹏汽车泉州晋江万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/20251602960160/晋江万达门头.jpg',
    address: '福建省泉州市晋江万达广场一楼1031A,1031B',
    lng: 118.573997,
    lat: 24.818199,
    telephone: '059582082586',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 619,
    storeName: '小鹏汽车嘉兴南湖天地体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/06-21/11-36-3806191014510310.png',
    address: '南湖路171号B612、B613、B614、B622',
    lng: 120.764,
    lat: 30.7565,
    telephone: '057383619177',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 545,
    storeName: '小鹏汽车长沙宜家荟聚体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/07-02/14-30-450524-1099067668.jpg',
    address: '长沙市岳麓区洋湖路253号长沙荟聚中心L1层1D20T号',
    lng: 112.938004,
    lat: 28.117701,
    telephone: '073185581652',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 119,
    storeName: '小鹏汽车昆明大悦城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/昆明大悦城官网点亮照片6.jpg',
    address:
      '昆明市西山区环城南路与南坝路交叉口昆明大悦城购物中心5-1-08号商铺(C区14门)',
    lng: 102.712997,
    lat: 25.023001,
    telephone: '0871-68571777',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 571,
    storeName: '小鹏汽车深圳龙岗万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969170048544/深圳龙岗万达小.jpg',
    address: '深圳市龙岗区平湖街道禾花社区华南二道华南城4号交易广场万达广场',
    lng: 114.130997,
    lat: 22.6738,
    telephone: '075528700244',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1261,
    storeName: '小鹏汽车武汉龙湖白沙天街体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/武汉龙湖.jpeg',
    address: '湖北省武汉市洪山区烽胜路55号龙湖白沙天街 A-1F-47&48号',
    lng: 114.292689,
    lat: 30.477457,
    telephone: '027-86832096',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1051,
    storeName: '小鹏汽车上海临港万达广场体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/968636436000/临港万达.jpg',
    address: '上海市浦东新区鸿音路（海云苑西侧约150米)临港万达广场一楼1005A',
    lng: 121.815002,
    lat: 30.8913,
    telephone: '02158093796',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 857,
    storeName: '小鹏汽车上海龙湖宝山天街体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/16660432412960/宝山龙湖天街.jpg',
    address: '上海市宝山区顾村镇丹霞山路50弄龙湖宝山天街1F-01号商铺',
    lng: 121.361529,
    lat: 31.359345,
    telephone: '02136215816',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1025,
    storeName: '小鹏汽车成都锦江销售服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/成都锦江.jpg',
    address: '成都市锦江区锦丰三路77号E-5栋1层2层',
    lng: 104.114998,
    lat: 30.59,
    telephone: '02860197377',
    serviceTelephone: '028-60197378',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1, 2, 3],
    status: 1
  },
  {
    id: 863,
    storeName: '小鹏汽车东莞樟木头天和CITY体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/02-25/16-29-2506101740375358.jpg',
    address: '广东省东莞市樟木头镇樟罗社区永宁街1号L1-122',
    lng: 114.067001,
    lat: 22.904301,
    telephone: '076981280369',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 435,
    storeName: '小鹏汽车北京龙湖熙悦天街体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969392043552/熙悦.jpg',
    address: '北京市房山区长阳镇龙湖熙悦天街B-1F-08',
    lng: 116.184998,
    lat: 39.7337,
    telephone: '01069366873',
    serviceTelephone: '',
    businessHours: '09:00:00-22:00:00',
    weekendBusinessHours: '09:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1665,
    storeName: '小鹏汽车上海九亭金地卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/上海九亭金地.jpg',
    address: '上海上海市松江区九亭镇沪亭北路99弄1楼',
    lng: 121.32,
    lat: 31.14,
    telephone: '021-59116612',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1565,
    storeName: '小鹏汽车盐城东台吾悦卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/盐城东台吾悦.jpeg',
    address: '盐城市东台市惠阳路107号吾悦广场1楼1016号商铺',
    lng: 120.320636,
    lat: 32.83212,
    telephone: '051588231189',
    serviceTelephone: '',
    businessHours: '10:00:00-21:30:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1549,
    storeName: '小鹏汽车湖州爱山银泰城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/湖州爱山银泰城.jpg',
    address: '浙江省湖州市吴兴区南街580号',
    lng: 120.105588,
    lat: 30.871394,
    telephone: '05722260252',
    serviceTelephone: '',
    businessHours: '10:00:00-21:30:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1637,
    storeName: '小鹏汽车温州鹿城汽车城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969002091040/A80A0B6B-C01F-471A-9843-B2AEF373E986.jpeg',
    address: '浙江省温州市鹿城区温州大道2851号',
    lng: 120.663119,
    lat: 27.982033,
    telephone: '',
    serviceTelephone: '',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1721,
    storeName: '小鹏汽车南京仙林金鹰卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/20230602-163703.jpg',
    address: '江苏省南京市栖霞区学海路1号金鹰B区1楼7号门',
    lng: 118.925085,
    lat: 32.100412,
    telephone: '02552708086',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1537,
    storeName: '小鹏汽车上海龙湖闵行天街卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/闵行.jpg',
    address: '上海市闵行区剑川路1000号龙湖闵行天街L1-9号商铺',
    lng: 121.414887,
    lat: 31.026158,
    telephone: '13921121566',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1575,
    storeName: '小鹏汽车杭州萧山银泰城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/杭州萧山银泰城.jpeg',
    address: '浙江省杭州市萧山区通惠南路667号',
    lng: 120.26,
    lat: 30.18,
    telephone: '057186908156',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1711,
    storeName: '小鹏汽车南京龙湖江北天街卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/mmexport1684474712477.jpg',
    address: '南京市浦口区文景路99号龙湖南京江北天街2号门1F-59A',
    lng: 118.696709,
    lat: 32.159344,
    telephone: '02558881609',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1727,
    storeName: '小鹏汽车上海正大广场卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/shanghai.jpg',
    address: '上海市浦东新区陆家嘴西路168号正大广场一楼GF03号',
    lng: 121.49917,
    lat: 31.236752,
    telephone: '18917698865',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1679,
    storeName: '小鹏汽车台州黄岩吾悦卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/黄岩吾悦卫星店.jpg',
    address: '浙江省台州市黄岩区大桥路1号新城吾悦广场1005商铺',
    lng: 121.261563,
    lat: 28.654892,
    telephone: '0576-82522999',
    serviceTelephone: '',
    businessHours: '10:00:00-21:30:00',
    weekendBusinessHours: '10:00:00-21:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1461,
    storeName: '小鹏汽车温州苍南银泰城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/output.png',
    address: '浙江省温州市苍南县玉苍路1088号(苍南银泰 一楼1013号)',
    lng: 120.43,
    lat: 27.51,
    telephone: '057788815999',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 171,
    storeName: '小鹏汽车深圳南山蛇口港服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/05-09/17-36-570100-2034371553.png',
    address: '深圳市南山区海湾路33号',
    lng: 113.897003,
    lat: 22.4674,
    telephone: '',
    serviceTelephone: '0755-26666003',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 855,
    storeName: '小鹏汽车漳州龙文北路服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-22/17-40-2308981485559796.jpg',
    address: '漳州市龙文区龙文北路与浦口路交叉口',
    lng: 117.718002,
    lat: 24.524401,
    telephone: '',
    serviceTelephone: '18006966270',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [2],
    status: 1
  },
  {
    id: 1697,
    storeName: '小鹏汽车清远广清大道汽车城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969002091040/清远广清).png',
    address: '广东省清远市清城区新城 B28区奇鸿汽车城',
    lng: 113.055352,
    lat: 23.66219,
    telephone: '0763-3988939',
    serviceTelephone: '',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1687,
    storeName: '小鹏汽车宁波慈溪浒崇公路汽车城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/慈溪浒崇.jpg',
    address: '浙江省宁波市慈溪浒崇公路489号',
    lng: 121.245521,
    lat: 30.191914,
    telephone: '0574-27869393',
    serviceTelephone: '',
    businessHours: '09:30:00-21:30:00',
    weekendBusinessHours: '09:30:00-21:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1597,
    storeName: '小鹏汽车天津威尼都卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/飞书20230315-111307.jpg',
    address: '天津市武清区前进道威尼都H2-101号',
    lng: 117.012051,
    lat: 39.376142,
    telephone: '15900352506',
    serviceTelephone: '',
    businessHours: '10:00:00-21:00:00',
    weekendBusinessHours: '09:00:00-21:00:00',
    types: [1],
    status: 1
  },
  {
    id: 837,
    storeName: '小鹏汽车威海金蚂蚁汽车广场服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/03-07/15-41-500466930311166.png',
    address: '山东省威海市环翠区温泉西路119号32号',
    lng: 122.137001,
    lat: 37.367001,
    telephone: '',
    serviceTelephone: '0631-5996506',
    businessHours: '08:00:00-17:30:00',
    weekendBusinessHours: '08:00:00-17:30:00',
    types: [2],
    status: 1
  },
  {
    id: 1445,
    storeName: '小鹏汽车苏州新区永旺梦乐城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/苏州新区永旺.png',
    address: '苏州新区永旺梦乐城127号铺位',
    lng: 120.53,
    lat: 31.37,
    telephone: '18360481115',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 253,
    storeName: '小鹏汽车新乡国际汽车园服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/新乡国际汽车园.png',
    address:
      '河南省新乡市高新区朗公庙镇新飞大道南段107国际汽车园内46号楼10-13号展厅',
    lng: 113.894997,
    lat: 35.217499,
    telephone: '',
    serviceTelephone: '16690960111',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [2],
    status: 1
  },
  {
    id: 559,
    storeName: '小鹏汽车无锡锡东服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/07-13/14-37-010194-1599841342.jpg',
    address: '先锋中路25-6号无锡先锋国际汽车广场',
    lng: 120.418999,
    lat: 31.582701,
    telephone: '',
    serviceTelephone: '0510-82860080',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 225,
    storeName: '小鹏汽车嘉兴禾众服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/嘉兴禾众.jpg',
    address: '浙江省嘉兴市南湖区南溪东路1362号',
    lng: 120.827003,
    lat: 30.7465,
    telephone: '',
    serviceTelephone: '0573-82589666',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [2],
    status: 1
  },
  {
    id: 1803,
    storeName: '小鹏汽车合肥融创茂卫星店',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '安徽省合肥市庐州大道800号融创茂一层1013铺',
    lng: 117.3,
    lat: 31.7,
    telephone: '',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1485,
    storeName: '小鹏汽车徐州云龙万达卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/徐州云龙万达.jpg',
    address: '江苏省徐州市云龙区云龙万达广场1052',
    lng: 117.247493,
    lat: 34.253522,
    telephone: '0516-88366566',
    serviceTelephone: '',
    businessHours: '09:20:00-22:00:00',
    weekendBusinessHours: '09:20:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1709,
    storeName: '小鹏汽车扬州M会员店卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/mmexport1682479141675.jpg',
    address: '江苏省扬州市江阳中路425号M会员店1-1001',
    lng: 119.41,
    lat: 32.37,
    telephone: '051487018856',
    serviceTelephone: '',
    businessHours: '08:00:00-22:00:00',
    weekendBusinessHours: '08:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1563,
    storeName: '小鹏汽车深圳壹方天地卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/5.jpeg',
    address: '广东省深圳市龙华区龙华大道3839号壹方天地D区L1-046铺',
    lng: 114.032419,
    lat: 22.6431,
    telephone: '0755-23737067',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1675,
    storeName: '小鹏汽车台州玉环吾悦卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/台州玉环吾悦.jpeg',
    address: '浙江省台州市玉环市双港路888号吾悦广场F1007铺位',
    lng: 121.23,
    lat: 28.11,
    telephone: '057682968111',
    serviceTelephone: '',
    businessHours: '10:00:00-21:30:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1157,
    storeName: '小鹏汽车安庆英德利汽车城服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/37454131089856/飞书20230601-142130.jpg',
    address: '安徽省安庆市宜秀区石塘湖路8号',
    lng: 117.059347,
    lat: 30.56605,
    telephone: '',
    serviceTelephone: '0556-5326789',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1187,
    storeName: '小鹏汽车上海浦东服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/上海浦东.jpg',
    address: '周浦镇沪南公路建豪路92号',
    lng: 121.571766,
    lat: 31.093479,
    telephone: '',
    serviceTelephone: '021-20906867',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1757,
    storeName: '小鹏汽车珠海奥园卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/珠海卫星店.jpg',
    address: '广东省珠海市香洲区梅界路珠海奥园广州一期中庭L1-09/10商铺',
    lng: 113.514999,
    lat: 22.2819,
    telephone: '0756-8622775',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1259,
    storeName: '小鹏汽车深圳宝安沙井服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/20230223-113812.jpg',
    address: '深圳市宝安区沙井街道大王山社区沙井南环路381号A1栋二层',
    lng: 113.8025,
    lat: 22.7176,
    telephone: '',
    serviceTelephone: '18148525105',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1063,
    storeName: '小鹏汽车长治关村汽贸城服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/长治关村汽贸城.png',
    address:
      '山西省长治市长治高新技术产业开发区北外环路关村汽贸城东第一排（2号）',
    lng: 113.148003,
    lat: 36.224701,
    telephone: '',
    serviceTelephone: '0355-6057668',
    businessHours: '08:30:00-18:30:00',
    weekendBusinessHours: '08:30:00-18:30:00',
    types: [2],
    status: 1
  },
  {
    id: 419,
    storeName: '小鹏汽车扬州国际汽车城服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/扬州国际汽车城.jpg',
    address: '扬州市邗江区扬子江北路999号',
    lng: 119.415001,
    lat: 32.400799,
    telephone: '',
    serviceTelephone: '0514-87861196',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 931,
    storeName: '小鹏汽车衢州浙西汽车城服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/衢州浙西汽车城.jpeg',
    address: '浙江省衢州市柯城区浙西大道109号16区1幢',
    lng: 118.895088,
    lat: 28.930965,
    telephone: '',
    serviceTelephone: '0570-3355050',
    businessHours: '08:30:00-17:00:00',
    weekendBusinessHours: '08:30:00-17:00:00',
    types: [2],
    status: 1
  },
  {
    id: 26,
    storeName: '小鹏汽车长沙芙蓉服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/长沙芙蓉.jpg',
    address: '长沙市长沙县芙蓉区雄天路118号长沙现代服务业产业园四栋一楼',
    lng: 113.075742,
    lat: 28.214513,
    telephone: '',
    serviceTelephone: '0731-82910190',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 819,
    storeName: '小鹏汽车鄂尔多斯天骄路服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/鄂尔多斯天骄路.jpg',
    address: '内蒙古鄂尔多斯市东胜区原和平宴会城北墙底商小鹏汽车交付中心',
    lng: 109.973723,
    lat: 39.820555,
    telephone: '',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [0],
    status: 1
  },
  {
    id: 1717,
    storeName: '小鹏汽车中山小榄金宁汽车城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/照片2.jpg',
    address: '广东省中山市小榄镇永宁菊城大道西176号金宁汽车城B1-1幢首层',
    lng: 113.225129,
    lat: 22.645252,
    telephone: '0760-88889880',
    serviceTelephone: '',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1],
    status: 1
  },
  {
    id: 365,
    storeName: '小鹏汽车深圳海岸城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969170048544/深圳海岸城小.jpg',
    address:
      '深圳市南山区粤海街道海珠社区文心五路33号海岸城购物中心1楼198-1铺位',
    lng: 113.934998,
    lat: 22.5173,
    telephone: '075526904485',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 697,
    storeName: '小鹏汽车芜湖阳明路服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/11-25/16-28-230001-992415641.jpeg',
    address: '安徽省芜湖市鸠江区阳明路28号',
    lng: 118.422997,
    lat: 31.3792,
    telephone: '',
    serviceTelephone: '0553-5222006',
    businessHours: '09:00:00-18:30:00',
    weekendBusinessHours: '09:00:00-18:30:00',
    types: [2],
    status: 1
  },
  {
    id: 637,
    storeName: '小鹏汽车东莞厚街万达广场体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/10-11/16-54-210332735871915.png',
    address: '宝屯社区康乐北路6号厚街万达广场L1-L1-1025-1026',
    lng: 113.674004,
    lat: 22.943899,
    telephone: '076985886656',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1277,
    storeName: '小鹏汽车厦门集美服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/厦门集美.jpg',
    address: '厦门市集美区岩隆路33-6号厦门汽车城汽车公共服务中心3号楼一层',
    lng: 118.061996,
    lat: 24.634701,
    telephone: '',
    serviceTelephone: '0592-5091680',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 591,
    storeName: '小鹏汽车驻马店峄城服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-16/15-16-530155-15737031.jpeg',
    address: '驻马店市驿城区置地大道与兴业大道交叉口东南角长仑工业园内01号',
    lng: 114.066002,
    lat: 33.000099,
    telephone: '',
    serviceTelephone: '0396-2999007',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1551,
    storeName: '小鹏汽车成都武侯大悦城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/成都大悦城.jpg',
    address: '成都市武侯区大悦路518号',
    lng: 104.011853,
    lat: 30.626087,
    telephone: '02885910176',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1317,
    storeName: '小鹏汽车舟山临城服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/舟山临城.jpg',
    address: '浙江省舟山市定海区千岛街道临城工业区三道9号',
    lng: 122.23,
    lat: 29.98,
    telephone: '',
    serviceTelephone: '0580-2620005',
    businessHours: '08:30:00-17:00:00',
    weekendBusinessHours: '08:30:00-17:00:00',
    types: [2],
    status: 1
  },
  {
    id: 879,
    storeName: '小鹏汽车九江国际汽车城服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-27/18-05-1401831266664902.png',
    address: '江西省九江市经济技术开发区九瑞大道176号',
    lng: 115.935997,
    lat: 29.702499,
    telephone: '',
    serviceTelephone: '0792-8888360',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 185,
    storeName: '小鹏汽车深圳宝安宝港服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-16/15-47-010375-1957887438.jpeg',
    address: '深圳市宝安区西乡街道宝源路宝港中心A座A102号',
    lng: 113.835999,
    lat: 22.593,
    telephone: '',
    serviceTelephone: '0755-28993806',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1555,
    storeName: '小鹏汽车成都华熙LIVE卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/成都华熙LIVE.jpg',
    address: '成都市锦江区三圣街道喜树街609号华熙528-A区1109号',
    lng: 104.145741,
    lat: 30.593066,
    telephone: '02886258812',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1789,
    storeName: '小鹏汽车诸暨北二环销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150014_75108.jpg',
    address: '浙江省绍兴市诸暨市陶朱街道北二环路9号',
    lng: 120.192816,
    lat: 29.74385,
    telephone: '',
    serviceTelephone: '0575-89088512',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 3
  },
  {
    id: 1641,
    storeName: '小鹏汽车洛阳杜预街汽车城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969002091040/JPEG_20230328_113223.jpg',
    address: '河南省洛阳市洛龙区开元大道与杜预街交叉口南350米',
    lng: 112.405446,
    lat: 34.600757,
    telephone: '0379-63188666',
    serviceTelephone: '',
    businessHours: '08:30:00-19:30:00',
    weekendBusinessHours: '08:30:00-19:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1459,
    storeName: '小鹏汽车嵊州吾悦卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/嵊州吾悦.jpg',
    address: '浙江省绍兴市嵊州市吾悦广场广场1502铺位',
    lng: 120.82,
    lat: 29.57,
    telephone: '0575-83671650',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1603,
    storeName: '小鹏汽车衢州浙西汽车城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969002091040/衢州.jpg',
    address: '浙江省衢州市柯城区浙西大道109号15区3幢2号',
    lng: 118.901209,
    lat: 28.938441,
    telephone: '0570-3355089',
    serviceTelephone: '',
    businessHours: '08:30:00-17:00:00',
    weekendBusinessHours: '08:30:00-17:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1541,
    storeName: '小鹏汽车西安曲江创意谷卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/西安曲江创意谷.jpg',
    address: '陕西省西安市雁塔区雁翔路3369号曲江创意谷中央广场',
    lng: 109.012921,
    lat: 34.212565,
    telephone: '18710729780',
    serviceTelephone: '',
    businessHours: '09:30:00-22:00:00',
    weekendBusinessHours: '09:30:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1655,
    storeName: '小鹏汽车温州瑞安吾悦卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969002091040/IMG_20230201_162535_1.jpg',
    address: '浙江省温州市瑞安市安阳街道吾悦广场1055-1056',
    lng: 120.663048,
    lat: 27.782143,
    telephone: '13587885085',
    serviceTelephone: '',
    businessHours: '09:00:00-22:00:00',
    weekendBusinessHours: '09:30:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1161,
    storeName: '小鹏汽车玉林永嘉园服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/玉林永嘉园.jpg',
    address: '广西省玉林市玉林市玉州区一环东路44-46号百花汇购物广场一号楼',
    lng: 110.167,
    lat: 22.630501,
    telephone: '',
    serviceTelephone: '0775-2299928',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [0],
    status: 3
  },
  {
    id: 763,
    storeName: '小鹏汽车镇江官塘桥路服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/镇江官塘桥路.jpg',
    address: '江苏省镇江市润州区官塘桥路299号',
    lng: 119.468717,
    lat: 32.171919,
    telephone: '',
    serviceTelephone: '0511-85516666',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [2],
    status: 1
  },
  {
    id: 189,
    storeName: '小鹏汽车广州华奔服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-16/15-48-050886-1882576093.jpeg',
    address: '广州市番禺区东环街甘棠村市新路140号之二',
    lng: 113.375,
    lat: 22.959499,
    telephone: '',
    serviceTelephone: '020-34516651',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1479,
    storeName: '小鹏汽车滕州万达卫星店',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '山东省枣庄滕州市滕州万达广场1楼1078号商铺',
    lng: 117.194406,
    lat: 35.109675,
    telephone: '0632-5252600',
    serviceTelephone: '',
    businessHours: '09:30:00-22:00:00',
    weekendBusinessHours: '09:30:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1193,
    storeName: '小鹏汽车义乌江东服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/03-21/11-44-390165-465584405.jpg',
    address: '浙江省义乌市江东街道通宝路167号',
    lng: 120.139999,
    lat: 29.315201,
    telephone: '',
    serviceTelephone: '0579-85663305',
    businessHours: '08:00:00-17:00:00',
    weekendBusinessHours: '08:00:00-17:00:00',
    types: [2],
    status: 1
  },
  {
    id: 289,
    storeName: '小鹏汽车汕头龙湖服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/汕头龙湖.jpg',
    address: '广东省汕头市龙湖区汕汾路与淮河路交界处北侧',
    lng: 116.726265,
    lat: 23.392342,
    telephone: '',
    serviceTelephone: '0754-86960696',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 575,
    storeName: '小鹏汽车上海金桥服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/上海金桥.jpg',
    address: '上海浦东新区金湘路500号',
    lng: 121.608002,
    lat: 31.250601,
    telephone: '',
    serviceTelephone: '021-58212266',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [2],
    status: 1
  },
  {
    id: 1501,
    storeName: '小鹏汽车贵阳孟关汽车城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/IMG_3611.JPG',
    address: '贵阳孟关汽贸城20号地块中心绿地公园地下A6-A7商铺',
    lng: 106.74,
    lat: 26.4,
    telephone: '0851-83859335',
    serviceTelephone: '',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1811,
    storeName: '小鹏汽车台州宝龙城卫星店',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '浙江省台州市椒江区黄海公路5号台州椒江宝龙城1层L1-023-2号商铺',
    lng: 121.411685,
    lat: 28.674075,
    telephone: '0576-88671688',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 839,
    storeName: '小鹏汽车蚌埠国际汽车城服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-28/19-30-100714-1378898918.png',
    address: '蚌埠市迎宾大道1155号国际汽车城32栋附1号',
    lng: 117.308998,
    lat: 32.862499,
    telephone: '',
    serviceTelephone: '0552-3708983',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1121,
    storeName: '小鹏汽车亳州远景汽车城服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/04-11/14-06-5509021333239547.png',
    address: '安徽省亳州市经开区杜仲路与桐乡路交叉口西北侧',
    lng: 115.760002,
    lat: 33.831799,
    telephone: '',
    serviceTelephone: '0558-5818222',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 103,
    storeName: '小鹏汽车杭州余杭服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/杭州余杭.jpg',
    address: '杭州市余杭区仓前街道龙泉路18号',
    lng: 119.982,
    lat: 30.2803,
    telephone: '',
    serviceTelephone: '0571-86888026',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1339,
    storeName: '小鹏汽车泉州霞美服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/泉州霞美.jpg',
    address: '福建省泉州市南安市霞美东路168号',
    lng: 118.492358,
    lat: 24.921647,
    telephone: '',
    serviceTelephone: '0595-68286999',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1545,
    storeName: '小鹏汽车西安西部车城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/西安西部车城.jpg',
    address:
      '陕西省西安市未央区沣东新城三桥疏导线58号西部车城内新能源区1-（EV）02小鹏汽车',
    lng: 108.82,
    lat: 34.29,
    telephone: '18240838815',
    serviceTelephone: '',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1069,
    storeName: '小鹏汽车桂林两江大道服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '临桂区临桂镇西城北路3号碧园印象53幢1层4-9号',
    lng: 110.181022,
    lat: 25.2634,
    telephone: '',
    serviceTelephone: '0773-5584619',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 775,
    storeName: '小鹏汽车濮阳汽车小镇服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/濮阳汽车小镇服务中心.jpg',
    address: '河南省濮阳市濮阳县龙都瑞璞汽车小镇1期23#商铺',
    lng: 115.117996,
    lat: 35.755199,
    telephone: '',
    serviceTelephone: '0393-6102999',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1487,
    storeName: '小鹏汽车成都龙潭寺汽车城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/小鹏汽车成都龙潭寺体验中心.jpg',
    address: '四川省成都市成华区成致路1号附13号',
    lng: 104.166932,
    lat: 30.684432,
    telephone: '028-61066899',
    serviceTelephone: '',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-19:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1543,
    storeName: '小鹏汽车杭州未来科技城宝龙卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/杭州未来科技城宝龙.jpeg',
    address: '杭州市余杭区未来科技城宝龙广场L1三号门',
    lng: 119.987963,
    lat: 30.279786,
    telephone: '18058433322',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 203,
    storeName: '小鹏汽车无锡华尊服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-16/15-51-42046481225880.jpeg',
    address: '江苏省无锡市新区梅村新都路29号',
    lng: 120.417999,
    lat: 31.5613,
    telephone: '',
    serviceTelephone: '18961837768',
    businessHours: '08:00:00-17:00:00',
    weekendBusinessHours: '08:00:00-17:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1061,
    storeName: '小鹏汽车张家口白云街服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/03-31/11-58-15017779857309.png',
    address: '河北省张家口经济技术开发区张宣公路西侧白云街1号',
    lng: 114.906049,
    lat: 40.755085,
    telephone: '',
    serviceTelephone: '0313-2066999',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [2],
    status: 1
  },
  {
    id: 247,
    storeName: '小鹏汽车宁波俊鞍服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/宁波俊鞍.jpg',
    address: '浙江省宁波市鄞州区下应北路678号',
    lng: 121.595001,
    lat: 29.818199,
    telephone: '',
    serviceTelephone: '0574-28832003',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1055,
    storeName: '小鹏汽车北海南珠大道服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/02-09/18-49-420592-1300964652.png',
    address: '南珠大道52号',
    lng: 109.168999,
    lat: 21.486099,
    telephone: '',
    serviceTelephone: '0779-3832222',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1677,
    storeName: '小鹏汽车温州平阳万达卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/6f72106f9014aafc9a8d2a533d8f10e.jpg',
    address: '浙江省温州市平阳县鳌江镇车站大道88号万达广场1019A铺位',
    lng: 120.573897,
    lat: 27.587016,
    telephone: '057762577277',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '09:30:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1521,
    storeName: '小鹏汽车长春瑞鹏路服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/长春瑞鹏路.png',
    address: '长春市宽城区北凯旋路3999-7号',
    lng: 125.287003,
    lat: 43.976299,
    telephone: '',
    serviceTelephone: '0431-89691111',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1309,
    storeName: '小鹏汽车汉中兴汉路服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150014_75108.jpg',
    address: '陕西省汉中市汉台区航空经济技术开发区管理委员会向北200米',
    lng: 107.126,
    lat: 33.068,
    telephone: '',
    serviceTelephone: '0916-8158158',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 777,
    storeName: '小鹏汽车商丘中原车城服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/商丘中原车城.jpg',
    address: '民主路与金桥路交叉口',
    lng: 115.596001,
    lat: 34.440601,
    telephone: '',
    serviceTelephone: '0370-2235559',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 795,
    storeName: '小鹏汽车淄博张店服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-07/10-21-200209-1155205820.jpg',
    address: '淄博市张店区山泉路89号',
    lng: 118.041,
    lat: 36.77,
    telephone: '',
    serviceTelephone: '0533-7989399',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 973,
    storeName: '小鹏汽车榆林青云路服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-13/17-13-340922-1873485662.jpg',
    address: '陕西省榆林市榆阳区产业四路与青云二路交汇处',
    lng: 109.872002,
    lat: 38.335499,
    telephone: '',
    serviceTelephone: '0912-3568556',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1815,
    storeName: '小鹏汽车金华世贸城市广场卫星店',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '浙江省金华市金华世贸城市中心广场一楼E006',
    lng: 119.655515,
    lat: 29.088462,
    telephone: '0579-82080801',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 899,
    storeName: '小鹏汽车常熟东南大道服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/常熟东南大道.jpg',
    address: '江苏省常熟市东南开发区东南大道358号（小鹏汽车服务中心）',
    lng: 120.793999,
    lat: 31.601299,
    telephone: '',
    serviceTelephone: '15312170969',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1719,
    storeName: '小鹏汽车大连市华北路卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/20230612-104528.jpg',
    address: '辽宁省大连市甘井子区华北路北市商贸街158号',
    lng: 121.627386,
    lat: 39.019957,
    telephone: '15842628428',
    serviceTelephone: '',
    businessHours: '09:00:00-17:00:00',
    weekendBusinessHours: '09:00:00-17:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1465,
    storeName: '小鹏汽车高邮吾悦卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/高邮吾悦.png',
    address: '江苏省扬州市高邮市吾悦广场1027铺位',
    lng: 119.48,
    lat: 32.78,
    telephone: '0514-84435887',
    serviceTelephone: '',
    businessHours: '10:00:00-21:30:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 915,
    storeName: '小鹏汽车临汾屯里服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/04-06/14-47-290676-501100486.png',
    address: '山西省临汾市尧都区屯里镇沟上村',
    lng: 111.556,
    lat: 36.1306,
    telephone: '',
    serviceTelephone: '0357-2991588',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1583,
    storeName: '小鹏汽车杭州永旺梦乐城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/杭州永旺梦乐城.jpeg',
    address: '浙江省杭州市余杭区古墩路1888号永旺梦乐城',
    lng: 120.06555,
    lat: 30.36733,
    telephone: '057126303689',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1328,
    storeName: '小鹏汽车邯郸渚河路服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/邯郸渚河路.png',
    address: '河北省邯郸市邯山区渚河路4号',
    lng: 114.472647,
    lat: 36.588085,
    telephone: '',
    serviceTelephone: '0310-5505600',
    businessHours: '08:00:00-18:00:00',
    weekendBusinessHours: '08:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1765,
    storeName: '小鹏汽车南京华采天地体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150014_75108.jpg',
    address: '江苏省南京市建邺区江东中路258号',
    lng: 118.72858,
    lat: 32.00328,
    telephone: '',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 3
  },
  {
    id: 1395,
    storeName: '小鹏汽车常州武进汽车城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/武进.jpeg',
    address: '江苏省常州市武进区湖塘镇武进汽车城C区9号',
    lng: 119.964068,
    lat: 31.69222,
    telephone: '15961405157',
    serviceTelephone: '',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1425,
    storeName: '小鹏汽车海安万达卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/海安万达.png',
    address: '江苏省南通市海安万达广场1050号铺位',
    lng: 120.45,
    lat: 32.52,
    telephone: '13236099011',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1497,
    storeName: '小鹏汽车东莞东益汽车园卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/东莞东益.jpg',
    address:
      '广东省东莞市塘厦镇东深路塘厦段30号东益智能装备新能源汽车集聚园2栋1-2层',
    lng: 114.107573,
    lat: 22.838163,
    telephone: '0769-83198222',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 881,
    storeName: '小鹏汽车淮安香港路服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/淮安香港路.jpg',
    address: '淮安市淮阴区钱江路 100 号',
    lng: 119.028071,
    lat: 33.653875,
    telephone: '',
    serviceTelephone: '0517-89682666',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1611,
    storeName: '小鹏汽车绍兴袍江汽车城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/袍江.jpg',
    address: '浙江省绍兴市越城区袍江汽车城袍中北路507号',
    lng: 120.615668,
    lat: 30.08938,
    telephone: '',
    serviceTelephone: '',
    businessHours: '08:30:00-17:00:00',
    weekendBusinessHours: '08:30:00-17:00:00',
    types: [1],
    status: 1
  },
  {
    id: 209,
    storeName: '小鹏汽车上海普陀桃浦服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/上海普陀桃浦.jpg',
    address: '上海市普陀区真陈路38号二幢一层A区',
    lng: 121.353361,
    lat: 31.293087,
    telephone: '',
    serviceTelephone: '021-56081338',
    businessHours: '08:30:00-17:00:00',
    weekendBusinessHours: '08:30:00-17:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1785,
    storeName: '小鹏汽车东莞东益汽车园销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150014_75108.jpg',
    address:
      '广东省东莞市塘厦镇东深路塘厦段30号东益智能装备新能源汽车集聚园2栋102室',
    lng: 114.107106,
    lat: 22.839347,
    telephone: '',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 3
  },
  {
    id: 1607,
    storeName: '小鹏汽车珠海高新宝龙卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969002091040/珠海高新宝龙.jpg',
    address:
      '广东省珠海市高新区唐家湾镇金峰北路 88 号宝龙广场一层 L1-044-01 商铺',
    lng: 113.551213,
    lat: 22.381257,
    telephone: '0756-8336132',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1701,
    storeName: '小鹏汽车杭州萧山汽车城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/photo_1682499553313.JPEG',
    address: '浙江省杭州市宁围镇浙江世纪汽车市场2幢26号',
    lng: 120.288,
    lat: 30.2043,
    telephone: '13094808868',
    serviceTelephone: '',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [1],
    status: 1
  },
  {
    id: 579,
    storeName: '小鹏汽车海口南海大道服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/11-05/09-53-310698-1948591916.jpg',
    address: '海南省海口市龙华区南海大道115号',
    lng: 110.299004,
    lat: 19.9958,
    telephone: '',
    serviceTelephone: '0898-66805001',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 665,
    storeName: '小鹏汽车常德湘西北汽车城服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-16/15-39-330535-1688623866.jpeg',
    address: '湖南省常德市武陵区龙港北路小鹏汽车二楼（湘西北汽车城内）',
    lng: 111.674004,
    lat: 29.074499,
    telephone: '',
    serviceTelephone: '0736-7172518',
    businessHours: '08:00:00-17:30:00',
    weekendBusinessHours: '08:00:00-17:30:00',
    types: [2],
    status: 1
  },
  {
    id: 1453,
    storeName: '小鹏汽车佛山三水万达卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/佛山三水万达.jpg',
    address: '广东省佛山市三水区万达广场1022铺位',
    lng: 112.903944,
    lat: 23.178277,
    telephone: '18585791201',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1105,
    storeName: '小鹏汽车安阳彰德路服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/03-11/17-50-570993-855939710.png',
    address: '河南省安阳市文峰区彰德路南段玄鸟北100米路东（宝捷汽贸院内）',
    lng: 114.348,
    lat: 36.075298,
    telephone: '',
    serviceTelephone: '0372-2568199',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1057,
    storeName: '小鹏汽车枣庄茂源路服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '枣庄市薛城区兴仁街道茂源北路路东108号门市',
    lng: 117.288002,
    lat: 34.8092,
    telephone: '',
    serviceTelephone: '0632-5199665',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1511,
    storeName: '小鹏汽车儋州夏日广场卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/儋州夏日广场.jpg',
    address: '海南省儋州市兰洋北路111号1F-045B',
    lng: 109.589448,
    lat: 19.528381,
    telephone: '0898-68550260',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1663,
    storeName: '小鹏汽车柳州官塘大道服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/46124646022944/img_v2_e4ab95fa-806a-41be-88d0-16020a7adb2g.jpg',
    address:
      '广西壮族自治区柳州市鱼峰区官塘大道121号柳东汽车贸易园(一期)3#101、201、301 、401号房',
    lng: 109.546502,
    lat: 24.417006,
    telephone: '',
    serviceTelephone: '0772-2992604',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1471,
    storeName: '小鹏汽车福清福和万达卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/福清.jpg',
    address: '福建省福清市福和路9号福和万达广场1层1030铺位',
    lng: 119.35,
    lat: 25.72,
    telephone: '18559177680',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 573,
    storeName: '小鹏汽车广州番禺服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/广州番禺.jpg',
    address: '广州市番禺区南村镇兴业大道东488号4栋1楼101',
    lng: 113.370003,
    lat: 22.995501,
    telephone: '',
    serviceTelephone: '020-84503960',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1147,
    storeName: '小鹏汽车广州黄埔交付中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/02-08/14-09-420951625746669.jpg',
    address: '广州市黄埔区南云五路8号自编八栋',
    lng: 113.457734,
    lat: 23.14577,
    telephone: '',
    serviceTelephone: '',
    businessHours: '09:00:00-21:00:00',
    weekendBusinessHours: '09:30:00-21:00:00',
    types: [0],
    status: 1
  },
  {
    id: 1783,
    storeName: '小鹏汽车天津熙悦汇卫星店',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '天津市南开区黄河道513号熙悦汇购物中心1F-17号商铺',
    lng: 117.123772,
    lat: 39.136959,
    telephone: '022-85283088',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 989,
    storeName: '小鹏汽车上海九亭服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-30/10-09-120860720992215.png',
    address: '上海市松江区泗泾镇九干路50号',
    lng: 121.294998,
    lat: 31.126101,
    telephone: '',
    serviceTelephone: '400-102-1596',
    businessHours: '08:30:00-17:00:00',
    weekendBusinessHours: '08:30:00-17:00:00',
    types: [2],
    status: 1
  },
  {
    id: 197,
    storeName: '小鹏汽车重庆商社悦通服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-16/15-49-280349708634578.jpeg',
    address: '重庆市渝中区石油路街道8号',
    lng: 106.509003,
    lat: 29.5441,
    telephone: '',
    serviceTelephone: '023-68590909',
    businessHours: '09:00:00-17:30:00',
    weekendBusinessHours: '09:00:00-17:30:00',
    types: [2],
    status: 1
  },
  {
    id: 277,
    storeName: '小鹏汽车苏州马上服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/苏州马上.jpg',
    address: '江苏省苏州市吴中区石湖西路136号',
    lng: 120.615997,
    lat: 31.253201,
    telephone: '',
    serviceTelephone: '13382109018',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [2],
    status: 1
  },
  {
    id: 131,
    storeName: '小鹏汽车许昌东城区新东街服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2019/11-01/11-01-5209221727567141.jpg',
    address: '河南省许昌市建安区许州路与新东街交叉口东100米汽车公园内',
    lng: 113.889999,
    lat: 34.028702,
    telephone: '',
    serviceTelephone: '0374-2770059',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1405,
    storeName: '小鹏汽车杭州亲橙里卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/亲橙里.jpg',
    address: '浙江省杭州市余杭区西溪亲橙里1层2-1',
    lng: 120.03,
    lat: 30.28,
    telephone: '0571-87071167',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1569,
    storeName: '小鹏汽车合肥之心城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/合肥之心城.jpg',
    address: '合肥市蜀山区长江西路189号 之心城购物中心1层08C号商铺 小鹏汽车',
    lng: 117.257206,
    lat: 31.853481,
    telephone: '055165860669',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 757,
    storeName: '小鹏汽车滨州渤海五路服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-07/10-23-560086728895247.jpg',
    address: '山东省滨州市滨城区黄河十五路渤海五路北30米路东',
    lng: 118.019257,
    lat: 37.420655,
    telephone: '',
    serviceTelephone: '0543-3364111',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1308,
    storeName: '小鹏汽车合肥西二环汽车城服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/合肥5.jpg',
    address: '安徽省合肥市蜀山区天智路4号',
    lng: 117.21,
    lat: 31.83,
    telephone: '',
    serviceTelephone: '0551-63518889',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 883,
    storeName: '小鹏汽车马鞍山湖西南路服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-16/15-27-190620-421451359.jpeg',
    address: '安徽省马鞍山市湖西南路152号（院内）',
    lng: 118.499001,
    lat: 31.6404,
    telephone: '',
    serviceTelephone: '0555-2107998',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1771,
    storeName: '小鹏汽车珠海十字门A8卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/十字门门店照片.jpg',
    address: '广东省珠海市香洲区银湾路268号1层1004号商铺',
    lng: 113.521258,
    lat: 22.173664,
    telephone: '0756-8336223',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1035,
    storeName: '小鹏汽车乐山天牛汽车城销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-27/18-05-490917-453207462.png',
    address: '四川省乐山市市中区龙游路北段518号',
    lng: 103.737,
    lat: 29.612,
    telephone: '',
    serviceTelephone: '0833-2444885',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [2],
    status: 1
  },
  {
    id: 1391,
    storeName: '小鹏汽车溧阳吾悦卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/溧阳吾悦.jpg',
    address: '江苏省常州市溧阳市古县街道吾悦广场一楼1010铺位',
    lng: 119.95,
    lat: 31.78,
    telephone: '15895013118',
    serviceTelephone: '',
    businessHours: '10:00:00-21:30:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1115,
    storeName: '小鹏汽车天津鹏欣水游城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969854962208/水游城.jpg',
    address: '天津市红桥区大丰路14、16、18、20、22、24号水游城F1AN02-2',
    lng: 117.169998,
    lat: 39.148201,
    telephone: '02258193858',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 877,
    storeName: '小鹏汽车龙岩东兴路服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/龙岩东兴路.jpg',
    address: '福建省龙岩市新罗区东城东宫下东兴路219号',
    lng: 117.052002,
    lat: 25.125999,
    telephone: '',
    serviceTelephone: '0597-2798999',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 417,
    storeName: '小鹏汽车湛江金富服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-21/10-21-220961882786400.jpg',
    address: '广东省湛江市麻章区瑞云南路3号金富大厦',
    lng: 110.343002,
    lat: 21.250799,
    telephone: '',
    serviceTelephone: '0759-3279038',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 773,
    storeName: '小鹏汽车十堰东风大道服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-20/09-52-180527-1873554138.jpeg',
    address: '湖北省十堰市茅箭区东风大道40号',
    lng: 110.847,
    lat: 32.604198,
    telephone: '',
    serviceTelephone: '0719-8765151',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 133,
    storeName: '小鹏汽车南通东方大道服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/南通东方大道.jpg',
    address: '江苏省南通市崇川区东方大道高架旁宏兴路与晨阳路交界处',
    lng: 120.978996,
    lat: 31.9312,
    telephone: '',
    serviceTelephone: '0513-85500100',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1705,
    storeName: '小鹏汽车上海奉贤龙湖天街卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/img_v2_921070df-e608-4f7c-a2fc-e54b8954bceg.jpg',
    address: '上海市奉贤区金海公路3800号龙湖奉贤天街A-1F-36',
    lng: 121.496887,
    lat: 30.913418,
    telephone: '13671969520',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 991,
    storeName: '小鹏汽车荆门国际汽车城服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-31/15-18-380003-132871307.jpg',
    address: '湖北省荆门市高新区掇刀区月亮湖路国际汽车城江山2路9号1幢',
    lng: 112.237999,
    lat: 31.041201,
    telephone: '',
    serviceTelephone: '13617241345',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1609,
    storeName: '小鹏汽车惠州大亚湾万达卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969002091040/惠州大亚湾.jpg',
    address: '广东省惠州市惠阳区大亚湾西区街道龙海二路38号万达广场1F层1013A',
    lng: 114.47992,
    lat: 22.755273,
    telephone: '0752-5299789',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1271,
    storeName: '小鹏汽车东莞东益汽车园服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/东莞.jpg',
    address:
      '广东省东莞市塘厦镇东深路塘厦段30号东益智能装备新能源汽车集聚园2栋',
    lng: 114.107091,
    lat: 22.839434,
    telephone: '',
    serviceTelephone: '0769-81127666',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1123,
    storeName: '小鹏汽车焦作蚂蚁汽车城服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/焦作蚂蚁汽车城.jpg',
    address: '河南省焦作市中站区人民路西段蚂蚁汽车城内',
    lng: 113.158997,
    lat: 35.2048,
    telephone: '',
    serviceTelephone: '0391-2999002',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1515,
    storeName: '小鹏汽车无锡江阴八佰伴体验中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150014_75108.jpg',
    address: '江苏省无锡市江阴市虹桥南路256号江阴八佰伴L1009',
    lng: 120.270024,
    lat: 31.897369,
    telephone: '',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 3
  },
  {
    id: 1133,
    storeName: '小鹏汽车衡水胜利路服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/03-28/11-54-1701341367986927.png',
    address:
      '河北省衡水市高新区胜利路南侧，顺兴大街西侧衡水敬诚橡胶贸易有限公司院内',
    lng: 115.632004,
    lat: 37.736099,
    telephone: '',
    serviceTelephone: '0318-6999993',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 671,
    storeName: '小鹏汽车德阳八角服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-16/15-42-5107641251079223.jpeg',
    address: '四川省德阳市旌阳区八角工业园区柳江街1号',
    lng: 104.385002,
    lat: 31.072001,
    telephone: '',
    serviceTelephone: '0838-2603182',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1723,
    storeName: '小鹏汽车昆明海乐世界卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/13a60e1b3452486bf442472b792559be.jpg',
    address: '云南省昆明市官渡区永中路38号海乐世界购物中心一层A07-1号',
    lng: 102.741899,
    lat: 24.970577,
    telephone: '087163355015',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1381,
    storeName: '小鹏汽车乌鲁木齐天汇汽车城销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150014_75108.jpg',
    address: '新疆乌鲁木齐市米东区永顺街1642-1号',
    lng: 87.627857,
    lat: 43.943981,
    telephone: '',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1, 2, 3],
    status: 3
  },
  {
    id: 1318,
    storeName: '小鹏汽车毕节碧阳大道服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150014_75108.jpg',
    address: '贵州省毕节市金海湖新区梨树镇梨树村高铁站旁通源汽车文化广场',
    lng: 105.41033,
    lat: 27.26389,
    telephone: '',
    serviceTelephone: '0857-7135555',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 3
  },
  {
    id: 771,
    storeName: '小鹏汽车济宁任城服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-07/10-27-580189334446033.jpg',
    address: '济宁市刘堤头转盘南路东（金宇汽配城对过）',
    lng: 116.549004,
    lat: 35.4291,
    telephone: '',
    serviceTelephone: '0537-2896000',
    businessHours: '08:30:00-22:00:00',
    weekendBusinessHours: '08:30:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1129,
    storeName: '小鹏汽车开封稻一路服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/03-07/15-44-0300701156598426.png',
    address: '开封市龙亭区金明大道与稻一路交叉口向西800米33号',
    lng: 114.294294,
    lat: 34.848492,
    telephone: '',
    serviceTelephone: '0371-25550006',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 263,
    storeName: '小鹏汽车济南奥体中路服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '山东省济南市历下区奥体中路4331号小鹏汽车',
    lng: 117.114998,
    lat: 36.677101,
    telephone: '',
    serviceTelephone: '17553107828',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 947,
    storeName: '小鹏汽车阳江广雅路服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address:
      '广东省阳江市阳东区东城镇广雅路与东风四路交汇处（石化加油站旁小鹏汽车）',
    lng: 112.028999,
    lat: 21.8911,
    telephone: '',
    serviceTelephone: '0662-6619866',
    businessHours: '09:00:00-18:30:00',
    weekendBusinessHours: '09:00:00-18:30:00',
    types: [2],
    status: 1
  },
  {
    id: 695,
    storeName: '小鹏汽车绵阳机场东路服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/绵阳机场东路.jpg',
    address: '绵阳市经开区机场东路206号',
    lng: 104.769997,
    lat: 31.421499,
    telephone: '',
    serviceTelephone: '0816-6917888',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1029,
    storeName: '小鹏汽车包头威龙汽车城服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/01-26/17-04-0606921949215232.jpg',
    address: '内蒙古自治区包头市青山区万青路草原小区威龙汽车城南侧销售展厅',
    lng: 109.883003,
    lat: 40.645802,
    telephone: '',
    serviceTelephone: '13245120008',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1707,
    storeName: '小鹏汽车苏州太仓森茂汽车城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/IMG_20230425_104110.jpg',
    address: '太仓经济开发区太平北路 111 号 8 栋 102 室东侧',
    lng: 121.102866,
    lat: 31.482111,
    telephone: '18896856705',
    serviceTelephone: '',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [1],
    status: 1
  },
  {
    id: 497,
    storeName: '小鹏汽车重庆万象城体验中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/970016119328/小鹏汽车重庆万象城体验中心.jpg',
    address: '重庆市九龙坡区谢家湾正街55号万象城B178',
    lng: 106.517998,
    lat: 29.516399,
    telephone: '02368667618',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 897,
    storeName: '小鹏汽车太原龙城服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/09-28/11-03-560660954913660.jpg',
    address: '山西省太原市小店区马连营路59号新汇众汽车家园小鹏4S店',
    lng: 112.608266,
    lat: 37.7624,
    telephone: '',
    serviceTelephone: '0351-2488181',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1447,
    storeName: '小鹏汽车诸暨万风新天地卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/诸暨万风新天地.jpg',
    address: '浙江省绍兴市诸暨市浣东街道苎萝东路399号中庭',
    lng: 120.26,
    lat: 29.7,
    telephone: '0575-87671188',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 917,
    storeName: '小鹏汽车西咸新区三桥服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/西咸新区三桥.jpg',
    address: '陕西省西咸新区三桥疏导路付58号',
    lng: 108.819794,
    lat: 34.290449,
    telephone: '',
    serviceTelephone: '029-84520058',
    businessHours: '09:00:00-17:30:00',
    weekendBusinessHours: '09:00:00-17:30:00',
    types: [2],
    status: 1
  },
  {
    id: 1767,
    storeName: '小鹏汽车西安芙蓉新天地卫星店',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address:
      '陕西省西安市雁塔区芙蓉西路芙蓉新天地购物中心1F-1005（大唐芙蓉园南门对面）',
    lng: 108.97,
    lat: 34.21,
    telephone: '',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 921,
    storeName: '小鹏汽车丽水岩泉汽车城服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/03-11/17-58-230326890735009.png',
    address: '浙江省丽水市莲都区车城路135号',
    lng: 119.956001,
    lat: 28.471399,
    telephone: '',
    serviceTelephone: '0578-2616881',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 283,
    storeName: '小鹏汽车大连鹏悦服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/大连鹏悦.jpg',
    address: '辽宁省大连市甘井子区华北路北市商贸街158号7号',
    lng: 121.625999,
    lat: 39.018902,
    telephone: '',
    serviceTelephone: '15304111843',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 833,
    storeName: '小鹏汽车德州金车汽贸服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-07/10-19-100193-906828109.jpeg',
    address: '德州市德城区大学西路1758号（金车汽贸）',
    lng: 116.308998,
    lat: 37.4711,
    telephone: '',
    serviceTelephone: '0534-2360222',
    businessHours: '08:00:00-17:30:00',
    weekendBusinessHours: '08:00:00-17:30:00',
    types: [2],
    status: 1
  },
  {
    id: 1635,
    storeName: '小鹏汽车海宁银泰城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/海宁银泰城.jpeg',
    address: '浙江人嘉兴市海宁市海昌南路363号B-1121铺位',
    lng: 120.692942,
    lat: 30.50127,
    telephone: '13586322394',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 140,
    storeName: '小鹏汽车沧州瑞鑫服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/image.png',
    address: '沧州市开发区石港路与沧盐路交叉口中石油加油站东侧',
    lng: 116.913002,
    lat: 38.2836,
    telephone: '',
    serviceTelephone: '0317-3092001',
    businessHours: '08:00:00-17:30:00',
    weekendBusinessHours: '08:00:00-17:30:00',
    types: [2],
    status: 1
  },
  {
    id: 1571,
    storeName: '小鹏汽车盐城万达卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/盐城万达.jpg',
    address: '江苏省盐城市西环路88号万达广场一层1018号商铺',
    lng: 120.135398,
    lat: 33.364696,
    telephone: '051588213151',
    serviceTelephone: '',
    businessHours: '09:30:00-21:30:00',
    weekendBusinessHours: '09:30:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 823,
    storeName: '小鹏汽车聊城五洲东昌路服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/01-11/19-50-390145-597603782.jpg',
    address:
      '山东省聊城市经济技术开发区蒋官屯街道办事处东昌路东首路北269号（五洲商务汽车园院内一号楼）',
    lng: 115.997815,
    lat: 36.454243,
    telephone: '',
    serviceTelephone: '0635-8207678',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1693,
    storeName: '小鹏汽车江门新会万达卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/江门新会万达.jpg',
    address: '广东省江门市新会区启超大道2号万达广场一层1020-1021铺',
    lng: 113.046638,
    lat: 22.503515,
    telephone: '0750-331886',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1793,
    storeName: '小鹏汽车东营市北二路汽车城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/4edee57910fca7b1d6921f851e274de.jpg',
    address: '山东省东营市垦利区北二路14号',
    lng: 118.419287,
    lat: 37.479676,
    telephone: '18954310898',
    serviceTelephone: '',
    businessHours: '08:00:00-18:00:00',
    weekendBusinessHours: '08:00:00-18:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1427,
    storeName: '小鹏汽车南通中南百货卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/南通中南百货.png',
    address: '江苏省南通市崇川区桃源路10号1027-1028号',
    lng: 120.9,
    lat: 31.97,
    telephone: '15962952292',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 961,
    storeName: '小鹏汽车恩施松树坪国际汽车城服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/03-28/11-56-060357904541679.png',
    address: '湖北省恩施市六角亭街道恩施国际汽车城2期12号楼',
    lng: 109.454002,
    lat: 30.2827,
    telephone: '',
    serviceTelephone: '0718-8110039',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1451,
    storeName: '小鹏汽车惠州佳兆业卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/小鹏汽车惠州佳兆业卫星店.jpg',
    address: '惠州市惠城区惠州大道11号佳兆业中心二期一层01号L111/114商铺',
    lng: 114.417714,
    lat: 23.117189,
    telephone: '0752-8906585',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 138,
    storeName: '小鹏汽车福州宇翔服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/福州宇翔.jpg',
    address: '福建省福州市仓山区科技园六区116号',
    lng: 119.342003,
    lat: 26.0114,
    telephone: '',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [0],
    status: 1
  },
  {
    id: 1743,
    storeName: '小鹏汽车嘉兴平湖吾悦广场卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/左.jpg',
    address: '浙江省嘉兴市平湖区平湖吾悦广场1号门',
    lng: 121.026915,
    lat: 30.678401,
    telephone: '13511330674',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 565,
    storeName: '小鹏汽车上海闵行服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/09-08/16-30-590507-691870390.jpg',
    address: '上海市闵行区景洪路3199号小鹏汽车',
    lng: 121.443001,
    lat: 31.095699,
    telephone: '',
    serviceTelephone: '13166323887',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 761,
    storeName: '小鹏汽车日照奎山汽车城服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-07/10-23-040446-927520333.png',
    address: '山东省日照市奎山汽车城204国道西',
    lng: 119.435997,
    lat: 35.390301,
    telephone: '',
    serviceTelephone: '0633-2297111',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1149,
    storeName: '小鹏汽车清远广清大道服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/03-03/18-20-300558-1302202209.png',
    address: '清远市清城区新城B28区奇鸿汽车城',
    lng: 113.0552,
    lat: 23.662105,
    telephone: '',
    serviceTelephone: '0763-3988939',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1361,
    storeName: '小鹏汽车大理泛亚汽车城服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/46124646022944/大理1.jpg',
    address:
      '云南省大理白族自治州大理市经济开发区巍山路大理国际会展中心泛亚490号',
    lng: 100.2691,
    lat: 25.60129,
    telephone: '',
    serviceTelephone: '0872-2134530',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1681,
    storeName: '小鹏汽车台州临海靖江南路汽车城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/台州临海靖江南路.jpg',
    address: '浙江省台州市临海市靖江南路179号一层',
    lng: 121.15,
    lat: 28.82,
    telephone: '0576-89581688',
    serviceTelephone: '',
    businessHours: '08:30:00-17:00:00',
    weekendBusinessHours: '08:30:00-17:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1755,
    storeName: '小鹏汽车常熟汽车市场卫星店',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '江苏省苏州市常熟市东风路12号',
    lng: 120.796265,
    lat: 31.636283,
    telephone: '',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 223,
    storeName: '小鹏汽车台州路桥服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-06/09-52-410911294127217.jpg',
    address: '浙江省台州市路桥区新安南街766号',
    lng: 121.38569,
    lat: 28.565061,
    telephone: '',
    serviceTelephone: '0576-82444247',
    businessHours: '08:00:00-17:30:00',
    weekendBusinessHours: '08:00:00-17:30:00',
    types: [2],
    status: 1
  },
  {
    id: 1223,
    storeName: '小鹏汽车广州黄埔宏景服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/广州黄埔宏景.jpg',
    address: '广州市黄埔区宏景路67号',
    lng: 113.527456,
    lat: 23.123841,
    telephone: '',
    serviceTelephone: '020-31608924',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1215,
    storeName: '小鹏汽车佛山禅城服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/04-22/18-37-0902361208108742.jpeg',
    address: '广东省佛山市禅城区石湾街道佛山世纪车城小鹏汽车禅城店',
    lng: 113.099998,
    lat: 22.995199,
    telephone: '',
    serviceTelephone: '0757-83131309',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1553,
    storeName: '小鹏汽车肇庆四会吾悦卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/肇庆四会吾悦.jpg',
    address: '广东省肇庆市四会市东城街道商业大道吾悦广场首层1039铺',
    lng: 112.72,
    lat: 23.34,
    telephone: '07582839369',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1627,
    storeName: '小鹏汽车金华义乌朝阳门卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969002091040/义乌朝阳.jpeg',
    address: '浙江省义乌市朝阳门三区3幢L1-097',
    lng: 120.080486,
    lat: 29.303353,
    telephone: '13958408700',
    serviceTelephone: '',
    businessHours: '09:00:00-21:00:00',
    weekendBusinessHours: '09:00:00-21:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1691,
    storeName: '小鹏汽车泉州霞美福山汽车城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/泉州霞美福山汽车城.jpeg',
    address: '福建省泉州市南安市霞美镇霞美东路168号',
    lng: 118.491058,
    lat: 24.922951,
    telephone: '0595-68286888',
    serviceTelephone: '',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [1],
    status: 1
  },
  {
    id: 793,
    storeName: '小鹏汽车眉山眉州大道服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/眉山眉州大道.jpg',
    address: '四川省眉山市东坡区眉州大道西五段',
    lng: 103.82,
    lat: 30.0765,
    telephone: '',
    serviceTelephone: '028-38188883',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 169,
    storeName: '小鹏汽车深圳龙岗吉祥路服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-31/16-16-270749198183868.jpg',
    address: '深圳市龙岗区吉祥路555号',
    lng: 114.237999,
    lat: 22.7267,
    telephone: '',
    serviceTelephone: '0755-84509656',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 821,
    storeName: '小鹏汽车南充潆溪服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/南充潆溪.jpg',
    address: '潆溪镇康西路442号',
    lng: 106.053001,
    lat: 30.879,
    telephone: '',
    serviceTelephone: '0817-2465368',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1255,
    storeName: '小鹏汽车昆明车行天下服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '云南省昆明市盘龙区新东集A座2楼小鹏汽车',
    lng: 102.798478,
    lat: 25.038536,
    telephone: '',
    serviceTelephone: '0871-63585586',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 937,
    storeName: '小鹏汽车南通城港路服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/02-23/18-18-5705591934875051.png',
    address: '江苏省南通市崇川区城港路150号',
    lng: 120.805,
    lat: 32.035,
    telephone: '',
    serviceTelephone: '0513-85535188',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1089,
    storeName: '小鹏汽车青岛城阳销售服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '青岛市城阳区城阳街道吕家庄社区（青威路与春阳路交叉口北50米）',
    lng: 120.420795,
    lat: 36.316051,
    telephone: '053287712288',
    serviceTelephone: '0532-87712828',
    businessHours: '08:30:00-18:00:00',
    weekendBusinessHours: '08:30:00-18:00:00',
    types: [0],
    status: 1
  },
  {
    id: 805,
    storeName: '小鹏汽车河源一通国际汽车城服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/37454131089856/飞书20230327-100806.jpg',
    address: '一通国际汽车城汽配区A2栋',
    lng: 114.68,
    lat: 23.777901,
    telephone: '',
    serviceTelephone: '18666653871',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1667,
    storeName: '小鹏汽车长沙中南汽车城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/IMG_20230419_103752.jpg',
    address: '湖南省长沙市长沙县蒸湘路242号',
    lng: 113.066835,
    lat: 28.237386,
    telephone: '073188155901',
    serviceTelephone: '',
    businessHours: '09:00:00-19:00:00',
    weekendBusinessHours: '09:00:00-19:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1399,
    storeName: '小鹏汽车佛山顺德OPLAZA欢乐海岸卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/output.jpg',
    address:
      '广东省佛山市顺德区大良街道欢乐大道1号OPLAZA欢乐海岸购物中心F117号铺',
    lng: 113.31,
    lat: 22.82,
    telephone: '0757-22200760',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:30:00',
    types: [1],
    status: 1
  },
  {
    id: 1431,
    storeName: '小鹏汽车南通永旺梦乐城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/南通永旺梦乐城.jpg',
    address: '江苏省南通市开发区永旺梦乐城129-131b',
    lng: 120.96292,
    lat: 31.922246,
    telephone: '19895928816',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 669,
    storeName: '小鹏汽车株洲天元汽车博览园服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/株洲天元汽车博览园.jpg',
    address: '湖南省株洲市天元区吉利路汽车博览园内9号地',
    lng: 113.057999,
    lat: 27.818399,
    telephone: '',
    serviceTelephone: '0731-22280808',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1593,
    storeName: '小鹏汽车洛阳杜预街服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '河南省洛阳市洛龙区开元大道杜预街向南300米',
    lng: 112.404999,
    lat: 34.6008,
    telephone: '',
    serviceTelephone: '0379-63183666',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1507,
    storeName: '小鹏汽车杭州西溪印象城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/杭州西溪印象城.jpg',
    address: '杭州市余杭区五常街道西溪印象城B座P3-01-03/04',
    lng: 120.05,
    lat: 30.25,
    telephone: '0571-85068810',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1347,
    storeName: '小鹏汽车菏泽汽车小镇服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/菏泽汽车小镇.png',
    address: '山东省菏泽市定陶区广州路与曙光路交叉口向东50米路北',
    lng: 115.518997,
    lat: 35.257198,
    telephone: '',
    serviceTelephone: '16653080101',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [2],
    status: 1
  },
  {
    id: 1585,
    storeName: '小鹏汽车北京杜杨北街服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/北京杜杨.jpg',
    address: '北京市顺义区仁和镇杜杨北街21号新丰泰集团',
    lng: 116.6314,
    lat: 40.103359,
    telephone: '',
    serviceTelephone: '010-56848898',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1561,
    storeName: '小鹏汽车广州万菱汇卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/广州万菱汇.jpg',
    address: '广州市天河区天河路230号号万菱汇L1-43号铺',
    lng: 113.330622,
    lat: 23.132608,
    telephone: '02085591229',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1713,
    storeName: '小鹏汽车丹阳吾悦广场卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969154978336/IMG_84301.jpg',
    address: '江苏省镇江市丹阳市金陵西路88号吾悦广场1楼1号门',
    lng: 119.60696,
    lat: 31.99692,
    telephone: '051188856886',
    serviceTelephone: '',
    businessHours: '10:00:00-21:30:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1039,
    storeName: '小鹏汽车曲靖玉林南路服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2022/03-28/11-49-410102859546832.png',
    address: '云南省曲靖市麒麟区太和街道玉林南路460号',
    lng: 103.811996,
    lat: 25.541901,
    telephone: '',
    serviceTelephone: '0874-3944995',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1419,
    storeName: '小鹏汽车梧州高旺万达卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/梧州高旺万达.jpg',
    address: '梧州市万秀区高旺路1号1F层1032号商铺',
    lng: 111.29,
    lat: 23.46,
    telephone: '0774-2832989',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1169,
    storeName: '小鹏汽车黄冈楷博大厦服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/material/pic/2022/05-10/pic_20220510150005_30656.jpeg',
    address: '新港大道与新港三路交界处的楷博大厦',
    lng: 114.919998,
    lat: 30.441601,
    telephone: '',
    serviceTelephone: '0713-8888769',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 1423,
    storeName: '小鹏汽车东阳第一百货卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/东阳第一百货.jpeg',
    address: '浙江省东阳市人民路106号第一百货',
    lng: 120.24,
    lat: 29.27,
    telephone: '13958408700',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 871,
    storeName: '小鹏汽车宜春经发大道服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/12-31/15-19-4402841052438466.jpg',
    address: '江西省宜春市袁州区经济开发区经发大道6号',
    lng: 114.4,
    lat: 27.85,
    telephone: '',
    serviceTelephone: '0795-3658883',
    businessHours: '09:00:00-18:30:00',
    weekendBusinessHours: '09:00:00-18:30:00',
    types: [2],
    status: 1
  },
  {
    id: 405,
    storeName: '小鹏汽车深圳龙华嘉义源服务中心',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/2538028092992/深圳龙华嘉义源.jpg',
    address: '深圳市龙华区大浪街道新石社区嘉义源数码科技园6号1层',
    lng: 113.994003,
    lat: 22.6898,
    telephone: '',
    serviceTelephone: '0755-28162626',
    businessHours: '09:00:00-18:00:00',
    weekendBusinessHours: '09:00:00-18:00:00',
    types: [2],
    status: 1
  },
  {
    id: 205,
    storeName: '小鹏汽车东莞南城服务中心',
    pictureUrl:
      'https://xps01.xiaopeng.com/cms/store/pic/2021/03-15/08-59-4804831212883155.png',
    address: '东莞市南城区莞太大道231号',
    lng: 113.730003,
    lat: 22.9999,
    telephone: '',
    serviceTelephone: '0769-23304588',
    businessHours: '08:30:00-17:30:00',
    weekendBusinessHours: '08:30:00-17:30:00',
    types: [2],
    status: 1
  },
  {
    id: 1671,
    storeName: '小鹏汽车宁波海曙印象城卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/宁波海曙印象城.jpg',
    address: '浙江省宁波市海曙区中山西路3666号海曙印象城L1-27',
    lng: 121.478429,
    lat: 29.89692,
    telephone: '057427869393',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  },
  {
    id: 1409,
    storeName: '小鹏汽车合肥正大卫星店',
    pictureUrl:
      'https://dl.xiaopeng.com/xp-dragon/storage/base/service//employee/upload/969736815136/WechatIMG2704.jpeg',
    address: '合肥市经开区芙蓉路291号正大广场室内一层1041铺位',
    lng: 117.23,
    lat: 31.78,
    telephone: '13966717283',
    serviceTelephone: '',
    businessHours: '10:00:00-22:00:00',
    weekendBusinessHours: '10:00:00-22:00:00',
    types: [1],
    status: 1
  }
]

export default stores
