import{d,D as _,o,c as p,a as s,l as t,t as u,g as f,A as v,w as r,m as a,_ as m}from"./index-08af9960.js";import{B as n}from"./Button-bf6d5d83.js";import{X as B,B as h}from"./X-b3f73470.js";const C={class:"car-banner"},b={class:"content-wrapper"},w={class:"title-wrapper"},V=["innerHTML"],g={class:"subtitle"},y={class:"btn-group"},k=d({__name:"CarBanner",props:{id:{},title:{},subtitle:{},src:{},videoUrl:{}},setup(c){const l=c;_(e=>({"051ab636":i}));const i=`url('${l.src}')`;return(e,x)=>(o(),p("div",C,[s("div",b,[s("div",w,[t(B,{class:"x"}),s("div",{class:"title",innerHTML:e.title},null,8,V)]),s("div",g,u(e.subtitle),1)]),e.videoUrl?(o(),f(h,{key:0,"video-url":e.videoUrl},null,8,["video-url"])):v("",!0),s("div",y,[t(n,{color:"#fff",arrow:"","arrow-color":"#fff"},{default:r(()=>[a("预约试驾")]),_:1}),t(n,{color:"#fff",arrow:"",class:"btn-right"},{default:r(()=>[a("立即订购")]),_:1})])]))}});const D=m(k,[["__scopeId","data-v-e1f46d23"]]);export{D as C};