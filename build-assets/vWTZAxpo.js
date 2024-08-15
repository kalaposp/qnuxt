import{u as k}from"./DwbO5EF2.js";import{I as c}from"./XgWFKA2y.js";import{_ as S}from"./TGlEMSYm.js";import{_ as q}from"./D2g2TH_0.js";import{_ as $}from"./He9IFdzp.js";import{Y as j,G as N,V as O}from"./B_hzQaws.js";import{h as f,S as F}from"./C3q4zcxr.js";import{f as p,o as x,c as g,a as t,n as i,b as o,w as a,g as n,d as r,u as s,h as B}from"./DpP1klUt.js";const Q=["id"],T={class:"absolute bottom-0 right-0 mr-4 mb-4"},H=t("div",{class:"fixed inset-0 bg-black/75 backdrop-blur-xl"},null,-1),I={class:"fixed inset-0 overflow-y-auto"},U={class:"flex min-h-full items-center justify-center p-4 text-left"},V={class:"text-sm sm:text-sm font-medium text-gray-500 max-w-2xl mx-auto px-2 py-4 sm:p-4"},L={class:"max-w-2xl px-2 py-4 sm:p-4 mx-auto gap-6 flex"},M={key:0,class:"bg-gray-900 text-gray-100 text-xs rounded-md p-1"},R={class:"max-w-2xl mx-auto px-2 py-4 sm:p-4"},A={class:"mt-2"},b={__name:"NewsPair",props:{id:{type:String,required:!0},src:{type:String,required:!0},alt:{type:String,required:!0},startColor:{type:String,default:"from-blue-100"},endColor:{type:String,default:"to-red-100"},textOrder:{type:String,default:"lg:order-1"},imgOrder:{type:String,default:"lg:order-2"},titleColor:{type:String,default:"text-gray-900"},contentColor:{type:String,default:"text-gray-500"},buttonColor:{type:String,default:"text-gray-500"},buttonHoverColor:{type:String,default:"hover:text-gray-300"}},setup(e){const u=p(!1);function m(){u.value=!1}function y(){u.value=!0}const d=p(!1),v=async()=>{try{await navigator.clipboard.writeText(window.location.href),d.value=!0,setTimeout(()=>{d.value=!1},1e3)}catch(l){console.error("Failed to copy URL:",l)}};p([]);function w(){const l=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;window.open(l,"_blank")}function C(){const l=`https://twitter.com/share?url=${encodeURIComponent(window.location.href)}`;window.open(l,"_blank")}return(l,P)=>{const _=q,h=$;return x(),g("div",{id:e.id,class:"p-4 py-4 bg-gray-50 border-x border-gray-200 max-w-7xl mx-auto"},[t("button",{type:"button",onClick:y,class:"p-4 hover:bg-gray-200 bg-gray-100 border border-gray-200 transition rounded-3xl grid gap-4 sm:gap-4 lg:grid-cols-12 max-w-7xl mx-auto group"},[t("div",{class:i([e.startColor,e.endColor,e.textOrder,"rounded-3xl bg-gradient-to-tr lg:col-span-6 h-full w-full object-cover object-center p-4 order-2 relative border border-gray-300 flex flex-col justify-center items-start"])},[o(_,{to:`#${e.id}`},{default:a(()=>[t("p",{class:i([e.contentColor,"text-xs sm:text-xs lg:text-sm leading-relaxed sm:leading-relaxed font-semibold rounded-3xl p-2 sm:p-2 pb-2 sm:pb-2 px-2 sm:px-6 lg:px-10 max-w-3xl justify-center items-center text-left text-gray-500"])},[n(l.$slots,"category",{},()=>[r(" Fallback Text. ")])],2),t("h2",{class:i([e.titleColor,"text-lg sm:text-xl lg:text-2xl p-2 sm:p-2 pt-2 sm:pt-2 px-2 sm:px-6 lg:px-10 items-center text-left font-bold tracking-normal"])},[n(l.$slots,"title",{},()=>[r(" Fallback Text. ")])],2),t("p",{class:i([e.contentColor,"text-xs sm:text-sm lg:text-base leading-relaxed sm:leading-relaxed font-medium rounded-3xl p-2 sm:p-2 pb-2 sm:pb-2 px-2 sm:px-6 lg:px-10 max-w-3xl justify-center items-center text-left text-gray-500"])},[n(l.$slots,"date",{},()=>[r(" Fallback text. ")])],2),t("div",T,[o(s(c),{icon:"carbon:add-filled",class:i([e.buttonColor,e.buttonHoverColor,"transiton duration-150 h-8 w-8 justify-center items-center"]),"aria-hidden":"true"},null,8,["class"])])]),_:3},8,["to"])],2),t("div",{class:i([e.imgOrder,"lg:col-span-6 order-1"])},[o(h,{src:e.src,alt:e.alt,class:"rounded-3xl h-full w-full object-cover object-center relative group-hover:opacity-90 transition",loading:"lazy"},null,8,["src","alt"])],2),o(s(F),{appear:"",show:u.value,as:"template"},{default:a(()=>[o(s(j),{as:"div",onClose:m,class:"relative z-10"},{default:a(()=>[o(s(f),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[H]),_:1}),t("div",I,[t("div",U,[o(s(f),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[o(s(N),{class:i([e.startColor,e.endColor,"bg-gradient-to-tr w-full max-w-3xl transform overflow-hidden rounded-2xl p-4 pt-4 sm:pt-10 pb-16 text-left align-middle shadow-xl transition-all relative"])},{default:a(()=>[t("div",V,[n(l.$slots,"date",{},()=>[r(" Fallback Date. ")])]),o(s(O),{as:"h3",class:i([e.titleColor,"text-xl font-semibold leading-6 max-w-2xl mx-auto px-2 py-4 sm:p-4"])},{default:a(()=>[n(l.$slots,"title",{},()=>[r(" Fallback Text. ")])]),_:3},8,["class"]),t("div",L,[t("button",{onClick:w,class:"focus:outline-none"},[o(s(c),{icon:"basil:facebook-solid",class:"h-6 w-6 items-center justify-center mx-auto text-gray-500 hover:text-gray-900 transition","aria-hidden":"true"})]),t("button",{onClick:C,class:"focus:outline-none"},[o(s(c),{icon:"ri:twitter-x-line",class:"h-6 w-6 items-center justify-center mx-auto text-gray-500 hover:text-gray-900 transition","aria-hidden":"true"})]),t("button",{onClick:v,class:i([{copied:d.value},"flex items-center gap-4 focus:outline-none"])},[o(s(c),{icon:"lucide:link",class:"h-6 w-6 text-gray-500 hover:text-gray-900 transition"}),d.value?(x(),g("span",M," Copied to clipboard. ")):B("",!0)],2)]),t("div",R,[o(h,{src:e.src,alt:e.alt,class:"rounded-xl h-full w-full object-cover object-center relative group-hover:opacity-90 transition"},null,8,["src","alt"])]),t("div",A,[t("p",{class:i([e.contentColor,"text-sm sm:text-base max-w-2xl mx-auto px-2 py-2 sm:py-4 sm:p-4"])},[n(l.$slots,"content",{},()=>[r(" Fallback text. ")])],2)]),t("button",{type:"button",class:"absolute bottom-0 right-0 p-4",onClick:m},[o(s(c),{icon:"carbon:close",class:i([e.buttonColor,e.buttonHoverColor,"h-10 w-10"]),"aria-hidden":"true"},null,8,["class"])])]),_:3},8,["class"])]),_:3})])])]),_:3})]),_:3},8,["show"])])],8,Q)}}},D=t("p",{class:"leading-relaxed"}," Today, we proudly unveil the latest addition to our product lineup: the Qualiton 300B, an integrated stereo amplifier delivering 2 x 25 Watts output power. Built around the captivating sound character of 300B power tubes, this amplifier harmoniously blends our classic heritage with modern details. It features refined vacuum tube circuits, which we have enhanced with several additional functionalities, including the Automatic Bias System, Filament Soft-Start, Relay Controlled Input Selection and Volume – just to name a few. Our sonic vision was clear: to create a smooth, musical, and well-balanced vacuum tube amplifier that excels across the entire audio frequency spectrum. ",-1),E=t("br",null,null,-1),W=t("p",{class:"leading-relaxed"}," We invite you to experience the Qualiton 300B firsthand by visiting our booth F13 in Halle 2 between May 9th and 12th at the HIGH END 2024 exhibition in Munich. Additionally, don’t miss the opportunity to explore the hORNS Speakers' room F231a in Atrium 4.2 — where the magic of the Qualiton 300B comes alive. ",-1),z=t("p",{class:"leading-relaxed"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia culpa quod laudantium ea dignissimos recusandae, ut natus tempore iure, nam accusantium eveniet. Quo quia, fuga a explicabo corporis voluptatibus quod! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus at impedit, repellat perferendis beatae sunt nam? Quasi odio quia iusto nulla. Eum illum rerum dolorum nam repellendus. Quis, alias et. ",-1),G=t("br",null,null,-1),Y=t("p",{class:"leading-relaxed"}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quos nihil quidem ratione maiores optio consectetur non tempora eius, ex expedita voluptate accusamus atque molestiae, quibusdam, corporis illo dolorem ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus reprehenderit suscipit itaque possimus fuga aliquid ab harum rerum? Odit eius facere minima cum tempora aperiam natus porro quisquam voluptate. ",-1),rt={__name:"index",setup(e){return k({title:"Qualiton | News"}),(u,m)=>(x(),g("div",null,[o(S,{id:"news-bar",path:"./news"},{heading:a(()=>[r(" News ")]),_:1}),o(b,{id:"introducing-the-qualiton-300b",src:"/img/news/introducing-the-qualiton-300b-mq.jpg",alt:"alt-text","start-color":"from-red-100","end-color":"to-blue-100","text-order":"lg:order-2","img-order":"lg:order-1","title-color":"text-gray-900","content-color":"text-gray-500","button-color":"text-gray-700","button-hover-color":"hover:text-gray-400"},{category:a(()=>[r(" NEW PRODUCT ")]),title:a(()=>[r(" Introducing the Qualiton 300B ")]),date:a(()=>[r(" April 30, 2024 ")]),content:a(()=>[D,E,W]),_:1}),o(b,{id:"dummy-news",src:"/img/300b/dummy-dark.jpg",alt:"alt-text","start-color":"from-red-100","end-color":"to-blue-100","text-order":"lg:order-2","img-order":"lg:order-1","title-color":"text-gray-900","content-color":"text-gray-500","button-color":"text-gray-700","button-hover-color":"hover:text-gray-400"},{category:a(()=>[r(" DUMMY NEWS ")]),title:a(()=>[r(" Dummy News ")]),date:a(()=>[r(" April 1, 2024 ")]),content:a(()=>[z,G,Y]),_:1})]))}};export{rt as default};
