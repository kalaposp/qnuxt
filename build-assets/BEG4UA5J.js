import{_ as d}from"./BOwZYrED.js";import{l as m,o as r,c as l,b as n,w as e,a as i,g as o,d as s,_ as p,F as g}from"./DnqipsKB.js";import{_ as x}from"./DbBILhdL.js";import"./B7tHOJv7.js";const h={class:"w-full pt-4"},f={class:"mx-auto flex rounded-3xl border border-gray-200 px-8 py-2 text-sm sm:text-base font-medium text-gray-200 transition duration-300 hover:bg-gray-300 hover:text-gray-700 hover:shadow-xl focus:outline-none"},k=m({__name:"HeroButton",props:{link:{}},setup(a){return(t,c)=>{const _=d;return r(),l("div",h,[n(_,{to:t.link},{default:e(()=>[i("button",f,[o(t.$slots,"default",{},()=>[s(" Explore ")])])]),_:3},8,["to"])])}}}),b={class:"pt-8 grid p-4 sm:p-4 sm:grid-cols-1"},$=m({__name:"HeroImage",props:{src:{},alt:{},link:{}},setup(a){return(t,c)=>{const _=x,u=d;return r(),l("div",b,[n(u,{to:t.link},{default:e(()=>[n(_,{class:"rounded-3xl",src:t.src,alt:t.alt,loading:"lazy"},null,8,["src","alt"])]),_:1},8,["to"])])}}}),y={},v={class:"text-2xl sm:text-4xl pt-12 justify-center items-center text-center mx-auto flex font-semibold tracking-tight text-white"},w={class:"text-md sm:text-lg pt-2 justify-center items-center text-center mx-auto flex font-normal tracking-normal text-white"};function L(a,t){return r(),l(g,null,[i("h1",v,[o(a.$slots,"heading",{},()=>[s(" Fallback Text. ")])]),i("p",w,[o(a.$slots,"paragraph",{},()=>[s(" Fallback Text. ")])])],64)}const N=p(y,[["render",L]]),B={class:"bg-gray-50 border-x border-gray-200 p-4 max-w-7xl mx-auto"},S={class:"rounded-3xl bg-gradient-to-r from-gray-600 to-gray-400"},T=m({__name:"HeroSlot",props:{imageSrc:{},imageAlt:{},imageLink:{},buttonLink:{}},setup(a){return(t,c)=>(r(),l("div",B,[i("div",S,[n(N,null,{heading:e(()=>[o(t.$slots,"heading")]),paragraph:e(()=>[o(t.$slots,"paragraph")]),_:3}),n(k,{link:t.buttonLink},{default:e(()=>[o(t.$slots,"button")]),_:3},8,["link"]),n($,{src:t.imageSrc,alt:t.imageAlt,link:t.imageLink},{default:e(()=>[o(t.$slots,"image")]),_:3},8,["src","alt","link"])])]))}}),E={__name:"index",setup(a){return(t,c)=>(r(),l("div",null,[n(T,{imageSrc:"/img/hero/hero-mq.jpg",imageAlt:"Azureish white speaker",imageLink:"/models/300b",buttonLink:"/models/300b"},{heading:e(()=>[s(" 300B Integrated ")]),paragraph:e(()=>[s(" Timeless sound, natural beauty. ")]),button:e(()=>[s(" Explore ")]),_:1})]))}};export{E as default};
