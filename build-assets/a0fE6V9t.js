import{u as F}from"./DfMzycvI.js";import{I as w}from"./W7tnwu6y.js";import{_ as $}from"./CNmV6XfI.js";import{m as I,o as n,c as u,b as r,_ as M,a as t,l as m,d as o,n as l,w as a,r as T,u as c,k as B,f as L,q as O,F as y,i as k,t as V}from"./BZuFwJxJ.js";import{_}from"./DwCLoXhA.js";import{Y as z,G as H,V as P}from"./DBVYG5GR.js";import{h as q,S as N}from"./KGDi2TkK.js";const A=["id"],D=I({__name:"ModelsImage",props:{id:{type:String,required:!0},src:{type:String,required:!0},alt:{type:String,required:!0}},setup(e){return(s,p)=>{const d=$;return n(),u("div",{id:e.id,class:"grid p-4 sm:grid-cols-1 max-w-7xl mx-auto rounded-3xl bg-yellow-200"},[r(d,{class:"rounded-3xl",src:e.src,alt:e.alt,loading:"lazy"},null,8,["src","alt"])],8,A)}}}),E={},R={class:"w-full sticky start-0 top-0 z-10 bg-sky-200"},W={class:"text-lg h-20 p-4 text-gray-900 items-center text-center mx-auto flex font-medium tracking-normal max-w-5xl"};function G(e,s){return n(),u("div",R,[t("h1",W,[m(e.$slots,"heading",{},()=>[o(" Fallback Text. ")])])])}const Q=M(E,[["render",G]]),U=["id"],Y={class:"rounded-3xl max-w-7xl p-4 mx-auto bg-blue-200"},S={__name:"ModelsOverviewCard",props:{id:{type:String,default:"overview"},startColor:{type:String,default:"from-blue-100"},endColor:{type:String,default:"to-orange-100"},titleColor:{type:String,default:"text-gray-900"},contentColor:{type:String,default:"text-gray-500"}},setup(e){return(s,p)=>{const d=_;return n(),u("div",{id:e.id,class:"p-4 py-4 bg-pink-200 rounded-3xl max-w-7xl mx-auto"},[t("div",Y,[t("div",{class:l([e.startColor,e.endColor,"bg-gradient-to-tr rounded-3xl"])},[r(d,{to:`#${e.id}`},{default:a(()=>[t("h2",{class:l([e.titleColor,"text-xl lg:text-2xl p-2 lg:p-2 pt-12 lg:pt-12 px-10 lg:px-4 items-center text-center mx-auto flex font-semibold tracking-normal max-w-4xl"])},[m(s.$slots,"heading-2",{},()=>[o(" Fallback Text. ")])],2)]),_:3},8,["to"]),t("p",{class:l([e.contentColor,"text-sm sm:text-base leading-relaxed lg:leading-relaxed font-normal rounded-3xl p-2 lg:p-2 pb-16 lg:pb-16 px-10 lg:px-4 max-w-4xl justify-center items-center text-left flex mx-auto"])},[m(s.$slots,"overview",{},()=>[o(" Fallback text. ")])],2)],2)])],8,U)}}},J=["id"],K={class:"p-4 bg-red-300 rounded-3xl grid gap-4 lg:grid-cols-12 max-w-7xl mx-auto"},X=t("div",{class:"fixed inset-0 bg-black/75 backdrop-blur-xl"},null,-1),Z={class:"fixed inset-0 overflow-y-auto"},ee={class:"flex min-h-full items-center justify-center p-4 text-left"},te={class:"mt-2"},v={__name:"ModelsFeaturePair",props:{id:{type:String,required:!0},src:{type:String,required:!0},alt:{type:String,required:!0},startColor:{type:String,default:"from-blue-100"},endColor:{type:String,default:"to-red-100"},textOrder:{type:String,default:"lg:order-1"},imgOrder:{type:String,default:"lg:order-2"},titleColor:{type:String,default:"text-gray-900"},contentColor:{type:String,default:"text-gray-500"},buttonColor:{type:String,default:"text-gray-500"},buttonHoverColor:{type:String,default:"hover:text-gray-300"}},setup(e){const s=T(!1);function p(){s.value=!1}function d(){s.value=!0}return(g,h)=>{const i=_,x=$;return n(),u("div",{id:e.id,class:"p-4 py-4 bg-teal-200 rounded-3xl max-w-7xl mx-auto"},[t("div",K,[t("div",{class:l([e.startColor,e.endColor,e.textOrder,"rounded-3xl bg-gradient-to-tr lg:col-span-5 lg:h-full h-auto p-4 order-2 relative"])},[r(i,{to:`#${e.id}`},{default:a(()=>[t("h2",{class:l([e.titleColor,"text-lg sm:text-xl p-2 sm:p-2 pt-12 sm:pt-12 px-10 sm:px-10 items-center text-left mx-auto flex font-semibold tracking-normal max-w-3xl"])},[m(g.$slots,"title",{},()=>[o(" Fallback Text. ")])],2)]),_:3},8,["to"]),t("p",{class:l([e.contentColor,"text-sm sm:text-base leading-relaxed sm:leading-relaxed font-normal rounded-3xl p-2 sm:p-2 pb-16 sm:pb-16 px-10 sm:px-10 max-w-3xl justify-center items-center text-left flex mx-auto"])},[m(g.$slots,"summary",{},()=>[o(" Fallback text. ")])],2),t("button",{type:"button",onClick:d,class:"absolute bottom-0 right-0 mr-4 mb-4"},[r(c(w),{icon:"carbon:add",class:l([e.buttonColor,e.buttonHoverColor,"h-10 w-10 justify-center items-center"]),"aria-hidden":"true"},null,8,["class"])])],2),t("div",{class:l([e.imgOrder,"lg:col-span-7 order-1"])},[r(x,{src:e.src,alt:e.alt,class:"rounded-3xl lg:h-full h-auto object-cover relative"},null,8,["src","alt"])],2),r(c(N),{appear:"",show:s.value,as:"template"},{default:a(()=>[r(c(z),{as:"div",onClose:p,class:"relative z-10"},{default:a(()=>[r(c(q),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[X]),_:1}),t("div",Z,[t("div",ee,[r(c(q),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[r(c(H),{class:l([e.startColor,e.endColor,"bg-gradient-to-tr w-full max-w-3xl transform overflow-hidden rounded-2xl p-8 pt-16 pb-16 text-left align-middle shadow-xl transition-all relative"])},{default:a(()=>[r(c(P),{as:"h3",class:l([e.titleColor,"text-xl font-semibold leading-6 max-w-2xl mx-auto pl-4"])},{default:a(()=>[m(g.$slots,"title",{},()=>[o(" Fallback Text. ")])]),_:3},8,["class"]),t("div",te,[t("p",{class:l([e.contentColor,"text-base leading-relaxed max-w-2xl mx-auto p-4"])},[m(g.$slots,"content",{},()=>[o(" Fallback text. ")])],2)]),t("button",{type:"button",class:"absolute bottom-0 right-0 p-4",onClick:p},[r(c(w),{icon:"carbon:close",class:l([e.buttonColor,e.buttonHoverColor,"h-10 w-10"]),"aria-hidden":"true"},null,8,["class"])])]),_:3},8,["class"])]),_:3})])])]),_:3})]),_:3},8,["show"])])],8,J)}}},ae={class:"bg-gray-200 rounded-3xl max-w-7xl p-4"},oe=["id"],re={class:"text-2xl lg:text-3xl font-bold max-w-4xl flex mx-auto text-left pt-8 lg:pt-16 pb-6 lg:pb-12 px-4 text-gray-700"},le={class:"flex mx-auto w-full max-w-4xl rounded-xl bg-gray-100"},ie={class:"text-lg lg:text-xl font-bold max-w-4xl flex text-left pt-4 lg:pt-4 pb-4 lg:pb-4 px-4 text-gray-700"},se={class:"pt-4 lg:pt-4 pb-10"},ne=t("hr",{class:"max-w-4xl mx-auto flex border-gray-200"},null,-1),ue={class:"max-w-4xl py-4 mx-auto"},ce=["innerHTML"],de=["innerHTML"],me={__name:"ModelsTechSpecsTable",props:{id:{type:String,default:"tech-specs-table"},backgroundColor:{type:String,default:"bg-none"},hoverColor:{type:String,default:"hover:bg-gray-100"},dataPath:{type:String,required:!0}},setup(e){const s=e,{dataPath:p}=B(s),d=T([]);L(async()=>{const i=await fetch(p.value);d.value=await i.json()});const g=O(()=>{const i={};return d.value.forEach(x=>{const f=x.category;i[f]||(i[f]=[]),i[f].push(x)}),i}),h=i=>i.replace(/\n/g,"<br>");return(i,x)=>{const f=_;return n(),u("div",ae,[t("div",{id:e.id,class:l([e.backgroundColor,"rounded-3xl py-8 sm:py-10 px-8 sm:px-14"])},[r(f,{to:`#${e.id}`},{default:a(()=>[t("div",re,[m(i.$slots,"title",{},()=>[o(" Fallback text. ")])])]),_:3},8,["to"]),(n(!0),u(y,null,k(g.value,(j,C)=>(n(),u(y,{key:C},[t("div",le,[t("h2",ie,V(C),1)]),t("div",se,[(n(!0),u(y,null,k(j,b=>(n(),u("div",{key:b.rowheader},[ne,t("div",ue,[t("div",{class:l([e.hoverColor,"max-w-4xl grid gap-0 lg:grid-cols-12 mx-auto transition rounded-xl"])},[t("div",{class:"lg:col-span-4 font-semibold text-base h-auto px-4 pt-4 lg:pt-8 pb-1 lg:pb-8 order-1 text-gray-500",innerHTML:h(b.rowheader)},null,8,ce),t("div",{class:"lg:col-span-8 text-sm h-auto px-4 pt-1 lg:pt-8 pb-4 lg:pb-8 order-2 text-gray-500",innerHTML:h(b.value)},null,8,de)],2)])]))),128))])],64))),128))],10,oe)])}}},pe={class:"flex flex-wrap items-center text-left justify-start py-2 gap-4"},we={__name:"index",setup(e){return F({title:"Qualiton | 300B Integrated Amplifier"}),(s,p)=>(n(),u("div",null,[r(Q,null,{heading:a(()=>[o(" 300B Integrated Amplifier ")]),_:1}),r(D,{id:"a50i-mq",src:"/img/300b/a50i-mq.jpg",alt:"300b-hero"}),r(S,{id:"overview","start-color":"from-blue-100","end-color":"to-orange-100","title-color":"text-gray-900","content-color":"text-gray-500"},{"heading-2":a(()=>[o(" Overview ")]),overview:a(()=>[o(" The Qualiton 300B is an integrated stereo amplifier with 2 x 25 Watts output power, built around the captivating sound character of 300B power tubes. This amplifier harmoniously blends our classic heritage with modern details: it features refined vacuum tube circuits, which we have enhanced with several additional functionalities. In shaping the overall sound character, our primary goal was to move away from the pronounced coloration often associated with amplifiers utilizing the 300B tube. Instead, we envisioned a smooth, musical and balanced vacuum tube amplifier that excels across the entire audio frequency range. ")]),_:1}),r(v,{id:"powered-by-300b",src:"/img/300b/dummy-dark.jpg",alt:"alt-text","start-color":"from-blue-100","end-color":"to-red-100","text-order":"lg:order-1","img-order":"lg:order-2"},{title:a(()=>[o(" Powered by 300B ")]),summary:a(()=>[o(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore voluptas atque aliquid minus alias repellendus optio provident neque asperiores officia ullam dolor ad sapiente dicta, nihil error! Recusandae, beatae. ")]),content:a(()=>[o(" The 300B is a directly heated power triode that hardly needs an introduction. Originally developed by Western Electric in the mid-1930s for amplifying audio in movie theaters, it later became a favorite among audiophiles and one of the most successful vacuum tubes in history. Its outstanding sonic properties led us to name our top-of-the-line integrated amplifier after this phenomenal power tube. Its high linearity and low distortion serve as the perfect basis for the amplifier's power block, in which we combine it with our own custom output transformer for excellent low and high frequency behavior. Additionally, we have integrated the newest iteration of our Automatic Bias System for continuous and precise control of the quiescent currents, providing a seamless user experience. ")]),_:1}),r(v,{id:"custom-output-transformers",src:"/img/300b/dummy-dark.jpg",alt:"alt-text","start-color":"from-blue-100","end-color":"to-red-100","text-order":"lg:order-2","img-order":"lg:order-1"},{title:a(()=>[o(" Custom Output Transformers ")]),summary:a(()=>[o(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore voluptas atque aliquid minus alias repellendus optio provident neque asperiores officia ullam dolor ad sapiente dicta, nihil error! Recusandae, beatae. ")]),content:a(()=>[o(" The transformers of our amplifiers are custom-designed and built in our in-house transformer workshop. Our output transformers are constructed using high-permeability, large cross-section toroidal magnetic cores, which undergo initial impregnation during the production process. Following this, the winding process begins, utilizing a multi-layered, sectioned, and specially arranged winding configuration. This meticulous design ensures optimal performance across both low and high frequencies. Once the winding is complete, the transformers are encased in metal shielding cans to minimize electromagnetic interference. Finally, they are potted using an epoxy compound to eliminate mechanical vibrations and associated noises. ")]),_:1}),r(v,{id:"custom-power-transformer",src:"/img/300b/dummy-dark.jpg",alt:"alt-text","start-color":"from-teal-950","end-color":"to-teal-700","text-order":"lg:order-1","img-order":"lg:order-2","title-color":"text-gray-200","content-color":"text-gray-300","button-color":"text-gray-300","button-hover-color":"hover:text-gray-50"},{title:a(()=>[o(" Custom Power Transformer ")]),summary:a(()=>[o(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore voluptas atque aliquid minus alias repellendus optio provident neque asperiores officia ullam dolor ad sapiente dicta, nihil error! Recusandae, beatae. ")]),content:a(()=>[o(" Just like our output transformers, our power transformers are also custom-designed and built in our in-house transformer workshop. We manufacture them with the same precision and attention to details: the high-permeability, large cross-section toroidal cores are also impregnated, and then the winding process follows. The parameters of the windings are designed to avoid saturation of the magnetic core and to ensure efficient operation even under heavy load conditions. It is important to note that we use double electromagnetic shielding for our power transformers. Finally, we employ the same epoxy compound used to pot the output transformers to eliminate mechanical vibrations and associated noises. ")]),_:1}),r(S,{id:"sound-character","start-color":"from-orange-50","end-color":"to-purple-100","title-color":"text-gray-900","content-color":"text-gray-500"},{"heading-2":a(()=>[o(" Sound Character ")]),overview:a(()=>[o(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel magna vehicula, volutpat justo a, eleifend purus. Aenean dictum faucibus orci, id accumsan purus feugiat a. Proin sagittis, augue vel laoreet pretium, nisl orci sodales justo, id venenatis erat lacus ut tellus. Praesent ullamcorper urna a lacus maximus aliquet. Donec auctor, nisl a elementum mollis, arcu neque feugiat orci, non vulputate tellus ante nec nunc. Vestibulum et ultrices ex. Maecenas ultricies neque leo, et vestibulum enim placerat vel. Nam et neque metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus volutpat diam dignissim quam aliquam, ac pretium odio aliquam. Vestibulum malesuada risus lacus. Morbi accumsan molestie felis, et pulvinar est imperdiet nec. Vestibulum eget suscipit lacus, vel ullamcorper felis. Ut tristique orci elementum, cursus leo sit amet, pretium sapien. Aliquam eget placerat mauris. ")]),_:1}),r(me,{id:"tech-specs","data-path":"/qnuxt/assets/data/300b/300bElectricalSpecs.json","background-color":"bg-gray-50","hover-color":"hover:bg-gray-100"},{title:a(()=>[t("div",pe,[o(" Tech Specs "),r(c(w),{icon:"fxemoji:memo"})])]),_:1})]))}};export{we as default};
