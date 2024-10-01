import{g as x,o as p,c as g,b as o,w as a,a as e,n as l,h as s,d as r,i,j as S,e as q,u as $}from"./B914aeB4.js";import{_ as j}from"./_4hG-xuL.js";import{_}from"./9VM0O9Ai.js";import{I as c,S as N,h as f}from"./CJd3Ftdo.js";import{Y as H,G as O,V as F}from"./BXQjKHE7.js";import{_ as B}from"./CMLDQ4nw.js";const Q=["id"],T={class:"absolute bottom-0 right-0 mr-4 mb-4"},I=e("div",{class:"fixed inset-0 bg-black/75 backdrop-blur-xl"},null,-1),U={class:"fixed inset-0 overflow-y-auto"},V={class:"flex min-h-full items-center justify-center p-4 text-left"},L={class:"max-w-3xl mx-auto px-0 py-0 sm:px-0 sm:py-0 mb-3"},M={class:"p-4"},R={class:"max-w-2xl mx-auto gap-6 flex px-2 py-2 sm:px-4 sm:py-3"},A={key:0,class:"bg-gray-900 text-gray-100 text-xs rounded-md py-0.5 px-2"},D={class:"mt-2"},b={__name:"NewsPair",props:{id:{type:String,required:!0},src:{type:String,required:!0},alt:{type:String,required:!0},startColor:{type:String,default:"from-blue-100"},endColor:{type:String,default:"to-red-100"},textOrder:{type:String,default:"lg:order-1"},imgOrder:{type:String,default:"lg:order-2"},titleColor:{type:String,default:"text-gray-900"},contentColor:{type:String,default:"text-gray-500"},contentHoverColor:{type:String,default:"hover:text-gray-900"},buttonColor:{type:String,default:"text-gray-500"},buttonHoverColor:{type:String,default:"hover:text-gray-300"}},setup(t){const d=x(!1);function m(){d.value=!1}function y(){d.value=!0}const u=x(!1),v=async()=>{try{await navigator.clipboard.writeText(window.location.href),u.value=!0,setTimeout(()=>{u.value=!1},1e3)}catch(n){console.error("Failed to copy URL:",n)}};x([]);function w(){const n=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;window.open(n,"_blank")}function C(){const n=`https://twitter.com/share?url=${encodeURIComponent(window.location.href)}`;window.open(n,"_blank")}return(n,J)=>{const h=_,k=q;return p(),g("div",{id:t.id,class:"px-4 my-12 bg-gray-100 border-none border-gray-200 max-w-full mx-auto"},[o(k,{to:`#${t.id}`,type:"button",onClick:y,class:"p-0 bg-none rounded-xl grid gap-0 sm:gap-0 lg:grid-cols-12 max-w-6xl mx-auto group shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300"},{default:a(()=>[e("div",{class:l([t.startColor,t.endColor,t.textOrder,"rounded-bl-xl rounded-br-xl lg:rounded-bl-none lg:rounded-tr-xl lg:rounded-br-xl bg-gradient-to-tr lg:col-span-6 h-full w-full object-cover object-center p-4 order-2 relative border-none border-gray-300 flex flex-col justify-center items-start"])},[e("p",{class:l([t.contentColor,"text-xs sm:text-xs lg:text-sm leading-relaxed sm:leading-relaxed font-semibold rounded-xl p-2 sm:p-2 pb-2 sm:pb-2 px-2 sm:px-6 lg:px-10 max-w-3xl justify-center items-center text-left"])},[s(n.$slots,"category",{},()=>[r(" Fallback Text. ")])],2),e("h2",{class:l([t.titleColor,"text-lg sm:text-xl lg:text-2xl p-2 sm:p-2 pt-2 sm:pt-2 px-2 sm:px-6 lg:px-10 items-center text-left font-semibold tracking-normal"])},[s(n.$slots,"title",{},()=>[r(" Fallback Text. ")])],2),e("p",{class:l([t.contentColor,"text-xs sm:text-sm lg:text-base leading-relaxed sm:leading-relaxed font-medium rounded-xl p-2 sm:p-2 pb-2 sm:pb-2 px-2 sm:px-6 lg:px-10 max-w-3xl justify-center items-center text-left"])},[s(n.$slots,"date",{},()=>[r(" Fallback text. ")])],2),e("div",T,[o(i(c),{icon:"carbon:add-filled",class:l([t.buttonColor,t.buttonHoverColor,"transiton duration-150 h-8 w-8 justify-center items-center"]),"aria-hidden":"true"},null,8,["class"])])],2),e("div",{class:l([t.imgOrder,"lg:col-span-6 order-1"])},[o(h,{src:t.src,alt:t.alt,loading:"lazy",class:"rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl lg:rounded-tr-xl lg:rounded-br-xl lg:rounded-tl-xl lg:rounded-bl-xl h-full w-full object-cover object-center relative group-hover:opacity-90 transition",srcset:""},null,8,["src","alt"])],2),o(i(N),{appear:"",show:d.value,as:"template"},{default:a(()=>[o(i(H),{as:"div",onClose:m,class:"relative z-10"},{default:a(()=>[o(i(f),{as:"template",class:"opacity-0",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[I]),_:1}),e("div",U,[e("div",V,[o(i(f),{as:"template",class:"opacity-0 scale-95",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[o(i(O),{class:l([t.startColor,t.endColor,"bg-gradient-to-tr w-full max-w-3xl transform overflow-hidden rounded-lg p-0 pt-0 sm:pt-0 pb-16 text-left align-middle shadow-xl transition-all relative"])},{default:a(()=>[e("div",L,[o(h,{src:t.src,alt:t.alt,loading:"lazy",class:"rounded-t-lg h-full w-full object-cover object-center relative group-hover:opacity-90 transition"},null,8,["src","alt"])]),e("div",M,[e("div",{class:l([t.contentColor,"text-sm sm:text-sm font-medium max-w-2xl mx-auto px-2 py-2 sm:px-4 sm:py-3"])},[s(n.$slots,"date",{},()=>[r(" Fallback Date. ")])],2),o(i(F),{as:"h3",class:l([t.titleColor,"text-xl font-semibold leading-6 max-w-2xl mx-auto px-2 py-2 sm:px-4 sm:py-3"])},{default:a(()=>[s(n.$slots,"title",{},()=>[r(" Fallback Text. ")])]),_:3},8,["class"]),e("div",R,[e("button",{onClick:w,class:"focus:outline-none"},[o(i(c),{icon:"basil:facebook-solid",class:l([t.contentColor,t.contentHoverColor,"h-5 w-5 items-center justify-center mx-auto transition"]),"aria-hidden":"true"},null,8,["class"])]),e("button",{onClick:C,class:"focus:outline-none"},[o(i(c),{icon:"ri:twitter-x-line",class:l([t.contentColor,t.contentHoverColor,"h-5 w-5 items-center justify-center mx-auto transition"]),"aria-hidden":"true"},null,8,["class"])]),e("button",{onClick:v,class:l([{copied:u.value},"flex items-center gap-4 focus:outline-none"])},[o(i(c),{icon:"lucide:link",class:l([t.contentColor,t.contentHoverColor,"h-5 w-5 transition"])},null,8,["class"]),u.value?(p(),g("span",A," Copied to clipboard. ")):S("",!0)],2)]),e("div",D,[e("p",{class:l([t.contentColor,"text-sm sm:text-base max-w-2xl mx-auto px-2 py-2 sm:px-4 sm:py-2"])},[s(n.$slots,"content",{},()=>[r(" Fallback text. ")])],2)])]),e("button",{type:"button",class:"absolute bottom-0 right-0 p-4",onClick:m},[o(i(c),{icon:"carbon:close",class:l([t.buttonColor,t.buttonHoverColor,"h-10 w-10"]),"aria-hidden":"true"},null,8,["class"])])]),_:3},8,["class"])]),_:3})])])]),_:3})]),_:3},8,["show"])]),_:3},8,["to"])],8,Q)}}},E=e("p",{class:"leading-relaxed"}," Today, we proudly unveil the latest addition to our product lineup: the Qualiton 300B, an integrated stereo amplifier delivering 2 x 25 Watts output power. Built around the captivating sound character of 300B power tubes, this amplifier harmoniously blends our classic heritage with modern details. It features refined vacuum tube circuits, which we have enhanced with several additional functionalities, including the Automatic Bias System, Filament Soft-Start, Relay Controlled Input Selection and Volume – just to name a few. Our sonic vision was clear: to create a smooth, musical, and well-balanced vacuum tube amplifier that excels across the entire audio frequency spectrum. ",-1),z=e("br",null,null,-1),W=e("p",{class:"leading-relaxed"}," We invite you to experience the Qualiton 300B firsthand by visiting our booth F13 in Halle 2 between May 9th and 12th at the HIGH END 2024 exhibition in Munich. Additionally, don’t miss the opportunity to explore the hORNS Speakers' room F231a in Atrium 4.2 — where the magic of the Qualiton 300B comes alive. ",-1),G=e("p",{class:"leading-relaxed"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia culpa quod laudantium ea dignissimos recusandae, ut natus tempore iure, nam accusantium eveniet. Quo quia, fuga a explicabo corporis voluptatibus quod! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus at impedit, repellat perferendis beatae sunt nam? Quasi odio quia iusto nulla. Eum illum rerum dolorum nam repellendus. Quis, alias et. ",-1),Y=e("br",null,null,-1),P=e("p",{class:"leading-relaxed"}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quos nihil quidem ratione maiores optio consectetur non tempora eius, ex expedita voluptate accusamus atque molestiae, quibusdam, corporis illo dolorem ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus reprehenderit suscipit itaque possimus fuga aliquid ab harum rerum? Odit eius facere minima cum tempora aperiam natus porro quisquam voluptate. ",-1),at={__name:"index",setup(t){return $({title:"Qualiton | News"}),(d,m)=>(p(),g("div",null,[o(j,{id:"news-bar",path:"./news"},{heading:a(()=>[r(" News ")]),_:1}),o(B,{id:"title"},{title:a(()=>[r(" News ")]),subtitle:a(()=>[r(" The latest news about the Qualiton brand. ")]),_:1}),o(b,{id:"introducing-the-qualiton-300b",src:"/img/news/introducing-the-qualiton-300b-mq.jpg",alt:"alt-text","start-color":"from-white","end-color":"to-white","text-order":"lg:order-2","img-order":"lg:order-1","title-color":"text-gray-900","content-color":"text-gray-500","content-hover-color":"hover:text-gray-400","button-color":"text-gray-700","button-hover-color":"hover:text-gray-400",class:"pt-0"},{category:a(()=>[r(" NEW PRODUCT ")]),title:a(()=>[r(" Introducing the Qualiton 300B ")]),date:a(()=>[r(" April 30, 2024 ")]),content:a(()=>[E,z,W]),_:1}),o(b,{id:"dummy-news",src:"/img/300b/dummy-dark.jpg",alt:"alt-text","start-color":"from-white","end-color":"to-white","text-order":"lg:order-2","img-order":"lg:order-1","title-color":"text-gray-900","content-color":"text-gray-500","content-hover-color":"hover:text-gray-400","button-color":"text-gray-700","button-hover-color":"hover:text-gray-400",class:"pb-0"},{category:a(()=>[r(" DUMMY NEWS ")]),title:a(()=>[r(" Dummy News ")]),date:a(()=>[r(" April 1, 2024 ")]),content:a(()=>[G,Y,P]),_:1})]))}};export{at as default};
