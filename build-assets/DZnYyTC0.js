import{j as f,f as h,k as y,o as n,c as l,a as s,F as b,r as v,b as o,n as w,t as i,h as k,l as _,u as $,w as c,d}from"./CO27M0BJ.js";import{_ as j}from"./Dn2xOR29.js";import{I as C}from"./B8E7ArIQ.js";import{_ as M}from"./BrWLw2eV.js";import{_ as P}from"./Ch9zfDzi.js";import"./FlwR2X9l.js";const S={class:"bg-gray-100 border-none border-gray-200 max-w-7xl mx-auto"},U={class:"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8"},L=s("h2",{class:"sr-only"},"Manuals",-1),F={class:"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8"},N=["onClick"],R={class:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"},B={class:"flex items-center justify-between px-4"},D={class:"flex-grow pb-8"},I={class:"mt-4 flex flex-wrap items-center text-left justify-start py-0 gap-4"},V={class:"px-2 mt-2 text-md font-semibold text-gray-700 text-left"},z={class:"px-2 mt-2 text-md font-normal text-gray-700 text-left"},E={class:"px-6"},Q={__name:"ManualsGrid",props:{id:{type:String,default:"manuals-cards"},backgroundColor:{type:String,default:"bg-none"},hoverColor:{type:String,default:"hover:bg-gray-100"},dataPath:{type:String,required:!0},src:{type:String,default:"/img/manuals/300b.jpg"}},setup(p){const u=p,{dataPath:g}=f(u),m=h([]);y(async()=>{const{app:a}=_(),r=`${a.baseURL}${g.value}`,e=await fetch(r);m.value=await e.json()});function x(a){const{app:r}=_(),e=`${r.baseURL}${a.pdf}`;if(!e){console.error("PDF path not found in manual data");return}const t=document.createElement("a");t.href=e,t.download=`Qualiton ${a.model} - User's Manual.pdf`,t.target="_blank",t.click()}return(a,r)=>{const e=j;return n(),l("div",S,[s("div",U,[L,s("div",F,[(n(!0),l(b,null,v(m.value,t=>(n(),l("button",{"data-aos":"fade-up",onClick:()=>x(t),key:t.id,class:"bg-white rounded-lg border-none border-gray-200 shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300 relative flex items-start group"},[s("div",null,[s("div",R,[o(e,{src:t.src,alt:t.alt,class:"h-full w-full object-cover object-center group-hover:opacity-100 transition",loading:"lazy"},null,8,["src","alt"])]),s("div",B,[s("div",D,[s("div",I,[s("p",{class:w(["mt-2 text-sm text-gray-700 text-left",{"text-green-700 bg-green-100 rounded-lg px-2 py-1":t.status==="Active Product","text-red-700 bg-red-100 rounded-lg px-2 py-1":t.status==="Legacy Product"}])},i(t.status),3)]),s("p",V,i(t.model),1),s("p",z,i(t.title),1)]),s("div",E,[o(k(C),{icon:"ep:download",class:"h-6 w-6 absolute bottom-4 group-hover:text-gray-500 transition"})])])])],8,N))),128))])])])}}},K={__name:"index",setup(p){return $({title:"Qualiton | User's Manuals"}),(u,g)=>(n(),l("div",null,[o(M,{id:"manuals-bar",path:"./manuals"},{heading:c(()=>[d(" User's Manuals ")]),_:1}),o(P,{id:"title"},{title:c(()=>[d(" User's Manuals ")]),subtitle:c(()=>[d(" Lorem ipsum dolor sit amet. ")]),_:1}),o(Q,{id:"manuals-cards","data-path":"assets/data/manuals/manuals.json","background-color":"bg-gray-50","hover-color":"hover:bg-gray-100"})]))}};export{K as default};
