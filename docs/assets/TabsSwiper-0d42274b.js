import{b as L,c as V,d as x,T as F,R as U,a as j,_ as E}from"./ReserveForm-d3eab485.js";import{d as m,i as u,c as o,a as c,w as d,o as t,F as h,r as w,g as H,e as n,j as B,_ as f,n as b,t as v,f as $,k as R,u as _,p as W,b as z,l as M,m as I,q as A,h as G}from"./index-c51c9353.js";import{B as C,A as q}from"./Button-304eabc3.js";import{u as X,L as D}from"./usePageScrolled-2d962e6c.js";import{f as O}from"./index-0d33b246.js";const J={class:"card-swiper"},K=["src"],Q=["src"],Y={class:"content-wrapper"},Z=["innerHTML"],ee=["innerHTML"],se=m({__name:"CardSwiper",props:{options:{}},setup(r){const s=u(),e=u(0);return(l,a)=>(t(),o("div",J,[c(L,{card:"",ref_key:"swiperRef",ref:s,duration:1e3,autoplay:!1,onChange:a[0]||(a[0]=i=>e.value=i)},{default:d(()=>[(t(!0),o(h,null,w(l.options,(i,p)=>(t(),H(x,{key:i.title},{default:d(()=>[i.videoUrl&&p===e.value?(t(),o("video",{key:0,src:i.videoUrl,autoplay:"",muted:"",loop:""},null,8,K)):(t(),o("img",{key:1,src:i.pictureUrl,alt:""},null,8,Q)),n("div",Y,[i.title?(t(),o("div",{key:0,class:"title",innerHTML:i.title},null,8,Z)):B("",!0),i.description?(t(),o("div",{key:1,class:"description",innerHTML:i.description},null,8,ee)):B("",!0)])]),_:2},1024))),128))]),_:1},512),c(V,{"swiper-ref":s.value,offset:"14%","left-visible":e.value>0,"right-visible":e.value<l.options.length-1},null,8,["swiper-ref","left-visible","right-visible"])]))}});const ns=f(se,[["__scopeId","data-v-b5792554"]]),te={class:"container"},ae={class:"main"},oe=["src"],ne=["src"],re={class:"color-bar"},le=["onClick"],ie=["src"],ce={class:"name"},pe=m({__name:"ColorfulShowcase",props:{name:{},title:{},subtitle:{},nameIconUrl:{},options:{}},setup(r){const s=u(0);return(e,l)=>(t(),o("div",te,[c(F,{title:e.title,subtitle:e.subtitle},null,8,["title","subtitle"]),n("div",ae,[n("img",{src:e.nameIconUrl,class:"name-icon",alt:""},null,8,oe),(t(!0),o(h,null,w(e.options,(a,i)=>(t(),o("img",{key:a.name,src:a.pictureUrl,class:b([{active:i===s.value},"car-img"]),alt:""},null,10,ne))),128))]),n("div",re,[(t(!0),o(h,null,w(e.options,(a,i)=>(t(),o("div",{key:a.name,class:b(["color-item",{active:i===s.value}]),onClick:p=>s.value=i},[n("img",{src:a.paneUrl,alt:"",class:"img-pane"},null,8,ie),n("span",ce,v(a.name),1)],10,le))),128)),c(C,{arrow:"",class:"btn"},{default:d(()=>[$("定制我的"+v(e.name),1)]),_:1})])]))}});const rs=f(pe,[["__scopeId","data-v-010ecc39"]]),de=r=>(W("data-v-fa741f0c"),r=r(),z(),r),_e={class:"side"},ue={class:"name"},ve=de(()=>n("div",{class:"divider"},null,-1)),he={class:"price"},me={class:"side"},fe=m({__name:"HeaderBar",props:{id:{},name:{},price:{}},setup(r){const s=X();return(e,l)=>{const a=R("RouterLink");return t(),o("div",{class:b(["header-bar",{active:_(s)}])},[n("div",_e,[c(a,{to:"/",style:{display:"flex"}},{default:d(()=>[c(D,{class:"logo"})]),_:1}),n("div",ue,v(e.name),1),ve,n("div",he,"全国建议零售价 ¥"+v(_(O)(e.price))+" 起",1)]),n("div",me,[c(a,{to:`/configurations/${e.id}`,class:"configuration"},{default:d(()=>[$(" 参数配置 ")]),_:1},8,["to"]),c(C,{class:"btn"},{default:d(()=>[$("立即订购")]),_:1}),c(C,{class:"btn right"},{default:d(()=>[$("预约试驾")]),_:1})])],2)}}});const ls=f(fe,[["__scopeId","data-v-fa741f0c"]]),ge={class:"title-wrapper"},we=["onClick"],$e=["innerHTML"],be=m({__name:"TabsBar",props:{options:{},current:{},darkTheme:{type:Boolean}},emits:["change"],setup(r,{emit:s}){return(e,l)=>(t(),o("div",{class:b(["tabs-bar",{dark:e.darkTheme}])},[n("div",ge,[(t(!0),o(h,null,w(e.options,(a,i)=>(t(),o("div",{class:b(["title",{active:i===e.current}]),key:a.title,onClick:p=>s("change",i)},v(a.title),11,we))),128))]),n("div",{class:"description",innerHTML:e.options[e.current].description},null,8,$e)],2))}});const N=f(be,[["__scopeId","data-v-e04dd1d1"]]);function ye(r){const s=u(r.value);let e=u(r.value);return M(()=>r.value,()=>{s.value=e.value,e.value=r.value}),s}const ke="/xiaopeng/assets/arrow-left-82532670.svg",Ce="/xiaopeng/assets/arrow-right-d65a4c26.svg";function Se({current:r,count:s,isNext:e}){function l(){e.value=!0,r.value<s-1?r.value++:r.value=0}function a(){e.value=!1,r.value>0?r.value--:r.value=s-1}function i(p){p<0||p>s-1||(e.value=p>r.value,r.value=p)}return{toNext:l,toPrev:a,goTo:i}}const Te={class:"slide-swiper"},Be={class:"images-wrapper"},Ie=["src"],Le=["src"],xe=["src"],He=["src"],Re=m({__name:"SlideSwiper",props:{options:{}},setup(r){const s=r,e=u(0),l=u(!0),a=ye(e),{toPrev:i,toNext:p,goTo:P}=Se({count:s.options.length,current:e,isNext:l}),y=u(0);return M(()=>e.value,()=>{function k(){y.value!==0&&(y.value+=(l.value?-1:1)*4,requestAnimationFrame(k))}y.value=(l.value?1:-1)*100,k()}),(k,S)=>(t(),o("div",Te,[n("div",Be,[(t(!0),o(h,null,w(k.options,(g,T)=>(t(),o("div",{class:"img-outer",style:I({zIndex:T===e.value?3:T===_(a)?2:1,transform:T===e.value?`translate3d(${y.value}%,0,0)`:"none"}),key:g.title},[n("div",{style:I([{width:"100%",height:"100%"},{transform:T===e.value?`translate3d(${-y.value}%,0,0)`:"none"}])},[g.src.endsWith(".mp4")?(t(),o("video",{key:0,src:g.src,autoplay:"",muted:"",loop:""},null,8,Ie)):(t(),o("img",{key:1,src:g.src,alt:""},null,8,Le))],4)],4))),128)),n("img",{src:_(ke),alt:"",class:"btn left",onClick:S[0]||(S[0]=(...g)=>_(i)&&_(i)(...g))},null,8,xe),n("img",{src:_(Ce),alt:"",class:"btn right",onClick:S[1]||(S[1]=(...g)=>_(p)&&_(p)(...g))},null,8,He)]),c(N,{options:k.options,current:e.value,onChange:_(P)},null,8,["options","current","onChange"])]))}});const is=f(Re,[["__scopeId","data-v-eb056cc8"]]),Me=[{title:"充电",subtitle:"不止于快，让鹏友没有里程焦虑",src:"https://s.xiaopeng.com/xp-fe/mainsite/2023/components/app-download/app-download-pro-1.jpg",href:"https://www.xiaopeng.com/charging.html"},{title:"金融",subtitle:"为你定制合适的购车金融方案",src:"https://s.xiaopeng.com/xp-fe/mainsite/2023/components/app-download/app-download-pro-2.jpg",href:"https://www.xiaopeng.com/finance.html"},{title:"门店",subtitle:"就在你身边，呈现无限精彩",src:"https://s.xiaopeng.com/xp-fe/mainsite/2023/components/app-download/app-download-pro-3.jpg",href:"https://www.xiaopeng.com/pengmetta.html"},{title:"售后",subtitle:"持续护航，用车无忧",src:"https://s.xiaopeng.com/xp-fe/mainsite/2023/components/app-download/app-download-pro-4.jpg",href:"https://www.xiaopeng.com/customerservice.html"}],Ae=["href"],Ne={class:"content-wrapper"},Pe={class:"title"},Ve={class:"subtitle"},Fe=G('<div class="p2" data-v-42e95313><div class="wrapper" data-v-42e95313><img alt="" src="https://s.xiaopeng.com/xp-fe/mainsite/2023/components/app-download/phone2.png" class="phone" data-v-42e95313><div class="right" data-v-42e95313><div class="content-wrapper" data-v-42e95313><div data-v-42e95313><div class="title" data-v-42e95313>即刻下载小鹏APP</div><div class="subtitle" data-v-42e95313>探索小鹏世界，更多精彩呈现</div></div><div class="info" data-v-42e95313><p data-v-42e95313>版本： Andorid 4.33.0/iOS 4.33.0</p><p style="margin-top:0.8rem;" data-v-42e95313><a href="https://www.xiaopeng.com/help/privacy.html?currentContentId=4267" target="_blank" data-v-42e95313> 隐私政策 </a> | <a href="https://www.xiaopeng.com/content/3867.html" target="_blank" data-v-42e95313> 权限说明 </a> | <a href="https://dl.xiaopeng.com/xp-app/apk/gw32W/XP_MobileAPP_Android_gw32W.apk" target="_blank" data-v-42e95313> 下载32位版本 </a></p></div></div><div class="code-wrapper" data-v-42e95313><img src="https://s.xiaopeng.com/xp-fe/mainsite/2023/common/app-code.jpg" alt="" data-v-42e95313></div></div></div></div>',1),Ue={class:"p3"},je=m({__name:"CarFooter",props:{carIndex:{}},setup(r){const s=u(!1);return(e,l)=>(t(),o(h,null,[c(U,{value:e.carIndex},null,8,["value"]),c(E,{class:"p1",columns:"2","item-width":"64.4rem",gap:"3.2rem"},{default:d(()=>[(t(!0),o(h,null,w(_(Me),a=>(t(),o("a",{key:a.title,href:a.href,target:"_blank"},[c(j,{src:a.src},null,8,["src"]),n("div",Ne,[n("div",Pe,v(a.title),1),n("div",Ve,v(a.subtitle),1)])],8,Ae))),128))]),_:1}),Fe,n("div",Ue,[n("div",{class:"content",style:I({maxHeight:s.value?void 0:"14.4rem"})},[A(e.$slots,"remarks",{},void 0,!0)],4),n("div",{class:"btn-showMore",onClick:l[0]||(l[0]=a=>s.value=!s.value)},[$(v(s.value?"收起":"展开更多")+" ",1),c(q,{class:b(["icon",{active:s.value}])},null,8,["class"])])])],64))}});const cs=f(je,[["__scopeId","data-v-42e95313"]]),Ee=["innerHTML"],We={class:"value"},ze={key:0,class:"unit"},Ge=m({__name:"NameValueGroup",props:{options:{},darkTheme:{type:Boolean}},setup(r){return(s,e)=>(t(),o("div",{class:b(["name-value-group",{dark:s.darkTheme}])},[(t(!0),o(h,null,w(s.options,l=>(t(),o("div",{key:l.name},[n("div",{class:"name",innerHTML:l.name},null,8,Ee),n("div",We,[n("span",null,v(l.value),1),l.unit?(t(),o("span",ze,v(l.unit),1)):B("",!0)])]))),128))],2))}});const qe=f(Ge,[["__scopeId","data-v-033c3214"]]),Xe={class:"endurance-bottom-bar"},De={class:"right"},Oe=m({__name:"EnduranceBottomBar",props:{name:{},options:{}},setup(r){return(s,e)=>{const l=R("RouterLink");return t(),o("div",Xe,[c(qe,{options:s.options,class:"left"},null,8,["options"]),n("div",De,[c(l,{to:`/configurations/${s.name.toLowerCase()}`},{default:d(()=>[c(C,{arrow:"",color:"#fff","arrow-color":"#fff"},{default:d(()=>[$(v(s.name)+"配置表",1)]),_:1})]),_:1},8,["to"]),c(C,{arrow:"",class:"btn-right"},{default:d(()=>[$("里程计算器")]),_:1})])])}}});const ps=f(Oe,[["__scopeId","data-v-918cfc22"]]),Je={class:"tabs-swiper"},Ke={class:"title"},Qe=["src"],Ye=["src"],Ze=m({__name:"TabsSwiper",props:{options:{}},setup(r){const s=u(0),e=u();function l(a){s.value=a,e.value.goTo(a)}return(a,i)=>(t(),o("div",Je,[n("div",Ke,[A(a.$slots,"title",{},void 0,!0)]),c(L,{ref_key:"swiperRef",ref:e,autoplay:!1,onChange:l},{default:d(()=>[(t(!0),o(h,null,w(a.options,p=>(t(),H(x,{key:p.title},{default:d(()=>[p.src.endsWith(".mp4")?(t(),o("video",{key:0,src:p.src,autoplay:"",muted:"",loop:""},null,8,Qe)):(t(),o("img",{key:1,src:p.src,alt:""},null,8,Ye))]),_:2},1024))),128))]),_:1},512),c(N,{class:"tabs-bar","dark-theme":"",current:s.value,options:a.options,onChange:l},null,8,["current","options"])]))}});const ds=f(Ze,[["__scopeId","data-v-e8c0b41d"]]);export{cs as C,ps as E,ls as H,qe as N,is as S,ds as T,ns as a,rs as b};