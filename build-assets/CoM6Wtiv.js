import{_ as d}from"./BlbJOHB4.js";import{I as u,S as p}from"./DmleXn3Z.js";import{f as m,j as _,x as f,o as x,y as h,w as a,a as e,b as s,g as w,d as y,u as r}from"./DQ85JCpN.js";const b={class:"fixed top-0 left-0 right-0 z-50 bg-gray-50 flex justify-center border-b border-gray-200 bg-opacity-50 backdrop-blur-xl"},g={class:"w-full max-w-5xl h-16 flex items-center p-6"},v={class:"text-base sm:text-lg text-gray-900 font-semibold tracking-normal"},B={__name:"ModelsBar",props:{id:{type:String,required:!0},path:{type:String,required:!0}},setup(n){const t=m(!1),o=()=>{t.value=window.scrollY>500,console.log("isVisible:",t.value)};_(()=>{window.addEventListener("scroll",o),o()}),f(()=>{window.removeEventListener("scroll",o)});const l=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(i,k)=>{const c=d;return x(),h(r(p),{show:t.value,as:"template",enter:"duration-500 ease-in-out",enterFrom:"opacity-100 translate-y-[-100%]",enterTo:"opacity-100 translate-y-0",leave:"duration-500 ease-in-out",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-[-100%]"},{default:a(()=>[e("div",b,[e("div",g,[s(c,{to:n.path,class:"flex-grow"},{default:a(()=>[e("h1",v,[w(i.$slots,"heading",{},()=>[y(" Fallback Text. ")])])]),_:3},8,["to"]),e("button",{class:"text-gray-900",onClick:l},[s(r(u),{icon:"carbon:arrow-up",class:"w-6 h-6"})])])])]),_:3},8,["show"])}}};export{B as _};
