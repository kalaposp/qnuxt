import{_ as p}from"./g__o0Wye.js";import{I as u,S as m}from"./Cu7hdUbK.js";import{e as h,j as _,y as f,o as w,p as x,w as s,a as e,b as r,f as b,d as y,g as n}from"./BNYX1iVl.js";const v={class:"fixed top-0 left-0 right-0 z-10 bg-theme-100 flex justify-center border-b border-theme-200 bg-opacity-5 backdrop-blur-xl"},g={class:"w-full max-w-screen-xl h-14 flex items-center p-6"},k={class:"text-base text-theme-800 font-semibold tracking-normal"},N={__name:"ModelsBar",props:{id:{type:String,required:!0},path:{type:String,required:!0}},setup(l){const o=h(!1),t=()=>{o.value=window.scrollY>50};_(()=>{window.addEventListener("scroll",t),t()}),f(()=>{window.removeEventListener("scroll",t)});const i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(c,a)=>{const d=p;return w(),x(n(m),{show:o.value,as:"template",enter:"duration-500 ease-in-out",enterFrom:"opacity-100 translate-y-[-100%]",enterTo:"opacity-100 translate-y-0",leave:"duration-500 ease-in-out",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-[-100%]"},{default:s(()=>[e("div",v,[e("div",g,[r(d,{to:l.path,class:"flex-grow"},{default:s(()=>[e("h1",k,[b(c.$slots,"heading",{},()=>[a[0]||(a[0]=y(" Fallback Text. "))])])]),_:3},8,["to"]),e("button",{class:"text-theme-500 hover:text-theme-900 transition duration-300",onClick:i},[r(n(u),{icon:"carbon:arrow-up",class:"w-6 h-6"})])])])]),_:3},8,["show"])}}};export{N as _};
