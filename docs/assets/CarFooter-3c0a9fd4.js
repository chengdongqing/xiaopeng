import{f as $}from"./index-b65411a4.js";import{d as m,o as e,c as t,F as c,r as u,b as i,e as y,t as d,u as k,q as l,n as x,_ as h,i as _,a as p,w as v,f as b,J as S,K as I,l as H,m as M,h as N}from"./index-2382966d.js";import{b as T,d as V,c as A,R as B,a as L,_ as P}from"./ReserveForm-4f9e1f03.js";import{A as j}from"./Button-b042d6c1.js";const F=["innerHTML"],R={class:"value"},z={key:0,class:"unit"},G=m({__name:"NameValueGroup",props:{options:{},darkTheme:{type:Boolean}},setup(g){return(o,n)=>(e(),t("div",{class:x(["name-value-group",{dark:o.darkTheme}])},[(e(!0),t(c,null,u(o.options,s=>(e(),t("div",{key:s.name},[i("div",{class:"name",innerHTML:s.name},null,8,F),i("div",R,[y(d(k($)(s.value))+" ",1),s.unit?(e(),t("span",z,d(s.unit),1)):l("",!0)])]))),128))],2))}});const U=h(G,[["__scopeId","data-v-04b4a967"]]),W={class:"card-swiper"},q=["src"],D=["src"],E={class:"content-wrapper"},J=["innerHTML"],K=["innerHTML"],O={key:3,class:"descriptions"},X=m({__name:"CardSwiper",props:{options:{}},emits:["change"],setup(g,{emit:o}){const n=_(),s=_(0);return(r,w)=>(e(),t("div",W,[i("div",null,[p(T,{card:"",ref_key:"swiperRef",ref:n,duration:1e3,autoplay:!1,onChange:w[0]||(w[0]=a=>{s.value=a,o("change",a)})},{default:v(()=>[(e(!0),t(c,null,u(r.options,(a,C)=>(e(),b(A,{key:a.title},{default:v(()=>[a.videoUrl&&C===s.value?(e(),t("video",{key:0,src:a.videoUrl,autoplay:"",muted:"",loop:""},null,8,q)):(e(),t("img",{key:1,src:a.pictureUrl,alt:""},null,8,D)),i("div",E,[a.title?(e(),t("div",{key:0,class:"title",innerHTML:a.title},null,8,J)):l("",!0),a.description?(e(),t("div",{key:1,class:"description",innerHTML:a.description},null,8,K)):l("",!0),a.dataItems?(e(),b(U,{key:2,options:a.dataItems,style:{"justify-content":"center",gap:"6.6rem"}},null,8,["options"])):l("",!0),a.descriptions?(e(),t("div",O,[(e(!0),t(c,null,u(a.descriptions,f=>(e(),t("div",{class:"description-item",key:f},d(f),1))),128))])):l("",!0)])]),_:2},1024))),128))]),_:1},512),p(V,{"swiper-ref":n.value,offset:"14%","left-visible":s.value>0,"right-visible":s.value<r.options.length-1},null,8,["swiper-ref","left-visible","right-visible"])])]))}});const pe=h(X,[["__scopeId","data-v-833d8aa4"]]),Q=[{title:"充电",subtitle:"不止于快，让鹏友没有里程焦虑",src:"https://s.xiaopeng.com/xp-fe/mainsite/2023/components/app-download/app-download-pro-1.jpg",href:"https://www.xiaopeng.com/charging.html"},{title:"金融",subtitle:"为你定制合适的购车金融方案",src:"https://s.xiaopeng.com/xp-fe/mainsite/2023/components/app-download/app-download-pro-2.jpg",href:"https://www.xiaopeng.com/finance.html"},{title:"门店",subtitle:"就在你身边，呈现无限精彩",src:"https://s.xiaopeng.com/xp-fe/mainsite/2023/components/app-download/app-download-pro-3.jpg",href:"https://www.xiaopeng.com/pengmetta.html"},{title:"售后",subtitle:"持续护航，用车无忧",src:"https://s.xiaopeng.com/xp-fe/mainsite/2023/components/app-download/app-download-pro-4.jpg",href:"https://www.xiaopeng.com/customerservice.html"}],Y=["href"],Z={class:"content-wrapper"},ee={class:"title"},te={class:"subtitle"},ae=N('<div class="p2" data-v-29a93db3><div class="wrapper" data-v-29a93db3><img alt="" src="https://s.xiaopeng.com/xp-fe/mainsite/2023/components/app-download/phone2.png" class="phone" data-v-29a93db3><div class="right" data-v-29a93db3><div class="content-wrapper" data-v-29a93db3><div data-v-29a93db3><div class="title" data-v-29a93db3>即刻下载小鹏APP</div><div class="subtitle" data-v-29a93db3>探索小鹏世界，更多精彩呈现</div></div><div class="info" data-v-29a93db3><p data-v-29a93db3>版本： Andorid 4.33.0/iOS 4.33.0</p><p style="margin-top:0.8rem;" data-v-29a93db3><a href="https://www.xiaopeng.com/help/privacy.html?currentContentId=4267" target="_blank" data-v-29a93db3> 隐私政策 </a> | <a href="https://www.xiaopeng.com/content/3867.html" target="_blank" data-v-29a93db3> 权限说明 </a> | <a href="https://dl.xiaopeng.com/xp-app/apk/gw32W/XP_MobileAPP_Android_gw32W.apk" target="_blank" data-v-29a93db3> 下载32位版本 </a></p></div></div><div class="code-wrapper" data-v-29a93db3><img src="https://s.xiaopeng.com/xp-fe/mainsite/2023/common/app-code.jpg" alt="" data-v-29a93db3></div></div></div></div>',1),se={class:"p3"},oe=m({__name:"CarFooter",props:{carId:{},title:{},subtitle:{},overHeight:{type:Boolean,default:!0}},setup(g){const o=_(!1);return(n,s)=>(e(),t(c,null,[p(B,S(I({id:n.carId,title:n.title,subtitle:n.subtitle})),null,16),p(P,{class:"p1",columns:"2","item-width":"64.4rem",gap:"3.2rem"},{default:v(()=>[(e(!0),t(c,null,u(k(Q),r=>(e(),t("a",{key:r.title,href:r.href,target:"_blank"},[p(L,{src:r.src},null,8,["src"]),i("div",Z,[i("div",ee,d(r.title),1),i("div",te,d(r.subtitle),1)])],8,Y))),128))]),_:1}),ae,i("div",se,[i("div",{class:"content",style:H({maxHeight:o.value?void 0:"14.4rem"})},[M(n.$slots,"remarks",{},void 0,!0)],4),n.overHeight?(e(),t("div",{key:0,class:"btn-showMore",onClick:s[0]||(s[0]=r=>o.value=!o.value)},[y(d(o.value?"收起":"展开更多")+" ",1),p(j,{class:x(["icon",{active:o.value}])},null,8,["class"])])):l("",!0)])],64))}});const de=h(oe,[["__scopeId","data-v-29a93db3"]]);export{de as C,U as N,pe as a};