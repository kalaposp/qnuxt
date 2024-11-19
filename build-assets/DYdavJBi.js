import{_ as f}from"./DHaDpEnn.js";import{g as b,r as v,h as w,i as y,o as d,c as u,a as e,F as D,j as k,k as C,w as o,b as a,l as _,I as x,t as l,n as j,u as $,d as i}from"./Bjmotsnd.js";import{_ as S}from"./BcxOMofB.js";import{_ as B}from"./BdfOH5GT.js";import"./DLQYFQiG.js";const L={class:"mx-auto px-3 pt-0 pb-10 sm:pb-16 max-w-screen-2xl"},N={class:"grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2"},V={class:"p-10"},P={class:"flex items-center justify-between px-4"},R={class:"flex-grow"},z={class:"text-xl font-semibold text-theme-700 group-hover:text-theme-700 mb-8"},F={class:"text-lg font-semibold text-theme-700 group-hover:text-theme-700 mb-2"},I={class:"text-theme-700 group-hover:text-theme-700 mb-2"},Q={class:"text-theme-700 group-hover:text-theme-700 mb-2"},q={__name:"DealersCard",props:{id:{type:String,default:"dealer-cards"},backgroundColor:{type:String,default:"bg-theme-100"},hoverColor:{type:String,default:"hover:bg-theme-100"},dataPath:{type:String,required:!0}},setup(m){const h=m,{dataPath:t}=b(h),p=v([]);w(async()=>{const{app:r}=y(),n=`${r.baseURL}${t.value}`,c=await fetch(n);p.value=await c.json()});const g=r=>r.replace(/\n/g,"<br>");return(r,n)=>{const c=f;return d(),u("div",{class:j([m.backgroundColor,"border-none border-theme-200 max-w-full mx-auto"])},[e("div",L,[n[0]||(n[0]=e("h2",{class:"sr-only"},"Dealers",-1)),e("div",N,[(d(!0),u(D,null,k(p.value,s=>(d(),C(c,{to:s.website,target:"_blank",key:s.country,class:"bg-theme-200 lg:hover:bg-theme-300 rounded-3xl border-none border-theme-200 shadow-none shadow-theme-700/10 hover:ring-none lg:hover:ring-none ring-theme-300 hover:shadow-none transition duration-300 relative flex items-start group"},{default:o(()=>[e("div",V,[e("div",P,[e("div",R,[a(_(x),{icon:s.flag,class:"h-8 w-8 mb-4"},null,8,["icon"]),e("h3",z,l(s.country),1),e("p",F,l(s.name),1),e("p",I,l(g(s.address)),1),e("p",Q,l(g(s.tel)),1)])])])]),_:2},1032,["to"]))),128))])])],2)}}},E={class:"flex flex-wrap items-center text-left justify-start py-2 gap-4"},G={__name:"index",setup(m){return $({title:"Dealers - Qualiton"}),(h,t)=>(d(),u("div",null,[a(S,{id:"dealers-bar",path:"./dealers"},{heading:o(()=>t[0]||(t[0]=[i(" Dealers ")])),_:1}),a(B,{id:"title","card-color":"bg-theme-200"},{title:o(()=>t[1]||(t[1]=[i(" Dealers ")])),subtitle:o(()=>t[2]||(t[2]=[i(" Complete list of authorized Qualiton Dealers. ")])),_:1}),a(q,{id:"dealers-cards","data-path":"assets/data/dealers/dealersData.json"},{title:o(()=>[e("div",E,[t[3]||(t[3]=i(" Dealers' List ")),a(_(x),{icon:"twemoji:globe-with-meridians"})])]),_:1})]))}};export{G as default};
