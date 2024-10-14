import{_ as f}from"./DQGIWLRs.js";import{_ as x}from"./DAnDM6x9.js";import{i as w,e as v,j as b,o as l,c as i,a as e,F as y,r as k,b as r,t as h,g as R,I as $,k as g,u as j,w as d,d as c}from"./CsX6z4J2.js";import{_ as C}from"./Cf0zzYTO.js";import"./BdqiqMhh.js";import"./CRMw7yP3.js";const P={class:"bg-white border-none border-theme-200 max-w-full mx-auto"},S={class:"mx-auto max-w-screen-2xl px-4 pt-0 sm:pt-0 py-16 sm:px-6 sm:py-16 lg:max-w-screen-2xl lg:px-8"},F={class:"grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-3 xl:gap-y-3"},L=["onClick"],N={class:"h-full w-full"},B={class:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-theme-200 xl:aspect-h-8 xl:aspect-w-7"},D={class:"flex items-center justify-between px-4 py-4 lg:px-6 lg:py-6"},I={class:"flex-grow pb-8"},V={class:"mt-0 text-sm text-theme-700 text-left"},E={class:"mt-2 text-md font-semibold text-theme-700 text-left"},U={class:"px-6"},q={__name:"ReviewsGrid",props:{id:{type:String,default:"reviews-cards"},backgroundColor:{type:String,default:"bg-none"},hoverColor:{type:String,default:"lg:hover:bg-theme-100"},dataPath:{type:String,required:!0}},setup(p){const m=p,{dataPath:s}=w(m),u=v([]);b(async()=>{const{app:n}=g(),o=`${n.baseURL}${s.value}`,a=await fetch(o);u.value=await a.json()});function _(n){const{app:o}=g(),a=`${o.baseURL}${n.pdf}`;if(!a){console.error("PDF path not found in review data");return}const t=document.createElement("a");t.href=a,t.download=`${n.title} - Review.pdf`,t.target="_blank",t.click()}return(n,o)=>{const a=x;return l(),i("div",P,[e("div",S,[o[0]||(o[0]=e("h2",{class:"sr-only"},"Reviews",-1)),e("div",F,[(l(!0),i(y,null,k(u.value,t=>(l(),i("button",{onClick:()=>_(t),key:t.id,class:"bg-theme-100 lg:hover:bg-theme-200 rounded-3xl border-none border-theme-200 shadow-none shadow-theme-700/10 ring-none ring-theme-900/5 hover:shadow-none transition duration-300 relative flex items-start group"},[e("div",N,[e("div",B,[r(a,{src:t.src,alt:t.alt,class:"h-full w-full object-cover object-center lg:group-hover:opacity-90 transition aspect-[16/9]",loading:"lazy",placeholder:[75,50,100,15]},null,8,["src","alt"])]),e("div",D,[e("div",I,[e("p",V,h(t.date),1),e("h3",E,h(t.title),1)]),e("div",U,[r(R($),{icon:"ep:download",class:"h-6 w-6 absolute bottom-4 right-4 lg:group-hover:text-theme-700 transition"})])])])],8,L))),128))])])])}}},A={__name:"index",setup(p){return j({title:"Reviews - Qualiton"}),(m,s)=>(l(),i("div",null,[r(f,{id:"reviews-bar",path:"./reviews"},{heading:d(()=>s[0]||(s[0]=[c(" Reviews ")])),_:1}),r(C,{id:"title"},{title:d(()=>s[1]||(s[1]=[c(" Reviews ")])),subtitle:d(()=>s[2]||(s[2]=[c(" Lorem ipsum dolor sit amet. ")])),_:1}),r(q,{id:"reviews-cards","data-path":"assets/data/reviews/reviews.json"})]))}};export{A as default};
