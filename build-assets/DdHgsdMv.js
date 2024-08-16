import x from"./CpsCBD1d.js";import{u as h}from"./B2xsXICz.js";import{_ as v}from"./BMXEZQay.js";import{_ as w}from"./CF02RjK8.js";import{I as y}from"./Ne3RpCPl.js";import{i as b,f as k,j as R,o as l,c,a as e,F as $,r as j,k as _,b as a,t as u,u as C,w as g,d as m}from"./K7DNeN_5.js";import"./CzEjIAAA.js";const N={class:"bg-gray-50 border-x border-gray-200 max-w-7xl mx-auto"},P={class:"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8"},S=e("h2",{class:"sr-only"},"Reviews",-1),F={class:"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8"},I=["onClick"],B={class:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"},D={class:"flex items-center justify-between px-4"},L={class:"flex-grow pb-8"},V={class:"mt-4 text-sm text-gray-700 text-left"},E={class:"mt-2 text-md font-semibold text-gray-700 text-left"},Q={class:"px-6"},U={__name:"ReviewsGrid",props:{id:{type:String,default:"reviews-cards"},backgroundColor:{type:String,default:"bg-none"},hoverColor:{type:String,default:"hover:bg-gray-100"},dataPath:{type:String,required:!0}},setup(i){const d=i,{dataPath:p}=b(d),r=k([]);R(async()=>{const{app:s}=_(),n=`${s.baseURL}${p.value}`,o=await fetch(n);r.value=await o.json()});function f(s){const{app:n}=_(),o=`${n.baseURL}${s.pdf}`;if(!o){console.error("PDF path not found in review data");return}const t=document.createElement("a");t.href=o,t.download=`${s.title} - Review.pdf`,t.target="_blank",t.click()}return(s,n)=>{const o=w;return l(),c("div",N,[e("div",P,[S,e("div",F,[(l(!0),c($,null,j(r.value,t=>(l(),c("button",{onClick:()=>f(t),key:t.id,class:"bg-gray-200 rounded-lg border border-gray-100 hover:shadow-md relative flex items-start group transition"},[e("div",null,[e("div",B,[a(o,{src:t.src,alt:t.alt,class:"h-full w-full object-cover object-center group-hover:opacity-90 transition",loading:"lazy"},null,8,["src","alt"])]),e("div",D,[e("div",L,[e("p",V,u(t.date),1),e("h3",E,u(t.title),1)]),e("div",Q,[a(C(y),{icon:"ep:download",class:"h-6 w-6 absolute bottom-4 group-hover:text-gray-500 transition"})])])])],8,I))),128))])])])}}},q={class:"flex flex-wrap items-center text-left justify-start py-2 gap-4"},K={__name:"index",setup(i){return h({title:"Qualiton | Reviews"}),(d,p)=>{const r=x;return l(),c("div",null,[a(v,{id:"reviews-bar",path:"./reviews"},{heading:g(()=>[m(" Reviews ")]),_:1}),a(U,{id:"reviews-cards","data-path":"assets/data/reviews/reviews.json","background-color":"bg-gray-50","hover-color":"hover:bg-gray-100"},{title:g(()=>[e("div",q,[m(" Qualiton News "),a(r,{icon:"noto:rolled-up-newspaper"})])]),_:1})])}}};export{K as default};