import{d as f,c,a as d,n as v,A as w,B as g,o as i,_ as y,i as _,l as R,F as S,r as M,h as N,u as o,C as F,t as G,w as W,m as D,b as O,z as q,q as k,s as B,D as I,k as A,y as K,E as X,v as L,x as H,G as J,g as Q}from"./index-08af9960.js";import{B as Y}from"./Button-bf6d5d83.js";import{B as Z}from"./X-b3f73470.js";const ee={class:"title-bar"},te=["innerHTML"],se=["innerHTML"],ae=f({__name:"TitleBar",props:{title:{},subtitle:{},color:{}},setup(a){return(e,s)=>(i(),c("div",ee,[d("div",{class:"title",style:v({color:e.color}),innerHTML:e.title},null,12,te),e.subtitle?(i(),c("div",{key:0,class:"subtitle",style:v({color:e.color}),innerHTML:e.subtitle},null,12,se)):w("",!0),g(e.$slots,"default",{},void 0,!0)]))}});const ne=y(ae,[["__scopeId","data-v-dbdd976f"]]),V=[{name:"G6",pictureUrl:"https://xps01.xiaopeng.com/cms/material/pic/2023/06-08/pic_20230608200731_09590.jpg"},{name:"P7i/P7",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/p7i.jpg"},{name:"G9",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/g9.jpg"},{name:"P5",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/p5.jpg"},{name:"G3i",pictureUrl:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/g3i.jpg"}],oe={class:"container"},re={class:"main"},ie={class:"images-wrapper"},le=["alt","src"],ce=["value"],ue=["value"],de=O('<select class="form-item select" name="address" data-v-dbce0f91><option data-v-dbce0f91>小鹏汽车广州新塘万达广场体验中心</option></select><input class="form-item input" placeholder="手机" name="phoneNumber" data-v-dbce0f91><div data-v-dbce0f91><input class="form-item input" placeholder="验证码" name="verificationCode" data-v-dbce0f91><button class="btn-code" type="button" data-v-dbce0f91>获取验证码</button></div><div class="privacy-wrapper" data-v-dbce0f91><label data-v-dbce0f91><input type="checkbox" name="privacy" data-v-dbce0f91> 我已仔细阅读并同意 </label> 《 <a target="_blank" href="https://www.xiaopeng.com/content/4015.html" style="text-decoration:underline;" data-v-dbce0f91> 小鹏汽车用户隐私政策 </a> 》 </div>',4),pe=f({__name:"ReserveForm",props:{value:{}},setup(a){const e=a,s=_(e.value||0);function t(n){var r;s.value=Number((r=n.target)==null?void 0:r.value)}return(n,r)=>(i(),c("div",oe,[R(ne,{title:"预约试驾",subtitle:"试乘试驾小鹏汽车，真实体验小鹏产品及服务"}),d("div",re,[d("div",ie,[(i(!0),c(S,null,M(o(V),(l,u)=>(i(),c("img",{key:l.name,alt:l.name,src:l.pictureUrl,class:N([{active:s.value===u},"img"])},null,10,le))),128))]),d("form",{class:"form",onSubmit:r[0]||(r[0]=F(()=>{},["prevent"]))},[e.value===void 0?(i(),c("select",{key:0,class:"form-item select",name:"model",value:s.value,onChange:t},[(i(!0),c(S,null,M(o(V),(l,u)=>(i(),c("option",{key:l.name,value:u},G(l.name),9,ue))),128))],40,ce)):w("",!0),de,R(Y,{class:"btn-submit",color:"#fff",arrow:""},{default:W(()=>[D("立即预约")]),_:1})],32)])]))}});const He=y(pe,[["__scopeId","data-v-dbce0f91"]]);function ve(a){const e=q({width:0,height:0});function s(){if(!a.value)return;const{width:t,height:n}=a.value.getBoundingClientRect();e.width=t,e.height=n}return k(()=>{s(),window.addEventListener("resize",s)}),B(()=>{window.removeEventListener("resize",s)}),e}function _e(a,e){let s;function t(){a.autoplay&&(s=setInterval(()=>{e(!1)},a.interval))}function n(){clearInterval(s)}function r(){n(),t()}return k(()=>{t()}),B(()=>{clearInterval(s)}),{startPlay:t,pausePlay:n,resetPlay:r}}function fe({current:a,count:e,isNext:s},t){function n(u=!0){u&&t(),s.value=!0,a.value<e.value-1?a.value++:a.value=0}function r(u=!0){u&&t(),s.value=!1,a.value>0?a.value--:a.value=e.value-1}function l(u){u<0||u>e.value-1||(t(),s.value=u>a.value,a.value=u)}return{toNext:n,toPrev:r,goTo:l}}const me=f({__name:"Swiper",props:{autoplay:{type:Boolean,default:!0},interval:{default:3e3},duration:{default:300},card:{type:Boolean},scale:{default:.6},pauseOnHover:{type:Boolean,default:!0}},emits:["change"],setup(a,{expose:e,emit:s}){const t=a;I(m=>({f8ef1e34:n}));const n=`${t.duration}ms`,r=_(0),l=_(0),u=_(!0),p=_(),C=ve(p),x=A(()=>{if(!p.value)return 0;const h=C.width*r.value*(t.card?t.scale:1)/r.value,b=-(h*l.value);return t.card?b+h*.333:b});K(l,m=>{s("change",m)});const{toNext:$,toPrev:T,goTo:P}=fe({current:l,count:r,isNext:u},()=>E()),{startPlay:z,pausePlay:j,resetPlay:E}=_e(t,$);return X(U,{current:l,card:t.card,scale:t.scale,register(){return r.value+=1,r.value-1},goTo:P,toPrev:T,toNext:$}),e({toNext:$,toPrev:T,goTo:P}),(m,h)=>(i(),c("div",{class:"swiper",onMouseenter:h[0]||(h[0]=b=>m.pauseOnHover&&o(j)()),onMouseleave:h[1]||(h[1]=b=>m.pauseOnHover&&o(z)())},[d("div",{ref_key:"containerRef",ref:p,class:"swiper-container",style:v({transform:`translate3d(${x.value}px, 0, 0)`})},[g(m.$slots,"default",{},void 0,!0)],4)],32))}});const Ve=y(me,[["__scopeId","data-v-7d6d3eb1"]]),he=f({__name:"SwiperButtons",props:{swiperRef:{},offset:{default:"5%"},leftVisible:{type:Boolean,default:!0},rightVisible:{type:Boolean,default:!0}},setup(a){return I(e=>({"801d9232":e.offset})),(e,s)=>(i(),c(S,null,[L(d("div",{class:"swiper-btn left",onClick:s[0]||(s[0]=(...t)=>e.swiperRef.toPrev&&e.swiperRef.toPrev(...t))},null,512),[[H,e.leftVisible]]),L(d("div",{class:"swiper-btn right",onClick:s[1]||(s[1]=(...t)=>e.swiperRef.toNext&&e.swiperRef.toNext(...t))},null,512),[[H,e.rightVisible]])],64))}});const Ne=y(he,[["__scopeId","data-v-20aa6db4"]]),ye=f({__name:"SwiperItem",setup(a){const{current:e,card:s,scale:t,register:n,goTo:r}=J(U),l=n();return(u,p)=>(i(),c("div",{class:N(["swiper-item",{card:o(s),active:o(l)===o(e)}]),style:v({width:`${o(s)?o(t)*100:100}%`}),onClick:p[0]||(p[0]=C=>o(s)&&o(l)!==o(e)&&o(r)(o(l)))},[g(u.$slots,"default",{},void 0,!0)],6))}});const Ue=y(ye,[["__scopeId","data-v-14594aae"]]),U=Symbol();function ge(a,e=70,s=.7){const t=_(e);function n(){var p;const{top:r,height:l}=(p=a.value)==null?void 0:p.getBoundingClientRect(),u=Math.min(Math.max((window.innerHeight-r)/(l*s),0),1);t.value=e+(100-e)*u}return k(()=>{window.addEventListener("scroll",n)}),B(()=>{window.removeEventListener("scroll",n)}),t}const be=["src"],we=["src"],$e={class:"content-wrapper"},Se=["innerHTML"],ke=["innerHTML"],Be=f({__name:"ShrinkableBanner",props:{title:{},subtitle:{},src:{},videoUrl:{},static:{type:Boolean}},setup(a){const e=a,s=_(),t=e.static?_(100):ge(s);return(n,r)=>(i(),c("div",{class:"shrinkable-banner",ref_key:"containerRef",ref:s},[d("div",{class:"background-wrapper",style:v({width:`${o(t)}%`,height:`${o(t)}%`})},[n.src.endsWith(".mp4")?(i(),c("video",{key:0,src:n.src,autoplay:"",muted:"",loop:""},null,8,be)):(i(),c("img",{key:1,src:n.src,alt:""},null,8,we)),d("div",$e,[d("div",{class:"title",style:v({transform:`translate3d(0, ${100-o(t)}px, 0)`,opacity:o(t)/100}),innerHTML:n.title},null,12,Se),n.subtitle?(i(),c("div",{key:0,class:"subtitle",style:v({transform:`translate3d(0, ${100*4-o(t)*4}px, 0)`,opacity:o(t)===100?1:o(t)/100-.3}),innerHTML:n.subtitle},null,12,ke)):w("",!0),d("div",{class:"more",style:v({transform:`translate3d(0, ${100*8-o(t)*8}px, 0)`,opacity:o(t)===100?1:o(t)/100-.6})},[g(n.$slots,"more",{},void 0,!0)],4)])],4),n.videoUrl?(i(),Q(Z,{key:0,"video-url":n.videoUrl},null,8,["video-url"])):w("",!0)],512))}});const xe=y(Be,[["__scopeId","data-v-07c49f1f"]]),ze=f({__name:"Grid",props:{columns:{},itemWidth:{},gap:{}},setup(a){return(e,s)=>(i(),c("div",{style:v({display:"grid",justifyContent:"center",gridTemplateColumns:`repeat(${e.columns}, ${e.itemWidth||"1fr"})`,gap:e.gap})},[g(e.$slots,"default")],4))}}),Ie={class:"img-wrapper"},Ce=["src"],Te=["src","alt"],Pe=f({__name:"ScalableImage",props:{src:{},alt:{},scale:{default:1.2}},setup(a){return I(e=>({"167dd2e1":e.scale})),(e,s)=>(i(),c("div",Ie,[e.src.endsWith(".mp4")?(i(),c("video",{key:0,src:e.src,autoplay:"",muted:"",loop:""},null,8,Ce)):(i(),c("img",{key:1,src:e.src,alt:e.alt},null,8,Te))]))}});const je=y(Pe,[["__scopeId","data-v-67bf3a66"]]);export{He as R,Ue as S,ne as T,ze as _,Ve as a,Ne as b,xe as c,je as d};