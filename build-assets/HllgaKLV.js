import{_ as p}from"./Bkw91KSe.js";import{r as h,h as m,y as u,o as x,k as b,w as r,a as e,b as s,p as w,d as _,l as n,I as f}from"./dVZDo7WI.js";import{S as k}from"./fcRWShQG.js";const y={class:"fixed top-0 left-0 right-0 z-10 bg-white dark:bg-black flex justify-center border-b border-theme-200 dark:border-theme-600 bg-opacity-25 dark:bg-opacity-5 backdrop-blur-xl"},v={class:"w-full max-w-screen-xl h-14 flex items-center p-6"},g={class:"text-base text-theme-800 dark:text-theme-200 font-semibold tracking-normal"},N={__name:"ModelsBar",props:{id:{type:String,required:!0},path:{type:String,required:!0}},setup(l){const o=h(!1),t=()=>{o.value=window.scrollY>50};m(()=>{window.addEventListener("scroll",t),t()}),u(()=>{window.removeEventListener("scroll",t)});const i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(c,a)=>{const d=p;return x(),b(n(k),{show:o.value,as:"template",enter:"duration-500 ease-in-out",enterFrom:"opacity-100 translate-y-[-100%]",enterTo:"opacity-100 translate-y-0",leave:"duration-500 ease-in-out",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-[-100%]"},{default:r(()=>[e("div",y,[e("div",v,[s(d,{to:l.path,class:"flex-grow"},{default:r(()=>[e("h1",g,[w(c.$slots,"heading",{},()=>[a[0]||(a[0]=_(" Fallback Text. "))])])]),_:3},8,["to"]),e("button",{class:"text-theme-700 dark:text-theme-200 hover:text-theme-900 dark:hover:text-white transition duration-300",onClick:i},[s(n(f),{icon:"carbon:arrow-up",class:"w-6 h-6"})])])])]),_:3},8,["show"])}}};export{N as _};