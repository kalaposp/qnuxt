import{k as f,g as b,l as y,o as l,c,a as t,F as w,r as v,m as D,v as k,w as s,b as a,i as h,t as r,e as C,u as $,d as n}from"./D7tlq9_A.js";import{I as x}from"./DIutv04G.js";import{_ as j}from"./B-ntFe2y.js";import{_ as S}from"./D3bhJhUj.js";const B={class:"bg-gray-50 border-none border-gray-200 max-w-full mx-auto"},L={class:"mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-10 sm:pb-16 lg:max-w-screen-2xl"},N=t("h2",{class:"sr-only"},"Dealers",-1),V={class:"grid grid-cols-1 gap-x-6 lg:gap-y-8 lg:gap-x-8 gap-y-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2"},P={class:"p-10"},R={class:"flex items-center justify-between px-4"},F={class:"flex-grow"},I={class:"text-xl font-semibold mb-8"},Q={class:"text-lg font-semibold text-gray-700 mb-2"},q={class:"text-gray-700 mb-2"},z={class:"text-gray-700 mb-2"},E={__name:"DealersCard",props:{id:{type:String,default:"dealer-cards"},backgroundColor:{type:String,default:"bg-none"},hoverColor:{type:String,default:"hover:bg-gray-100"},dataPath:{type:String,required:!0}},setup(d){const _=d,{dataPath:g}=f(_),p=b([]);y(async()=>{const{app:o}=D(),m=`${o.baseURL}${g.value}`,i=await fetch(m);p.value=await i.json()});const u=o=>o.replace(/\n/g,"<br>");return(o,m)=>{const i=C;return l(),c("div",B,[t("div",L,[N,t("div",V,[(l(!0),c(w,null,v(p.value,e=>(l(),k(i,{to:e.website,target:"_blank",key:e.country,class:"bg-white hover:bg-gray-100 rounded-2xl border-none border-gray-200 shadow-none shadow-gray-700/10 ring-none ring-gray-900/5 hover:shadow-none transition duration-300 relative flex items-start group"},{default:s(()=>[t("div",P,[t("div",R,[t("div",F,[a(h(x),{icon:e.flag,class:"h-8 w-8 mb-4"},null,8,["icon"]),t("h3",I,r(e.country),1),t("p",Q,r(e.name),1),t("p",q,r(u(e.address)),1),t("p",z,r(u(e.tel)),1)])])])]),_:2},1032,["to"]))),128))])])])}}},H={class:"flex flex-wrap items-center text-left justify-start py-2 gap-4"},G={__name:"index",setup(d){return $({title:"Qualiton | Dealers"}),(_,g)=>(l(),c("div",null,[a(j,{id:"dealers-bar",path:"./dealers"},{heading:s(()=>[n(" Dealers ")]),_:1}),a(S,{id:"title"},{title:s(()=>[n(" Dealers ")]),subtitle:s(()=>[n(" Complete list of authorized Qualiton Dealers. ")]),_:1}),a(E,{id:"dealers-cards","data-path":"assets/data/dealers/dealersData.json","background-color":"bg-white","hover-color":"hover:bg-white"},{title:s(()=>[t("div",H,[n(" Dealers' List "),a(h(x),{icon:"twemoji:globe-with-meridians"})])]),_:1})]))}};export{G as default};
