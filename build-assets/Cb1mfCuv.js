import{_ as f}from"./DAnDM6x9.js";import{i as _,e as b,j as v,o as l,c as i,a as e,F as w,r as y,b as n,n as k,t as d,g as $,I as j,k as h,u as C,w as c,d as p}from"./CsX6z4J2.js";import{_ as M}from"./DQGIWLRs.js";import{_ as P}from"./Cf0zzYTO.js";import"./BdqiqMhh.js";import"./CRMw7yP3.js";const S={class:"bg-white border-none border-theme-200 max-w-full mx-auto"},U={class:"mx-auto max-w-screen-2xl px-4 pt-0 sm:pt-0 py-16 sm:px-6 sm:py-16 lg:max-w-screen-2xl lg:px-8"},L={class:"grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-y-3 xl:gap-x-3"},F=["onClick"],N={class:"h-full w-full"},R={class:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-theme-200 xl:aspect-h-8 xl:aspect-w-7"},B={class:"flex items-center justify-between px-4"},D={class:"flex-grow pb-8"},I={class:"mt-4 flex flex-wrap items-center text-left justify-start py-0 gap-4"},V={class:"px-2 mt-2 text-md font-semibold text-theme-700 text-left"},z={class:"px-2 mt-2 text-md font-normal text-theme-700 text-left"},E={class:"px-6"},Q={__name:"ManualsGrid",props:{id:{type:String,default:"manuals-cards"},backgroundColor:{type:String,default:"bg-theme-50"},hoverColor:{type:String,default:"lg:hover:bg-theme-100"},dataPath:{type:String,required:!0},src:{type:String,default:"/img/manuals/300b.jpg"}},setup(u){const m=u,{dataPath:s}=_(m),g=b([]);v(async()=>{const{app:r}=h(),o=`${r.baseURL}${s.value}`,a=await fetch(o);g.value=await a.json()});function x(r){const{app:o}=h(),a=`${o.baseURL}${r.pdf}`;if(!a){console.error("PDF path not found in manual data");return}const t=document.createElement("a");t.href=a,t.download=`Qualiton ${r.model} - User's Manual.pdf`,t.target="_blank",t.click()}return(r,o)=>{const a=f;return l(),i("div",S,[e("div",U,[o[0]||(o[0]=e("h2",{class:"sr-only"},"Manuals",-1)),e("div",L,[(l(!0),i(w,null,y(g.value,t=>(l(),i("button",{onClick:()=>x(t),key:t.id,class:"bg-theme-100 lg:hover:bg-theme-200 rounded-3xl border-none border-theme-200 shadow-none shadow-theme-700/10 ring-none ring-theme-900/5 hover:shadow-none transition duration-300 relative flex items-start group"},[e("div",N,[e("div",R,[n(a,{src:t.src,alt:t.alt,class:"h-full w-full object-cover object-center lg:group-hover:opacity-90 transition",loading:"lazy",placeholder:[75,50,100,15]},null,8,["src","alt"])]),e("div",B,[e("div",D,[e("div",I,[e("p",{class:k(["mt-2 text-sm text-left",{"text-green-700 lg:group-hover:text-green-700 bg-green-200 lg:group-hover:bg-green-100 transition duration-300 rounded-lg px-2 py-1":t.status==="Active Product","text-red-700 lg:group-hover:text-red-700 bg-red-200 lg:group-hover:bg-red-100 transition duration-300 rounded-lg px-2 py-1":t.status==="Legacy Product"}])},d(t.status),3)]),e("p",V,d(t.model),1),e("p",z,d(t.title),1)]),e("div",E,[n($(j),{icon:"ep:download",class:"h-6 w-6 absolute bottom-4 transition lg:group-hover:text-theme-600"})])])])],8,F))),128))])])])}}},K={__name:"index",setup(u){return C({title:"User's Manuals - Qualiton"}),(m,s)=>(l(),i("div",null,[n(M,{id:"manuals-bar",path:"./manuals"},{heading:c(()=>s[0]||(s[0]=[p(" User's Manuals ")])),_:1}),n(P,{id:"title"},{title:c(()=>s[1]||(s[1]=[p(" User's Manuals ")])),subtitle:c(()=>s[2]||(s[2]=[p(" Lorem ipsum dolor sit amet. ")])),_:1}),n(Q,{id:"manuals-cards","data-path":"assets/data/manuals/manuals.json"})]))}};export{K as default};
