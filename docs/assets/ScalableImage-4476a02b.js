import{d as m,c,a as d,n as v,A as $,B as g,o as i,_ as y,i as _,l as M,F as k,r as L,h as U,u as o,C as F,t as G,w as W,m as D,b as O,z as q,q as B,s as I,D as C,k as A,y as K,E as X,v as H,x as V,G as J,g as Q}from"./index-59bd6ac7.js";import{B as Y}from"./Button-f2e5e7b0.js";import{B as Z}from"./X-b246c367.js";const ee={class:"title-bar"},te=["innerHTML"],se=["innerHTML"],ae=m({__name:"TitleBar",props:{title:{},subtitle:{},color:{}},setup(n){return(e,s)=>(i(),c("div",ee,[d("div",{class:"title",style:v({color:e.color}),innerHTML:e.title},null,12,te),e.subtitle?(i(),c("div",{key:0,class:"subtitle",style:v({color:e.color}),innerHTML:e.subtitle},null,12,se)):$("",!0),g(e.$slots,"default",{},void 0,!0)]))}});const ne=y(ae,[["__scopeId","data-v-dbdd976f"]]),N=[{name:"G6",pictureUrl:"https://xps01.xiaopeng.com/cms/material/pic/2023/06-08/pic_20230608200731_09590.jpg"},{name:"P7i/P7",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/p7i.jpg"},{name:"G9",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/g9.jpg"},{name:"P5",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/p5.jpg"},{name:"G3i",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/g3i.jpg"}],oe={class:"container"},re={class:"main"},ie={class:"images-wrapper"},le=["alt","src"],ce=["value"],ue=["value"],de=O('<select class="form-item select" name="address" data-v-e9779a87><option data-v-e9779a87>小鹏汽车广州新塘万达广场体验中心</option></select><input class="form-item input" placeholder="手机" name="phoneNumber" data-v-e9779a87><div data-v-e9779a87><input class="form-item input" placeholder="验证码" name="verificationCode" data-v-e9779a87><button class="btn-code" type="button" data-v-e9779a87>获取验证码</button></div><div class="privacy-wrapper" data-v-e9779a87><label data-v-e9779a87><input type="checkbox" name="privacy" data-v-e9779a87> 我已仔细阅读并同意 </label> 《 <a target="_blank" href="https://www.xiaopeng.com/content/4015.html" style="text-decoration:underline;" data-v-e9779a87> 小鹏汽车用户隐私政策 </a> 》 </div>',4),pe=m({__name:"ReserveForm",props:{value:{}},setup(n){const e=n,s=_(e.value||0);function t(a){var r;s.value=Number((r=a.target)==null?void 0:r.value)}return(a,r)=>(i(),c("div",oe,[M(ne,{title:"预约试驾",subtitle:"试乘试驾小鹏汽车，真实体验小鹏产品及服务"}),d("div",re,[d("div",ie,[(i(!0),c(k,null,L(o(N),(l,u)=>(i(),c("img",{key:l.name,alt:l.name,src:l.pictureUrl,class:U([{active:s.value===u},"img"])},null,10,le))),128))]),d("form",{class:"form",onSubmit:r[0]||(r[0]=F(()=>{},["prevent"]))},[e.value===void 0?(i(),c("select",{key:0,class:"form-item select",name:"model",value:s.value,onChange:t},[(i(!0),c(k,null,L(o(N),(l,u)=>(i(),c("option",{key:l.name,value:u},G(l.name),9,ue))),128))],40,ce)):$("",!0),de,M(Y,{class:"btn-submit",color:"#fff",arrow:""},{default:W(()=>[D("立即预约")]),_:1})],32)])]))}});const He=y(pe,[["__scopeId","data-v-e9779a87"]]);function ve(n){const e=q({width:0,height:0});function s(){if(!n.value)return;const{width:t,height:a}=n.value.getBoundingClientRect();e.width=t,e.height=a}return B(()=>{s(),window.addEventListener("resize",s)}),I(()=>{window.removeEventListener("resize",s)}),e}function _e(n,e){let s;function t(){n.autoplay&&(s=setInterval(()=>{e(!1)},n.interval))}function a(){clearInterval(s)}function r(){a(),t()}return B(()=>{t()}),I(()=>{clearInterval(s)}),{startPlay:t,pausePlay:a,resetPlay:r}}function me({current:n,count:e,isNext:s},t){function a(u=!0){u&&t(),s.value=!0,n.value<e.value-1?n.value++:n.value=0}function r(u=!0){u&&t(),s.value=!1,n.value>0?n.value--:n.value=e.value-1}function l(u){u<0||u>e.value-1||(t(),s.value=u>n.value,n.value=u)}return{toNext:a,toPrev:r,goTo:l}}const fe=m({__name:"Swiper",props:{autoplay:{type:Boolean,default:!0},interval:{default:3e3},duration:{default:300},card:{type:Boolean},scale:{default:.6},pauseOnHover:{type:Boolean,default:!0}},emits:["change"],setup(n,{expose:e,emit:s}){const t=n;C(f=>({f8ef1e34:a}));const a=`${t.duration}ms`,r=_(0),l=_(0),u=_(!0),p=_(),T=ve(p),w=A(()=>{if(!p.value)return 0;const h=T.width*r.value*(t.card?t.scale:1)/r.value,b=-(h*l.value);return t.card?b+h*.333:b});K(l,f=>{s("change",f)});const{toNext:S,toPrev:P,goTo:R}=me({current:l,count:r,isNext:u},()=>E()),{startPlay:z,pausePlay:j,resetPlay:E}=_e(t,S);return X(x,{current:l,card:t.card,scale:t.scale,register(){return r.value+=1,r.value-1},goTo:R,toPrev:P,toNext:S}),e({toNext:S,toPrev:P,goTo:R}),(f,h)=>(i(),c("div",{class:"swiper",onMouseenter:h[0]||(h[0]=b=>f.pauseOnHover&&o(j)()),onMouseleave:h[1]||(h[1]=b=>f.pauseOnHover&&o(z)())},[d("div",{ref_key:"containerRef",ref:p,class:"swiper-container",style:v({transform:`translate3d(${w.value}px, 0, 0)`})},[g(f.$slots,"default",{},void 0,!0)],4)],32))}});const Ve=y(fe,[["__scopeId","data-v-7d6d3eb1"]]),he=m({__name:"SwiperButtons",props:{swiperRef:{},offset:{default:"5%"},leftVisible:{type:Boolean,default:!0},rightVisible:{type:Boolean,default:!0}},setup(n){return C(e=>({"801d9232":e.offset})),(e,s)=>(i(),c(k,null,[H(d("div",{class:"swiper-btn left",onClick:s[0]||(s[0]=(...t)=>e.swiperRef.toPrev&&e.swiperRef.toPrev(...t))},null,512),[[V,e.leftVisible]]),H(d("div",{class:"swiper-btn right",onClick:s[1]||(s[1]=(...t)=>e.swiperRef.toNext&&e.swiperRef.toNext(...t))},null,512),[[V,e.rightVisible]])],64))}});const Ne=y(he,[["__scopeId","data-v-20aa6db4"]]),ye=m({__name:"SwiperItem",setup(n){const{current:e,card:s,scale:t,register:a,goTo:r}=J(x)||{},l=(a==null?void 0:a())||0;return(u,p)=>(i(),c("div",{class:U(["swiper-item",{card:o(s),active:o(l)===o(e)}]),style:v({width:`${o(s)&&o(t)?o(t)*100:100}%`}),onClick:p[0]||(p[0]=T=>{var w;return o(s)&&o(l)!==o(e)&&((w=o(r))==null?void 0:w(o(l)))})},[g(u.$slots,"default",{},void 0,!0)],6))}});const Ue=y(ye,[["__scopeId","data-v-6830e3d1"]]),x=Symbol();function ge(n,e=70,s=.7){const t=_(e);function a(){var p;const{top:r,height:l}=(p=n.value)==null?void 0:p.getBoundingClientRect(),u=Math.min(Math.max((window.innerHeight-r)/(l*s),0),1);t.value=e+(100-e)*u}return B(()=>{window.addEventListener("scroll",a)}),I(()=>{window.removeEventListener("scroll",a)}),t}const we=["src"],be=["src"],$e={class:"content-wrapper"},Se=["innerHTML"],ke=["innerHTML"],Be=m({__name:"ShrinkableBanner",props:{title:{},subtitle:{},src:{},videoUrl:{},static:{type:Boolean}},setup(n){const e=n,s=_(),t=e.static?_(100):ge(s);return(a,r)=>(i(),c("div",{class:"shrinkable-banner",ref_key:"containerRef",ref:s},[d("div",{class:"background-wrapper",style:v({width:`${o(t)}%`,height:`${o(t)}%`})},[a.src.endsWith(".mp4")?(i(),c("video",{key:0,src:a.src,autoplay:"",muted:"",loop:""},null,8,we)):(i(),c("img",{key:1,src:a.src,alt:""},null,8,be)),d("div",$e,[d("div",{class:"title",style:v({transform:`translate3d(0, ${100-o(t)}px, 0)`,opacity:o(t)/100}),innerHTML:a.title},null,12,Se),a.subtitle?(i(),c("div",{key:0,class:"subtitle",style:v({transform:`translate3d(0, ${100*4-o(t)*4}px, 0)`,opacity:o(t)===100?1:o(t)/100-.3}),innerHTML:a.subtitle},null,12,ke)):$("",!0),d("div",{class:"more",style:v({transform:`translate3d(0, ${100*8-o(t)*8}px, 0)`,opacity:o(t)===100?1:o(t)/100-.6})},[g(a.$slots,"more",{},void 0,!0)],4)])],4),a.videoUrl?(i(),Q(Z,{key:0,"video-url":a.videoUrl},null,8,["video-url"])):$("",!0)],512))}});const xe=y(Be,[["__scopeId","data-v-c2d73e3b"]]),ze=m({__name:"Grid",props:{columns:{},itemWidth:{},gap:{}},setup(n){return(e,s)=>(i(),c("div",{style:v({display:"grid",justifyContent:"center",gridTemplateColumns:`repeat(${e.columns}, ${e.itemWidth||"1fr"})`,gap:e.gap})},[g(e.$slots,"default")],4))}}),Ie={class:"img-wrapper"},Ce=["src"],Te=["src","alt"],Pe=m({__name:"ScalableImage",props:{src:{},alt:{},scale:{default:1.2}},setup(n){return C(e=>({"167dd2e1":e.scale})),(e,s)=>(i(),c("div",Ie,[e.src.endsWith(".mp4")?(i(),c("video",{key:0,src:e.src,autoplay:"",muted:"",loop:""},null,8,Ce)):(i(),c("img",{key:1,src:e.src,alt:e.alt},null,8,Te))]))}});const je=y(Pe,[["__scopeId","data-v-67bf3a66"]]);export{He as R,Ue as S,ne as T,ze as _,Ve as a,Ne as b,xe as c,je as d};