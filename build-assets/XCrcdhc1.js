import{_ as p}from"./Ci8P1puL.js";import{k as u,o as r,c as l,b as o,w as e,a as i,B as n,d as a,_ as d,F as g}from"./CQaABsf7.js";import{_ as h}from"./BaqOdLez.js";import"./DAoPHRs-.js";const f={class:"w-full pt-4"},x={class:"mx-auto flex rounded-3xl border-0 bg-gray-200 px-8 py-2 text-base font-medium text-gray-700 transition duration-300 hover:bg-blue-700 hover:text-white hover:shadow-xl focus:outline-none"},k=u({__name:"HeroButton",props:{link:{}},setup(s){return(t,c)=>{const _=p;return r(),l("div",f,[o(_,{to:t.link},{default:e(()=>[i("button",x,[n(t.$slots,"default",{},()=>[a(" Explore ")])])]),_:3},8,["to"])])}}}),b={class:"pt-8 grid p-4 sm:grid-cols-1"},$=u({__name:"HeroImage",props:{src:{},alt:{},link:{}},setup(s){return(t,c)=>{const _=h,m=p;return r(),l("div",b,[o(m,{to:t.link},{default:e(()=>[o(_,{class:"rounded-3xl",src:t.src,alt:t.alt},null,8,["src","alt"])]),_:1},8,["to"])])}}}),v={},y={class:"text-4xl pt-8 justify-center items-center text-center mx-auto flex font-bold tracking-tight"},L={class:"text-xl pt-2 justify-center items-center text-center mx-auto flex font-normal tracking-normal text-gray-800"};function w(s,t){return r(),l(g,null,[i("h1",y,[n(s.$slots,"heading",{},()=>[a(" Fallback Text. ")])]),i("p",L,[n(s.$slots,"paragraph",{},()=>[a(" Fallback Text. ")])])],64)}const B=d(v,[["render",w]]),N={class:"bg-teal-200 p-4"},S={class:"rounded-3xl bg-gray-300"},T=u({__name:"HeroSlot",props:{imageSrc:{},imageAlt:{},imageLink:{},buttonLink:{}},setup(s){return(t,c)=>(r(),l("div",N,[i("div",S,[o(B,null,{heading:e(()=>[n(t.$slots,"heading")]),paragraph:e(()=>[n(t.$slots,"paragraph")]),_:3}),o(k,{link:t.buttonLink},{default:e(()=>[n(t.$slots,"button")]),_:3},8,["link"]),o($,{src:t.imageSrc,alt:t.imageAlt,link:t.imageLink},{default:e(()=>[n(t.$slots,"image")]),_:3},8,["src","alt","link"])])]))}}),E={__name:"index",setup(s){return(t,c)=>(r(),l("div",null,[o(T,{imageSrc:"/img/hero/hero-mq.jpg",imageAlt:"Azureish white speaker",imageLink:"/models/300b",buttonLink:"/models/300b"},{heading:e(()=>[a(" 300B ")]),paragraph:e(()=>[a(" Timeless sound, eternal beauty. ")]),button:e(()=>[a(" Explore ")]),_:1})]))}};export{E as default};
