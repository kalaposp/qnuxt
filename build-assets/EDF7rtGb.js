import{_ as d}from"./IDekIkCF.js";import{I as p}from"./HLYzEpub.js";import{S as u}from"./De5OIsVa.js";import{f as m,j as _,J as f,o as h,l as x,w as a,a as e,b as r,g as w,d as y,u as s}from"./D4g3NPWE.js";const b={class:"fixed top-0 left-0 right-0 z-10 bg-gray-50 flex justify-center border-b border-gray-200 bg-opacity-50 backdrop-blur-xl"},g={class:"w-full max-w-5xl h-16 flex items-center p-6"},v={class:"text-base sm:text-lg text-gray-900 font-semibold tracking-normal"},V={__name:"ModelsBar",props:{id:{type:String,required:!0},path:{type:String,required:!0}},setup(n){const o=m(!1),t=()=>{o.value=window.scrollY>200};_(()=>{window.addEventListener("scroll",t),t()}),f(()=>{window.removeEventListener("scroll",t)});const l=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(i,k)=>{const c=d;return h(),x(s(u),{show:o.value,as:"template",enter:"duration-500 ease-in-out",enterFrom:"opacity-100 translate-y-[-100%]",enterTo:"opacity-100 translate-y-0",leave:"duration-500 ease-in-out",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-[-100%]"},{default:a(()=>[e("div",b,[e("div",g,[r(c,{to:n.path,class:"flex-grow"},{default:a(()=>[e("h1",v,[w(i.$slots,"heading",{},()=>[y(" Fallback Text. ")])])]),_:3},8,["to"]),e("button",{class:"text-gray-900 hover:text-gray-600 transition duration-300",onClick:l},[r(s(p),{icon:"carbon:arrow-up",class:"w-6 h-6"})])])])]),_:3},8,["show"])}}};export{V as _};
