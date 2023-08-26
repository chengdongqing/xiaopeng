import{S as G,a as L,b as V,c as N,T as k,d as P,_ as U,R as T}from"./ScalableImage-bed8c0a9.js";import{B as v}from"./Button-8534d1bd.js";import{d as h,i as y,z as D,y as H,o as s,c as n,a as o,n as R,u as p,h as I,_ as b,k as E,f as M,F as g,r as w,t as u,l as e,w as a,g as B,m as x,A as z,b as F,p as O,e as W}from"./index-ecb560a7.js";import{X as q}from"./X-d6bc02fc.js";const Y=["src"],C=30,J=h({__name:"Car",props:{name:{},spriteUrl:{},current:{}},setup(c){const i=c,r=y(),{mouse:t,rotate:l}=D({mouse:{visible:!1,position:[0,0]},rotate:{prevX:0,offset:0}});H(()=>i.current,()=>{l.offset=0,t.visible=!1});function $(m){const f=r.value.getBoundingClientRect(),[S,X]=[m.clientX-f.left,m.clientY-f.top];S>C&&X>C&&S<f.width-C&&X<f.height-C?(l.prevX>0&&Math.abs(m.pageX-l.prevX)>=5&&(l.offset+=m.pageX>l.prevX?100:-100,l.prevX=m.pageX),t.position=[S,X],t.visible||(t.visible=!0)):t.visible=!1}function _(){window.addEventListener("mousemove",$)}function d(){t.visible=!1,window.removeEventListener("mousemove",$)}return(m,f)=>(s(),n("div",{class:"main",ref_key:"containerRef",ref:r,onMouseenter:_,onMouseleave:d,onMousedown:f[0]||(f[0]=S=>p(l).prevX=S.pageX),onMouseup:f[1]||(f[1]=S=>p(l).prevX=0)},[o("img",{src:`https://s.xiaopeng.com/xp-fe/mainsite/2023/home/rotate/${m.name}.svg`,class:"car-icon",draggable:"false",alt:""},null,8,Y),o("div",{class:"car-picture",style:R({background:`url(${m.spriteUrl}) ${p(l).offset}% 0% / 3600% 100%`})},null,4),o("img",{alt:"",draggable:"false",src:"https://xps01.xiaopeng.com/www/public/img/mouse.73b63bed.svg",class:I(["mouse-icon",{active:p(t).visible}]),style:R({transform:`translate3d(calc(-50% + ${p(t).position[0]}px), calc(-50% + ${p(t).position[1]}px), 0)`})},null,6)],544))}});const K=b(J,[["__scopeId","data-v-169a7839"]]),j=[{name:"G6",description:"超智驾轿跑SUV",spriteUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/rotate/g6-sprite.png"},{name:"P7i",description:"超智能轿跑",spriteUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/rotate/P7i-360.png"},{name:"G9",description:"超快充全智能SUV",spriteUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/rotate/G9-360.png"},{name:"P7",description:"超长续航 智能轿跑",spriteUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/rotate/P7-360.png"},{name:"P5",description:"百变舒适 智能家轿",spriteUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/rotate/P5-360.png"},{name:"G3i",description:"智·潮都市SUV",spriteUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/rotate/G3i-360.png"}],Q={class:"container"},Z={class:"car-bullets"},ee=["onClick"],te={class:"content-wrapper"},se={class:"description"},oe=h({__name:"Section3dCars",setup(c){const i=y(0),r=y(),t=E(()=>j[i.value]);return(l,$)=>{const _=M("RouterLink");return s(),n("div",Q,[o("div",Z,[(s(!0),n(g,null,w(p(j),(d,m)=>(s(),n("div",{class:I(["item",{active:i.value===m}]),key:d.name,onClick:f=>r.value.goTo(m)},u(d.name),11,ee))),128))]),o("div",null,[e(L,{ref_key:"swiperRef",ref:r,style:{height:"56rem"},autoplay:!1,duration:200,onChange:$[0]||($[0]=d=>i.value=d)},{default:a(()=>[(s(!0),n(g,null,w(p(j),d=>(s(),B(G,{key:d.name},{default:a(()=>[e(K,{name:d.name,"sprite-url":d.spriteUrl,current:i.value},null,8,["name","sprite-url","current"])]),_:2},1024))),128))]),_:1},512),e(V,{"swiper-ref":r.value},null,8,["swiper-ref"])]),o("div",te,[o("div",se,u(t.value.description),1),o("div",null,[e(_,{to:`/${t.value.name.toLowerCase()}`},{default:a(()=>[e(v,{class:"btn",arrow:""},{default:a(()=>[x("了解"+u(t.value.name),1)]),_:1})]),_:1},8,["to"]),e(v,{class:"btn right",arrow:""},{default:a(()=>[x("立即订购")]),_:1})])])])}}});const ne=b(oe,[["__scopeId","data-v-1797e9ab"]]),ae=h({__name:"SectionAboutUs",setup(c){return(i,r)=>(s(),B(N,{title:"未来出行探索者",subtitle:"用科技为人类创造更便捷愉悦的出行生活",src:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/explore.mp4","video-url":"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/explore-full.mp4"},{more:a(()=>[e(v,{color:"#fff",arrow:"","arrow-color":"#fff",class:"about"},{default:a(()=>[x(" 关于小鹏 ")]),_:1})]),_:1}))}}),ie=[{name:"超长无忧质保",description:"最高5年/12万公里整车质保，8年/16万公里三电质保，可选超值终身质保产品",remark:"不同车型存在差异",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/shouhou1.jpg"},{name:"终身无忧救援",description:"7*24H全天守候，无忧救援随时待命，让您安心出行",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/shouhou2.jpg"},{name:"智能服务守护",description:"7*24H智能在线诊断、智能故障预警，守护车辆健康",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/shouhou3.jpg"}],re={class:"container"},ce={class:"name"},pe={class:"description"},le={key:0,class:"remark"},_e={class:"bottom"},de=h({__name:"SectionAfterSale",setup(c){return(i,r)=>(s(),n("div",re,[e(k,{title:"售后服务",subtitle:"用真诚、专业为鹏友提供便捷、愉悦的服务"}),e(U,{columns:"3","item-width":"41.8rem",gap:"3.2rem"},{default:a(()=>[(s(!0),n(g,null,w(p(ie),t=>(s(),n("div",{key:t.name},[e(P,{src:t.pictureUrl,class:"img"},null,8,["src"]),o("div",ce,u(t.name),1),o("div",pe,u(t.description),1),t.remark?(s(),n("div",le,"*"+u(t.remark),1)):z("",!0)]))),128))]),_:1}),o("div",_e,[e(v,{arrow:""},{default:a(()=>[x("了解售后服务")]),_:1})])]))}});const me=b(de,[["__scopeId","data-v-10f1ba9d"]]),ue=[{name:"3D云展厅，全方位查看车辆细节",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/components/app-download/app-download-1.jpg"},{name:"在小鹏社区，了解真实车主用车体验",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/components/app-download/app-download-2.jpg"},{name:"遍布全国的充电网络，快速查看附近超快充",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/components/app-download/app-download-3.jpg"}],fe={class:"container"},he=F('<div class="qrcode-wrapper" data-v-79378912><img class="img" src="https://s.xiaopeng.com/xp-fe/mainsite/2023/common/app-code.jpg" alt="二维码" data-v-79378912></div><div class="remark" data-v-79378912>扫码下载</div><div class="info" data-v-79378912><p data-v-79378912>版本： Andorid 4.33.0/iOS 4.33.0</p><p data-v-79378912><a href="https://www.xiaopeng.com/help/privacy.html?currentContentId=4267" target="_blank" data-v-79378912> 隐私政策 </a> | <a href="https://www.xiaopeng.com/content/3867.html" target="_blank" data-v-79378912> 权限说明 </a> | <a href="https://dl.xiaopeng.com/xp-app/apk/gw32W/XP_MobileAPP_Android_gw32W.apk" target="_blank" data-v-79378912> 下载32位版本 </a></p></div>',3),ve={class:"name"},ge=h({__name:"SectionAppDownload",setup(c){return(i,r)=>(s(),n("div",fe,[e(k,{title:"即刻下载小鹏APP",subtitle:"探索小鹏世界，更多精彩呈现"}),he,e(U,{columns:"3","item-width":"41.8rem",gap:"3.2rem"},{default:a(()=>[(s(!0),n(g,null,w(p(ue),t=>(s(),n("div",{class:"content-item",key:t.name},[e(P,{src:t.pictureUrl},null,8,["src"]),o("div",ve,u(t.name),1)]))),128))]),_:1})]))}});const xe=b(ge,[["__scopeId","data-v-79378912"]]),A=[{name:"G6",title:'小鹏<span class="en">G6 </span>超智驾轿跑<span class="en">SUV</span><br />成熟登场',videoUrl:"https://xps02.xiaopeng.com/cms/material/video/2023/06-29/video_20230629100416_00416.mp4"},{name:"P7i",title:'全新<span class="en">P7i</span><br />超智能轿跑',videoUrl:"https://xps02.xiaopeng.com/cms/material/video/2023/04-07/video_20230407174751_66984.mp4"},{name:"G9",title:'小鹏<span class="en">G9</span><br />超快充全智能<span class="en">SUV</span>',videoUrl:"https://xps02.xiaopeng.com/cms/material/video/2023/01-06/video_20230106135720_85074.mp4"},{name:"P5",title:'小鹏<span class="en">P5</span><br />百变舒适 智能家轿',videoUrl:"https://xps02.xiaopeng.com/cms/material/video/2023/04-07/video_20230407174808_16134.mp4"}],we=["src"],be={class:"content-wrapper"},$e=["innerHTML"],Se={class:"btn-group"},ye=["onClick"],ke=h({__name:"SectionBanner",setup(c){const i=y(0),r=y();return(t,l)=>{const $=M("RouterLink");return s(),n("div",null,[e(L,{ref_key:"swiperRef",ref:r,interval:8e3,"pause-on-hover":!1,style:{height:"100vh"},onChange:l[0]||(l[0]=_=>i.value=_)},{default:a(()=>[(s(!0),n(g,null,w(p(A),_=>(s(),B(G,{key:_.name},{default:a(()=>[o("video",{src:_.videoUrl,class:"video",autoplay:"",muted:"",loop:""},null,8,we),o("div",be,[e(q,{class:"x"}),o("div",{class:"title",innerHTML:_.title},null,8,$e),o("div",Se,[e($,{to:`/${_.name.toLowerCase()}`},{default:a(()=>[e(v,{color:"#fff",arrow:"","arrow-color":"#fff"},{default:a(()=>[x(" 了解"+u(_.name),1)]),_:2},1024)]),_:2},1032,["to"]),e(v,{class:"btn-right",color:"#fff",arrow:""},{default:a(()=>[x("预约试驾")]),_:1})])])]),_:2},1024))),128))]),_:1},512),e(U,{columns:"4",gap:"0.4rem",class:"dots"},{default:a(()=>[(s(!0),n(g,null,w(p(A),(_,d)=>(s(),n("div",{class:"dot-item",key:_.name,onClick:m=>r.value.goTo(d)},[o("div",{class:I(["line",{active:d===i.value}])},null,2)],8,ye))),128))]),_:1})])}}});const Ue=b(ke,[["__scopeId","data-v-0fe6f08e"]]),Ce=[{name:"自营充电网络",description:"1000+站点，覆盖全国所有地级行政区和直辖市；S4液冷超快充，最快充电5分钟，续航增加200km+",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/charging1.jpg"},{name:"超充服务",description:"核心城区与高速场景补能",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/charging2.jpg"},{name:"家充服务",description:"超低补能成本，全程贴心服务",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/charging3.jpg"},{name:"目的地充电服务",description:"优选景点/酒店等休闲出游场景，无忧补能",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/charging4.jpg"},{name:"车主充电权益",description:"专享预约充电、限时免停车费等车主权益",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/charging5.jpg"}],Pe={class:"container"},Xe={class:"content-wrapper"},je={class:"name"},Ie={class:"description"},Be={class:"bottom"},Re=h({__name:"SectionCharging",setup(c){return(i,r)=>(s(),n("div",Pe,[e(k,{title:"全场景充电服务",subtitle:"遍布全国的补能网络，贴心的自营充电服务，让鹏友没有里程焦虑"}),e(U,{columns:"3","item-width":"41.8rem",gap:"3.2rem"},{default:a(()=>[(s(!0),n(g,null,w(p(Ce),t=>(s(),n("div",{class:"service-item",key:t.name},[e(P,{src:t.pictureUrl},null,8,["src"]),o("div",Xe,[o("div",je,u(t.name),1),o("div",Ie,u(t.description),1)])]))),128))]),_:1}),o("div",Be,[e(v,{arrow:""},{default:a(()=>[x("了解充电服务")]),_:1})])]))}});const Ae=b(Re,[["__scopeId","data-v-a5c03f12"]]),Ge=[{title:"小鹏汽车与大众汽车集团达成长期战略合作伙伴关系",pictureUrl:"https://xps01.xiaopeng.com/cms/material/pic/2023/07-27/pic_20230727103726_55790.jpg",href:"https://www.xiaopeng.com/news/company_news/5107.html"},{title:"小鹏G9、P7i推送全新Xmart OS 4.3.0，全新一代高速NGP正式推出",pictureUrl:"https://xps01.xiaopeng.com/cms/material/pic/2023/07-06/pic_20230706133924_85502.png",href:"https://www.xiaopeng.com/news/company_news/5081.html"},{title:"扶摇落地，25万级最强智能电动SUV，小鹏G6全新上市",pictureUrl:"https://xps01.xiaopeng.com/cms/material/pic/2023/06-29/pic_20230629232019_07568.jpg",href:"https://www.xiaopeng.com/news/company_news/5075.html"}],Le={class:"container"},Me=["href"],Ve={class:"title"},Ne={class:"bottom"},Te={href:"https://www.xiaopeng.com/news/choiceness",target:"_blank"},De=h({__name:"SectionNews",setup(c){return(i,r)=>(s(),n("div",Le,[e(k,{title:"咨讯中心",subtitle:"官方资讯，了解小鹏汽车最新动态"}),e(U,{columns:"3","item-width":"41.8rem",gap:"3.2rem"},{default:a(()=>[(s(!0),n(g,null,w(p(Ge),t=>(s(),n("a",{class:"news-item",key:t.title,href:t.href,target:"_blank"},[e(P,{src:t.pictureUrl,class:"img"},null,8,["src"]),o("div",Ve,u(t.title),1)],8,Me))),128))]),_:1}),o("div",Ne,[o("a",Te,[e(v,{arrow:""},{default:a(()=>[x("了解更多")]),_:1})])])]))}});const He=b(De,[["__scopeId","data-v-3540cd81"]]),Ee=c=>(O("data-v-52f137b0"),c=c(),W(),c),ze={class:"container"},Fe=Ee(()=>o("img",{src:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/service-center.jpg",class:"background",alt:""},null,-1)),Oe={class:"content-wrapper"},We={class:"btn-wrapper",href:"https://www.xiaopeng.com/pengmetta.html",target:"_blank"},qe=h({__name:"SectionStore",setup(c){return(i,r)=>(s(),n("div",ze,[Fe,o("div",Oe,[e(k,{title:"小鹏门店",subtitle:"小鹏门店为您提供便捷、舒适的购车及售后体验",color:"#fff"},{default:a(()=>[o("a",We,[e(v,{color:"#fff",arrow:"","arrow-color":"#fff"},{default:a(()=>[x(" 查看全国门店")]),_:1})])]),_:1})])]))}});const Ye=b(qe,[["__scopeId","data-v-52f137b0"]]),et=h({__name:"Home",setup(c){return(i,r)=>(s(),n(g,null,[e(Ue),e(ne),e(Ae),e(me),e(ae),e(He),e(Ye),e(T),e(xe)],64))}});export{et as default};
