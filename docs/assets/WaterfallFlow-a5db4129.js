import{d,c as e,F as r,r as i,o as s,n as _,b as o,q as l,t as a,e as u,_ as p}from"./index-c50d19d2.js";const v={class:"waterfall-flow"},y=["src"],f=["src"],h={class:"content-wrapper"},k=["innerHTML"],m=["innerHTML"],w=["innerHTML"],L={key:2,class:"data-items"},T={class:"name"},H={class:"value"},M={class:"unit"},F={key:0,class:"child-title"},W={class:"child-description"},g=d({__name:"WaterfallFlow",props:{options:{},defaultReverse:{type:Boolean}},setup(B){return(c,x)=>(s(),e("div",v,[(s(!0),e(r,null,i(c.options,t=>(s(),e("div",{class:_(["row",{"default-reverse":c.defaultReverse}]),key:t.title},[t.src.endsWith(".mp4")?(s(),e("video",{key:0,src:t.src,autoplay:"",muted:"",loop:""},null,8,y)):(s(),e("img",{key:1,src:t.src,alt:""},null,8,f)),o("div",h,[t.note?(s(),e("div",{key:0,class:"note",innerHTML:t.note},null,8,k)):l("",!0),o("div",{class:"title",innerHTML:t.title},null,8,m),t.description?(s(),e("div",{key:1,class:"description",innerHTML:t.description},null,8,w)):l("",!0),t.dataItems?(s(),e("div",L,[(s(!0),e(r,null,i(t.dataItems,n=>(s(),e("div",{class:"data-item",key:n.name},[o("div",T,a(n.name),1),o("div",H,[u(a(n.value)+" ",1),o("span",M,a(n.unit),1)])]))),128))])):l("",!0),(s(!0),e(r,null,i(t.descriptions,n=>(s(),e(r,{key:n.description},[n.title?(s(),e("div",F,a(n.title),1)):l("",!0),o("div",W,a(n.description),1)],64))),128))])],2))),128))]))}});const I=p(g,[["__scopeId","data-v-7175dd30"]]);export{I as W};
