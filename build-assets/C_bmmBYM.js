import f from"./DjBY0g8U.js";import{k as x,g as w,l as v,o as c,c as d,a as e,F as b,r as y,m,b as o,t as g,i as k,u as R,w as l,d as i}from"./cn26YDzS.js";import{_ as $}from"./-eURxtb2.js";import{_ as j}from"./CUU2QXzv.js";import{I as C}from"./ChGKxipr.js";import{_ as N}from"./CaFzKzX6.js";const P={class:"bg-white border-none border-slate-200 max-w-full mx-auto"},S={class:"mx-auto max-w-screen-2xl px-4 pt-0 sm:pt-0 py-16 sm:px-6 sm:py-16 lg:max-w-screen-2xl lg:px-8"},F=e("h2",{class:"sr-only"},"Reviews",-1),I={class:"grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-3 xl:gap-y-3"},L=["onClick"],B={class:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-slate-200 xl:aspect-h-8 xl:aspect-w-7"},D={class:"flex items-center justify-between px-4"},V={class:"flex-grow pb-8"},E={class:"mt-4 text-sm text-slate-700 text-left"},Q={class:"mt-2 text-md font-semibold text-slate-700 text-left"},U={class:"px-6"},q={__name:"ReviewsGrid",props:{id:{type:String,default:"reviews-cards"},backgroundColor:{type:String,default:"bg-none"},hoverColor:{type:String,default:"lg:hover:bg-slate-100"},dataPath:{type:String,required:!0}},setup(p){const _=p,{dataPath:u}=x(_),n=w([]);v(async()=>{const{app:a}=m(),r=`${a.baseURL}${u.value}`,s=await fetch(r);n.value=await s.json()});function h(a){const{app:r}=m(),s=`${r.baseURL}${a.pdf}`;if(!s){console.error("PDF path not found in review data");return}const t=document.createElement("a");t.href=s,t.download=`${a.title} - Review.pdf`,t.target="_blank",t.click()}return(a,r)=>{const s=j;return c(),d("div",P,[e("div",S,[F,e("div",I,[(c(!0),d(b,null,y(n.value,t=>(c(),d("button",{onClick:()=>h(t),key:t.id,class:"bg-slate-100 lg:hover:bg-slate-200 rounded-3xl border-none border-slate-200 shadow-none shadow-slate-700/10 ring-none ring-slate-900/5 hover:shadow-none transition duration-300 relative flex items-start group"},[e("div",null,[e("div",B,[o(s,{src:t.src,alt:t.alt,class:"h-full w-full object-cover object-center lg:group-hover:opacity-90 transition aspect-[16/9]",loading:"lazy"},null,8,["src","alt"])]),e("div",D,[e("div",V,[e("p",E,g(t.date),1),e("h3",Q,g(t.title),1)]),e("div",U,[o(k(C),{icon:"ep:download",class:"h-6 w-6 absolute bottom-4 right-4 lg:group-hover:text-slate-700 transition"})])])])],8,L))),128))])])])}}},z={class:"flex flex-wrap items-center text-left justify-start py-2 gap-4"},K={__name:"index",setup(p){return R({title:"Qualiton | Reviews"}),(_,u)=>{const n=f;return c(),d("div",null,[o($,{id:"reviews-bar",path:"./reviews"},{heading:l(()=>[i(" Reviews ")]),_:1}),o(N,{id:"title"},{title:l(()=>[i(" Reviews ")]),subtitle:l(()=>[i(" Lorem ipsum dolor sit amet. ")]),_:1}),o(q,{id:"reviews-cards","data-path":"assets/data/reviews/reviews.json","background-color":"bg-gray-50","hover-color":"hover:bg-gray-100"},{title:l(()=>[e("div",z,[i(" Qualiton News "),o(n,{icon:"noto:rolled-up-newspaper"})])]),_:1})])}}};export{K as default};
