import{_ as m}from"./CWWB7PEc.js";import{f as u,i as p,l as _,o as s,c as a,a as r,b as e,w as n,g as f,d as w,u as x,m as h,T as b}from"./tjIVqqsv.js";import{I as k}from"./BM3GNsCK.js";const y={class:"w-full sticky start-0 top-0 z-10 bg-sky-100 flex justify-center border-b border-sky-200"},g={class:"w-full max-w-5xl h-20 flex items-center p-6"},v={class:"text-base sm:text-lg text-sky-400 font-semibold tracking-normal"},S={__name:"ModelsBar",props:{id:{type:String,required:!0},path:{type:String,required:!0}},setup(l){const t=u(!1),o=()=>{t.value=window.scrollY>200};p(()=>{window.addEventListener("scroll",o)}),_(()=>{window.removeEventListener("scroll",o)});const c=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(i,T)=>{const d=m;return s(),a("div",y,[r("div",g,[e(d,{to:l.path,class:"flex-grow"},{default:n(()=>[r("h1",v,[f(i.$slots,"heading",{},()=>[w(" Fallback Text. ")])])]),_:3},8,["to"]),e(b,{name:"fade",appear:""},{default:n(()=>[t.value?(s(),a("button",{key:0,class:"text-sky-400",onClick:c},[e(x(k),{icon:"carbon:arrow-up",class:"w-6 h-6"})])):h("",!0)]),_:1})])])}}};export{S as _};
