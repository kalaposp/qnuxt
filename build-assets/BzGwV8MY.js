import{u as I}from"./DFRzFEkw.js";import{I as w}from"./CzSaI-Ii.js";import{_ as $}from"./XQLMqAlO.js";import{s as F,o as u,c,b as r,a as t,n as i,w as o,g as x,d as a,f as T,u as n,i as L,j as M,x as B,F as y,r as q,k as O,t as P}from"./B1eENUms.js";import{_ as V}from"./Ciea5sqb.js";import{_ as z}from"./Dc7FCTvs.js";import{_}from"./D0smz9dJ.js";import{Y as H,G as A,V as N}from"./B7hB6vBY.js";import{h as S,S as R}from"./CuLeR0Zj.js";import"./x9_aFt6k.js";const D=["id"],E=F({__name:"ModelsImage",props:{id:{type:String,required:!0},src:{type:String,required:!0},alt:{type:String,required:!0}},setup(e){return(s,m)=>{const d=$;return u(),c("div",{id:e.id,class:"grid p-4 sm:grid-cols-1 max-w-7xl mx-auto bg-gray-50 border-x border-gray-200"},[r(d,{class:"rounded-xl",src:e.src,alt:e.alt,loading:"lazy"},null,8,["src","alt"])],8,D)}}}),U=["id"],W={class:"rounded-xl max-w-7xl p-0 mx-auto bg-blue-200"},k={__name:"ModelsOverviewCard",props:{id:{type:String,default:"overview"},startColor:{type:String,default:"from-blue-100"},endColor:{type:String,default:"to-orange-100"},titleColor:{type:String,default:"text-gray-900"},contentColor:{type:String,default:"text-gray-500"}},setup(e){return(s,m)=>{const d=_;return u(),c("div",{id:e.id,class:"p-4 py-4 bg-gray-50 max-w-7xl mx-auto border-x border-gray-200"},[t("div",W,[t("div",{class:i([e.startColor,e.endColor,"bg-gradient-to-tr rounded-xl"])},[r(d,{to:`#${e.id}`},{default:o(()=>[t("h2",{class:i([e.titleColor,"text-xl lg:text-2xl p-2 lg:p-2 pt-12 lg:pt-12 px-10 lg:px-4 items-center text-center mx-auto flex font-semibold tracking-normal max-w-4xl"])},[x(s.$slots,"heading-2",{},()=>[a(" Fallback Text. ")])],2)]),_:3},8,["to"]),t("div",{class:i([e.contentColor,"text-sm sm:text-base leading-relaxed lg:leading-relaxed font-normal rounded-3xl p-2 lg:p-2 pb-16 lg:pb-16 px-10 lg:px-4 max-w-4xl justify-center items-center text-left mx-auto"])},[x(s.$slots,"overview",{},()=>[a(" Fallback text. ")])],2)],2)])],8,U)}}},G=["id"],Q={class:"p-0 bg-none rounded-xl grid gap-4 lg:grid-cols-12 max-w-7xl mx-auto"},Y=t("div",{class:"fixed inset-0 bg-black/75 backdrop-blur-xl"},null,-1),J={class:"fixed inset-0 overflow-y-auto"},K={class:"flex min-h-full items-center justify-center p-4 text-left"},X={class:"mt-2"},v={__name:"ModelsFeaturePair",props:{id:{type:String,required:!0},src:{type:String,required:!0},alt:{type:String,required:!0},startColor:{type:String,default:"from-blue-100"},endColor:{type:String,default:"to-red-100"},textOrder:{type:String,default:"lg:order-1"},imgOrder:{type:String,default:"lg:order-2"},titleColor:{type:String,default:"text-gray-900"},contentColor:{type:String,default:"text-gray-500"},buttonColor:{type:String,default:"text-gray-500"},buttonHoverColor:{type:String,default:"hover:text-gray-300"}},setup(e){const s=T(!1);function m(){s.value=!1}function d(){s.value=!0}return(f,h)=>{const l=_,p=$;return u(),c("div",{id:e.id,class:"p-4 py-4 bg-gray-50 max-w-7xl mx-auto border-x border-gray-200"},[t("div",Q,[t("div",{class:i([e.startColor,e.endColor,e.textOrder,"rounded-xl bg-gradient-to-tr lg:col-span-5 h-full w-full object-cover object-center p-4 order-2 relative"])},[r(l,{to:`#${e.id}`},{default:o(()=>[t("h2",{class:i([e.titleColor,"text-lg sm:text-xl p-2 sm:p-2 pt-12 sm:pt-12 px-10 sm:px-10 items-center text-left mx-auto flex font-semibold tracking-normal max-w-3xl"])},[x(f.$slots,"title",{},()=>[a(" Fallback Text. ")])],2)]),_:3},8,["to"]),t("p",{class:i([e.contentColor,"text-sm sm:text-base leading-relaxed sm:leading-relaxed font-normal rounded-xl p-2 sm:p-2 pb-16 sm:pb-16 px-10 sm:px-10 max-w-3xl justify-center items-center text-left flex mx-auto"])},[x(f.$slots,"summary",{},()=>[a(" Fallback text. ")])],2),t("button",{type:"button",onClick:d,class:"absolute bottom-0 right-0 mr-4 mb-4"},[r(n(w),{icon:"carbon:add",class:i([e.buttonColor,e.buttonHoverColor,"h-10 w-10 justify-center items-center"]),"aria-hidden":"true"},null,8,["class"])])],2),t("div",{class:i([e.imgOrder,"lg:col-span-7 order-1"])},[r(p,{src:e.src,alt:e.alt,class:"rounded-xl h-full w-full object-cover object-center relative",loading:"lazy"},null,8,["src","alt"])],2),r(n(R),{appear:"",show:s.value,as:"template"},{default:o(()=>[r(n(H),{as:"div",onClose:m,class:"relative z-10"},{default:o(()=>[r(n(S),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:o(()=>[Y]),_:1}),t("div",J,[t("div",K,[r(n(S),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:o(()=>[r(n(A),{class:i([e.startColor,e.endColor,"bg-gradient-to-tr w-full max-w-3xl transform overflow-hidden rounded-xl p-8 pt-16 pb-16 text-left align-middle shadow-xl transition-all relative"])},{default:o(()=>[r(n(N),{as:"h3",class:i([e.titleColor,"text-xl font-semibold leading-6 max-w-2xl mx-auto pl-4"])},{default:o(()=>[x(f.$slots,"title",{},()=>[a(" Fallback Text. ")])]),_:3},8,["class"]),t("div",X,[t("p",{class:i([e.contentColor,"text-base leading-relaxed max-w-2xl mx-auto p-4"])},[x(f.$slots,"content",{},()=>[a(" Fallback text. ")])],2)]),t("button",{type:"button",class:"absolute bottom-0 right-0 p-4",onClick:m},[r(n(w),{icon:"carbon:close",class:i([e.buttonColor,e.buttonHoverColor,"h-10 w-10"]),"aria-hidden":"true"},null,8,["class"])])]),_:3},8,["class"])]),_:3})])])]),_:3})]),_:3},8,["show"])])],8,G)}}},Z={class:"bg-gray-50 max-w-7xl p-4 mx-auto border-x border-gray-200"},ee=["id"],te={class:"text-2xl lg:text-3xl font-bold max-w-4xl flex mx-auto text-left pt-8 lg:pt-16 pb-6 lg:pb-12 px-4 text-gray-700"},oe={class:"flex mx-auto w-full max-w-4xl rounded-xl bg-gray-50"},ae={class:"text-lg lg:text-xl font-bold max-w-4xl flex text-left pt-4 lg:pt-4 pb-4 lg:pb-4 px-4 text-gray-700"},re={class:"pt-4 lg:pt-4 pb-10"},ie=t("hr",{class:"max-w-4xl mx-auto flex border-gray-200"},null,-1),le={class:"max-w-4xl py-4 mx-auto"},se=["innerHTML"],ne=["innerHTML"],ue={__name:"ModelsTechSpecsTable",props:{id:{type:String,default:"tech-specs-table"},backgroundColor:{type:String,default:"bg-none"},hoverColor:{type:String,default:"hover:bg-gray-100"},dataPath:{type:String,required:!0}},setup(e){const s=e,{dataPath:m}=L(s),d=T([]);M(async()=>{const{app:l}=O(),p=`${l.baseURL}${m.value}`,g=await fetch(p);d.value=await g.json()});const f=B(()=>{const l={};return d.value.forEach(p=>{const g=p.category;l[g]||(l[g]=[]),l[g].push(p)}),l}),h=l=>l.replace(/\n/g,"<br>");return(l,p)=>{const g=_;return u(),c("div",Z,[t("div",{id:e.id,class:i([e.backgroundColor,"rounded-3xl py-8 sm:py-10 px-8 sm:px-14"])},[r(g,{to:`#${e.id}`},{default:o(()=>[t("div",te,[x(l.$slots,"title",{},()=>[a(" Fallback text. ")])])]),_:3},8,["to"]),(u(!0),c(y,null,q(f.value,(j,C)=>(u(),c(y,{key:C},[t("div",oe,[t("h2",ae,P(C),1)]),t("div",re,[(u(!0),c(y,null,q(j,b=>(u(),c("div",{key:b.rowheader},[ie,t("div",le,[t("div",{class:i([e.hoverColor,"max-w-4xl grid gap-0 lg:grid-cols-12 mx-auto transition rounded-xl"])},[t("div",{class:"lg:col-span-4 font-semibold text-base h-auto px-4 pt-4 lg:pt-8 pb-1 lg:pb-8 order-1 text-gray-500",innerHTML:h(b.rowheader)},null,8,se),t("div",{class:"lg:col-span-8 text-sm h-auto px-4 pt-1 lg:pt-8 pb-4 lg:pb-8 order-2 text-gray-500",innerHTML:h(b.value)},null,8,ne)],2)])]))),128))])],64))),128))],10,ee)])}}},ce={class:"flex flex-wrap items-center text-left justify-start py-2 gap-4"},we={__name:"index",setup(e){return I({title:"Qualiton | 300B Integrated Amplifier"}),(s,m)=>(u(),c("div",null,[r(V,{id:"300b-bar",path:"./300b"},{heading:o(()=>[a(" 300B Integrated Amplifier ")]),_:1}),r(z,{id:"title"},{title:o(()=>[a(" 300B Integrated Amplifier ")]),subtitle:o(()=>[a(" Timeless sound, natural beauty. ")]),_:1}),r(E,{id:"a50i-mq",src:"/img/300b/a50i-mq.jpg",alt:"300b-hero"}),r(k,{id:"overview","start-color":"from-blue-100","end-color":"to-orange-100","title-color":"text-gray-900","content-color":"text-gray-500"},{"heading-2":o(()=>[a(" Overview ")]),overview:o(()=>[a(" The Qualiton 300B is an integrated stereo amplifier with 2 x 25 Watts output power, built around the captivating sound character of 300B power tubes. This amplifier harmoniously blends our classic heritage with modern details: it features refined vacuum tube circuits, which we have enhanced with several additional functionalities. In shaping the overall sound character, our primary goal was to move away from the pronounced coloration often associated with amplifiers utilizing the 300B tube. Instead, we envisioned a smooth, musical and balanced vacuum tube amplifier that excels across the entire audio frequency range. ")]),_:1}),r(v,{id:"powered-by-300b",src:"/img/300b/dummy-dark.jpg",alt:"alt-text","start-color":"from-blue-100","end-color":"to-red-100","text-order":"lg:order-1","img-order":"lg:order-2","button-color":"text-gray-700","button-hover-color":"hover:text-gray-400"},{title:o(()=>[a(" Powered by 300B ")]),summary:o(()=>[a(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore voluptas atque aliquid minus alias repellendus optio provident neque asperiores officia ullam dolor ad sapiente dicta, nihil error! Recusandae, beatae. ")]),content:o(()=>[a(" The 300B is a directly heated power triode that hardly needs an introduction. Originally developed by Western Electric in the mid-1930s for amplifying audio in movie theaters, it later became a favorite among audiophiles and one of the most successful vacuum tubes in history. Its outstanding sonic properties led us to name our top-of-the-line integrated amplifier after this phenomenal power tube. Its high linearity and low distortion serve as the perfect basis for the amplifier's power block, in which we combine it with our own custom output transformer for excellent low and high frequency behavior. Additionally, we have integrated the newest iteration of our Automatic Bias System for continuous and precise control of the quiescent currents, providing a seamless user experience. ")]),_:1}),r(v,{id:"custom-output-transformers",src:"/img/300b/a50i-mq.jpg",alt:"alt-text","start-color":"from-blue-100","end-color":"to-red-100","text-order":"lg:order-2","img-order":"lg:order-1","button-color":"text-gray-700","button-hover-color":"hover:text-gray-400"},{title:o(()=>[a(" Custom Output Transformers ")]),summary:o(()=>[a(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore voluptas atque aliquid minus alias repellendus optio provident neque asperiores officia ullam dolor ad sapiente dicta, nihil error! Recusandae, beatae. ")]),content:o(()=>[a(" The transformers of our amplifiers are custom-designed and built in our in-house transformer workshop. Our output transformers are constructed using high-permeability, large cross-section toroidal magnetic cores, which undergo initial impregnation during the production process. Following this, the winding process begins, utilizing a multi-layered, sectioned, and specially arranged winding configuration. This meticulous design ensures optimal performance across both low and high frequencies. Once the winding is complete, the transformers are encased in metal shielding cans to minimize electromagnetic interference. Finally, they are potted using an epoxy compound to eliminate mechanical vibrations and associated noises. ")]),_:1}),r(v,{id:"custom-power-transformer",src:"/img/300b/dummy-dark.jpg",alt:"alt-text","start-color":"from-teal-950","end-color":"to-teal-700","text-order":"lg:order-1","img-order":"lg:order-2","title-color":"text-gray-200","content-color":"text-gray-300","button-color":"text-gray-300","button-hover-color":"hover:text-gray-50"},{title:o(()=>[a(" Custom Power Transformer ")]),summary:o(()=>[a(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore voluptas atque aliquid minus alias repellendus optio provident neque asperiores officia ullam dolor ad sapiente dicta, nihil error! Recusandae, beatae. ")]),content:o(()=>[a(" Just like our output transformers, our power transformers are also custom-designed and built in our in-house transformer workshop. We manufacture them with the same precision and attention to details: the high-permeability, large cross-section toroidal cores are also impregnated, and then the winding process follows. The parameters of the windings are designed to avoid saturation of the magnetic core and to ensure efficient operation even under heavy load conditions. It is important to note that we use double electromagnetic shielding for our power transformers. Finally, we employ the same epoxy compound used to pot the output transformers to eliminate mechanical vibrations and associated noises. ")]),_:1}),r(k,{id:"sound-character","start-color":"from-orange-50","end-color":"to-purple-100","title-color":"text-gray-900","content-color":"text-gray-500"},{"heading-2":o(()=>[a(" Sound Character ")]),overview:o(()=>[a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel magna vehicula, volutpat justo a, eleifend purus. Aenean dictum faucibus orci, id accumsan purus feugiat a. Proin sagittis, augue vel laoreet pretium, nisl orci sodales justo, id venenatis erat lacus ut tellus. Praesent ullamcorper urna a lacus maximus aliquet. Donec auctor, nisl a elementum mollis, arcu neque feugiat orci, non vulputate tellus ante nec nunc. Vestibulum et ultrices ex. Maecenas ultricies neque leo, et vestibulum enim placerat vel. Nam et neque metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus volutpat diam dignissim quam aliquam, ac pretium odio aliquam. Vestibulum malesuada risus lacus. Morbi accumsan molestie felis, et pulvinar est imperdiet nec. Vestibulum eget suscipit lacus, vel ullamcorper felis. Ut tristique orci elementum, cursus leo sit amet, pretium sapien. Aliquam eget placerat mauris. ")]),_:1}),r(ue,{id:"tech-specs","data-path":"assets/data/300b/300bElectricalSpecs.json","background-color":"bg-white","hover-color":"hover:bg-gray-50"},{title:o(()=>[t("div",ce,[a(" Tech Specs "),r(n(w),{icon:"fxemoji:memo"})])]),_:1})]))}};export{we as default};
